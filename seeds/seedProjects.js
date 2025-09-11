const Project = require("../models/project");
const slugify = require("slugify");

const projectsData = [
  {
    title: "Drone Survey Project",
    slug: "droneProject",
    description: "Using drones for topographical surveys",
  },
  {
    title: "Stormwater Flooding Control Project",
    slug: "stormwater_project",
    description: "Implementing stormwater flooding control solutions",
  },
  {
    title: "Gallery 1 Project",
    slug: "gallery1_project",
    description: "Gallery 1 project solutions",
  }
];

async function seedProjects() {
  try {
    console.log("🧹 Clearing old Projects...");
    await Project.deleteMany({});

    const projects = projectsData.map(p => ({
      ...p,
      slug: slugify(p.title, { lower: true }),
    }));

    await Project.insertMany(projects);
    console.log("✅ Projects seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding Projects:", err);
  }
}

module.exports = {seedProjects};