const Blog = require("../models/blog");
const Archive = require("../models/archive");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Service = require("../models/service");
const slugify = require("slugify");

module.exports = async function seedBlogs() {
  console.log("📝 Clearing old Blogs...");
  await Blog.deleteMany();

  console.log("📝 Seeding new Blogs...");

  const archives = await Archive.find();
  const tags = await Tag.find();
  const categories = await Category.find();
  const services = await Service.find();
  // Map archive slugs to their ObjectIds
  const archiveMap = {};
  archives.forEach(a => { archiveMap[a.slug] = a._id; });

  const catMap = {};
  categories.forEach((c) => {
    catMap[c.slug] = c._id; // map slug -> ObjectId
  });

  const blogsData = [
    {
        title:  "Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria",
        slug: slugify("preventing_stormwater", { lower: true }),
        content: "Stormwater, the water that runs off impervious surfaces during rainfall, is a critical element in urban environments. This article delves into the environmental ramifications of polluted runoff, examines Nigeria's environmental regulations, and outlines essential QC measures for stormwater management Nigeria....",
        tags: [],
        categories:  [
          catMap["construction_technology"],
          catMap["cat_environmental"],
          catMap["cat_feasibility_eco"],
          catMap["consultancy_advisory"]
        ],
        archive: archiveMap["archives_2025_june"],
        service: ["advisory_services", "engineering_design", "environmental_impact", "feasibility_ecostudies"],
        createdAt: new Date("2025-06-29T01:17:00Z")
      },
      {
        title:
        "Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria",
        slug: slugify("understan_geotechnical", { lower: true }),
        content:  "In civil engineering, the success of stormwater drainage systems depends heavily on geotechnical considerations. The interplay between soil properties and ground conditions directly impacts the quality, durability, and long-term functionality of these systems. In Nigeria, with its diverse soil profiles and environmental challenges, incorporating geotechnical insights into quality control (QC) processes is essential. This article delves into the importance of soil investigation, permeability tests, and slope stability analysis for effective stormwater drainage design and maintenance...",
        tags: [],
        categories:  [
          catMap["consultancy_advisory"],
          catMap["cat_feasibility_eco"],
          catMap["innovation_research"],
          catMap["pro_superv_cat"],
          catMap["safety_regulations"],
        ],
        archive: archiveMap["archives_2025_april"],
        service: ["advisory_services", "engineering_surveys", "environmental_impact", "feasibility_ecostudies", "project_supervision"],
        createdAt: new Date("2025-04-12T09:19:00Z")
      },
      {
        title:
        "Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates",
        slug: slugify("best_pract_stormwater", { lower: true }),
        content:  "Quality Control for Durability in Nigerian Climates Concrete forms the backbone of stormwater drainage systems, providing the strength and durability needed to withstand environmental stresses. In Nigeria, where heavy rainfall and fluctuating temperatures often challenge infrastructure, ensuring the quality and longevity of concrete used in stormwater systems is vital. This article explores best practices for concrete quality control (QC), focusing on suitable concrete types for Nigerian conditions and key tests to ensure strength, water-cement ratio, and proper curing....",
        tags: [],
        categories:  [
          catMap["catMap[consultancy_advisory"],
          catMap["pro_superv_cat"],
          catMap["training_education"]
        ],
        archive: archiveMap["archives_2024_july"],
        service: ["advisory_services", "environmental_impact", "project_supervision"],
        createdAt: new Date("2025-07-29T12:59:00Z")
      },
      {
        title: "Ensuring Stormwater Drainage System Efficiency",
        slug: slugify("ensuringStormwater", { lower: true }),
        content:   "In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health....",
        tags: [],
        categories: [catMap["safety_regulations"]],
        archive: archiveMap["archives_2024_june"],
        service: ["advisory_services"],
        createdAt: new Date("2024-06-15T10:20:00Z")
      },
      {
        title:
        "Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis",
        slug: slugify("chal_stormwat_criticalAnal", { lower: true }),
        content: "Rapid urbanization in Nigeria, particularly in its major cities, has led to a significant increase in the volume and intensity of stormwater runoff, posing a growing threat to public safety, infrastructure, and the environment. This paper critically analyzes the various challenges associated with stormwater management in urban areas of Nigeria. It explores the interconnected nature of these challenges, encompassing inadequate infrastructure, rapid population growth, poor urban planning, and a lack of financial and institutional capacity. The paper also discusses the implications of climate change, which is exacerbating existing challenges and demanding innovative solutions. By examining the root causes and proposing potential mitigation strategies, this paper aims to contribute to the development of effective and sustainable stormwater management practices in Nigerian cities....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2024_may"],
        service: ["advisory_services"],
        createdAt: new Date("2024-05-29T10:51:00Z")
      },
      {
        title:
        "Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria",
        slug: slugify("eval_succ_effec_exisDrain", { lower: true }),
        content:  "This article aims to evaluate the success and effectiveness of existing drainage systems in Nigeria, focusing on their ability to manage rainwater runoff...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2024_april"],
        service: ["advisory_services"],
        createdAt: new Date("2024-04-15T11:47:00Z")
      },
      {
        title: "Addressing Nigeria's Water Pollution Crisis",
        slug: slugify("address_nig_wat_Pollution", { lower: true }),
        content:  "The role of stormwater management in addressing pollution. Nigeria, the most populous country in Africa, is grappling with a severe environmental crisis – water pollution...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2024_march"],
        service: ["advisory_services"],
        createdAt: new Date("2024-03-19T10:41:00Z")
      },
      {
        title: "The Urgent Need For Sustainable Management Engineering Pracices",
        slug: slugify("urgent_need_4_sustainable", { lower: true }),
        content:
        "As urbanization continues, the impacts of land-use change on urban hydrology become increasingly severe, Without sustainable stormwater management practices, cities will face more frequent and severe flooding, erosion, and water pollution....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2024_feb"],
        service: ["advisory_services"],
        createdAt: new Date("2024-02-07T02:43:00Z")
      },
      {
        title: "The Relationship Between Land-use Change And Urban Hydrology",
        slug: slugify("rel_btw_landUseChange", { lower: true }),
        content: "Land-use change refers to the human alteration of landscapes for various purposes, such as urban development, transportation, agriculture, and forestry. Urban hydrology, on the other hand, is the study of water movement, storage, and quality in urban areas, including the impacts of human activities on the water cycle...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_nov"],
        service: ["advisory_services"],
        createdAt: new Date("2023-11-01T02:58:00Z")
      },
      {
        title:
        "Examples of Sustainable Stormwater Management Practices In Urban Areas",
        slug: slugify("exampl_Sustainable", { lower: true }),
        content:  "Urbanization and development often result in changes to natural land surfaces, leading to increased impervious surfaces and reduced vegetation. This alteration leads to higher volumes of rainwater runoff, which can overwhelm urban drainage systems and lead to flooding, erosion, and pollution. To manage these impacts, sustainable stormwater management practices that mimic natural processes are necessary. Here are three examples of such practices...",
        tags: [],
        categories:[catMap["uncategorized"]],
        archive: archiveMap["archives_2024_jan"],
        service: ["advisory_services"],
        createdAt: new Date("2024-01-04T01:16:00Z")
      },
      {
        title: "Challenges Posed By Traditional Storm Water Management Practices",
        slug: slugify("chal_posed_by_trad_storm", { lower: true }),
        content:  "Traditional stormwater management practices, such as curbs, gutters, and storm sewers, were designed to convey runoff away from urban areas and into water bodies. However, these systems often fail to handle the increased runoff from land-use change, leading to flooding and infrastructure damage..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_dec"],
        service: ["advisory_services"],
        createdAt: new Date("2023-12-20T05:57:00Z")
      },
      {
        title:
        "Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas",
        slug: slugify("navigat_risk_flooding", { lower: true }),
        content: "Flooding is a major concern in many areas, causing damage and destruction to homes, businesses, and communities. In addition to the physical damage, floods can lead to significant economic losses. Several Civil engineering strategies can help manage and reduce the risk of floods in flood-prone areas...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_jan"],
        service: ["advisory_services"],
        createdAt: new Date("2023-01-30T08:30:00Z")
      },
      {
        title: "Oil Hubs in Delta State, Nigeria",
        slug: slugify("oilHubs_delta", { lower: true }),
        content: "Warri and Effurun as shown in the figure, are located on Latitudes 5o27’ N and 5o36’ N and Longitudes 5o40’ E and 5o48’ E.  They sit on the bank of Warri River which joined Forcados, and Escravos Rivers through Jones Creek in the lower Niger Delta Region to the Atlantic Ocean. Studies have shown this region to have moderate rainfall and humidity from May to October.  Experience has shown it to have a short dry season from December to March, making construction activities to be at their peak during these months.  The natural vegetation predominant in this region is a rain forest with swamp forest in some areas.  Warri is one of the oldest cities found within the lower Niger of Nigeria.  The city is described as a low-lying plain that consists mainly of unconsolidated sediments of Quaternary age.  The sediments are partly of marine and fluvial origin...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_may"],
        service: ["environmental_impact"],
        createdAt: new Date("2021-05-26T11:01:00Z")
      },
      {
        title: "Flooding: A Global Warming Aftermath",
        slug: slugify("global_warming", { lower: true }),
        content:  "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding.  The effects of these extreme changes have brought more flooding in our Cities, especially Asaba, Warri, Effurun, and Environs since they lie within the Niger Delta region of Southern Nigeria. Despite these extreme weather changes from global warming, less attention is being given to the management, and control of stormwater by the government. The excess stormwater leads to the loss of agricultural farmlands, contamination of groundwater and rivers, and loss of lives and property of immeasurable values. Today, due to the global climate change, Asaba, Warri, Effurun, and its environs are experiencing more months and frequent rainfall rather than the old known pattern of six months dry and six months rainy seasons.  The effect on these cities and environs has defied the efficacy of existing drainage systems put in place by government and corporate bodies over the years.  Hence, there was an urgent need by the government of Delta State to study and construct sustainable drainage systems for the management and control of Stormwater in Asaba, Warri, Effurun, and Environs. This desire led to the Engineering Study and Design conducted in Asaba, Warri, Effurun, and Environs.  Using interviews of locals, participatory meetings, and engineering surveys more in-depth knowledge of the flooding and causes was gathered. The study looked at how overland drainages can be incorporated into nature-based gifts, such as Valleys, Waterways, and Rivers for the safe evacuation of the excess runoff generated from the environment. Results obtained showed that improving the efficiency of these Natural Watercourses and Rivers would bring better management and control of the outfalls of both existing and new drainages into these Natural Watercourses. For this to be successful, the inhabitants must be aware of the environmental hazards associated with blocking of Valleys and Waterways with structures and dumping of waste materials into Storm Sewers and Drains, which would create blockages for the efficient evacuation of the Stormwater generated from the Environment...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_april"],
        service: ["advisory_services"],
        createdAt: new Date("2021-04-29T03:23:00Z")
      },
      {
        title: "Recommended Actions For A Young Engineer-1",
        slug: slugify("rec_actions_youngEngr1", { lower: true }),
        content:  "This is one of the greatest steps to make you succeed as a professional engineer. As an Engineer, you must have that strong desire and willingness to learn new technical skills and apply the scientific and mathematical principles acquired during your engineering education. This will enable you to create engineering designs in accordance with the code of practice and standards governing the engineering profession, which products will meet all safety and structural requirements for the comfort of mankind...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_jan"],
        service: ["project_supervision"],
        createdAt: new Date("2021-01-15T01:06:00Z")
      },
      {
        title: "Recommended Actions For A Young Engineer-2",
        slug: slugify("rec_actions_youngEng2", { lower: true }),
        content: "Imagination is another challenge to a young engineer’s career. An engineer must have the power of imagination. Every engineering product is a creation of the engineer’s imagination from the astral world. Such imagination should transform into an acceptable and useful product for the sustainability of the environment and mankind. An engineer is a philosopher who can create ideas from the astral environment and by his application of the scientific and natural laws, make life meaningful for man and his environment.  So, if one is not capable of doing so, then one is in the wrong profession...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_april"],
        service: ["project_supervision"],
        createdAt: new Date("2021-04-07T01:07:00Z")
      },
      {
        title: "Working With Standard Engineering Codes",
        slug: slugify("workin_withStan_engCode", { lower: true }),
        content:  "The engineering profession is guided by standards, codes, and ethics of practice which set minimum safety guides for the profession.  However, because we are in a dynamic world with lots of complexity occurring daily, the codes of practice have also become revolutionised with many countries coming out with their codes of practice to suit the dynamics of their environment. For this reason, the <strong>British Standard (BS) code</strong> is now used alongside the <strong>European Standard codes (Eurocodes)</strong> in many countries, including Nigeria.  Most engineering books nowadays come in both British Standard (BS) code and European Standard codes (Eurocodes).  The use of either code in design does not invalidate the work of the designer. It is important to get familiar with recent developments by reading these volumes of codes instead of relying on the use of only familiar and simplified codes..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_nov"],
        service: ["advisory_services"],
        createdAt: new Date("2020-11-22T02:54:00Z")
      },
      {
        title:
        "Improving Professional Efficiency And Quality Of Engineering Products",
        slug: slugify("improvProf_efficiency", { lower: true }),
        content: "To further improve professional efficiency and quality of engineering products, Government Agencies authorised with the approving powers can also play the role of external reviewers of technical documents seeking approval. This will force engineering professionals to conduct their work diligently in accordance with professional codes and ethics, and produce quality jobs that will not be subjected to an embarrassing rejection by the approving authorities.  It will also discourage quacks from the profession and reduce the incessant cases of infrastructural failures that are recorded almost on a yearly basis in our Country.It is encouraging to note that some States in the Federal Republic of Nigeria, like Lagos, Federal Capital Territory – Abuja, and Rivers have been implementing external review checks on Technical Documents submitted for approval.  It will be in the interest of our developing economy if other States in the Federation emulate the earlier mentioned States in this practice. This can be achieved through the recruitment of professional Engineers to manage these external review functions in the various Establishments vested with such powers. The essence of this is to ensure that set standards and recommended codes of practice are followed in the design and execution of engineering projects. Most of these practising States require in addition to the calculation sheets and drawings submitted for approval, a letter of undertaking, passport photograph, and a photocopy of the COREN certificate of the designer to accompany these design documents. This alone portrays that enormous responsibility is rested on the Engineer, and demands that confidence, courage, and good quality product delivery for the safe use of the structure for clients and the public is not negotiable...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_oct"],
        service: ["advisory_services"],
        createdAt: new Date("2020-10-25T02:37:00Z")
      },
      {
        title: "The Young Engineer: Importance Of Training And Mentorship",
        slug: slugify("youngEgineer_importance", { lower: true }),
        content:  "A young engineer, who is at the threshold of a professional career, transiting from a fresh engineering graduate to a leadership role in engineering should bear in mind that there are many challenges along the journey....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_sept"],
        service: [ "project_supervision"],
        createdAt: new Date("2020-09-20T07:00:00Z")
      },
      {
        title:
        "Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria",
        slug: slugify("studyDesign_Stormwater", { lower: true }),
        content:  "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_dec"],
        service: ["advisory_services"],
        createdAt: new Date("2023-12-20T12:11:00Z")
      },
      {
        title: "Challenges Of A Young Engineer",
        slug: slugify("challenges_youngEngr", { lower: true }),
        content:  "In our engineering education, we were taught the use of science and mathematics which form the fundamental basis for the application of the knowledge to interpret, invent, innovate, and solve engineering problems...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_july"],
        service: ["advisory_services"],
        createdAt: new Date("2020-07-20T12:21:00Z")
      },
      {
        title: "Sample Post",
        slug: slugify("sample_post", { lower: true }),
        content:  "What Is Stormwater? Stormwater which can also be spelled as storm water, is a content of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to nearby streams, rivers, or other water bodies (surface water) without treatment. In natural environment, such as green areas, soil absorbs much of the stormwater. Plants also reduce stormwater by improving infiltration, intercepting precipitation as it falls, and by taking up water through their roots. In developed environments, unmanaged stormwater can create two major issues: One related to the volume and timing of runoff (flooding), And the other related to potential contaminants the water is carrying (water pollution)....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_may"],
        service: ["advisory_services"],
        createdAt: new Date("2020-05-24T06:33:00Z")
      },
      {
        title: "Recommendations For Stormwater Management And Control",
        slug: slugify("recommend_stormWater", { lower: true }),
        content:  "The details from the findings and observations of this study and design by Jefcon &amp; Associates Ltd (Consultant) for the Stormwater Management and Control Measures for Asaba, Warri, Effurun and environs, showed that the topography of Asaba &amp; its environs and that of Warri, Effurun &amp; environs have similarities in its flood management and control approaches...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2020_july"],
        service: ["advisory_services"],
        createdAt: new Date("2020-07-31T01:31:00Z")
      },
      {
        title: "Considerations In The Design Of Stormwater Channels",
        slug: slugify("consideratns_stormwater", { lower: true }),
        content:  "There are many important considerations in the design of durable stormwater channels, and the next series of posts considers some of them..The time of concentration (Tc), is defined as the longest time it takes the rain falling at the most distant point within a watershed to reach the point under reference. It is one of the most important variables in the estimation of design discharges. It should be noted that while dealing in watersheds with flat terrain or low topographic slopes, the calculation of Tc, using commonly accepted equations often results in unreasonably large values...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_may"],
        service: [ "engineering_design"],
        createdAt: new Date("2022-05-31T08:41:00Z")
      },
      {
        title: "Channel Selection For Stormwater Control",
        slug: slugify("channel_select_stormwater", { lower: true }),
        content: "In channel selection for control of stormwater in Asaba, Warri, Effurun, and environs, great care was taken in channel depth selection because of the high-water table, especially in Effurun and Warri Metropolis...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_april"],
        service: [ "engineering_design", "project_supervision"],
        createdAt: new Date("2022-04-25T07:53:00Z")
      },
      {
        title: "Hydraulic Design Of Drainage Channels",
        slug: slugify("hydraulic_design", { lower: true }),
        content: "The hydraulic design of a drainage channel requires excellent knowledge of the topography and rainfall data of the project area. The design of a drainage channel is affected by factors such as the topography of the project area, selection type, design frequency, expected volume of&nbsp;stormwater, and economy..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_may"],
        service: ["advisory_services"],
        createdAt: new Date("2022-05-21T01:51:00Z")
      },
      {
        title:
        "Description Of Core Hydrological Terminologies In Flood Control Analysis",
        slug: slugify("desc_coreHydrolog_Term", { lower: true }),
        content:  "Rainfall Intensity has an important effect on runoff proportion, as it determines the rate at which rainfall runoff arrives at the soil surface and, consequently, when infiltration rate of the soil is low to allow absorption, flooding of the environment does occur..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_feb"],
        service: ["advisory_services"],
        createdAt: new Date("2022-02-28T08:30:00Z")
      },
      {
        title:
        "Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control",
        slug: slugify("engDesign_hydrolog_Analysis", { lower: true }),
        content:  "The engineering design of a stormwater drainage system requires a large data collection effort.  The data requirements in the stormwater management and control measures for Asaba, Warri, Effurun, and environs include knowledge of topography, drainage boundaries, imperviousness, soil types, and locations of existing drainage channels, manholes, culverts inlets, and outlets. In addition, identification of other types of utilities and their locations in the ground is critical.  These data collated enabled the study and design work for the new drainage network systems to be achieved.  The engineering analysis of the drainage system recommended for this project considered four major aspects:..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_jan"],
        service: ["advisory_services"],
        createdAt: new Date("2022-01-23T02:46:00Z")
      },
      {
        title: "Engineering Survey For Effective And Efficient Flood Control",
        slug: slugify("engSurvey_forEffectEfficient", { lower: true }),
        content: "To develop efficient and effective flood water control measures, a good knowledge of the topography of the study area is important for the design.  As much as practicable, the engineering survey here followed the existing street layouts...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_jan"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2021-01-12T11:09:00Z")
      },
      {
        title: "Findings And Observations In Flood-Prone Areas Of Delta State -1",
        slug: slugify("findings_observation1", { lower: true }),
        content: "Studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers, including existing drains in Asaba, Warri, Effurun, and environs. The studies showed that, There were no previous records of survey data and maps for the cities. While Warri had an old Master plan, Asaba had none. A large part of the flooding noticed in Asaba, Warri, Effurun and environs could be attributed to blocked drainage channels with waste materials decomposable and non-decomposable, silts, overgrown weeds. The result is that the flow discharge into the drainage channels is disturbed and hence could not be evacuated from the environment.Most of the existing drains do not have discharge points as they were constructed without design specifications..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_august"],
        service: ["advisory_services"],
        createdAt: new Date("2021-08-25T10:03:00Z")
      },
      {
        title: "Findings And Observations In Flood-Prone Areas Of Delta State -2",
        slug: slugify("findings_and_observation2", { lower: true }),
        content:  "Well-researched studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers in Delta State of Nigeria, including existing drains in Asaba, Warri, Effurun, and environs. Several observations were made. Eight of these observations were discussed in my last post. This post is a sequel to the former and a continuation of the observations from these studies...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_nov"],
        service: ["environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2021-11-16T06:25:00Z")
      },
      {
        title: "Hydrological Basins In Delta State, Nigeria",
        slug: slugify("hydrological_basins", { lower: true }),
        content:  "Studies were conducted to identify all the flood-prone areas in Asaba, Warri, Effurun, and environs, all in Delta State of Nigeria.  These studies were to help develop efficient and effective flood water control measures that would safely convey run-off from the streets to the natural watercourses and rivers without loss of lives and property. These basins were broken into catchments using existing road networks for delineation as boundaries. In the case of Asaba, the absence of water bodies limited the design approach to nature-based types, such as valleys, streams, and rivers that are tributaries to the River Niger. But in the case of Warri and Effurun, the catchment areas contain lots of water bodies (swamps) and natural watercourses, which serve as the receiving basins for floodwater evacuation from the environment..",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2021_august"],
        service: ["advisory_services", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2021-08-01T08:13:00Z")
      },
      {
        title:
        "Merits Of The Recommended Options For Storm Water Management And Control",
        slug: slugify("merits_recomend_options", { lower: true }),
        content: "This article enumerates the merits to be derived from the use of these recommended pre-cast concrete structural elements of rectangular, square, and circular channels...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_august"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2022-08-24T01:06:00Z")
      },
      {
        title:
        "7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY",
        slug: slugify("seven_things_toKnow", { lower: true }),
        content:  "When it comes to stormwater drainage construction, it is important to hire a reputable and experienced company. The process is complex and requires a number of steps to ensure the job is done correctly and efficiently.   If you are considering hiring a stormwater drainage construction company, there are a few things you need to know before making a decision....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_sept"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2022-09-29T01:43:00Z")
      },
      {
        title: "7 Ways To Handle Flooding In Any Parts Of Nigeria",
        slug: slugify("seven_ways_handle_flood", { lower: true }),
        content: "Flooding is a very serious issue in Nigeria, as it can lead to significant damage to property and even loss of life. Floods can occur due to heavy seasonal rains or from overflowing bodies of water such as rivers and oceans. Flooding can be a major problem for those living in areas with low-lying land or in cities where there is poor drainage. In order to handle flooding in any area of Nigeria, there are a variety of strategies that can be implemented. This article lists 7 ways that you can handle flooding in any area of Nigeria. These strategies can be used by individuals, organizations, and governments to reduce the destruction caused by flooding and ensure the safety of those living in affected areas. Whether you are living in a rural area or a city, these strategies will help you to be better prepared for a flood and handle it in the most effective way possible. When it comes to flooding in Nigeria, prevention is key. We must work together to develop a comprehensive plan that includes early warning systems, improved nfrastructure, and risk management strategies to ensure we are better prepared to handle future floods....",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_oct"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2022-10-30T03:04:00Z")
      },
      {
        title: "8 Important Facts About StormWater Drainage Systems",
        slug: slugify("eightfacts_about_storm", { lower: true }),
        content:  "Stormwater drainage systems are essential to our health and safety, they help protect us from flooding and prevent water pollution, making them an important part of our infrastructure...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_nov"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2022-11-30T04:12:00Z")
      },
      {
        title:
        "Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding",
        slug: slugify("risingTides_sinkinCities", { lower: true }),
        content:  "Climate change continues to threaten our planet, with the most immediate threat being extreme flooding. Rising tides and sinking cities have become a stark reality with devastating consequences for many communities around the world. It's a global problem that requires immediate attention and action from governments, businesses, and individuals. In recent years, increased levels of carbon dioxide emissions have led to warmer ocean temperatures and melting polar ice caps, causing sea levels to rise. The impact of these changes has been acutely felt in many coastal areas in Nigeria, as an example, causing more intense and frequent flooding. This blog post will explore the relationship between climate change and extreme flooding, and how it is affecting cities and towns across the world. We will examine the science behind rising sea levels and how it affects our coasts, as well as the social and economic impact of flooding. We will also take a closer look at the strategies and technologies being used to mitigate the effects of climate change on flooding...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_feb"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2023-02-25T05:37:00Z")
      },
      {
        title:
        "Impacts Of Land-use Change On Urban Hydrology And The Need For Sustainable Storm Water Management Engineering Practices",
        slug: slugify("impact_land_use", { lower: true }),
        content:  " An excerpt from 'Impacts of land-use Change on Urban Hydrology and the need for sustainable Storm Water Management Engineering Practices'",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_oct"],
        service: ["advisory_services", "engineering_design", "engineering_surveys", "environmental_impact", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2023-10-08T10:02:00Z")
      },
      {
        title:
        "The Importance Of Community Engagement And Education In Sustainable Water Management",
        slug: slugify("imp_commu_engagement", { lower: true }),
        content:  "Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria On Thursday, 2nd Nov, 2023",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2023_march"],
        service: ["advisory_services", "project_supervision"],
        createdAt: new Date("2023-03-07T09:26:00Z")
      },
      {
        title: "Assessing Quality Civil Engineering Practices In Nigeria",
        slug: slugify("accessin_qual_engPract", { lower: true }),
        content: "The quality of Civil Engineering practices in Nigeria has become an increasingly important priority in recent years. As the country continues to grow and change, it is important that these practice s meet the standards of a modern, wealthy country.  Assessing the quality of Civil Engineering practices in Nigeria is crucial to establishing a secure, efficient infrastructure that is critical to the country’s future. Quality engineering practices enable the country to realize the potential of its resources, reduce costs and improve safety. This article explores the existing quality engineering practices in Nigeria, their impact on the nation’s infrastructure, and how they can be further improved. It will provide an overview of the current state of Civil Engineering practices in Nigeria, including the challenges and opportunities that can be addressed. Additionally, it discusses how government policies, industry regulations, and investments can help improve engineering practices in the nation. By assessing quality practices in Nigeria, it is possible to create a secure and efficient infrastructure that enables the nation to realize its potential...",
        tags: [],
        categories: [catMap["uncategorized"]],
        archive: archiveMap["archives_2022_dec"],
        service: ["advisory_services", "engineering_design", "feasibility_ecoStudies", "project_costing", "project_supervision"],
        createdAt: new Date("2022-12-29T07:21:00Z")
      }
    // ... more blogs
  ];

  await Blog.insertMany(blogsData);
  console.log("✅ Blogs seeded successfully");
};
