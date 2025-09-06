const mongoose = require("mongoose");
const Faq = require("../models/faq");
const slugify = require("slugify");

const faqs = [
  {
    title: "FAQs about Construction Services",
    description: "Questions about Construction Services at Jefcon Associates.",
    questions: [
      {
        question: "What does the FAQ section cover?",
        answer: "This FAQ page covers topics related to Jefcon's services, process, payment, warranty, safety, quality and customer service."
      },
      {
        question: "How Do I Get A Quote For My Project?",
        answer: "You can contact us through our website, by phone, or by visiting our office. We will schedule a consultation to discuss your project and provide a quote.",
      },
      {
        question: "How Long Does A Construction Project Take?",
        answer: "The length of a construction project depends on the scope and complexity of the project. We will provide a project timeline and schedule with your quote.",
      },
      {
        question: "Can I Make Changes To My Project?",
        answer: "Yes, we understand that changes can occur during construction. We will work with you to accommodate changes and provide a change order to update the scope and cost of the project.",
      },
      {
        question: "What Kind Of Warranty Do You Offer?",
        answer: "We offer a [length]-year warranty on all our construction projects.",
      },
      {
        question: "How Do You Ensure Quality Workmanship?",
        answer: "We have a quality control process in place to ensure that all work meets our high standards.",
      },
    ],
  },
  {
    title: "FAQs about Consultancy Services",
    description: "Questions about Consultancy Services at Jefcon Associates.",
    questions: [
      {
        question: "What does the FAQ section cover?",
        answer: "This FAQ page covers topics related to Jefcon's services, process, payment, warranty, safety, quality and customer service."
      },
      {
        question: "What is JEFCON?",
        answer: "Jefcon & Associates Ltd is a Civil Engineering Consulting Firm with high precision GNSS data acquisition solutions and capacities for various civil engineering services."
      },
      {
        question: "What Types Of Services Do We Offer?",
        answer: "We offer a wide range of construction services, including residential and commercial building, remodeling, renovation, and repair."
      },
      {
        question: "What Areas Do We Serve?",
        answer: "We serve the entire 36 states in Nigeria, including other African Countries."
      },
      {
        question: "Do You Offer Financing Options?",
        answer: "Yes, we partner with financing companies to offer options for our clients."
      },
      {
        question: "How Do I Contact Your Customer Service Team?",
        answer: "You can contact us through our website, by phone, or by email. We respond promptly to all inquiries."
      },
      {
        question: "What Are Your Business Hours?",
        answer: "Our business hours are from 8AM to 5PM, from Mondays to Friday."
      }
    ],
  },
  {
    title: "FAQs about Stormwater Management Services",
    description: "Questions about Stormwater Management Services at Jefcon Associates.",    
    questions: [
      {
        question: "How Do I Request Service Or Support For My Project?",
        answer: "You can contact us through our website, by phone, or by visiting our office. We will schedule a consultation to discuss your project and provide a quote."
      },
      {
        question: "Are Your Workers Insured?",
        answer: "Yes, all our workers are fully insured with worker's compensation and liability insurance."
      },
      {
        question: "What Kind Of Materials Do You Use?",
        answer: "e use only high-quality materials from reputable suppliers."
      },
      {
        question: "What Safety Measures Do You Take On Site?",
        answer: "We take safety very seriously and follow all industry standards and regulations to ensure a safe working environment.."
      }
    ],
  },
  {
    title: "FAQs about Participation on our website",
    description: "Questions about participating on our website ",
    questions: [
      {
        question: "What services does Jefcon Associates provide?",
        answer: "We specialize in environmental consultancy, advisory services, project planning, and engineering solutions tailored to your needs.",
      },
      {
        question: "Where is Jefcon Associates located?",
        answer: "We are headquartered in Nigeria, but we work with clients globally through both onsite and remote engagements.",
      },
      {
        question: "How can I participate on the Jefcon website?",
        answer: "You can sign up, post comments, and submit project proposals."
      },
      {
        question: "How Do I Pay For My Project?",
        answer: "We accept various payment methods, including credit cards, checks, and financing options."
      },
      {
       question: "Do You Handle Permits And Code Compliance?",
        answer: "Yes, we handle all necessary permits and ensure that our work complies with local building codes and regulations."
      }
    ],
  }
];

(async () => {
  try {
    await mongoose.connect("mongodb+srv://francisanwuzia3:MC7LQpb4jTXAHN5x@jefconapp.4ufns6z.mongodb.net/jefconapp?retryWrites=true&w=majority&appName=jefconapp");
    await Faq.deleteMany({});
    console.log("🗑️ Old FAQs cleared");

    for (let faq of faqs) {
      faq.slug = slugify(faq.title, { lower: true, strict: true });
      await Faq.create(faq);
    }

    console.log("🌱 FAQs seeded");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();