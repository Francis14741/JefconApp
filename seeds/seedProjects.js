const mongoose = require("mongoose");
const slugify = require("slugify");
const Project = require("../models/project");

const projects = [
  {
      "title": "Drone Survey Project",
      "slug": "drone_project",
      "description": "Using drones for topographical surveys",
      "content": "Full project details",
      "tags": [],
      "services": []
    },
    {
      "title": "Stormwater Flooding Control Project",
      "slug": "stormwater_project",
      "description": "Implementing stormwater flooding control solutions",
      "content": "Full project details",
      "tags": [],
      "services": []
    },
    {
      "title": "Gallery 1 Project",
      "slug": "gallery1_project",
      "description": "Gallery 1 project solutions",
      "content": "Full project details",
      "tags": [],
      "services": []
    }
];

async function seedProjects() {
  try {
    await Project.deleteMany({});
    console.log("🗑️ Cleared old projects");

    const seeded = await Project.insertMany(
      projects.map((proj) => ({
        ...proj,
        slug: slugify(proj.title, { lower: true, strict: true }),
      }))
    );

    console.log(`✅ ${seeded.length} Projects seeded`);
  } catch (err) {
    console.error("❌ Error seeding Projects:", err);
  }
}

module.exports = seedProjects;