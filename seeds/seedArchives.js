const Archive = require("../models/archive"); // adjust path if needed
const slugify = require("slugify");

const archives = [
  {
            title: "Archives Of: DEPROF",
            slug: "deprof_archive",
            content:"What is a Stormwater?  Stormwater, which can also be spelled as storm water, is a body of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to [...]",
        },
        {
            title: "Archives Of: Abdul M. Yahaya",
            slug: "abdul_yahaya_Archive",
            content:"What is a Stormwater?  Stormwater, which can also be spelled as storm water, is a body of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to [...]",
        },
        {
            title: "Archives Of: Engr. John Cee Onwualu, JP",
            slug: "Jefcon_more",
            content: "Engr. John Cee Onwualu, a highly decorated engineering professional with over 30 years in practice. He is the Principal Partner and Chief Executive Officer of the Company.  He is a visionary leader with a strong background in engineering designs, flood control and business management. He is an Alumnus of University of Benin, Benin – City, Nigeria.  He possesses exceptional strategic planning and decision-making skills, as well as a deep understanding of industry trends and technologies. The CEO is known for his ability to inspire and motivate employees, fostering a culture of innovation and collaboration within the organization. He is highly skilled in building and maintaining relationships with clients, partners and stakeholders, driving business growth and success. With a proven track record of driving results, as the CEO of an engineering company, he is a dynamic and forward-thinking leader who is  dedicated to driving the company towards continued success and growth. With a proven track record of driving results, as the CEO of an engineering company, he is a dynamic and forward-thinking leader who is  dedicated to driving the company towards continued success and growth.",
        },
        {
            title: "Monthly Archives: June 2025",
            slug: "archives_2025_june",
            content: "Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management and Control by Engr. John Cee Onwualu, Jefcon and Associates Ltd and Engineering Consultants. - ABSTRACT Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more [...]",
        },
        {
            title: "Monthly Archives: April 2025",
            slug: "archives_2025_april",
            content:"What is a Stormwater?  Stormwater, which can also be spelled as storm water, is a body of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to [...]",
        },
        {
            title: "Monthly Archives: May 2024",
            slug: "archives_2024_may",
            content:"This paper critically analyzes the various challenges associated with stormwater management in urban areas of Nigeria. It explores the interconnected nature of these  challenges, encompassing inadequate infrastructure, rapid population growth, poor urban planning, and a lack of financial and institutional capacity",
        },
        {
            title: "Monthly Archives: March 2024",
            slug: "archives_2024_march",
            content:"Understanding the Environmental Challenge Water Pollution: A Major Crisis in Nigeria Nigeria, the most populous country in Africa, is grappling with a severe environmental crisis – water pollution. Despite its wealth of water resources, including rivers, lakes, and underground aquifers, the nation struggles to provide its [...]",
        },
        {
            title: "Monthly Archives: June 2024",
            slug: "archives_2024_june",
            content:"In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health. This article delves into the importance of quality control (QC) [...]",
        },
        {
            title: "Monthly Archives: July 2024",
            slug: "archives_2024_july",
            content:"In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health. This article delves into the importance of quality control (QC) [...]",
        },
        {
            title: "Monthly Archives: January 2024",
            slug: "archives_2024_jan",
            content:"Excerpt From, Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria on Thursday, 2nd Nov. 2023",
        },
        {
            title: "Monthly Archives: February 2024",
            slug: "archives_2024_feb",
            content:"Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria on Thursday, 2nd Nov. 2023",
        },
        {
            title: "Monthly Archives: April 2024",
            slug: "archives_2024_april",
            content:"Discover the effectiveness of existing drainage systems in Nigeria for managing rainwater runoff. This article  explores the successes, challenges, and areas for improvement in mitigating flooding and ensuring  efficient water management in Nigeria...",
        },
        {
            title: "Monthly Archives: October 2023",
            slug: "archives_2023_oct",
            content:" An excerpt from 'Impacts of land-use Change on Urban Hydrology and the need for sustainable Storm Water Management Engineering Practices'",
        },
        {
            title: "Monthly Archives: November 2023",
            slug: "archives_2023_nov",
            content:"Defining land-use change and urban hydrology Land-use change refers to the human alteration of landscapes for various purposes, such as urban development,transportation, agriculture, and forestry. Urban hydrology, on the other hand, is the study of water movement, storage, and quality in urban areas, including the impacts [...]",
        },
        {
            title: "Monthly Archives: March 2023",
            slug: "archives_2023_march",
            content:"Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria On Thursday, 2nd Nov, 2023",
        },
        {
            title: "Monthly Archives: January 2023",
            slug: "archives_2023_jan",
            content:"'A wise man adapts himself to circumstances, as water shapes itself to the vessel that contains it.' - Chinese Proverb. Flooding is a major concern in many areas, causing damage and destruction to homes, businesses, and communities. In addition to the physical damage, floods can lead to significant economic [...]",
        },
        {
            title: "Monthly Archives: February 2023",
            slug: "archives_2023_feb",
            content:"Climate change continues to threaten our planet, with the most immediate threat being extreme flooding. Rising tides and sinking cities have become a stark reality with devastating consequences for many communities around the world. It's a global problem that requires immediate attention and action from governments, businesses, and individuals. [...]",
        },
        {
            title: "Monthly Archives: December 2023",
            slug: "archives_2023_dec",
            content:"Excerpt From A Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria on Thursday, 2ND Nov. 2023",
        },
        {
            title: "Monthly Archives: September 2022",
            slug: "archives_2022_sept",
            content:"When it comes to stormwater drainage construction, it is important to hire a reputable and experienced company. The process is complex and requires a number of steps to ensure the job is done correctly and efficiently. If you are considering hiring a stormwater drainage construction company, there are a [...]",
        },
        {
            title: "Monthly Archives: October 2022",
            slug: "archives_2022_oct",
            content:"Flooding is a very serious issue in Nigeria, as it can lead to significant damages to property and even loss of life. Floods can occur due to heavy seasonal rains or from overflowing bodies of water such as rivers and oceans. Flooding can be a major problem for those [...]",
        },
        {
            title: "Monthly Archives: November 2022",
            slug: "archives_2022_nov",
            content:"Storm-water drainage systems are essential to our health and safety - they help protect us from flooding and prevent water pollution, making them an important part of our infrastructure.",
        },
        {
            title: "Monthly Archives: May 2022",
            slug: "archives_2022_may",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study &amp; Design of Stormwater Management And Control.",
        },
        {
            title: "Monthly Archives: March 2022",
            slug: "archives_2022_march",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",
        },
        {
            title: "Monthly Archives: July 2022",
            slug: "archives_2022_july",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",
        },
        {
            title: "Monthly Archives: January 2022",
            slug: "archives_2022_jan",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",        
        },
        {
            title: "Monthly Archives: February 2022",
            slug: "archives_2022_feb",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",        
        },
        {
            title: "Monthly Archives: December 2022",
            slug: "archives_2022_dec",
            content:"The quality of Civil Engineering practices in Nigeria has become an increasingly important priority in recent years. As the country continues to grow and change, it is important that these practice s meet the standards of a modern, wealthy country. Assessing the quality of Civil Engineering practices in Nigera is [...]",
        },
        {
            title: "Monthly Archives: August 2022",
            slug: "archives_2022_august",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",        
            },
        {
            title: "Monthly Archives: April 2022",
            slug: "archives_2022_april",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study and Design of Stormwater Management And Control.",        
        },
        {
            title: "Monthly Archives: November 2021",
            slug: "archives_2021_nov",
            content:"Well-researched studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers in Delta State of Nigeria, including existing drains in Asaba, Warri, Effurun, and environs. This is an excerpt from a paper presentation by Engr. John Cee Onwualu, JP",
        },
        {
            title: "Monthly Archives: May 2021",
            slug: "archives_2021_may",
            content:"An excerpt from Paper presentation at the Nigerian Society of Engineers by Engr. John Cee Onwualu, JP",
        },
        {
            title: "Monthly Archives: June 2021",
            slug: "archives_2021_june",
            content:"This is an excerpt to the from a paper presentation by Engr. John Cee Onwualu, JP., to the Nigerian Society of Engineers.",
        },
        {
            title: "Monthly Archives: January 2021",
            slug: "archives_2021_jan",
            content:"A young engineer must have a strong desire and willingness to learn new technical skills and apply the scientific and mathematical principles acquired during his engineering education. This article explores recommended actions for the growth of a young engineer in his engineering profession.",
        },
        {
            title: "Monthly Archives: December 2021",
            slug: "archives_2021_dec",
            content:"Excerpts from Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study &amp; Design of Stormwater Management And Control.",
        },
        {
            title: "Monthly Archives: August 2021",
            slug: "archives_2021_august",
            content:"Studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers, including existing drains in Asaba, Warri, Effurun, and environs. The studies showed that: i. There were no previous records of survey data and maps for the cities; ii. While Warri had an old Master plan, Asaba had none; iii. A large [...]",
        },
        {
            title: "Monthly Archives: April 2021",
            slug: "archives_2021_april",
            content:"Excerpt from Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria By, Engr. John Cee Onwualu, JP",
        },
        {
            title: "Monthly Archives: September 2020",
            slug: "archives_2020_sept",
            content:"A young engineer, who is at the threshold of a professional career, transiting from a fresh engineering graduate to a leadership role in engineering should bear in mind that there are many challenges along the journey. The challenges encountered in this transition are of great importance because when the necessary training and mentorship needed at [...]",
        },
        {
            title: "Monthly Archives: October 2020",
            slug: "archives_2020_oct",
            content:"To further improve professional efficiency and quality of engineering products, Government Agencies authorised with the approving powers can also play the role of external reviewers of technical documents seeking approval. This will force engineering professionals to conduct their work diligently in accordance with professional codes and ethics, and produce quality jobs that will not be [...]",
        },
        {
            title: "Monthly Archives: November 2020",
            slug: "archives_2020_nov",
            content:" An excerpt from The Challenges Of A Young Engineer By, Engr. John-Cee Onwualu, JP.",
        },
        {
            title: "Monthly Archives: May 2020",
            slug: "archives_2020_may",
            content:"What is a Stormwater?  Stormwater, which can also be spelled as storm water, is a body of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to [...]",
        },
        {
            title: "Monthly Archives: July 2020",
            slug: "archives_2020_july",
            content:"In our engineering education, we were taught the use of science and mathematics which form the fundamental basis for the application of the knowledge to interpret, invent, innovate, and solve engineering problems. We live in a dynamic world whose environment is in constant disturbance by humans. These environmental disturbances create complex engineering problems yearning for [...]",
        },
        {
            title: "Monthly Archives: August 2020",
            slug: "archives_2020_august",
            content:"Presentation at Nigerian Society of Engineers, Asaba Chapter Technical Section of Study &amp; Design of Stormwater Management. &amp; Control by Engr. John Cee Onwualu, Jefcon &amp; Associates Ltd &#8211; Engineering Consultants. ABSTRACT Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more [...]",
        },
  // add other archives
];

async function seedArchives() {
  console.log("🗑️ Clearing existing Archives...");
  await Archive.deleteMany({});
  console.log("🌱 Seeding new Archives...");

  for (let archive of archives) {
    archive.slug = slugify(archive.title, { lower: true, strict: true });
    await Archive.updateOne(
      { title: archive.title },
      { $set: archive },
      { upsert: true }
    );
  }

  console.log("✅ Archives seeded successfully");
}

module.exports = seedArchives;