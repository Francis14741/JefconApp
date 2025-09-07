const Category = require("../models/category"); // adjust path
const slugify = require("slugify");

const categories = [
  { title: "Case Studies", slug: "case_studies" },
  { title: "Environmental", slug: "cat_environmental" },
  { title: "Construction Law", slug: "construction_law" },
  { title: "Construction Technology", slug: "construction_technology" },
  { title: "Feasibility And Economic Studies", slug: "cat_feasibility_eco" },
  { title: "Consultancy And Advisory", slug: "consultancy_advisory" },
  { title: "Engineering Surveys", slug: "category_eng_surveys" },
  { title: "Engineering Design And Simulation", slug: "engdesign_simulation" },
  { title: "Industry News And Trends", slug: "industrynews_trend" },
  { title: "Innovation And Research", slug: "innovation_research" },
  { title: "Mechanical, Electrical And Plumbing (MEP)", slug: "mech_elec_plumbing" },
  { title: "Project Supervision And Management", slug: "pro_superv_cat" },
  { title: "Project Valuation And Cost Control", slug: "proj_valuation_cost" },
  { title: "Safety And Regulations", slug: "safety_regulations" },
  { title: "Training And Education", slug: "training_education" },
  { title: "Uncategorized", slug: "uncategorized" },
  // add other categories
];

async function seedCategories() {
  console.log("🗑️ Clearing existing Categories...");
  await Category.deleteMany({});
  console.log("🌱 Seeding new Categories...");

  for (let category of categories) {
    category.slug = slugify(category.title, { lower: true, strict: true });
    await Category.updateOne(
      { title: category.title },
      { $set: category },
      { upsert: true }
    );
  }

  console.log("✅ Categories seeded successfully");
}

module.exports = seedCategories;
