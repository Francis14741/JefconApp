const keywords = [
  "Preventing Stormwater Pollution: Implementing Effective QC For Drainage Systems In Nigeria",
  "Understanding Geotechnical Considerations for Stormwater Drainage QC in Nigeria",
  "Best Practices For Concrete Work In Stormwater Drainage: Quality Control for Durability in Nigerian Climates",
  "Challenges of Storm Water Management In Urban Areas of Nigeria: A Critical Analysis",
  "The Relationship Between Land-use Change And Urban Hydrology",
  "Ensuring Stormwater Drainage System Efficiency",
  "The Urgent Need For Sustainable Management Engineering Pracices",
  "Examples of Sustainable Stormwater Management Practices In Urban Areas",
  "Challenges Posed By Traditional Storm Water Management Practices",
  "Evaluating The Success And Effectiveness Of Existing Drainage Systems For Managing Rainwater Runoff In Nigeria",
  "Addressing Nigeria Water Pollution Crisis",
  "Navigating The Risk Of Floods: Civil Engineering Strategies For Managing Flood-Prone Areas",
  "Oil Hubs in Delta State, Nigeria",
  "Tributaries To The River Niger Within Asaba, Delta State, Nigeria",
  "Flooding: A Global Warming Aftermath",
  "Recommended Actions For A Young Engineer-1",
  "Recommended Actions For A Young Engineer-2",
  "Working With Standard Engineering Codes",
  "Improving Professional Efficiency And Quality Of Engineering Products",
  "The Young Engineer: Importance Of Training And Mentorship",
  "Study And Design Of Stormwater Management And Control Measures For Asaba, Warri, Effurun And Environs In Delta State, Nigeria",
  "Challenges Of A Young Engineer",
  "Sample Post",
  "Recommendations For Stormwater Management And Control",
  "Considerations In The Design Of Stormwater Channels",
  "Channel Selection For Stormwater Control",
  "Hydraulic Design Of Drainage Channels",
  "Description Of Core Hydrological Terminologies In Flood Control Analysis",
  "Engineering Design And Hydrological Analysis For Effective And Efficient Flood Control",
  "Engineering Survey For Effective And Efficient Flood Control",
  "Findings And Observations In Flood-Prone Areas Of Delta State -1",
  "Findings And Observations In Flood-Prone Areas Of Delta State -2",
  "Hydrological Basins In Delta State, Nigeria",
  "Merits Of The Recommended Options For Storm Water Management And Control",
  "7 Things You Need To Know Before Hiring A STORMWATER CONSTRUCTION COMPANY",
  "7 Ways To Handle Flooding In Any Parts Of Nigeria",
  "8 Important Facts About StormWater Drainage Systems",
  "Assessing Quality Civil Engineering Practices In Nigeria",
  "Rising Tides, Sinking Cities: How Climate Change Is Driving More Extreme Flooding",
  "Commitments And Strategy",
  "Team",
  "Privacy Policy",
  "Vision Statement",
  "Mission Statement",
  "Core Values",
  "Team Building",
  "Business Concepts",
  "Business Strategy",
  "Faq About Participation On Our Website",
  "Faq About Storm-water Management Services",
  "Faq About Consultancy Services",
  "Faq About Construction Services",
  "Services",
  "Environmental Impact Management Studies",
  "Project Supervision And Management",
  "Feasibility And Economic Studies",
  "Engineering Surveys",
  "Engineering Design",
  "Advisory Services In Engineering",
  "Project Costing And Valuation",
  "Projects",
  "Past Projects",
  "Recent Projects",
  "Archives Of: DEPROF",
  "Archives Of: Engr. John Cee Onwualu",
  "Archives Of: Abdul M. Yahaya",
  "Monthly Archives: June 2025",
  "Monthly Archives: April 2025",
  "Monthly Archives: May 2024",
  "Monthly Archives: March 2024",
  "Monthly Archives: June 2024",
  "Monthly Archives: July 2024",
  "Monthly Archives: January 2024",
  "Monthly Archives: February 2024",
  "Monthly Archives: April 2024",
  "Monthly Archives: October 2023",
  "Monthly Archives: November 2023",
  "Monthly Archives: March 2023",
  "Monthly Archives: January 2023",
  "Monthly Archives: February 2023",
  "Monthly Archives: December 2023",
  "Monthly Archives: September 2022",
  "Monthly Archives: October 2022",
  "Monthly Archives: November 2022",
  "Monthly Archives: May 2022",
  "Monthly Archives: March 2022",
  "Monthly Archives: July 2022",
  "Monthly Archives: January 2022",
  "Monthly Archives: February 2022",
  "Monthly Archives: December 2022",
  "Monthly Archives: August 2022",
  "Monthly Archives: April 2022",
  "Monthly Archives: November 2021",
  "Monthly Archives: May 2021",
  "Monthly Archives: June 2021",
  "Monthly Archives: January 2021",
  "Monthly Archives: December 2021",
  "Monthly Archives: August 2021",
  "Monthly Archives: April 2021",
  "Monthly Archives: September 2020",
  "Monthly Archives: October 2020",
  "Monthly Archives: November 2020",
  "Monthly Archives: May 2020",
  "Monthly Archives: July 2020",
  "Monthly Archives: August 2020",
  "Tag: #civilengineering",
  "Tag: #complex-engineering-problems",
  "Tag: #construction",
  "Tag: #drainage",
  "Tag: #drainagebasin",
  "Tag: #drainagebresilien",
  "Tag: #drainagecover",
  "Tag: #drainagecell",
  "Tag: #drainagechannel",
  "Tag: #drainagechannels",
  "Tag: #drainagecontractor",
  "Tag: #drainagedesign",
  "Tag: #drainageditch",
  "Tag: #drainageengineer",
  "Tag: #drainageholes",
  "Tag: #drainageissues",
  "Tag: Drainage Inspection Methods",
  "Tag: #drainagelife",
  "Tag: #drainageline",
  "Tag: #drainagepathways",
  "Tag: #drainagepipe",
  "Tag: #drainagepipes",
  "Tag: #drainageproblems",
  "Tag: #drainageproducts",
  "Tag: #drainageproject",
  "Tag: #drainagesolution",
  "Tag: #drainagesolutions",
  "Tag: #drainagespecialists",
  "Tag: #drainagesystem",
  "Tag: #drainagesystems",
  "Tag: #drainagetile",
  "Tag: #drainagevisage",
  "Tag: #drainagework",
  "Tag: #drainageworks",
  "Tag: #engineeringfundamentals",
  "Tag: #engineeringpractices",
  "Tag: #floodwatercontrol",
  "Tag: Nigeria",
  "Tag: #quality-of-engineering-products",
  "Tag: stormwatermanagement",
  "Tag: #stormwater",
  "Tag: #storm-water-drainage",
  "Tag: #stormwatermanagement",
  "Tag: #sustainable-stormwater-management",
  "Tag: #youngengineer",
  "Category Archives: Case Studies",
  "Category Archives: Environmental",
  "Category Archives: Construction Law",
  "Category Archives: Construction Technology",
  "Category Archives: Feasibility And Economic Studies",
  "Category Archives: Engineering Surveys",
  "Category Archives: Consultancy And Advisory Services",
  "Category Archives: Engineering Design And Simulation",
  "Category Archives: Industry News And Trends",
  "Category Archives: Mechanical, Electrical And Plumbing (MEP)",
  "Category Archives: Project Supervision And Management",
  "Category Archives: Project Valuation And Cost Control",
  "Category Archives: Safety And Regulations",
  "Category Archives: Training And Education",
  "Category Archives: Uncategorized",
];

const searchInput = document.getElementById("searchInput");
const suggestionBox = document.getElementById("search-suggestions");

if (searchInput && suggestionBox) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    suggestionBox.innerHTML = "";

    if (!query) {
      suggestionBox.style.display = "none";
      return;
    }

    const matches = keywords.filter((keyword) =>
      keyword.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      suggestionBox.style.display = "none";
      return;
    }

    matches.forEach((keyword) => {
      const item = document.createElement("li");
      item.classList.add("list-group-item", "list-group-item-action");
      item.textContent = keyword;
      item.addEventListener("click", () => {
        searchInput.value = keyword;
        suggestionBox.style.display = "none";
      });
      suggestionBox.appendChild(item);
    });

    suggestionBox.style.display = "block";
  });

  // Hide suggestions on blur
  document.addEventListener("click", (e) => {
    if (!suggestionBox.contains(e.target) && e.target !== searchInput) {
      suggestionBox.style.display = "none";
    }
  });
}

// Handles full search form submission (if needed)
// No change to existing logic

// Autocomplete feature

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const suggestionsList = document.getElementById("suggestionsList");
  let debounceTimeout;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    clearTimeout(debounceTimeout);

    if (!query) {
      suggestionsList.innerHTML = "";
      return;
    }

    debounceTimeout = setTimeout(() => {
      fetch(`/autocomplete?q=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          suggestionsList.innerHTML = "";

          if (data.length === 0) {
            suggestionsList.innerHTML =
              "<li class='list-group-item text-muted'>No matches</li>";
            return;
          }

          data.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item", "autocomplete-suggestion");
            li.innerHTML = item.title;
            li.addEventListener("click", () => {
              window.location.href = item.url;
            });
            suggestionsList.appendChild(li);
          });
        })
        .catch((err) => {
          console.error("Autocomplete fetch failed:", err);
        });
    }, 300);
  });

  document.addEventListener("click", (e) => {
    if (!suggestionsList.contains(e.target) && e.target !== searchInput) {
      suggestionsList.innerHTML = "";
    }
  });
});

// const searchInput = document.getElementById("searchInput");
// const suggestionBox = document.getElementById("search-suggestions");

// if (searchInput && suggestionBox) {
//   searchInput.addEventListener("input", () => {
//     const query = searchInput.value.toLowerCase().trim();
//     suggestionBox.innerHTML = "";

//     if (!query) {
//       suggestionBox.style.display = "none";
//       return;
//     }

//     const matches = keywords.filter((keyword) =>
//       keyword.toLowerCase().includes(query)
//     );

//     if (matches.length === 0) {
//       suggestionBox.style.display = "none";
//       return;
//     }

//     matches.forEach((keyword) => {
//       const item = document.createElement("li");
//       item.classList.add("list-group-item", "list-group-item-action");
//       item.textContent = keyword;
//       item.addEventListener("click", () => {
//         searchInput.value = keyword;
//         suggestionBox.style.display = "none";
//       });
//       suggestionBox.appendChild(item);
//     });

//     suggestionBox.style.display = "block";
//   });

//   // Hide suggestions on blur
//   document.addEventListener("click", (e) => {
//     if (!suggestionBox.contains(e.target) && e.target !== searchInput) {
//       suggestionBox.style.display = "none";
//     }
//   });
// }
