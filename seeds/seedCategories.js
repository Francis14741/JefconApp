const Category = require("../models/category");
const slugify = require("slugify");

const categoriesData = [
  { title: "Case Studies"},
  { title: "Environmental" },
  { title: "Feasibility And Economic Studies"},
  { title: "Consultancy And Advisory" },
  { title: "Engineering Surveys"},
  { title: "Engineering Design And Simulation"},
  { title: "Industry News And Trends"},
  { title: "Innovation And Research"},
  { title: "Mechanical, Electrical And Plumbing (MEP)"},
  { title: "Project Supervision And Management"},
  { title: "Project Valuation And Cost Control" },
  { title: "Safety And Regulations" },
  { title: "Training And Education"},
  { title: "Uncategorized"}
];

async function seedCategories() {
  try {
    await Category.deleteMany({});
    for (const cat of categoriesData) {
      await Category.create({
        title: cat.title,
        slug: slugify(cat.title, { lower: true, strict: true }),
      });
    }
    console.log("✅ Categories seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding categories:", err);
  }
}

module.exports = seedCategories;