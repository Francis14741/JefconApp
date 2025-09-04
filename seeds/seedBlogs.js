// / seeds/seedBlogs.js
const mongoose = require("mongoose");
const slugify = require("slugify");
const Blog = require("../models/blog");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Archive = require("../models/archive");

// connect
mongoose.connect(process.env.MONGO || "mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const blogsData = [
  {
    title:
    "Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria",
    description:
    "Stormwater, the water that runs off impervious surfaces during rainfall, is a critical element in urban environments. This article delves into the environmental ramifications of polluted runoff, examines Nigeria's environmental regulations, and outlines essential QC measures for stormwater management Nigeria....",
    categories:  ["construction_technology", "cat_environmental", "cat_feasibility_eco", "consultancy_advisory"], 
    archives: ["archives_2025_june"],
    tags: [
    "#Tags: effectivedrainageqc",
    "#Tags: qualityofengineeringproducts",
    "#Tags: drainageinspectionmethod",
    "#Tags: drainagesystembestpractices",
    "#Tags: drainagesysteminspectiontips",
    "#Tags: watersafetytipsnigeria",
    "#Tags: waterpollutionprevention2025",
    "#Tags: urbanwatersafety",
    "#Tags: stormwaterrunoffsolution",
    "#Tags: stormwaterpollutiontrend2025",
    "#Tags: stormwaterpollutionguide",
    "#Tags: stormwaterpollutioncontrolnigeria",
    "#Tags: stormwatermanagementnigeria",
    "#Tags: rainwaterrunoff",
    "#Tags: preventingstormwaterpollution",
    "#Tags: pollutionpreventiontechnique",
    "#Tags: nigeriadrainagesystemmaintenance",
    "#Tags: howtoreduceurbanwaterpollution",
    "#Tags: easytipsfordrainagequality",
    "#Tags: drainagesystemqualitycontrol",
    ],
    createdAt: new Date("2025-06-29T01:17:00Z"),
  },
  {
    title:
    "Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria",
    description:
    "In civil engineering, the success of stormwater drainage systems depends heavily on geotechnical considerations. The interplay between soil properties and ground conditions directly impacts the quality, durability, and long-term functionality of these systems. In Nigeria, with its diverse soil profiles and environmental challenges, incorporating geotechnical insights into quality control (QC) processes is essential. This article delves into the importance of soil investigation, permeability tests, and slope stability analysis for effective stormwater drainage design and maintenance...",
    categories: ["consultancy_advisory", "cat_feasibility_eco", "innovation_research", "pro_superv_cat", "safety_regulations"],
    archives: ["archives_2025_april"],
    tags: [
    "#Tags: bearingcapacity",
    "#Tags: civiengineering",
    "#Tags: climatechangeadaptation",
    "#Tags: compaction",
    "#Tags: erosioncontrol",
    "#Tags: geosynthetics",
    "#Tags: nigerianconstruction",
    "#Tags: construction",
    "#Tags: drainagedesign",
    "#Tags: foundationdesign",
    "#Tags: geotechnicalengineering",
    "#Tags: infrastructure",
    "#Tags: permeability",
    "#Tags: pavementdesign",
    "#Tags: sedimentcontrol",
    "#Tags: permeability",
    "#Tags: qualitycontrol-qc-nigeria",
    "#Tags: slopestability",
    "#Tags: soilmechanics",
    "#Tags: soilinvestigation",
    "#Tags: siteinvestigation",
    "#Tags: soilproperties",
    "#Tags: stormwaterdrainage",
    "#Tags: watermanagement",
    ],
    createdAt: new Date("2025-04-12T09:19:00Z"),
  },
  {
    title:
    "Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates",
    description:
    "Quality Control for Durability in Nigerian Climates Concrete forms the backbone of stormwater drainage systems, providing the strength and durability needed to withstand environmental stresses. In Nigeria, where heavy rainfall and fluctuating temperatures often challenge infrastructure, ensuring the quality and longevity of concrete used in stormwater systems is vital. This article explores best practices for concrete quality control (QC), focusing on suitable concrete types for Nigerian conditions and key tests to ensure strength, water-cement ratio, and proper curing....",
    categories: ["consultancy_advisory", "pro_superv_cat", "training_education"],
    archives: ["archives_2024_july"],
    tags: [
    "#Tags: civilengineering",
    "#Tags: civilengineers",
    "#Tags: construction",
    "#Tags: constructionproffesionalsinnigeria",
    "#Tags: efficiency",
    "#Tags: nigeria",
    "#Tags: nigeriagovtpolicymakers",
    "#Tags: qualitycontrol",
    "#Tags: stormwaterdrainage",
    "#Tags: urbanplanners",
    ],
    createdAt: new Date("2025-07-29T12:59:00Z"),
  },
  {
    title: "Ensuring Stormwater Drainage System Efficiency",
    description:
      "In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health. This article delves into the importance of quality control (QC) measures in the construction of stormwater drainage systems, providing a foundational understanding of how these measures can enhance efficiency and performance...",
    categories: ["safety_regulations"],
    archives: ["archives_2024_june"],
    tags: [
    "#Tags: civilengineering",
    "#Tags: construction",
    "#Tags: efficiency",
    "#Tags: nigeria",
    "#Tags: qualitycontrol",
    "#Tags: stormwaterdrainage",
  ],
    createdAt: new Date("2024-06-15T10:20:00Z"),
  },
  {
  title:
    "Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis",
    description:
    "Rapid urbanization in Nigeria, particularly in its major cities, has led to a significant increase in the volume and intensity of stormwater runoff, posing a growing threat to public safety, infrastructure, and the environment. This paper critically analyzes the various challenges associated with stormwater management in urban areas of Nigeria. It explores the interconnected nature of these challenges, encompassing inadequate infrastructure, rapid population growth, poor urban planning, and a lack of financial and institutional capacity. The paper also discusses the implications of climate change, which is exacerbating existing challenges and demanding innovative solutions. By examining the root causes and proposing potential mitigation strategies, this paper aims to contribute to the development of effective and sustainable stormwater management practices in Nigerian cities....",
    categories: ["uncategorized"],
    archives: ["archives_2024_may"],
    tags: [
    "#Tags: climatechange",
    "#Tags: construction",
    "#Tags: efficiency",
    "#Tags: nigeria",
    "#Tags: quality-control",
    "#Tags: stormwatermanagement",
    "#Tags: sustainabledevelopment",
    "#Tags: urbanareas",
    "#Tags: urbanization",
    ],
    createdAt: new Date("2024-05-29T10:51:00Z"),
  },
  {
    title:
    "Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria",
    description:
      "Like many other countries, Nigeria faces the challenge of managing rainwater runoff effectively.The country's rapid urbanisation and population growth have led to an increase in impervious surfaces, which in turn has resulted in increased runoff and flooding. This article aims to evaluate the success and effectiveness of existing drainage systems in Nigeria, focusing on their ability to manage rainwater runoff....",
    categories: ["uncategorized"],
    archives: ["archives_2024_april"],
    tags: [
    "#Tags: civilengineering",
    "#Tags: drainageplanning",
    "#Tags: drainage-systems",
    "#Tags: environmentalimpact",
    "#Tags: nigeriaenvironment",
    "#Tags: rainwaterrunoff",
    "#Tags: stormwatermanagement",
    "#Tags: sustainable-development",
    "#Tags: urbanplanning",
    "#Tags: waterinfrastructure",
    ],
    createdAt: new Date("2024-04-15T11:47:00Z"),
  },
  {
    title: "Addressing Nigeria's Water Pollution Crisis",
    description:
    "The role of stormwater management in addressing pollution. Nigeria, the most populous country in Africa, is grappling with a severe environmental crisis – water pollution...",
    categories: ["uncategorized"],
    archives: ["archives_2024_march"],
    tags: [
    "#Tags: nigeriawaterpollution",
    "#Tags: stormwatermanagement",
    "#Tags: urbanizationchallenges",
    ],
    createdAt: new Date("2024-03-19T10:41:00Z"),
  },
  {
    title: "The Urgent Need For Sustainable Management Engineering Pracices",
    description:
      "As urbanization continues, the impacts of land- use change on urban hydrology become increasingly severe.Without sustainable stormwater management practices, cities will face more frequent and severe flooding, erosion, and water pollution.It is necessary to take an integrated approach to manage stormwater that involves a combination of engineering practices, community engagement, and education.Here are two key takeaways..",
    categories: ["uncategorized"],
    archives: ["archives_2024_feb"],
    tags: [
    "#Tags: climatechange",
    "#Tags: engineeringpractices",
    "#Tags: greeninfrastructure",
    "#Tags: resilientcities",
    "#Tags: stormwatermanagement",
    "#Tags: stormwatermitigation",
    "#Tags: drainagesystems",
    "#Tags: sustainability",
    "#Tags: watersustainability",
    ],
    createdAt: new Date("2024-02-07T02:43:00Z"),
  },
  {
    title: "The Relationship Between Land-use Change And Urban Hydrology",
    description:
      "Land-use change refers to the human alteration of landscapes for various purposes, such as urban development, transportation, agriculture, and forestry.  Urban hydrology, on the other hand, is the study of water movement, storage, and quality in urban areas, including the impacts of human activities on the water cycle.Land - use change can profoundly affect urban hydrology by altering the amount, timing, and quality of water that runs off or infiltrates into the ground. When natural landscapes, such as forests and wetlands, are replaced by impervious surfaces, such as rooftops, roads, and parking lots, surface runoff increases, and groundwater recharge decreases, leading to more frequent and severe flooding, erosion, and water quality degradation. Therefore, there is a growing need for sustainable stormwater management engineering practices that can mitigate these impacts...",
    categories: ["uncategorized"],
    archives: ["archives_2023_nov"],
    tags: [
    "#Tags: stormwatermanagement",
    "#Tags: engineeringpractices",
    "#Tags: landusechange",
    "#Tags: sustainablestormwatermanagement",
    "#Tags: urbanenvironment",
    "#Tags: urbanhydrology",
    "#Tags: urbanwatermanagement",
    ],
    createdAt: new Date("2023-11-01T02:58:00Z"),
  },
  {
    title:
    "Examples of Sustainable Stormwater Management Practices In Urban Areas",
    description:
      "Urbanization and development often result in changes to natural land surfaces, leading to increased impervious surfaces and reduced vegetation. This alteration leads to higher volumes of rainwater runoff, which can overwhelm urban drainage systems and lead to flooding, erosion, and pollution. To manage these impacts, sustainable stormwater management practices that mimic natural processes are necessary. Here are three examples of such practices...",
    categories: ["uncategorized"],
    archives: ["archives_2024_jan"],
    tags: [
    "#Tags: bioswales",
    "#Tags: greeninfrastructure",
    "#Tags: lowimpactdevelopment",
    "#Tags: permeablepavement",
    "#Tags: rainbarrels",
    "#Tags: raingardens",
    "#Tags: rainwaterharvesting",
    "#Tags: stormwaterbestpractices",
    "#Tags: engineeringpractices",
    "#Tags: stormwatereducation",
    "#Tags: stormwaterfiltration",
    "#Tags: sustainablestormwatermanagement",
    "#Tags: sustainableurbanplanning",
    "#Tags: urbanrunoffmitigation",
    "#Tags: urbanwatermanagement",
    "#Tags: waterconservation",
    ],
    createdAt: new Date("2024-01-04T01:16:00Z"),
  },
  {
    title: "Challenges Posed By Traditional Storm Water Management Practices",
    description:
      "Traditional stormwater management practices, such as curbs, gutters, and storm sewers, were designed to convey runoff away from urban areas and into water bodies. However, these systems often fail to handle the increased runoff from land- use change, leading to flooding and infrastructure damage.In many urban areas, land management and stormwater management are separate disciplines that do not communicate or coordinate effectively. This leads to missed opportunities to implement sustainable stormwater management practices that can address the impacts of land-use change on urban hydrology...",
    categories: ["uncategorized"],
    archives: ["archives_2023_dec"],
    tags: [
    "#Tags: environmentalprotection",
    "#Tags: greensolutions",
    "#Tags: rainwaterharvesting",
    "#Tags: stormwaterchallenge",
    "#Tags: stormwatermanagement",
    "#Tags: sustainabledevelopment",
    "#Tags: sustainablestormwatermanagement",
    ],
    createdAt: new Date("2023-12-20T05:57:00Z"),
  },
  {
    title:
    "Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas",
    description:
      "Flooding is a major concern in many areas, causing damage and destruction to homes, businesses, and communities. In addition to the physical damage, floods can lead to significant economic losses.Several Civil engineering strategies can help manage and reduce the risk of floods in flood- prone areas. In this article, we explore the key strategies that civil engineers use to help protect communities from the risks of flooding.We discuss the importance of planning for floods, the different types of flood defenses, and the best practices for maintaining flood management systems. Additionally, we provide insights into how civil engineers are working to make communities more resilient to floods.With the right strategies in place, we can help to reduce the impact of flooding and protect communities from the risks associated with floods...",
    categories: ["uncategorized"],
    archives: ["archives_2023_jan"],
    tags: [
    "#Tags: civilengineering",
    "#Tags: communityinvolvement",
    "#Tags: detectivesystems",
    "#Tags: drainagesystemsdesignandconstruction",
    "#Tags: ecologicalrehabilitationandsustainaibility",
    "#Tags: floodmanagement",
    "#Tags: floodproneareas",
    "#Tags: floodproofconstructiontechniques",
    "#Tags: infrastructuredevelopment",
    "#Tags: mitigationstrategies",
    "#Tags: preventativemeasures",
    "#Tags: restorativeengagementstrategies",
    "#Tags: riskawarenessandplanning",
    ],
    createdAt: new Date("2023-01-30T08:30:00Z"),
  },
  {
    title: "Oil Hubs in Delta State, Nigeria",
    description:
    "Warri and Effurun as shown in the figure, are located on Latitudes 5o27’ N and 5o36’ N and Longitudes 5o40’ E and 5o48’ E. They sit on the bank of Warri River which joined Forcados, and Escravos Rivers through Jones Creek in the lower Niger Delta Region to the Atlantic Ocean. Studies have shown this region to have moderate rainfall and humidity from May to October.  Experience has shown it to have a short dry season from December to March, making construction activities to be at their peak during these months.  The natural vegetation predominant in this region is a rain forest with swamp forest in some areas.  Warri is one of the oldest cities found within the lower Niger of Nigeria.  The city is described as a low-lying plain that consists mainly of unconsolidated sediments of Quaternary age.  The sediments are partly of marine and fluvial origin...",
    categories: ["uncategorized"],
    archives: ["archives_2021_june"],
    tags: [
    "#Tags: drainage",
    "#Tags: drainagebasin",
    "#Tags: drainagebresilien",
    "#Tags: drainagecell",
    "#Tags: drainagechannel",
    "#Tags: drainagechannels",
    "#Tags: drainagecontractor",
    "#Tags: drainagecover",
    "#Tags: drainagedesign",
    "#Tags: drainageditch",
    "#Tags: drainageengineer",
    "#Tags: drainageholes",
    "#Tags: drainageissues",
    "#Tags: drainagelife",
    "#Tags: drainageline",
    "#Tags: drainagepathway",
    "#Tags: drainagepipe",
    "#Tags: drainagepipes",
    "#Tags: drainageproblems",
    "#Tags: drainageproducts",
    "#Tags: drainageproject",
    "#Tags: drainagesolution",
    "#Tags: drainagesolutions",
    "#Tags: drainagespecialists",
    "#Tags: drainagesystem",
    "#Tags: drainagesystem",
    "#Tags: drainagesystems",
    "#Tags: drainagetile",
    "#Tags: drainagevisage",
    "#Tags: drainagework",
    "#Tags: drainageworks",
    ],
    createdAt: new Date("2021-06-19T11:01:00Z"),
  },
  {
    title: "Tributaries To The River Niger Within Asaba, Delta State, Nigeria",
    description:
    "Asaba is situated at the western bank of River Niger, overlooking the point where the Anambra River flows into it. It is sandwiched between Anwai in the North, Issele-Azagba in the West, Ibusa in the South, and River Niger in the East.The eastern axis of the territory is marked with low relief that falls to about 22 metres above mean sea level, while the western axis shows the features of high relief that rises to about 175 metres above mean sea level. Asaba has a large population of Igbo- speaking people, but her position as Delta State Capital has brought her a cosmopolitan population drawn from other ethnic nationalities such as Urhobo, Isoko, Ijaw, Itsekiri, Hausa and Yoruba people, etc. Its geographical location lies and this plain is sitting in a flat terrain, which is between 44m & 41m.There are some nature - based drainage routes that are tributaries to River Niger within Asaba, such as Iyi- Abi that is in the South, and Anwai River in the North - East. region of Delta State. The project section covers only an area of about 8, 521.24 hectares(85.212 - sqkm)...",
    categories: ["uncategorized"],
    archives: ["archives_2021_may"],
    tags: [
    "#Tags: asabadrainage",
    "#Tags: drainage",
    "#Tags: drainagebasin",
    "#Tags: drainagebresilien",
    "#Tags: drainagecell",
    "#Tags: drainagechannel",
    "#Tags: drainagechannels",
    "#Tags: drainagecontractor",
    "#Tags: drainagecover",
    "#Tags: drainagedesign",
    "#Tags: drainageditch",
    "#Tags: drainageengineer",
    "#Tags: drainageholes",
    "#Tags: drainageissues",
    "#Tags: drainagelife",
    "#Tags: drainageline",
    "#Tags: drainagepathway",
    "#Tags: drainagepipe",
    "#Tags: drainagepipes",
    "#Tags: drainageproblems",
    "#Tags: drainageproducts",
    "#Tags: drainageproject",
    "#Tags: drainagesolution",
    "#Tags: drainagesolutions",
    "#Tags: drainagespecialists",
    "#Tags: drainagesystem",
    "#Tags: drainagesystem",
    "#Tags: drainagesystems",
    "#Tags: drainagetile",
    "#Tags: drainagevisage",
    "#Tags: drainagework",
    "#Tags: drainageworks",
    "#Tags: deltadrainage",
    "#Tags: nigeriadrainage",
    ],
    createdAt: new Date("2021-05-26T11:01:00Z"),
  },
  {
    title: "Flooding: A Global Warming Aftermath",
    description:
    "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding.  The effects of these extreme changes have brought more flooding in our Cities, especially Asaba, Warri, Effurun, and Environs since they lie within the Niger Delta region of Southern Nigeria. Despite these extreme weather changes from global warming, less attention is being given to the management, and control of stormwater by the government. The excess stormwater leads to the loss of agricultural farmlands, contamination of groundwater and rivers, and loss of lives and property of immeasurable values. Today, due to the global climate change, Asaba, Warri, Effurun, and its environs are experiencing more months and frequent rainfall rather than the old known pattern of six months dry and six months rainy seasons.  The effect on these cities and environs has defied the efficacy of existing drainage systems put in place by government and corporate bodies over the years.  Hence, there was an urgent need by the government of Delta State to study and construct sustainable drainage systems for the management and control of Stormwater in Asaba, Warri, Effurun, and Environs. This desire led to the Engineering Study and Design conducted in Asaba, Warri, Effurun, and Environs.  Using interviews of locals, participatory meetings, and engineering surveys more in-depth knowledge of the flooding and causes was gathered. The study looked at how overland drainages can be incorporated into nature-based gifts, such as Valleys, Waterways, and Rivers for the safe evacuation of the excess runoff generated from the environment. Results obtained showed that improving the efficiency of these Natural Watercourses and Rivers would bring better management and control of the outfalls of both existing and new drainages into these Natural Watercourses. For this to be successful, the inhabitants must be aware of the environmental hazards associated with blocking of Valleys and Waterways with structures and dumping of waste materials into Storm Sewers and Drains, which would create blockages for the efficient evacuation of the Stormwater generated from the Environment...",
    categories: ["uncategorized"],
    archives: ["archives_2021_april"],
    tags: [
    "#Tags: flooding",
    "#Tags: flooding2018",
    "#Tags: flooding2019",
    "#Tags: floodingalert",
    "#Tags: floodingcookie",
    "#Tags: floodingcookies",
    "#Tags: floodingcookieswithroyalicing",
    "#Tags: floodingeverywhere",
    "#Tags: floodingfeeds",
    "#Tags: floodingfriday",
    "#Tags: floodingicing",
    "#Tags: floodingig",
    "#Tags: floodinginsta",
    "#Tags: floodinginstagram",
    "#Tags: floodinginstagramwithcutepicsofzeus",
    "#Tags: floodingintexas",
    "#Tags: floodingmytimeline",
    "#Tags: floodingrain",
    "#Tags: floodingrains",
    "#Tags: floodingriver",
    "#Tags: floodingroads",
    "#Tags: floodings",
    "#Tags: floodingthetimeline",
    "#Tags: floodingsucks",
    "#Tags: floodingtechnique",
    "#Tags: floodingyournewsfeed",
    "#Tags: floodingyournewsfeeds",
    "#Tags: floodingyourtime",
    "#Tags: floodingyourtimelines",
    "#Tags: floodingyourtimelinetoday",
    "#Tags: floodingyourig",
    "#Tags: stormwreck",
    "#Tags: stormwaterbmp",
    "#Tags: stormwatercm",
    "#Tags: stormwatercompliance",
    "#Tags: stormwatercreek",
    "#Tags: stormwaterdesign",
    "#Tags: stormwaterdrain",
    "#Tags: stormwaterdrains",
    "#Tags: stormwaterengineering",
    "#Tags: stormwatermanagement",
    "#Tags: stormwaterrunoffs",
    "#Tags: stormwaterharvesting",
    "#Tags: stormwatereducation",
    "#Tags: stormwaters",
    "#Tags: stormwater360",
    "#Tags: stormwaterdrainage",
    "#Tags: stormwateraustralia",
    "#Tags: stormwaterfactoftheday",
    "#Tags: stormwaterpollution",
    "#Tags: stormwaterpollutionprevention",
    "#Tags: stormwaterpond",
    "#Tags: stormwaterretention",
    "#Tags: stormwatersavvy",
    "#Tags: stormwatersmart",
    "#Tags: stormwatertreatment",
    "#Tags: stormwatersystems",
    "#Tags: stormwatersystem",
    "#Tags: stormwaterstewards",
    "#Tags: stormwaterpit",
    "#Tags: stormwaterpipe",
    "#Tags: stormwatermaintenance",
    "#Tags: stormwaterharvesting",
    "#Tags: stormwaterhawaii",
    "#Tags: stormwaterawarenessweek",
    "#Tags: stormwaterstudios",
    "#Tags: stormwatersydney",
    "#Tags: floodingthetimeline",
    "#Tags: floodingthestreets",
    "#Tags: floodingtimelinestoday",
    "#Tags: floodingtimelinestonight",
    "#Tags: floodingvideo",
    "#Tags: floodingwaters",
    "#Tags: floodingyall",
    "#Tags: floodingyalltimeline",
    "#Tags: stormwateraustralia",
    "#Tags: stormwateraware",
    "#Tags: floodingyourtl",
    "#Tags: floodingthegram",
    ],
    createdAt: new Date("2021-04-29T03:23:00Z"),
  },
  {
    title: "Recommended Actions For A Young Engineer-1",
    description:
    "This is one of the greatest steps to make you succeed as a professional engineer. As an Engineer, you must have that strong desire and willingness to learn new technical skills and apply the scientific and mathematical principles acquired during your engineering education. This will enable you to create engineering designs in accordance with the code of practice and standards governing the engineering profession, which products will meet all safety and structural requirements for the comfort of mankind...",
    categories: ["uncategorized"],
    archives: ["archives_2021_jan"],
    tags: [
    "#Tags: complexengineerproblems",
    "#Tags: engineeringchallenges",
    "#Tags: engineeringchallenges2020",
    "#Tags: engineeringchallengesforstudents",
    "#Tags: engineeringchallengesofthe21stcentury",
    "#Tags: engineeringcodes",
    "#Tags: engineeringfundamentals",
    "#Tags: engineeringprofessionals",
    "#Tags: qualityofengineeringproducts",
    "#Tags: youngengineers",
    "#Tags: youngengineersbrickschallenge",
    "#Tags: youngengineersfellowship",
    "#Tags: youngengineersprogram",
    ],
    createdAt: new Date("2021-01-15T01:06:00Z"),
  },
  {
    title: "Recommended Actions For A Young Engineer-2",
    description:
    "Imagination is another challenge to a young engineer’s career. An engineer must have the power of imagination. Every engineering product is a creation of the engineer’s imagination from the astral world. Such imagination should transform into an acceptable and useful product for the sustainability of the environment and mankind. An engineer is a philosopher who can create ideas from the astral environment and by his application of the scientific and natural laws, make life meaningful for man and his environment.  So, if one is not capable of doing so, then one is in the wrong profession...",
    categories: ["uncategorized"],
    archives: ["archives_2021_april"],
    tags: [
    "#Tags: engineeringpractice",
    "#Tags: engineeringpractices",
    "#Tags: engineeringworks",
    "#Tags: engineeringworkshop",
    "#Tags: youngengineer",
    "#Tags: youngengineers",
    ],
    createdAt: new Date("2021-04-07T01:07:00Z"),
  },
  {
    title: "Working With Standaode",
    description:
    "The engineering profession is guided by standards, codes, and ethics of practice which set minimum safety guides for the profession.  However, because we are in a dynamic world with lots of complexity occurring daily, the codes of practice have also become revolutionised with many countries coming out with their codes of practice to suit the dynamics of their environment. For this reason, the <strong>British Standard (BS) code</strong> is now used alongside the <strong>European Standard codes (Eurocodes)</strong> in many countries, including Nigeria.  Most engineering books nowadays come in both British Standard (BS) code and European Standard codes (Eurocodes).  The use of either code in design does not invalidate the work of the designer. It is important to get familiar with recent developments by reading these volumes of codes instead of relying on the use of only familiar and simplified codes..",
    categories: ["uncategorized"],
    archives: ["archives_2020_nov"],
    tags: [
    "#Tags: britishstandardcodes",
    "#Tags: engineeringcodes",
    "#Tags: eurocodes",
    "#Tags: europeanstandardcodes",
    ],
    createdAt: new Date("2020-11-22T02:54:00Z"),
  },
  {
    title:
    "Improving Professional Efficiency And Quality Of Engineering Products",
    description:
    "To further improve professional efficiency and quality of engineering products, Government Agencies authorised with the approving powers can also play the role of external reviewers of technical documents seeking approval. This will force engineering professionals to conduct their work diligently in accordance with professional codes and ethics, and produce quality jobs that will not be subjected to an embarrassing rejection by the approving authorities.  It will also discourage quacks from the profession and reduce the incessant cases of infrastructural failures that are recorded almost on a yearly basis in our Country.It is encouraging to note that some States in the Federal Republic of Nigeria, like Lagos, Federal Capital Territory – Abuja, and Rivers have been implementing external review checks on Technical Documents submitted for approval.  It will be in the interest of our developing economy if other States in the Federation emulate the earlier mentioned States in this practice. This can be achieved through the recruitment of professional Engineers to manage these external review functions in the various Establishments vested with such powers. The essence of this is to ensure that set standards and recommended codes of practice are followed in the design and execution of engineering projects. Most of these practising States require in addition to the calculation sheets and drawings submitted for approval, a letter of undertaking, passport photograph, and a photocopy of the COREN certificate of the designer to accompany these design documents. This alone portrays that enormous responsibility is rested on the Engineer, and demands that confidence, courage, and good quality product delivery for the safe use of the structure for clients and the public is not negotiable...",
    categories: ["uncategorized"],
    archives: ["archives_2020_oct"],
    tags: [
    "#Tags: engineeringprofessionals",
    "#Tags: professionalefficiency",
    "#Tags: qualityengineeringjobs",
    "#Tags: qualityofengineeringproducts",
    ],
    createdAt: new Date("2020-10-25T02:37:00Z"),
  },
  {
    title: "The Young Engineer: Importance Of Training And Mentorship",
    slug: "youngEgineer_importance",
    description:
    "A young engineer, who is at the threshold of a professional career, transiting from a fresh engineering graduate to a leadership role in engineering should bear in mind that there are many challenges along the journey....",
    categories: ["uncategorized"],
    archives: ["archives_2020_sept"],
    tags: [
    "#Tags: engineer",
    "#Tags: mentorship",
    "#Tags: training",
    "#Tags: youngengineer",
    ],
    createdAt: new Date("2020-09-20T07:00:00Z"),
  },
  {
    title:
    "Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria",
    description:
    "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding...",
    categories: ["uncategorized"],
    archives: ["archives_2023_dec"],
    tags: ["#Tags: drainage"],
    createdAt: new Date("2023-12-20T12:11:00Z"),
  },
  {
    title: "Challenges Of A Young Engineer",
    description:
    "In our engineering education, we were taught the use of science and mathematics which form the fundamental basis for the application of the knowledge to interpret, invent, innovate, and solve engineering problems...",
    categories: ["uncategorized"],
    archives: ["archives_2020_july"],
    tags: [
    "#Tags: complexengineerproblems",
    "#Tags: dynamicworld",
    "#Tags: engineeringfundamentals",
    "#Tags: scientificandnaturallaws",
    "#Tags: youngengineer",
    ],
    createdAt: new Date("2020-07-20T12:21:00Z"),
  },
  {
    title: "Sample Post",
    description:
    "What Is Stormwater? Stormwater which can also be spelled as storm water, is a description of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to nearby streams, rivers, or other water bodies (surface water) without treatment. In natural environment, such as green areas, soil absorbs much of the stormwater. Plants also reduce stormwater by improving infiltration, intercepting precipitation as it falls, and by taking up water through their roots. In developed environments, unmanaged stormwater can create two major issues: One related to the volume and timing of runoff (flooding), And the other related to potential contaminants the water is carrying (water pollution)....",
    categories: ["uncategorized"],
    archives: ["archives_2020_may"],
    tags: [
      "#Tags: drainagesystem",
      "#Tags: stormwater"
    ],
    createdAt: new Date("2020-05-24T06:33:00Z"),
  },
  {
    title: "Recommendations For Stormwater Management And Control",
    description:
      "The details from the findings and observations of this study and design by < strong > Jefcon and Associates Ltd (Consultant) for the Stormwater Management and Control Measures for Asaba, Warri, Effurun and environs, showed that the topography of Asaba and its environs and that of Warri, Effurun and environs have similarities in its flood management and control approaches. Due to the nature of the terrains, the study on these cities and their environs have recommended optimal and efficient Pre - cast Open and Closed (underground sewers) concrete systems.Therefore, the recommendations put forward for consideration and implementation for both project areas are that,. The natural watercourses and downstream primary drainage channels should be considered as Priority No.1. This involves clearing of the natural watercourses of weeds, waste, silt deposits and demolition of encroached properties along their paths; and construction of the downstream primary drainage channels that would receive flood water from the streets’ drains to these natural watercourses. This will bring immediate improvements to flood water discharge on existing systems that do not have discharge points...",
    categories: ["uncategorized"],
    archives: ["archives_2020_july"],
    tags: [
    "#Tags: civilengineering",
    "#Tags: drainagechannels",
    "#Tags: floodwatercontrol",
    "#Tags: hydraulicengineering",
    "#Tags: projects",
    "#Tags: stormwater",
    "#Tags: training",
    ],
    createdAt: new Date("2020-07-31T01:31:00Z"),
  },
  {
    title: "Considerations In The Design Of Stormwater Channels",
    description:
      "There are many important considerations in the design of durable stormwater channels, and the next series of posts considers some of them. The time of concentration(Tc), is defined as the longest time it takes the rain falling at the most distant point within a watershed to reach the point under reference. It is one of the most important variables in the estimation of design discharges. It should be noted that while dealing in watersheds with flat terrain or low topographic slopes, the calculation of Tc, using commonly accepted equations often results in unreasonably large values....",
    categories: ["uncategorized"],
    archives: ["archives_2022_may"],
    tags: [
    "#Tags: drainagechannels",
    "#Tags: floodwatercontrol",
    "#Tags: hydraulicengineering",
    ],
    createdAt: new Date("2022-05-31T08:41:00Z"),
  },
  {
    title: "Channel Selection For Stormwater Control",
    description:
      "In channel selection for control of stormwater in Asaba, Warri, Effurun, and environs, great care was taken in channel depth selection because of the high-water table, especially in Effurun and Warri Metropolis. The shapes and types of hydraulic channel sections recommended for use were dependent on the magnitude of the designed peak flow discharge of the floodwater, topography, and geology of the project areas. This contributed to the various shapes and types adopted such as 'cast-in-place Concrete or Precast Concrete' Rectangular, Square, and Circular shapes. In the design of stormwater drainage systems, < strong > manholes</ > are the most common appurtenances because of their various uses. Their primary functions include...",
    categories: ["uncategorized"],
    archives: ["archives_2022_april"],
    tags: [
    "#Tags: drainagechannels",
    "#Tags: floodwatercontrol",
    "#Tags: hydraulicengineering",
    ],
    createdAt: new Date("2022-04-25T07:53:00Z"),
  },
  {
    title: "Hydraulic Design Of Drainage Channels",
    description:
      "The hydraulic design of a drainage channel requires excellent knowledge of the topography and rainfall data of the project area. The design of a drainage channel is affected by factors such as the topography of the project area, selection type, design frequency, expected volume of& nbsp; stormwater, and economy. In hydraulic engineering, two types of flow are usually encountered, laminar and turbulent flow. Laminar flow is rarely encountered when dealing with flows in pipes and ducts. Most flows in nature are turbulent, and this is encountered when dealing with floodwater.The primary consideration for the final selection of any drainage channel is that its design should be based on appropriate hydrological, hydraulic, and geotechnical analyses, which will lead to economic and efficient hydraulic control systems...",
    categories: ["uncategorized"],
    archives: ["archives_2022_may"],
    tags: [
    "#Tags: hydraulicengineering",
    "#Tags: drainagechannels",
    "floodwatercontrol",
    ],
    createdAt: new Date("2022-05-21T01:51:00Z"),
  },
  {
    title:
    "Description Of Core Hydrological Terminologies In Flood Control Analysis",
    description:
      "Rainfall Intensity has an important effect on runoff proportion, as it determines the rate at which rainfall runoff arrives at the soil surface and, consequently, when infiltration rate of the soil is low to allow absorption, flooding of the environment does occur. This term is used to define the amount of rain falling during a specific time within the most intense period of the rain.& nbsp; This value is then converted into the amount of rain that will fall in one hour.& nbsp; The rainfall intensity is expressed as Rainfall Intensity...",
    categories: ["uncategorized"],
    archives: ["archives_2022_feb"],
    tags: [
    "#Tags: drainagedesign",
    "#Tags: drainageengineer",
    "#Tags: drainageproblems",
    "#Tags: drainagesolution",
    "#Tags: drainagespecialists",
    ],
    createdAt: new Date("2022-02-28T08:30:00Z"),
  },
  {
    title:
    "Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control",
    description:
    "The engineering design of a stormwater drainage system requires a large data collection effort.  The data requirements in the stormwater management and control measures for Asaba, Warri, Effurun, and environs include knowledge of topography, drainage boundaries, imperviousness, soil types, and locations of existing drainage channels, manholes, culverts inlets, and outlets. In addition, identification of other types of utilities and their locations in the ground is critical.  These data collated enabled the study and design work for the new drainage network systems to be achieved.  The engineering analysis of the drainage system recommended for this project considered four major aspects:..",
    categories: ["uncategorized"],
    archives: ["archives_2022_jan"],
    tags: [
    "#Tags: drainagedesign",
    "#Tags: drainageengineer",
    "#Tags: drainageproblems",
    "#Tags: drainagesolution",
    "#Tags: drainagespecialists",
    ],
    createdAt: new Date("2022-01-23T02:46:00Z"),
  },
  {
    title: "Engineering Survey For Effective And Efficient Flood Control",
    description:
      "To develop efficient and effective flood water control measures, a good knowledge of the topography of the study area is important for the design. As much as practicable, the engineering survey here followed the existing street layouts. The delineation of the study areas into catchments and sub-catchment using road networks was made for ease of collation and analysis of ground data. Survey control points were established within the project areas for ease of referencing during the study and construction periods. The spot heights(ground surface data) obtained during the Engineering Survey work were used..With the modelling of these rainfall-runoff flow patterns, an idea of the natural surface flow pattern was obtained for all the catchments..",
    categories: ["uncategorized"],
    archives: ["archives_2021_jan"],
    tags: [
    "#Tags: drainagedesign",
    "#Tags: drainageengineer",
    "#Tags: drainageproblems",
    "#Tags: drainagesolution",
    "#Tags: drainagespecialists",
    ],
    createdAt: new Date("2021-01-12T11:09:00Z"),
  },
  {
    title: "Findings And Observations In Flood-Prone Areas Of Delta State -1",
    description:
    "Studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers, including existing drains in Asaba, Warri, Effurun, and environs. The studies showed that:  i.&ensp;	There were no previous records of survey data and maps for the cities; ii.&ensp;	While Warri had an old Master plan, Asaba had none 	A large part of the flooding noticed in Asaba, Warri, Effurun and environs could be attributed to blocked drainage channels with waste materials (decomposable and non-decomposable), silts, overgrown weeds etc.  The result is that the flow discharge into the drainage channels is disturbed and hence could not be evacuated from the environment.	Most of the existing drains do not have discharge points as they were constructed without design specifications..",
    categories: ["uncategorized"],
    archives: ["archives_2021_august"],
    tags: [
    "#Tags: drainage",
    "#Tags: drainagebasin",
    "#Tags: drainagebresilien",
    "#Tags: drainagecell",
    "#Tags: drainagechannel",
    "#Tags: drainagechannels",
    "#Tags: drainagecontractor",
    "#Tags: drainagecover",
    "#Tags: drainagedesign",
    "#Tags: drainageditch",
    "#Tags: drainageengineer",
    "#Tags: drainageholes",
    "#Tags: drainageissues",
    "#Tags: drainagelife",
    "#Tags: drainageline",
    "#Tags: drainagepathway",
    "#Tags: drainagepipe",
    "#Tags: drainagepipes",
    "#Tags: drainageproblems",
    "#Tags: drainageproducts",
    "#Tags: drainageproject",
    "#Tags: drainagesolution",
    "#Tags: drainagesolutions",
    "#Tags: drainagespecialists",
    "#Tags: drainagesystem",
    "#Tags: drainagesystem",
    "#Tags: drainagesystems",
    "#Tags: drainagetile",
    "#Tags: drainagevisage",
    "#Tags: drainagework",
    "#Tags: drainageworks",
    ],
    createdAt: new Date("2021-08-25T10:03:00Z"),
  },
  {
    title: "Findings And Observations In Flood-Prone Areas Of Delta State -2",
    description:
    "Well-researched studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers in Delta State of Nigeria, including existing drains in Asaba, Warri, Effurun, and environs. Several observations were made. Eight of these observations were discussed in my last post. This post is a sequel to the former and a continuation of the observations from these studies...",
    categories: ["uncategorized"],
    archives: ["archives_2021_nov"],
    tags: [
    "#Tags: andriversindeltastateofnigeria",
    "#Tags: effurun",
    "#Tags: includingexistingdrainsinasaba",
    "#Tags: naturalwatercourses",
    "#Tags: swamps",
    "#Tags: valleys",
    "#Tags: warri",
    "#Tags: wellresearchedstudieswereconductedoverentirefloodproneareass",
    ],
    createdAt: new Date("2021-11-16T06:25:00Z"),
  },
  {
    title: "Hydrological Basins In Delta State, Nigeria",
    description:
    "Studies were conducted to identify all the flood-prone areas in Asaba, Warri, Effurun, and environs, all in Delta State of Nigeria.  These studies were to help develop efficient and effective flood water control measures that would safely convey run-off from the streets to the natural watercourses and rivers without loss of lives and property. These basins were broken into catchments using existing road networks for delineation as boundaries. In the case of Asaba, the absence of water bodies limited the design approach to nature-based types, such as valleys, streams, and rivers that are tributaries to the River Niger. But in the case of Warri and Effurun, the catchment areas contain lots of water bodies (swamps) and natural watercourses, which serve as the receiving basins for floodwater evacuation from the environment..",
    categories: ["uncategorized"],
    archives: ["archives_2021_august"],
    tags: [
   "#Tags: drainage",
    "#Tags: drainagebasin",
    "#Tags: drainagebresilien",
    "#Tags: drainagecell",
    "#Tags: drainagechannel",
    "#Tags: drainagechannels",
    "#Tags: drainagecontractor",
    "#Tags: drainagecover",
    "#Tags: drainagedesign",
    "#Tags: drainageditch",
    "#Tags: drainageengineer",
    "#Tags: drainageholes",
    "#Tags: drainageissues",
    "#Tags: drainagelife",
    "#Tags: drainageline",
    "#Tags: drainagepathway",
    "#Tags: drainagepipe",
    "#Tags: drainagepipes",
    "#Tags: drainageproblems",
    "#Tags: drainageproducts",
    "#Tags: drainageproject",
    "#Tags: drainagesolution",
    "#Tags: drainagesolutions",
    "#Tags: drainagespecialists",
    "#Tags: drainagesystem",
    "#Tags: drainagesystem",
    "#Tags: drainagesystems",
    "#Tags: drainagetile",
    "#Tags: drainagevisage",
    "#Tags: drainagework",
    "#Tags: drainageworks",
    ],
    createdAt: new Date("2021-08-01T08:13:00Z"),
  },
  {
    title:
    "Merits Of The Recommended Options For Storm Water Management And Control",
    description:
      "This article enumerates the merits to be derived from the use of these recommended pre-cast concrete structural elements of rectangular, square, and circular channels. In my last post, I took a deep dive into the details of the findings and observations for Storm Water Management and Control Measures for Asaba, Warri, Effurun, and the environs. It is clear that the topography of Asaba and its environs and that of Warri, Effurun, and its environs have similarities in their flood management and control approaches. There were for optimal and efficient Pre-cast Open and Closed (underground sewers) concrete systems put forward for consideration and implementation for these project areas. This article enumerates the merits to be derived from the use of these recommended pre - cast concrete structural elements of rectangular, square, and circular channels. The use of precast primary receivers for the construction of the downstream channels to receive storm water discharges from the streets’ right - of - way will reduce the construction time required for evacuation of the current flooding menace that is being encountered in the environment, since non-functioning drains will now have discharge points....",
    categories: ["uncategorized"],
    archives: ["archives_2022_august"],
    tags: [
    "#Tags: drainagechannels",
    "#Tags: floodwatercontrol",
    "#Tags: hydraulicengineering",
    ],
    createdAt: new Date("2022-08-24T01:06:00Z"),
  },
  {
    title:
    "7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY",
    description:
    "When it comes to stormwater drainage construction, it is important to hire a reputable and experienced company. The process is complex and requires a number of steps to ensure the job is done correctly and efficiently.   If you are considering hiring a stormwater drainage construction company, there are a few things you need to know before making a decision....",
    categories: ["uncategorized"],
    archives: ["archives_2022_sept"],
    tags: [
    "#Tags: bestpracticesinstormwaterconstruction",
    "#Tags: constructionstormwater",
    "#Tags: developingandremediationsofbasins",
    "#Tags: erosioncontrolconstructionandstormwatermanagement",
    "#Tags: permitsforstormwatersystemsonconstructionsites",
    "#Tags: sedimentcontrolandstormwater",
    "#Tags: standardsandguidelinesforconstruction",
    "#Tags: stormwaterconstruction",
    "#Tags: stormwatercontrolsforconstruction",
    "#Tags: stormwaterinfrastructure",
    "#Tags: stormwatersolutionsforconstructionsites",
    "#Tags: traininginstormwaterforconstructionpurposes",
    ],
    createdAt: new Date("2022-09-29T01:43:00Z"),
  },
  {
    title: "7 Ways To Handle Flooding In Any Parts Of Nigeria",
    slug: "seven_ways_handle_flood",
    description:
    ">Flooding is a very serious issue in Nigeria, as it can lead to significant damage to property and even loss of life. Floods can occur due to heavy seasonal rains or from overflowing bodies of water such as rivers and oceans.Flooding can be a major problem for those living in areas with low - lying land or in cities where there is poor drainage. In order to handle flooding in any area of Nigeria, there are a variety of strategies that can be implemented. < br > This article lists 7 ways that you can handle flooding in any area of Nigeria. These strategies can be used by individuals, organizations, and governments to reduce the destruction caused by flooding and ensure the safety of those living in affected areas. Whether you are living in a rural area or a city, these strategies will help you to be better prepared for a flood and handle it in the most effective way possible. ...",
    categories: ["uncategorized"],
    archives: ["archives_2022_oct"],
    tags: [
    "#Tags: dangersoffloodinnigeria",
    "#Tags: devastatingnigerialandslideandflooding",
    "#Tags: disasterreliefinactionforfloodvictimsinnigeria",
    "#Tags: extreme-heat-causestormtolastinnigeria",
    "#Tags: fightingtherisingwatersfrom",
    "#Tags: floodinginnigeria",
    "#Tags: floodingsituationinnigeria",
    "#Tags: heavyrainfall-has-ruined-many-nigeria-homes",
    "#Tags: nigeriadevastatingfloods",
    "#Tags: nigeriaflooding",
    "#Tags: rainfallinnigeriafloods",
    "#Tags: severeweatherinnigeriainundation",
    "#Tags: floodsinnigeria",
    ],
    createdAt: new Date("2022-10-30T03:04:00Z"),
  },
  {
    title: "8 Important Facts About StormWater Drainage Systems",
    description:
    "Stormwater drainage systems are essential to our health and safety, they help protect us from flooding and prevent water pollution, making them an important part of our infrastructure...",
    categories: ["uncategorized"],
    archives: ["archives_2022_nov"],
    tags: [
    "#Tags: detentionbasinsandpumpsystems",
    "#Tags: engineeringhydrology-techniques",
    "#Tags: gabionsystems",
    "#Tags: permitsandguidanceforsurfacedrainage",
    "#Tags: raingardensolutions",
    "#Tags: rainharvestsystems",
    "#Tags: roof-drainsanddownpipesystems",
    "#Tags: stormwaterdrainage",
    "#Tags: stormwatermanagement",
    "#Tags: stormwaterrunoffsolutions",
    "#Tags: surfaceandbelowgrounddrainage",
    ],
    createdAt: new Date("2022-11-30T04:12:00Z"),
  },
  {
    title:
    "Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding",
    description:
      " Climate change continues to threaten our planet, with the most immediate threat being extreme flooding. Rising tides and sinking cities have become a stark reality with devastating consequences for many communities around the world.It' a global problem that requires immediate attention and action from governments, businesses, and individuals.  In recent years, increased levels of carbon dioxide emissions have led to warmer ocean temperatures and melting polar ice caps, causing sea levels to rise. The impact of these changes has been acutely felt in many coastal areas in Nigeria, as an example, causing more intense and frequent flooding. This blog post will explore the relationship between climate change and extreme flooding, and how it is affecting cities and towns across the world. We will examine the science behind rising sea levels and how it affects our coasts, as well as the social and economic impact of flooding.  We will also take a closer look at the strategies and technologies being used to mitigate the effects of climate change on flooding...",
    categories: ["uncategorized"],
    archives: ["archives_2023_feb"],
    tags: [
    "#Tags: flooding2019",
    "#Tags: floodingfeeds",
    "#Tags: floodinginst",
    "#Tags: floodingyall",
    "#Tags: floodingyournewsfeed",
    "#Tags: floodsafety",
    "#Tags: nigeria-devastatingfloods",
    "#Tags: rainfallinnigeriafloods",
    "#Tags: floodsinnigeria",
    ],
    createdAt: new Date("2023-02-25T05:37:00Z"),
  },
  {
    title:
    "Impacts Of Land-use Change On Urban Hydrology And The Need For Sustainable Storm Water Management Engineering Practices",
    description:
    " An excerpt from 'Impacts of land-use Change on Urban Hydrology and the need for sustainable Storm Water Management Engineering Practices'",
    categories: ["uncategorized"],
    archives: ["archives_2023_oct"],
    tags: [
    "#Tags: engineeringpractices",
    "#Tags: landusechange",
    "#Tags: stormwatermanagement",
    "#Tags: sustainablestormwatermanagement",
    "#Tags: urbanenvironment",
    "#Tags: urbanhydrology",
    "#Tags: urbanwatermanagement",
    ],
    createdAt: new Date("2023-10-08T10:02:00Z"),
  },
  {
    title:
    "The Importance Of Community Engagement And Education In Sustainable Water Management",
    description:
    "Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria On Thursday, 2nd Nov, 2023",
    categories: ["uncategorized"],
    archives: ["archives_2023_march"],
    tags: [
      "#Tags: communityengagement",
      "#Tags: communityinvolvement",
      "#Tags: education",
      "#Tags: environmentaleducation",
      "#Tags: stormwatereducation",
      "#Tags: waterconservation",
      "#Tags: watershedmanagement",
      "#Tags: watersustainability",
      "#Tags:  stormwatermanagement",
      "#Tags:  sustainablestormwatermanagement",
   ],
    createdAt: new Date("2023-03-07T09:26:00Z"),
  },
  {
    title: "Assessing Quality Civil Engineering Practices In Nigeria",
    description: "The quality of Civil Engineering practices in Nigeria has become an increasingly important priority in recent years. As the country continues to grow and change, it is important that these practice s meet the standards of a modern, wealthy country. Assessing the quality of Civil Engineering practices in Nigera is [...]",
    categories: ["uncategorized"],
    archives: ["archives_2022_dec"],
    tags: [
      "#Tags: buildingpracticesinnigeria",
      "#Tags: civilengineeringpracticesinnigeria",
      "#Tags: constructionpracticesinnigeria",
      "#Tags: designengineeringservicesinnigeria",
      "#Tags: developmentandplanninginnigeria",
      "#Tags: projectmanagement",
      "#Tags: environmentalengineeringpracticesinnigeria",
      "#Tags: professionalpracticesinnigeria",
      "#Tags: safetypracticesinnigeria",
      "#Tags: sustainableengineeringpracticesinnigeria",
      "#Tags: technicalengineeringpracticesinnigeria",
      "#Tags: valueengineeringpracticesinnigeria",
    ],
    createdAt: new Date("2022-12-29T07:21:00Z"),
    },
];
  
async function seedBlogs() {
  try {
    console.log("🗑️ Clearing old Blogs...");
    await Blog.deleteMany({});

    for (const blog of blogsData) {
      // ✅ Ensure tags exist
      const tagIds = [];
      for (const tagTitle of blog.tags) {
        const slug = slugify(tagTitle, { lower: true, strict: true });
        let tag = await Tag.findOne({ slug });

        if (!tag) {
          tag = new Tag({
            title: tagTitle,
            slug,
            description: `Posts tagged under ${tagTitle}`,
          });
          await tag.save();
          console.log(`✅ Created new tag: ${tagTitle}`);
        }
        tagIds.push(tag._id);
      }

      // ✅ Ensure categories exist (optional)
      const categoryIds = [];
      for (const catTitle of blog.categories || []) {
        const slug = slugify(catTitle, { lower: true, strict: true });
        let category = await Category.findOne({ slug });
        if (!category) {
          category = new Category({ title: catTitle, slug });
          await category.save();
          console.log(`✅ Created new category: ${catTitle}`);
        }
        categoryIds.push(category._id);
      }

      // ✅ Ensure archives exist (optional)
      const archiveIds = [];
      for (const arcTitle of blog.archives || []) {
        const slug = slugify(arcTitle, { lower: true, strict: true });
        let archive = await Archive.findOne({ slug });
        if (!archive) {
          archive = new Archive({ title: arcTitle, slug });
          await archive.save();
          console.log(`✅ Created new archive: ${arcTitle}`);
        }
        archiveIds.push(archive._id);
      }

      // ✅ Create the blog with references
      const newBlog = new Blog({
        title: blog.title,
        slug: slugify(blog.title, { lower: true, strict: true }),
        description: blog.description,
        categories: categoryIds,
        archives: archiveIds,
        tags: tagIds, // ObjectIds not strings
        createdAt: blog.createdAt,
      });

      await newBlog.save();
      console.log(`📝 Seeded Blog: ${blog.title}`);
    }

    console.log("🎉 Blog seeding complete!");
    mongoose.connection.close();
  } catch (err) {
    console.error("❌ Error seeding Blogs:", err);
    mongoose.connection.close();
  }
}

seedBlogs();