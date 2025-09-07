const Service = require("../models/service"); // adjust path if needed
const slugify = require("slugify");

const services = [
  {
        title: "Engineering Surveys",
        slug: "engineering_surveys",
        description: "Engineering Survey Services",
        content: "We carry out activities that are involved in the planning and execution of surveys for the development, design, construction, operation and maintenance of civil and other engineered projects. Our engineering survey is a specialty job within the broader professional practice of engineering  and includes all surveying activities required to support the conception, planning, design, construction, maintenance, and operation of engineered projects...",
    },
    {
        title: "Feasibility And Economic Studies",
        slug: "feasibility_ecostudies",
        description: "Feasibility And Economic Studies",
        content: " At Jefcon & Associates Ltd, we understand the importance of thorough feasibility and economic studies in determining the viability of a construction project.Our team of experts has extensive experience in conducting comprehensive studies that help our clients make informed decisions. Our technical feasibility study essentially supports the financial information of each organization.We study every project's required input, processes, output, fields, programs and procedures, for long term planning and troubleshooting..."
    },
    {
        title: "Environmental Impact Studies And Management",
        slug: "environmental_impact",
        description: "Environmental Impact Studies And Management Services",
        content: "We are experts in Environmental Impact studies and Management, carried out in two major folds. We perform Environmental Impact Accessment (EIA) as a statutory procedure to define the environmental impacts of a project, as well as to promote communication to and involvement of citizens, even in the early stages of a project.  Our Environmental Impact Study(EIS) provides sufficient levels of detail to demonstrate that a proposed development will have no negative impacts on the natural features or ecological functions of the subject and surrounding('adjacent') lands."
    },
    {
        title: "Advisory Services In Engineering",
        slug: "advisory_services",
        description: "Advisory Services In Engineering",
        content: "We utilise our reservoire of experience for consulting services from which we develop findings, conclusions and recommendations that are presented to the client for consideration and decision making. We apply high- level civil engineering principles alongside analytical, practical and engineering skills and techniques. From civil engineering perspectives, we provide expert advice on the design, planning and management of civil construction projects, covering all types of residential and commercial construction, particularly in the area of larger public infrastructure projects..."
    },
    {
        title: "Project Costing, Valuation And Tender Analysis",
        slug: "project_costing",
        description: "Project Costing, Valuation And Tender Analysis Services",
        content: " With a seasoned team of Quantity surveyors who can provide a full system of budget estimate and cost planning, expenditure is controlled and clients receive better value for money in both design and construction, and project costs are kept within an agreed budget. We prepare initial budget costs established by reference to cost data from previous projects.Our constant monitoring means that the risk of overspending can be seen at an early stage and prompt action taken..."
    },
    {
        title: "Engineering Design And Construction",
        slug: "engineering_design",
        description: "Engineering Design Services",
        content: "We offer quality services in Architectural designs, Landscaping, Modelling and Reviewing contractor's work measurement and Evaluations. We find creative ways to solve real- world problems and develop the physical infrastructure for society to exist - from bridges to houses, and from roads to hospitals and train stations.  We apply high-level civil engineering principles alongside analytical, practical and engineering skills and techniques..."
    },
    {
        title: "Project Supervision And Management",
        slug: "project_supervision",
        description: "Project Supervision And Management Services...",
        content: "Our function in your project management is to ensure that the project objectives are achieved within the planned budget and schedule. Our methods ensure, among other things, the smooth continuation of the project while the project manager is away or if the project manager is replaced.  We pride ourselves on our expertise in this aspect of engineering. Our team of experienced professionals ensures that your construction project is completed on time, within budget, and to the highest quality standards.."
    },
];

async function seedServices() {
  console.log("🗑️ Clearing old Services...");
  await Service.deleteMany({});

  console.log("🌱 Seeding new Services...");
  for (let service of services) {
    service.slug = slugify(service.title, { lower: true, strict: true });
    await Service.updateOne(
      { title: service.title },
      { $set: service },
      { upsert: true } // avoids duplicates
    );
  }

  console.log("✅ Services seeded successfully");
}

module.exports = seedServices;
