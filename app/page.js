"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const skills = [
  { category: "Data Science", items: ["Python", "R", "SQL", "Tableau", "Power BI"], icon: "📊" },
  { category: "Machine Learning", items: ["Predictive Analysis", "Modeling", "Scikit-learn"], icon: "🤖" },
  { category: "Tools", items: ["Excel", "MySQL", "Data Visualization"], icon: "🛠️" },
];

const projects = [
  {
    title: "SkyConnect Airline Performance Analysis",
    description: "Comprehensive analysis of airline operational performance, including on-time arrival rates, revenue optimization strategies, and customer satisfaction metrics.",
    tags: ["Python", "Data Analysis", "Visualization"],
    download: "/skyconnect-project.pptx"
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Machine learning-driven customer segmentation for targeted marketing campaigns using clustering algorithms.",
    tags: ["Python", "Scikit-learn", "Clustering"]
  },
  {
    title: "Sales Forecasting Model",
    description: "Predictive model for retail sales forecasting using time series analysis and regression techniques.",
    tags: ["Python", "Time Series", "Forecasting"]
  }
];

const experience = [
  {
    role: "Virtual Assistant",
    company: "Akita Agency Inc.",
    period: "2024 – 2026",
    description: "- Managed emails, data entry, and administrative workflows\n- Supported remote operations and improved task efficiency"
  },
  {
    role: "Data Analyst",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Analyzing large datasets to drive business insights and improve operational efficiency."
  },
  {
    role: "Tech Store Attendant and Data Entry Clerk",
    company: "TM Communications",
    period: "2017 – 2021",
    description: "- Provided technical support and troubleshooting for devices and software issues\n- Assisted customers in resolving product-related problems efficiently\n- Managed sales operations and improved customer satisfaction"
  },
  {
    role: "Assistant Pharmacist",
    company: "Ifako-Ijaye LCDA",
    period: "2015 – 2016",
    description: "- Maintained accurate records and handled sensitive information\n- Provided structured support in a regulated environment"
  }
];

const education = [
  {
    degree: "Diploma Degree in Data Analysis",
    school: "Tech Studio Academy",
    year: "2025-2026"
  },
  {
    degree: "OND in Pharmaceutical Technology",
    school: "Moshood Abiola Polytechnic",
    year: "2011-2014"
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">JM</div>
          <div className="hidden md:flex gap-6">
            {["home", "about", "skills", "projects", "experience", "education", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-sm capitalize hover:text-blue-600 transition ${activeSection === item ? "text-blue-600 font-semibold" : "text-gray-600"}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image 
                  src="/photo.PNG" 
                  alt="Jameel Mayowa Oyefesobi" 
                  width={160} 
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-800 mb-2">Jameel Mayowa Oyefesobi</h1>
              <p className="text-2xl text-blue-600 mb-4">Data Scientist & Analyst</p>
              <p className="text-gray-600 max-w-lg">
                Transforming complex data into actionable insights. Specializing in machine learning, predictive analytics, and data visualization.
              </p>
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <button onClick={() => scrollTo("projects")} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
                  View My Work
                </button>
                <button onClick={() => scrollTo("contact")} className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed">
              I am a passionate Data Scientist and Analyst with expertise in Python, machine learning, and data visualization. 
              I have a strong track record of turning raw data into meaningful insights that drive business decisions. 
              My goal is to leverage data science skills to solve complex problems and create value for organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  {project.download && (
                    <a 
                      href={project.download} 
                      download
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <form className="bg-white rounded-xl p-8 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="your@email.com" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>© 2024 Jameel Mayowa Oyefesobi. All rights reserved.</p>
      </footer>
    </div>
  );
}