const Archive = require("../models/archive");
const slugify = require("slugify");

const archivesData = [
  { title: "DEPROF", date: new Date("2021-04-01") },
  { title: "Abdul M. Yahaya", date: new Date("2021-04-01") },
  { title: "Engr. John Cee Onwualu, JP", date: new Date("2021-04-01") },
  { title: "June 2025", date: new Date("2021-04-01") },
  { title: "April 2025",  slug: "archives_2025_april"  },
  { title: "May 2024", slug: "archives_2024_may"  },
  { title: "March 2024",  slug: "archives_2024_march"  },
  { title: "June 2024", date: new Date("2021-04-01") },
  { title: "July 2024", date: new Date("2021-04-01") },
  { title: "January 2024", date: new Date("2021-04-01") },
  { title: "February 2024", date: new Date("2021-04-01") },
  { title: "April 2024", date: new Date("2021-04-01") },
  { title: "October 2023", date: new Date("2021-04-01") },
  { title: "November 2023", date: new Date("2021-04-01") },
  { title: "March 2023", date: new Date("2021-04-01") },
  { title: "January 2023", date: new Date("2021-04-01") },
  { title: "February 2023", date: new Date("2021-04-01") },
  { title: "December 2023", date: new Date("2021-04-01") },
  { title: "September 2022", date: new Date("2021-04-01") },
  { title: "October 2022",      slug: "archives_2022_oct" },
  { title: "November 2022", date: new Date("2021-04-01") },
  { title: "May 2022", date: new Date("2021-04-01") },
  { title: "March 2022", date: new Date("2021-04-01") },
  { title: "July 2022", date: new Date("2021-04-01") },
  { title: "January 2022", date: new Date("2021-04-01") },
  { title: "February 2022", date: new Date("2021-04-01") },
  { title: "December 2022", date: new Date("2021-04-01") },
  { title: "August 2022", date: new Date("2021-04-01") },
  { title: "April 2022", date: new Date("2021-04-01") },
  { title: "November 2021", date: new Date("2021-04-01") },
  { title: "May 2021", date: new Date("2021-04-01") },
  { title: "June 2021", date: new Date("2021-04-01") },
  { title: "January 2021", date: new Date("2021-04-01") },
  { title: "December 2021", date: new Date("2021-04-01") },
  { title: "August 2021", date: new Date("2021-04-01") },
  { title: "April 2021",  date: new Date("2021-04-01") },
  { title: "September 2020", date: new Date("2021-04-01")   },
  { title: "October 2020",  date: new Date("2021-04-01")  },
  { title: "November 2020", date: new Date("2021-04-01")  },
  { title: "May 2020", date: new Date("2021-04-01")  },
  { title: "July 2020",  date: new Date("2021-04-01")  },
  { title: "August 2020", date: new Date("2021-04-01")  },
];

async function seedArchives() {
  try {
    await Archive.deleteMany({});
    for (const arch of archivesData) {
      await Archive.create({
        title: arch.title,
        slug: slugify(`archive_${arch.date.getFullYear()}_${arch.title}`, { lower: true, strict: true }),
        date: arch.date,
      });
    }
    console.log("✅ Archives seeded successfully!");
  } catch (err) {
    console.error("❌ Error seeding archives:", err);
  }
}

module.exports = seedArchives;
