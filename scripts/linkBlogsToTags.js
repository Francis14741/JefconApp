const mongoose = require('mongoose');
const Blog = require('../models/blog');
const Tag = require('../models/tag');

mongoose.connect(
  'mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/?retryWrites=true&w=majority&appName=Jefconapp'
);

function stem(word) {
  return word ? word.toLowerCase().replace(/[^a-z0-9]/gi, '').replace(/s$/i, '') : '';
}

function normalize(text) {
  return text ? text.toLowerCase().replace(/[^a-z0-9\s]/gi, '') : '';
}

async function linkBlogsAndTagsSmart() {
  try {
    const blogs = await Blog.find({});
    const tags = await Tag.find({});

    for (const blog of blogs) {
      // Skip blogs that already have tags
      if (blog.tags && blog.tags.length > 0) continue;

      let matchedTagIds = [];

      const blogText = [
        blog.title || '',
        blog.description || '',
        blog.content || ''
      ].map(normalize).join(' ');

      const blogWords = blogText.split(/\s+/).map(stem);

      for (const tag of tags) {
        if (!tag.name) continue; // skip tags without a name

        const keywords = [tag.name, ...(tag.keywords || [])].map(stem);

        const matched = keywords.some(keyword => keyword && blogWords.includes(keyword));

        if (matched) {
          matchedTagIds.push(tag._id);

          // Update tag document to include this blog
          if (!tag.blogs) tag.blogs = [];
          if (!tag.blogs.includes(blog._id)) {
            tag.blogs.push(blog._id);
            await tag.save();
          }
        }
      }

      if (matchedTagIds.length > 0) {
        blog.tags = matchedTagIds;
        await blog.save();
        console.log(`Updated blog: "${blog.title}" with ${matchedTagIds.length} tags`);
      }
    }

    console.log('All blogs and tags have been linked safely!');
    process.exit(0);
  } catch (err) {
    console.error('Error linking blogs and tags smartly:', err);
    process.exit(1);
  }
}

linkBlogsAndTagsSmart();