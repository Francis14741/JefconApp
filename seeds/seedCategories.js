const Category = require("../models/category");

async function seedCategories() {
  try {
    await Category.deleteMany({});
    await Category.insertMany([
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
    ]);
    console.log("✅ Categories seeded");
  } catch (err) {
    console.error("❌ Error seeding Categories:", err);
  }
}

module.exports = seedCategories;