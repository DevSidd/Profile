/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Siddhant",
  logo_name: "Siddhant Tomer",
  nickname: "DevSid",
  subTitle:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical work to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1dGRVEH6jakZ03Uhj9Py9oyPW8NnPPuZ7/view?usp=sharing",
  portfolio_repository: "https://devsidworld.herokuapp.com",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/DevSidd",
  // linkedin: "https://www.linkedin.com/in/siddhant-tomer-38356b152/",
  // gmail: "siddhanttomer3199@gmail.com",
  // gitlab: "https://gitlab.com/siddhant3199",
  // facebook: "https://www.facebook.com/siddhant.thakur.79069/",
  // twitter: "https://twitter.com/siddhant_tomer",
  // instagram: "https://www.instagram.com/_sidhant_thakur_/"

  {
    name: "Github",
    link: "https://github.com/DevSidd",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/siddhant-tomer-38356b152/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:siddhanttomer3199@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/siddhant_tomer",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/siddhant.thakur.79069/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_sidhant_thakur_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "WhatsApp",
    link: "tel:+91-8791405433",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },
];

const skills = {
  data: [
    {
      title: "Data Science Enthu....",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Building predictive models to extract insights and make decisions out of data",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
        "⚡ Eager to build future neural network system and enhance the capablity of ML",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            backgroundColor: "tranparent",
            color: "#E46E2E",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux, Angular & more.",
        "⚡ Developing web applications using Python & Java frameworks.",
        "⚡ Creating application backend using Java, Python or use nodeJS for server-side.",
        "⚡ Skilled in various programming languages and frameworks or technolgie.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "angularjs",
          fontAwesomeClassname: "simple-icons:angularjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Have great creativity or knowlegde about the website logo or design.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/siddhanttomer311",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@siddhant174/edit/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/siddhant3199",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "black",
      },
      profileLink: "https://leetcode.com/siddhant3199/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. Abdul Kalam Technical University Formally, UPTU",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "aktu_logo.png",
      alt_name: "AKTU, Lucknow",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Data Science, Cloud Computing and Full Stack Development or Full Stack Web Development.",
      ],
      website_link: "https://aktu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python for Data Science",
      subtitle: "- Joseph by IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/7c50d78bfc29487999b2328ce5c4b964",
      alt_name: "IBM Network Skills Network",
      color_code: "#1F70C199",
    },
    {
      title: "Deep Learning with TensorFlow",
      subtitle: "- Saeed Aghabozorgi by IBM",
      logo_path: "Deep-Learning-with-TensorFlow.png",
      certificate_link:
        "https://cognitiveclass.ai/courses/deep-learning-tensorflow",
      alt_name: "IBM Network Skills Network",
      color_code: "#27aae1",
    },
    {
      title: "Data Visualization with Python",
      subtitle: "- Cognitive Class.ai by IBM",
      logo_path: "python-for-data-visualization.png",
      certificate_link:
        "https://cognitiveclass.ai/courses/data-visualization-with-python",
      alt_name: "IBM Network Skills Network",
      color_code: "#eded77",
    },
    {
      title: "Data Analysis with Python",
      subtitle: "- Cognitive Class.ai by IBM",
      logo_path: "Data-Analysis-with-Python.png",
      certificate_link:
        "https://cognitiveclass.ai/courses/data-analysis-python",
      alt_name: "IBM Network Skills Network",
      color_code: "#eded77",
    },
    {
      title: "BIG DATA",
      subtitle: "- Cognitive Class.ai by IBM",
      logo_path: "bigdata_image.png",
      certificate_link: "https://cognitiveclass.ai/courses/what-is-big-data",
      alt_name: "- IBM Network Skills Network",
      color_code: "#ffffff",
    },
    {
      title: "Scalable web applications on Kubernetes (Beta)",
      subtitle: "- Cognitive Class.ai by IBM",
      logo_path: "kubernetes_logo.png",
      certificate_link:
        "https://cognitiveclass.ai/courses/scalable-web-applications-on-kubernetes",
      alt_name: "IBM Network Skills Network",
      color_code: "#ffffff",
    },
    {
      title: "Docker Essentials",
      subtitle: "- John Zaccone",
      logo_path: "docker_badge.png",
      certificate_link: "https://cognitiveclass.ai/courses/docker-essentials",
      alt_name: "GCP",
      color_code: "#000000",
    },
    {
      title: "Build an IoT Blockchain Network for a Supply Chain",
      subtitle: "- John Walicki",
      logo_path: "iot_course.png",
      certificate_link:
        "https://cognitiveclass.ai/courses/blockchain-iot-node-red-food-network",
      alt_name: "IBM Networks",
      color_code: "#000000",
    },
    {
      title: "Fullstack Web Development",
      subtitle: "- DEVSLOPES",
      logo_path: "bitdegree_logo.png",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=full-stack-web-development&action=download&username=siddhant-tomer338195",
      alt_name: "Bitdegree",
      color_code: "#ffffff",
    },
    {
      title: "Python Excellence Certificate",
      subtitle: "- By Techgig",
      logo_path: "techgig_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1zp2hurYcHQuoNEO8ELo1xXyh1XJoZQgJ/view?usp=sharing",
      alt_name: "TechGig",
      color_code: "#ffffff",
    },
    {
      title: "Agile Software Development",
      subtitle: "- Shashi Shekhar by Linkedin",
      logo_path: "linkedin-image.png",
      certificate_link:
        "https://drive.google.com/file/d/1WbY61TEnCUCljFanyAcTUzQ2i8aKo6mv/view?usp=sharing",
      alt_name: "TechGig",
      color_code: "#ffffff",
    },
    {
      title: "Java Programming",
      subtitle: "- Bitdegree.org",
      logo_path: "java_logo.png",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=java-tutorial&action=download&username=siddhant-tomer338195",
      alt_name: "Bitdegree",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Developer. I love organising events and that is why I am also involved with many opensource communities as a representative and eager to work in AI & ML.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer",
          company: "Kent Cam",
          company_url: "https://www.kentcam.com/cameye/",
          logo_path: "kentcam.png",
          duration: "April 2021 - PRESENT",
          location: "Noida, India",
          description:
            "I am working upon java spring boot for backend & api or use node js for server-side & Angular for frontend, involvement in frontend, backend and cloud base technolgies in the project.",
          color: "#0879bf",
        },
        {
          title: "Lead Web Developer - Freelancer",
          company: "Patron Accounting",
          company_url: "https://www.patronaccounting.com",
          logo_path: "accountlogo.png",
          duration: "July 2020 - sep 2020",
          location: "Work From Home",
          description:
            "This is financial Solution based Company. Where I created a fully responsive website for the firm as a freelancer or fulfill the requirements related to the frontend or backend and deployment.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development",
          company: "Nasscom",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "nasscom.png",
          duration: "Sep 2020 - March 2020",
          location: "Noida",
          description:
            "Designing, building and maintaining Java-based applications & websites Contributing and taking part software and architectural development activities. Developing well-designed, efficient, and testable code. Conducting software analysis, programming, testing, and debugging.",
          color: "#ee3c26",
        },
        {
          title: "Development",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "sparks_logo.png",
          duration: "Jun 2020 - July 2020",
          location: "Work From Home",
          description:
            "I have worked on develop TSF's websites, LINKS app, ABLE app, deploy and maintain websites on hosted networks and Amazon Cloud platform, Work on intelligence, analytics, etc. with guidance, Work on Data Science & blockchain, etc. with guidance.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "ISP",
          company: "Intershala",
          company_url: "https://internshala.com/",
          logo_path: "internshala_logo.png",
          duration: "Aug 2020 - Oct 2020",
          location: "Work From Home",
          description: "Selected as a internshala student partner",
          color: "#181717",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My future goal is to create vast Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sidd_pic.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Development including Frontend or Backend, Python included libraries & framework, React, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://devsidworld.herokuapp.com/#blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hapur City, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/V92F862tMr1wRPrq5",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8791405433",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
