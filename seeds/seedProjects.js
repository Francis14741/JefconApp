const Project = require("../models/project");
const slugify = require("slugify");

const projects = [
  { title: "Drone Project", description: "..." },
  { title: "Stormwater Project", description: "..." },
  {
      "title": "Drone Survey Project",
      "slug": "drone_project",
      "description": "Using drones for topographical surveys",
    },
    {
      "title": "Stormwater Flooding Control Project",
      "slug": "stormwater_project",
      "description": "Implementing stormwater flooding control solutions",
    },
    {
      "title": "Gallery 1 Project",
      "slug": "gallery1_project",
      "description": "Gallery 1 project solutions",
    }
];

async function seedProjects() {
  console.log("🗑️ Clearing old Projects...");
  await Project.deleteMany({});

  console.log("🌱 Seeding new Projects...");
  for (let project of projects) {
    project.slug = slugify(project.title, { lower: true, strict: true });
    await Project.updateOne(
      { title: project.title },
      { $set: project },
      { upsert: true }
    );
  }

  console.log("✅ Projects seeded successfully");
}

module.exports = seedProjects;