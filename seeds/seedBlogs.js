const mongoose = require("mongoose");
const slugify = require("slugify");

const Blog = require("../models/blog");
const Tag = require("../models/tag");
const Category = require("../models/category");
const Archive = require("../models/archive");
const Service = require("../models/service");

// Example blog data
const blogsData = [
    {
      title:  "Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria",
      content: "Stormwater, the water that runs off impervious surfaces during rainfall, is a critical element in urban environments. This article delves into the environmental ramifications of polluted runoff, examines Nigeria's environmental regulations, and outlines essential QC measures for stormwater management Nigeria....",
      tagSlugs: [
      "tag_drainageinspectionmethod",
      "tag_drainagesystembestpractices",
      "tag_drainagesysteminspectiontips",
      "tag_drainagesystemqualitycontrol",
      "tag_easytipsfordrainagequality",
      "tag_effectivedrainageqc",
      "tag_howtoreduceurbanwaterpollution",
      "tag_nigeriadrainagesystemmaintenance",
      "tag_pollutionpreventiontechnique",
      "tag_preventingstormwaterpollution",
      "tag_rainwaterrunoffsafety",
      "tag_stormwaterpollutioncontrolnigeria",
      "tag_stormwatermanagementnigeria",
      "tag_stormwaterpollutionguide",
      "tag_stormwaterpollutiontrend2025",
      "tag_stormwaterrunoffsolution",
      "tag_urbanwatersafety",
      "tag_waterpollutionprevention2025",
      "tag_watersafetytipsnigeria"
      ],
      categoryTitles:  ["Construction Technology", "Environmental", "Feasibility And Economic Studies", "Consultancy And Advisory Services"], 
      archiveTitle: "archives_2025_june",
      serviceTitles: ["Advisory Services In Engineering", "Engineering Design And Construction", "Environmental Impact Management Studies", "Feasibility And Economic Studies"],
      createdAt: new Date()
    },
    {
      title:
      "Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria",
      content: "In civil engineering, the success of stormwater drainage systems depends heavily on geotechnical considerations. The interplay between soil properties and ground conditions directly impacts the quality, durability, and long-term functionality of these systems. In Nigeria, with its diverse soil profiles and environmental challenges, incorporating geotechnical insights into quality control (QC) processes is essential. This article delves into the importance of soil investigation, permeability tests, and slope stability analysis for effective stormwater drainage design and maintenance...",
      tagSlugs: [
      "tag_bearingcapacity",
      "tag_civilengineering",
      "tag_climatechangeadaptation",
      "tag_compaction",
      "tag_construction",
      "tag_drainagedesign",
      "tag_erosioncontrol",
      "tag_foundationdesign",
      "tag_geosynthetics",
      "tag_geotechnicalengineering",
      "tag_hydrology",
      "tag_infrastructure",
      "tag_nigerianconstruction",
      "tag_pavementdesign",
      "tag_permeability",
      "tag_qualitycontrol-qc-nigeria",
      "tag_sedimentcontrol",
      "tag_siteinvestigation",
      "tag_slopestability",
      "tag_soilinvestigation",
      "tag_soilmechanics",
      "tag_soilproperties",
      "tag_stormwaterdrainage",
      "tag_watermanagement"
      ],
      categoryTitles: ["Consultancy And Advisory Services", "Feasibility And Economic Studies", "Innovation And Research", "Project Supervision And Management", "Safety And Regulations"],
      archiveTitle: "archives_2025_april",
      serviceTitles: ["Advisory Services In Engineering", "Engineering Surveys", "Environmental Impact Management Studies", "Feasibility And Economic Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
      title:
      "Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates",
      content: "Quality Control for Durability in Nigerian Climates Concrete forms the backbone of stormwater drainage systems, providing the strength and durability needed to withstand environmental stresses. In Nigeria, where heavy rainfall and fluctuating temperatures often challenge infrastructure, ensuring the quality and longevity of concrete used in stormwater systems is vital. This article explores best practices for concrete quality control (QC), focusing on suitable concrete types for Nigerian conditions and key tests to ensure strength, water-cement ratio, and proper curing....",
      tagSlugs: [
      "tag_civilengineering",
      "tag_civilengineers",
      "tag_construction",
      "tag_constructionproffesionalsinnigeria",
      "tag_efficiency",
      "tag_nigeria",
      "tag_nigeriagovtpolicymakers",
      "tag_qualitycontrol",
      "tag_stormwaterdrainage",
      "tag_urbanplanners"
      ],
      categoryTitles: ["Consultancy And Advisory Services","Project Supervision And Management", "Training And Education"],
      archiveTitle: "archives_2024_july",
      serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
      title: "Ensuring Stormwater Drainage System Efficiency",
      content: "In Nigeria, the increasing frequency of flooding and urban waterlogging underscores the critical need for effective stormwater drainage systems. These systems are essential for managing rainwater runoff, protecting infrastructure, and safeguarding public health. This article delves into the importance of quality control(QC) measures in the construction of stormwater drainage systems, providing a foundational understanding of how these measures can enhance efficiency and performance...",
      tagSlugs: [
      "tag_civilengineering",
      "tag_construction",
      "tag_efficiency",
      "tag_nigeria",
      "tag_qualitycontrol",
      "tag_stormwaterdrainage"
      ],
      categoryTitles: ["Safety And Regulations"],
      archiveTitle: "archives_2024_june",
      serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
      title:
      "Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis",
      content: "Rapid urbanization in Nigeria, particularly in its major cities, has led to a significant increase in the volume and intensity of stormwater runoff, posing a growing threat to public safety, infrastructure, and the environment. This paper critically analyzes the various challenges associated with stormwater management in urban areas of Nigeria. It explores the interconnected nature of these challenges, encompassing inadequate infrastructure, rapid population growth, poor urban planning, and a lack of financial and institutional capacity. The paper also discusses the implications of climate change, which is exacerbating existing challenges and demanding innovative solutions. By examining the root causes and proposing potential mitigation strategies, this paper aims to contribute to the development of effective and sustainable stormwater management practices in Nigerian cities....",
      tagSlugs: [
      "tag_climatechange",
      "tag_construction",
      "tag_efficiency",
      "tag_nigeria",
      "tag_qualitycontrol",
      "tag_stormwatermanagement",
      "tag_sustainabledevelopment",
      "tag_urbanareas",
      "tag_urbanization"
      ],
      categoryTitles: ["Uncategorized"],
      archiveTitle: "archives_2024_may",
      serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
      title:
      "Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria",
      content: "This article aims to evaluate the success and effectiveness of existing drainage systems in Nigeria, focusing on their ability to manage rainwater runoff...",
      tagSlugs: [
      "tag_civilengineering",
      "tag_drainageplanning",
      "tag_drainagesystems",
      "tag_environmentalimpact",
      "tag_nigeriaenvironment",
      "tag_rainwaterrunoff",
      "tag_stormwatermanagement",
      "tag_sustainabledevelopment",
      "tag_urbanplanning",
      "tag_waterinfrastructure"
      ],
      categoryTitles: ["Uncategorized"],
      archiveTitle: "archives_2024_april",
      serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
      title: "Addressing Nigeria's Water Pollution Crisis",
      content: "The role of stormwater management in addressing pollution. Nigeria, the most populous country in Africa, is grappling with a severe environmental crisis – water pollution...",
      tagSlugs: [
      "tag_nigeriawaterpollution",
      "tag_stormwatermanagement",
      "tag_urbanizationchallenges"
      ],
      categoryTitles: ["Uncategorized"],
      archiveTitle: "archives_2024_march",
      serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
      createdAt: new Date()
    },
    {
    title: "The Urgent Need For Sustainable Management Engineering Pracices",
      content:
    "As urbanization continues, the impacts of land-use change on urban hydrology become increasingly severe, Without sustainable stormwater management practices, cities will face more frequent and severe flooding, erosion, and water pollution....",
    tagSlugs: [
    "tag_climatechange",
    "tag_engineeringpractices",
    "tag_greeninfrastructure",
    "tag_resilientcities",
    "tag_stormwatermanagement",
    "tag_stormwatermitigation",
    "tag_drainagesystems",
    "tag_sustainability",
    "tag_watersustainability"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2024_feb",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "The Relationship Between Land-use Change And Urban Hydrology",
    content: "Land-use change refers to the human alteration of landscapes for various purposes, such as urban development, transportation, agriculture, and forestry. Urban hydrology, on the other hand, is the study of water movement, storage, and quality in urban areas, including the impacts of human activities on the water cycle...",
    tagSlugs: [
    "tag_stormwatermanagement",
    "tag_engineeringpractices",
    "tag_landusechange",
    "tag_sustainablestormwatermanagement",
    "tag_urbanenvironment",
    "tag_urbanhydrology",
    "tag_urbanwatermanagement"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_nov",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Examples of Sustainable Stormwater Management Practices In Urban Areas",
    content: "Urbanization and development often result in changes to natural land surfaces, leading to increased impervious surfaces and reduced vegetation. This alteration leads to higher volumes of rainwater runoff, which can overwhelm urban drainage systems and lead to flooding, erosion, and pollution. To manage these impacts, sustainable stormwater management practices that mimic natural processes are necessary. Here are three examples of such practices...",
    tagSlugs: [
    "tag_bioswales",
    "tag_greeninfrastructure",
    "tag_lowimpactdevelopment",
    "tag_permeablepavement",
    "tag_rainbarrels",
    "tag_raingardens",
    "tag_rainwaterharvesting",
    "tag_stormwaterbestpractices",
    "tag_engineeringpractices",
    "tag_stormwatereducation",
    "tag_stormwaterfiltration",
    "tag_sustainablestormwatermanagement",
    "tag_sustainableurbanplanning",
    "tag_urbanrunoffmitigation",
    "tag_urbanwatermanagement",
    "tag_waterconservation"
    ],
    categoryTitles:[ "Uncategorized"],
    archiveTitle: "archives_2024_jan",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Challenges Posed By Traditional Storm Water Management Practices",
    content: "Traditional stormwater management practices, such as curbs, gutters, and storm sewers, were designed to convey runoff away from urban areas and into water bodies. However, these systems often fail to handle the increased runoff from land-use change, leading to flooding and infrastructure damage..",
    tagSlugs: [
    "tag_environmentalprotection",
    "tag_greensolutions",
    "tag_rainwaterharvesting",
    "tag_stormwaterchallenge",
    "tag_stormwatermanagement",
    "tag_sustainabledevelopment",
    "tag_sustainablestormwatermanagement"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_dec",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas",
    content: "Flooding is a major concern in many areas, causing damage and destruction to homes, businesses, and communities. In addition to the physical damage, floods can lead to significant economic losses. Several Civil engineering strategies can help manage and reduce the risk of floods in flood-prone areas...",
    tagSlugs: [
    "tag_civilengineering",
    "tag_communityinvolvement",
    "tag_detectivesystems",
    "tag_drainagesystemsdesignandconstruction",
    "tag_ecologicalrehabilitationandsustainaibility",
    "tag_floodmanagement",
    "tag_floodproneareas",
    "tag_floodproofconstructiontechniques",
    "tag_infrastructuredevelopment",
    "tag_mitigationstrategies",
    "tag_preventativemeasures",
    "tag_restorativeengagementstrategies",
    "tag_riskawarenessandplanning"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_jan",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Oil Hubs in Delta State, Nigeria",
    content: "Warri and Effurun as shown in the figure, are located on Latitudes 5o27’ N and 5o36’ N and Longitudes 5o40’ E and 5o48’ E.  They sit on the bank of Warri River which joined Forcados, and Escravos Rivers through Jones Creek in the lower Niger Delta Region to the Atlantic Ocean. Studies have shown this region to have moderate rainfall and humidity from May to October.  Experience has shown it to have a short dry season from December to March, making construction activities to be at their peak during these months.  The natural vegetation predominant in this region is a rain forest with swamp forest in some areas.  Warri is one of the oldest cities found within the lower Niger of Nigeria.  The city is described as a low-lying plain that consists mainly of unconsolidated sediments of Quaternary age.  The sediments are partly of marine and fluvial origin...",
    tagSlugs: [
    "tag_drainage",
    "tag_drainagebasin",
    "tag_drainagebresilien",
    "tag_drainagecell",
    "tag_drainagechannel",
    "tag_drainagechannels",
    "tag_drainagecontractor",
    "tag_drainagecover",
    "tag_drainagedesign",
    "tag_drainageditch",
    "tag_drainageengineer",
    "tag_drainageholes",
    "tag_drainageissues",
    "tag_drainagelife",
    "tag_drainageline",
    "tag_drainagepathway",
    "tag_drainagepipe",
    "tag_drainagepipes",
    "tag_drainageproblems",
    "tag_drainageproducts",
    "tag_drainageproject",
    "tag_drainagesolution",
    "tag_drainagesolutions",
    "tag_drainagespecialists",
    "tag_drainagesystem",
    "tag_drainagesystem",
    "tag_drainagesystems",
    "tag_drainagetile",
    "tag_drainagevisage",
    "tag_drainagework",
    "tag_drainageworks"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_june",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Tributaries To The River Niger Within Asaba, Delta State, Nigeria",
    content: "Asaba is situated at the western bank of River Niger, overlooking the point where the Anambra River flows into it.  It is sandwiched between Anwai in the North, Issele-Azagba in the West, Ibusa in the South, and River Niger in the East.The eastern axis of the territory is marked with low relief that falls to about 22 metres above mean sea level, while the western axis shows the features of high relief that rises to about 175 metres above mean sea level. Asaba has a large population of Igbo- speaking people, but her position as Delta State Capital has brought her a cosmopolitan population drawn from other ethnic nationalities such as Urhobo, Isoko, Ijaw, Itsekiri, Hausa and Yoruba people, etc. Its geographical location lies and this plain is sitting in a flat terrain, which is between 44m & 41m.There are some nature - based drainage routes that are tributaries to River Niger within Asaba, such as Iyi- Abi that is in the South, and Anwai River in the North - East. region of Delta State. The project section covers only an area of about 8, 521.24 hectares(85.212 - sqkm)...",
    tagSlugs: [
    "tag_asabadrainage",
    "tag_drainage",
    "tag_drainagebasin",
    "tag_drainagebresilien",
    "tag_drainagecell",
    "tag_drainagechannel",
    "tag_drainagechannels",
    "tag_drainagecontractor",
    "tag_drainagecover",
    "tag_drainagedesign",
    "tag_drainageditch",
    "tag_drainageengineer",
    "tag_drainageholes",
    "tag_drainageissues",
    "tag_drainagelife",
    "tag_drainageline",
    "tag_drainagepathway",
    "tag_drainagepipe",
    "tag_drainagepipes",
    "tag_drainageproblems",
    "tag_drainageproducts",
    "tag_drainageproject",
    "tag_drainagesolution",
    "tag_drainagesolutions",
    "tag_drainagespecialists",
    "tag_drainagesystem",
    "tag_drainagesystems",
    "tag_drainagetile",
    "tag_drainagevisage",
    "tag_drainagework",
    "tag_drainageworks",
    "tag_deltadrainage",
    "tag_nigeriadrainage"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_may",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Flooding: A Global Warming Aftermath",
    content: "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding.  The effects of these extreme changes have brought more flooding in our Cities, especially Asaba, Warri, Effurun, and Environs since they lie within the Niger Delta region of Southern Nigeria. Despite these extreme weather changes from global warming, less attention is being given to the management, and control of stormwater by the government. The excess stormwater leads to the loss of agricultural farmlands, contamination of groundwater and rivers, and loss of lives and property of immeasurable values. Today, due to the global climate change, Asaba, Warri, Effurun, and its environs are experiencing more months and frequent rainfall rather than the old known pattern of six months dry and six months rainy seasons.  The effect on these cities and environs has defied the efficacy of existing drainage systems put in place by government and corporate bodies over the years.  Hence, there was an urgent need by the government of Delta State to study and construct sustainable drainage systems for the management and control of Stormwater in Asaba, Warri, Effurun, and Environs. This desire led to the Engineering Study and Design conducted in Asaba, Warri, Effurun, and Environs.  Using interviews of locals, participatory meetings, and engineering surveys more in-depth knowledge of the flooding and causes was gathered. The study looked at how overland drainages can be incorporated into nature-based gifts, such as Valleys, Waterways, and Rivers for the safe evacuation of the excess runoff generated from the environment. Results obtained showed that improving the efficiency of these Natural Watercourses and Rivers would bring better management and control of the outfalls of both existing and new drainages into these Natural Watercourses. For this to be successful, the inhabitants must be aware of the environmental hazards associated with blocking of Valleys and Waterways with structures and dumping of waste materials into Storm Sewers and Drains, which would create blockages for the efficient evacuation of the Stormwater generated from the Environment...",
    tagSlugs: [
    "tag_flooding",
    "tag_flooding2018",
    "tag_flooding2019",
    "tag_floodingalert",
    "tag_floodingcookie",
    "tag_floodingcookies",
    "tag_floodingcookieswithroyalicing",
    "tag_floodingeverywhere",
    "tag_floodingfeeds",
    "tag_floodingfriday",
    "tag_floodingicing",
    "tag_floodingig",
    "tag_floodinginsta",
    "tag_floodinginstagram",
    "tag_floodinginstagramwithcutepicsofzeus",
    "tag_floodingintexas",
    "tag_floodingmytimeline",
    "tag_floodingrain",
    "tag_floodingrains",
    "tag_floodingriver",
    "tag_floodingroads",
    "tag_floodings",
    "tag_floodingthetimeline",
    "tag_floodingsucks",
    "tag_floodingtechnique",
    "tag_floodingyournewsfeed",
    "tag_floodingyournewsfeeds",
    "tag_floodingyourtime",
    "tag_floodingyourtimelines",
    "tag_floodingyourtimelinetoday",
    "tag_floodingyourig",
    "tag_stormwreck",
    "tag_stormwaterbmp",
    "tag_stormwatercm",
    "tag_stormwatercompliance",
    "tag_stormwatercreek",
    "tag_stormwaterdesign",
    "tag_stormwaterdrain",
    "tag_stormwaterdrains",
    "tag_stormwaterengineering",
    "tag_stormwatermanagement",
    "tag_stormwaterrunoffs",
    "tag_stormwaterharvesting",
    "tag_stormwatereducation",
    "tag_stormwaters",
    "tag_stormwater360",
    "tag_stormwaterdrainage",
    "tag_stormwateraustralia",
    "tag_stormwaterfactoftheday",
    "tag_stormwaterpollution",
    "tag_stormwaterpollutionprevention",
    "tag_stormwaterpond",
    "tag_stormwaterretention",
    "tag_stormwatersavvy",
    "tag_stormwatersmart",
    "tag_stormwatertreatment",
    "tag_stormwatersystems",
    "tag_stormwatersystem",
    "tag_stormwaterstewards",
    "tag_stormwaterpit",
    "tag_stormwaterpipe",
    "tag_stormwatermaintenance",
    "tag_stormwaterharvesting",
    "tag_stormwaterhawaii",
    "tag_stormwaterawarenessweek",
    "tag_stormwaterstudios",
    "tag_stormwatersydney",
    "tag_floodingthetimeline",
    "tag_floodingthestreets",
    "tag_floodingtimelinestoday",
    "tag_floodingtimelinestonight",
    "tag_floodingvideo",
    "tag_floodingwaters",
    "tag_floodingyall",
    "tag_floodingyalltimeline",
    "tag_stormwateraustralia",
    "tag_stormwateraware",
    "tag_floodingyourtl",
    "tag_floodingthegram"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_april",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Recommended Actions For A Young Engineer-1",
    content: "This is one of the greatest steps to make you succeed as a professional engineer. As an Engineer, you must have that strong desire and willingness to learn new technical skills and apply the scientific and mathematical principles acquired during your engineering education. This will enable you to create engineering designs in accordance with the code of practice and standards governing the engineering profession, which products will meet all safety and structural requirements for the comfort of mankind...",
    tagSlugs: [
    "tag_complexengineerproblems",
    "tag_engineeringchallenges",
    "tag_engineeringchallenges2020",
    "tag_engineeringchallengesforstudents",
    "tag_engineeringchallengesofthe21stcentury",
    "tag_engineeringcodes",
    "tag_engineeringfundamentals",
    "tag_engineeringprofessionals",
    "tag_qualityofengineeringproducts",
    "tag_youngengineers",
    "tag_youngengineersbrickschallenge",
    "tag_youngengineersfellowship",
    "tag_youngengineersprogram"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_jan",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Recommended Actions For A Young Engineer-2",
    content: "Imagination is another challenge to a young engineer’s career. An engineer must have the power of imagination. Every engineering product is a creation of the engineer’s imagination from the astral world. Such imagination should transform into an acceptable and useful product for the sustainability of the environment and mankind. An engineer is a philosopher who can create ideas from the astral environment and by his application of the scientific and natural laws, make life meaningful for man and his environment.  So, if one is not capable of doing so, then one is in the wrong profession...",
    tagSlugs: [
    "tag_engineeringpractice",
    "tag_engineeringpractices",
    "tag_engineeringworks",
    "tag_engineeringworkshop",
    "tag_youngengineer",
    "tag_youngengineers"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_april",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Working With Standard Engineering Codes",
    content: "The engineering profession is guided by standards, codes, and ethics of practice which set minimum safety guides for the profession.  However, because we are in a dynamic world with lots of complexity occurring daily, the codes of practice have also become revolutionised with many countries coming out with their codes of practice to suit the dynamics of their environment. For this reason, the <strong>British Standard (BS) code</strong> is now used alongside the <strong>European Standard codes (Eurocodes)</strong> in many countries, including Nigeria.  Most engineering books nowadays come in both British Standard (BS) code and European Standard codes (Eurocodes).  The use of either code in design does not invalidate the work of the designer. It is important to get familiar with recent developments by reading these volumes of codes instead of relying on the use of only familiar and simplified codes..",
    tagSlugs: [
    "tag_britishstandardcodes",
    "tag_engineeringcodes",
    "tag_eurocodes",
    "tag_europeanstandardcodes"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_nov",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Improving Professional Efficiency And Quality Of Engineering Products",
    content: "To further improve professional efficiency and quality of engineering products, Government Agencies authorised with the approving powers can also play the role of external reviewers of technical documents seeking approval. This will force engineering professionals to conduct their work diligently in accordance with professional codes and ethics, and produce quality jobs that will not be subjected to an embarrassing rejection by the approving authorities.  It will also discourage quacks from the profession and reduce the incessant cases of infrastructural failures that are recorded almost on a yearly basis in our Country.It is encouraging to note that some States in the Federal Republic of Nigeria, like Lagos, Federal Capital Territory – Abuja, and Rivers have been implementing external review checks on Technical Documents submitted for approval.  It will be in the interest of our developing economy if other States in the Federation emulate the earlier mentioned States in this practice. This can be achieved through the recruitment of professional Engineers to manage these external review functions in the various Establishments vested with such powers. The essence of this is to ensure that set standards and recommended codes of practice are followed in the design and execution of engineering projects. Most of these practising States require in addition to the calculation sheets and drawings submitted for approval, a letter of undertaking, passport photograph, and a photocopy of the COREN certificate of the designer to accompany these design documents. This alone portrays that enormous responsibility is rested on the Engineer, and demands that confidence, courage, and good quality product delivery for the safe use of the structure for clients and the public is not negotiable...",
    tagSlugs: [
    "tag_engineeringprofessionals",
    "tag_professionalefficiency",
    "tag_qualityengineeringjobs",
    "tag_qualityofengineeringproducts"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_oct",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "The Young Engineer: Importance Of Training And Mentorship",
    content: "A young engineer, who is at the threshold of a professional career, transiting from a fresh engineering graduate to a leadership role in engineering should bear in mind that there are many challenges along the journey....",
    tagSlugs: [
    "tag_engineer",
    "tag_mentorship",
    "tag_training",
    "tag_youngengineer"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_sept",
    serviceTitles: [ "Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria",
    content: "Climate change which is a direct effect of global warming has brought extreme weather changes to our environment, such as sea-level rise, more frequent rainfall with its associated flooding...",
    tagSlugs: ["tag_stormwater"],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_dec",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Challenges Of A Young Engineer",
    content: "In our engineering education, we were taught the use of science and mathematics which form the fundamental basis for the application of the knowledge to interpret, invent, innovate, and solve engineering problems...",
    tagSlugs: [
    "tag_complexengineerproblems",
    "tag_dynamicworld",
    "tag_engineeringfundamentals",
    "tag_scientificandnaturallaws",
    "tag_youngengineer"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_july",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Sample Post",
    content: "What Is Stormwater? Stormwater which can also be spelled as storm water, is a content of water that formed as a result of rainfall, snow or ice melt. Stormwater can infiltrate the soil, be stored on the land surface in ponds and puddles, evaporate, or resolved to runoff. Most runoff is conveyed directly to nearby streams, rivers, or other water bodies (surface water) without treatment. In natural environment, such as green areas, soil absorbs much of the stormwater. Plants also reduce stormwater by improving infiltration, intercepting precipitation as it falls, and by taking up water through their roots. In developed environments, unmanaged stormwater can create two major issues: One related to the volume and timing of runoff (flooding), And the other related to potential contaminants the water is carrying (water pollution)....",
    tagSlugs: ["tag_drainagesystem", "tag_stormwater"],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_may",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Recommendations For Stormwater Management And Control",
    content: "The details from the findings and observations of this study and design by Jefcon &amp; Associates Ltd (Consultant) for the Stormwater Management and Control Measures for Asaba, Warri, Effurun and environs, showed that the topography of Asaba &amp; its environs and that of Warri, Effurun &amp; environs have similarities in its flood management and control approaches...",
    tagSlugs: [
    "tag_civilengineering",
    "tag_drainagechannels",
    "tag_floodwatercontrol",
    "tag_hydraulicengineering",
    "tag_projects",
    "tag_stormwater",
    "tag_training"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2020_july",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Considerations In The Design Of Stormwater Channels",
    content: "There are many important considerations in the design of durable stormwater channels, and the next series of posts considers some of them..The time of concentration (Tc), is defined as the longest time it takes the rain falling at the most distant point within a watershed to reach the point under reference. It is one of the most important variables in the estimation of design discharges. It should be noted that while dealing in watersheds with flat terrain or low topographic slopes, the calculation of Tc, using commonly accepted equations often results in unreasonably large values...",
    tagSlugs: [
    "tag_drainagechannels",
    "tag_floodwatercontrol",
    "tag_hydraulicengineering"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_may",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Channel Selection For Stormwater Control",
    content: "In channel selection for control of stormwater in Asaba, Warri, Effurun, and environs, great care was taken in channel depth selection because of the high-water table, especially in Effurun and Warri Metropolis...",
    tagSlugs: [
    "tag_drainagechannels",
    "tag_floodwatercontrol",
    "tag_hydraulicengineering"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_april",
    serviceTitles: [ "Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Hydraulic Design Of Drainage Channels",
    content: "The hydraulic design of a drainage channel requires excellent knowledge of the topography and rainfall data of the project area. The design of a drainage channel is affected by factors such as the topography of the project area, selection type, design frequency, expected volume of&nbsp;stormwater, and economy..",
    tagSlugs: [
    "tag_hydraulicengineering",
    "tag_drainagechannels",
    "tag_floodwatercontrol"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_may",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Description Of Core Hydrological Terminologies In Flood Control Analysis",
    content: "Rainfall Intensity has an important effect on runoff proportion, as it determines the rate at which rainfall runoff arrives at the soil surface and, consequently, when infiltration rate of the soil is low to allow absorption, flooding of the environment does occur..",
    tagSlugs: [
    "tag_drainagedesign",
    "tag_drainageengineer",
    "tag_drainageproblems",
    "tag_drainagesolution",
    "tag_drainagespecialists"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_feb",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control",
    content: "The engineering design of a stormwater drainage system requires a large data collection effort.  The data requirements in the stormwater management and control measures for Asaba, Warri, Effurun, and environs include knowledge of topography, drainage boundaries, imperviousness, soil types, and locations of existing drainage channels, manholes, culverts inlets, and outlets. In addition, identification of other types of utilities and their locations in the ground is critical.  These data collated enabled the study and design work for the new drainage network systems to be achieved.  The engineering analysis of the drainage system recommended for this project considered four major aspects:..",
    tagSlugs: [
    "tag_drainagedesign",
    "tag_drainageengineer",
    "tag_drainageproblems",
    "tag_drainagesolution",
    "tag_drainagespecialists"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_jan",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Engineering Survey For Effective And Efficient Flood Control",
    content: "To develop efficient and effective flood water control measures, a good knowledge of the topography of the study area is important for the design.  As much as practicable, the engineering survey here followed the existing street layouts...",
    tagSlugs: [
    "tag_drainagedesign",
    "tag_drainageengineer",
    "tag_drainageproblems",
    "tag_drainagesolution",
    "tag_drainagespecialists"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_jan",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Findings And Observations In Flood-Prone Areas Of Delta State -1",
    content: "Studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers, including existing drains in Asaba, Warri, Effurun, and environs. The studies showed that, There were no previous records of survey data and maps for the cities. While Warri had an old Master plan, Asaba had none. A large part of the flooding noticed in Asaba, Warri, Effurun and environs could be attributed to blocked drainage channels with waste materials decomposable and non-decomposable, silts, overgrown weeds. The result is that the flow discharge into the drainage channels is disturbed and hence could not be evacuated from the environment.Most of the existing drains do not have discharge points as they were constructed without design specifications..",
    tagSlugs: [
    "tag_drainage",
    "tag_drainagebasin",
    "tag_drainagebresilien",
    "tag_drainagecell",
    "tag_drainagechannel",
    "tag_drainagechannels",
    "tag_drainagecontractor",
    "tag_drainagecover",
    "tag_drainagedesign",
    "tag_drainageditch",
    "tag_drainageengineer",
    "tag_drainageholes",
    "tag_drainageissues",
    "tag_drainagelife",
    "tag_drainageline",
    "tag_drainagepathway",
    "tag_drainagepipe",
    "tag_drainagepipes",
    "tag_drainageproblems",
    "tag_drainageproducts",
    "tag_drainageproject",
    "tag_drainagesolution",
    "tag_drainagesolutions",
    "tag_drainagespecialists",
    "tag_drainagesystem",
    "tag_drainagesystems",
    "tag_drainagetile",
    "tag_drainagevisage",
    "tag_drainagework",
    "tag_drainageworks"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_august",
    serviceTitles:["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Findings And Observations In Flood-Prone Areas Of Delta State -2",
    content: "Well-researched studies were conducted over the entire flood-prone areas, valleys, natural watercourses, swamps, and rivers in Delta State of Nigeria, including existing drains in Asaba, Warri, Effurun, and environs. Several observations were made. Eight of these observations were discussed in my last post. This post is a sequel to the former and a continuation of the observations from these studies...",
    tagSlugs: [
    "tag_andriversindeltastateofnigeria",
    "tag_effurun",
    "tag_includingexistingdrainsinasaba",
    "tag_naturalwatercourses",
    "tag_swamps",
    "tag_valleys",
    "tag_warri",
    "tag_wellresearchedstudieswereconductedoverentirefloodproneareass"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_nov",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Hydrological Basins In Delta State, Nigeria",
    content: "Studies were conducted to identify all the flood-prone areas in Asaba, Warri, Effurun, and environs, all in Delta State of Nigeria.  These studies were to help develop efficient and effective flood water control measures that would safely convey run-off from the streets to the natural watercourses and rivers without loss of lives and property. These basins were broken into catchments using existing road networks for delineation as boundaries. In the case of Asaba, the absence of water bodies limited the design approach to nature-based types, such as valleys, streams, and rivers that are tributaries to the River Niger. But in the case of Warri and Effurun, the catchment areas contain lots of water bodies (swamps) and natural watercourses, which serve as the receiving basins for floodwater evacuation from the environment..",
    tagSlugs: [
    "tag_drainage",
    "tag_drainagebasin",
    "tag_drainagebresilien",
    "tag_drainagecell",
    "tag_drainagechannel",
    "tag_drainagechannels",
    "tag_drainagecontractor",
    "tag_drainagecover",
    "tag_drainagedesign",
    "tag_drainageditch",
    "tag_drainageengineer",
    "tag_drainageholes",
    "tag_drainageissues",
    "tag_drainagelife",
    "tag_drainageline",
    "tag_drainagepathway",
    "tag_drainagepipe",
    "tag_drainagepipes",
    "tag_drainageproblems",
    "tag_drainageproducts",
    "tag_drainageproject",
    "tag_drainagesolution",
    "tag_drainagesolutions",
    "tag_drainagespecialists",
    "tag_drainagesystem",
    "tag_drainagesystems",
    "tag_drainagetile",
    "tag_drainagevisage",
    "tag_drainagework",
    "tag_drainageworks"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2021_august",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Merits Of The Recommended Options For Storm Water Management And Control",
    content: "This article enumerates the merits to be derived from the use of these recommended pre-cast concrete structural elements of rectangular, square, and circular channels...",
    tagSlugs: [
    "tag_drainagechannels",
    "tag_floodwatercontrol",
    "tag_hydraulicengineering"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_august",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY",
    content: "When it comes to stormwater drainage construction, it is important to hire a reputable and experienced company. The process is complex and requires a number of steps to ensure the job is done correctly and efficiently.   If you are considering hiring a stormwater drainage construction company, there are a few things you need to know before making a decision....",
    tagSlugs: [
    "tag_bestpracticesinstormwaterconstruction",
    "tag_constructionstormwater",
    "tag_developingandremediationsofbasins",
    "tag_erosioncontrolconstructionandstormwatermanagement",
    "tag_permitsforstormwatersystemsonconstructionsites",
    "tag_sedimentcontrolandstormwater",
    "tag_standardsandguidelinesforconstruction",
    "tag_stormwaterconstruction",
    "tag_stormwatercontrolsforconstruction",
    "tag_stormwaterinfrastructure",
    "tag_stormwatersolutionsforconstructionsites",
    "tag_traininginstormwaterforconstructionpurposes"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_sept",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "7 Ways To Handle Flooding In Any Parts Of Nigeria",
    content: "Flooding is a very serious issue in Nigeria, as it can lead to significant damage to property and even loss of life. Floods can occur due to heavy seasonal rains or from overflowing bodies of water such as rivers and oceans. Flooding can be a major problem for those living in areas with low-lying land or in cities where there is poor drainage. In order to handle flooding in any area of Nigeria, there are a variety of strategies that can be implemented. This article lists 7 ways that you can handle flooding in any area of Nigeria. These strategies can be used by individuals, organizations, and governments to reduce the destruction caused by flooding and ensure the safety of those living in affected areas. Whether you are living in a rural area or a city, these strategies will help you to be better prepared for a flood and handle it in the most effective way possible. When it comes to flooding in Nigeria, prevention is key. We must work together to develop a comprehensive plan that includes early warning systems, improved nfrastructure, and risk management strategies to ensure we are better prepared to handle future floods....",
    tagSlugs: [
    "tag_dangersoffloodinnigeria",
    "tag_devastatingnigerialandslideandflooding",
    "tag_disasterreliefinactionforfloodvictimsinnigeria",
    "tag_extremeheatcausestormtolastinnigeria",
    "tag_fightingtherisingwatersfrom",
    "tag_floodinginnigeria",
    "tag_floodingsituationinigeria",
    "tag_heavyrainfallhasruinedmanynigeriahomes",
    "tag_nigeriadevastatingfloods",
    "tag_nigeriaflooding",
    "tag_rainfallinnigeriafloods",
    "tag_severeweatherinnigeriainundation",
    "tag_floodsinnigeria"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_oct",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "8 Important Facts About StormWater Drainage Systems",
    content: "Stormwater drainage systems are essential to our health and safety, they help protect us from flooding and prevent water pollution, making them an important part of our infrastructure...",
    tagSlugs: [
    "tag_detentionbasinsandpumpsystems",
    "tag_engineeringhydrologytechniques",
    "tag_gabionsystems",
    "tag_permitsandguidanceforsurfacedrainage",
    "tag_raingardensolutions",
    "tag_rainharvestsystems",
    "tag_roofdrainsanddownpipesystems",
    "tag_stormwaterdrainage",
    "tag_stormwatermanagement",
    "tag_stormwaterrunoffsolutions",
    "tag_surfaceandbelowgrounddrainage"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_nov",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding",
    content: "Climate change continues to threaten our planet, with the most immediate threat being extreme flooding. Rising tides and sinking cities have become a stark reality with devastating consequences for many communities around the world. It's a global problem that requires immediate attention and action from governments, businesses, and individuals. In recent years, increased levels of carbon dioxide emissions have led to warmer ocean temperatures and melting polar ice caps, causing sea levels to rise. The impact of these changes has been acutely felt in many coastal areas in Nigeria, as an example, causing more intense and frequent flooding. This blog post will explore the relationship between climate change and extreme flooding, and how it is affecting cities and towns across the world. We will examine the science behind rising sea levels and how it affects our coasts, as well as the social and economic impact of flooding. We will also take a closer look at the strategies and technologies being used to mitigate the effects of climate change on flooding...",
    tagSlugs: [
    "tag_flooding2019",
    "tag_floodingfeeds",
    "tag_floodinginst",
    "tag_floodingyalltl",
    "tag_floodingyournewsfeed",
    "tag_floodsafety",
    "tag_nigeriadevastatingfloods",
    "tag_rainfallinnigeriafloods",
    "tag_floodsinnigeria"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_feb",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "Impacts Of Land-use Change On Urban Hydrology And The Need For Sustainable Storm Water Management Engineering Practices",
    content: " An excerpt from 'Impacts of land-use Change on Urban Hydrology and the need for sustainable Storm Water Management Engineering Practices'",
    tagSlugs: [
    "tag_engineeringpractices",
    "tag_landusechange",
    "tag_stormwatermanagement",
    "tag_sustainablestormwatermanagement",
    "tag_urbanenvironment",
    "tag_urbanhydrology",
    "tag_urbanwatermanagement"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_oct",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title:
    "The Importance Of Community Engagement And Education In Sustainable Water Management",
    content: "Lecture Presentation To Nigerian Institute Of Civil Engineers (NICE), Asaba Chapter, Delta State, Nigeria On Thursday, 2nd Nov, 2023",
    tagSlugs: [
    "tag_communityengagement",
    "tag_communityinvolvement",
    "tag_education",
    "tag_environmentaleducation",
    "tag_stormwatereducation",
    "tag_waterconservation",
    "tag_watershedmanagement",
    "tag_watersustainability",
    "tag_stormwatermanagement",
    "tag_sustainablestormwatermanagement"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2023_march",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
  },
  {
    title: "Assessing Quality Civil Engineering Practices In Nigeria",
    content: "The quality of Civil Engineering practices in Nigeria has become an increasingly important priority in recent years. As the country continues to grow and change, it is important that these practice s meet the standards of a modern, wealthy country.  Assessing the quality of Civil Engineering practices in Nigeria is crucial to establishing a secure, efficient infrastructure that is critical to the country’s future. Quality engineering practices enable the country to realize the potential of its resources, reduce costs and improve safety. This article explores the existing quality engineering practices in Nigeria, their impact on the nation’s infrastructure, and how they can be further improved. It will provide an overview of the current state of Civil Engineering practices in Nigeria, including the challenges and opportunities that can be addressed. Additionally, it discusses how government policies, industry regulations, and investments can help improve engineering practices in the nation. By assessing quality practices in Nigeria, it is possible to create a secure and efficient infrastructure that enables the nation to realize its potential...",
    tagSlugs: [
    "tag_buildingpracticesinnigeria",
    "tag_civilengineeringpracticesinnigeria",
    "tag_constructionpracticesinnigeria",
    "tag_designengineeringservicesinnigeria",
    "tag_developmentandplanninginnigeria",
    "tag_projectmanagement",
    "tag_environmentalengineeringpracticesinnigeria",
    "tag_professionalpracticesinnigeria",
    "tag_safetypracticesinnigeria",
    "tag_sustainableengineeringpracticesinnigeria",
    "tag_technicalengineeringpracticesinnigeria",
    "tag_valueengineeringpracticesinnigeria"
    ],
    categoryTitles: ["Uncategorized"],
    archiveTitle: "archives_2022_dec",
    serviceTitles: ["Advisory Services In Engineering", "Environmental Impact Management Studies", "Project Supervision And Management"],
    createdAt: new Date()
    }     
  ]
  
  async function seedBlogs() {
  try {
    console.log("🧹 Clearing old Blogs...");
    await Blog.deleteMany({});
    console.log("✅ Old blogs cleared."); 

    console.log("🔹 Fetching Tags, Categories, Archives, Services...");
    const tags = await Tag.find({});
    const categories = await Category.find({});
    const archives = await Archive.find({});
    const services = await Service.find({});

    if (!tags.length || !categories.length || !archives.length || !services.length) {
      throw new Error("❌ Please seed tags, categories, archives, and services first!");
    }

    for (const blogData of blogsData) {
      // Map tag slugs to ObjectIds
      const blogTags = tags.filter(tag => (blogData.tagSlugs || []).includes(tag.slug));
      const blogCategories = categories.filter(cat => (blogData.categoryTitles || []).includes(cat.title));
      const blogArchive = archives.find(arc => arc.slug === blogData.archiveTitle);
      const blogServices = services.filter(srv => (blogData.serviceTitles || []).includes(srv.title));

      const blogSlug = slugify(blogData.title, { lower: true, strict: true });

      const newBlog = new Blog({
        title: blogData.title,
        slug: blogSlug,
        content: blogData.content,
        tags: blogTags.map(tag => tag._id),          // ✅ Correct
        categories: blogCategories.map(cat => cat._id),
        archive: blogArchive ? blogArchive._id : null, // ✅ Correct
        services: blogServices.map(srv => srv._id),
        createdAt: blogData.createdAt || new Date()
      });

      await newBlog.save();
      console.log(`✅ Blog saved: ${blogData.title}`);
    }

    console.log("🎉 All blogs seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding blogs:", err);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = { seedBlogs };
  