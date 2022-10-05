/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";
require("fs");
const dotenv = require("dotenv");
const res = dotenv.config();
console.log("res env", res);

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Malaika Afridi",
  title: "Hi all, I'm Malaika",
  subTitle: emoji(
    `Hey, I'm a Frontend Engineer with more than 2 years of professional experience of building Web applications with different technology stacks (ReactJs, NextJs, Javascript, Firebase, Typescript).`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aWxnG0zADgYMwOCPoShEKrJ66UBux2Qd/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/malaika22",
  linkedin: "https://www.linkedin.com/in/malaika-afridi-4799541b4/",
  gmail: "malaikaafridi22@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/malaika.afridi.144/",
  //medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/13310349/malaika-afridi",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Karachi",
      logo: require("./assets/images/karachiUni.jpeg"),
      subHeader: "Bachelors in Computer Science",
      duration: "January 2018 - December 2021",
      desc: "Graduating in Computer Science from UBIT"
      /* descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ] */
    },
    {
      schoolName: "Fatmiyah College",
      logo: require("./assets/images/collegeLogo.png"),
      subHeader: "Intermediate in Engineering",
      duration: "April 2015 - April 2017",
      desc: "Intermediate in Engineering"
      //  descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "Robor Systems",
      companylogo: require("./assets/images/robor.png"),
      date: "May 2022 - Present",
      desc: "Working as a Frontend Engineer"
    },
    {
      role: "ReactJs Developer",
      company: "CSTech Softwares",
      companylogo: require("./assets/images/csTech.jpg"),
      date: "September 2021 - April 2022"
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Frontend Software Developer",
      company: "Kpibar",
      companylogo: require("./assets/images/kpibarLogo.png"),
      date: "November 2020 – January 2022",
      desc: "Working as a Frontend Developer on a project managing tool startup"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
  githubUserName: "malaika22"
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS THAT I CREATED USING FRONTEND TOOLS",
  projects: [
    {
      image: require("./assets/images/carTajir.png"),
      projectName: "Car Tajir",
      projectDesc:
        "Car Tajir is a car listing site that let's you buy your dream car, upgrade your car with used cars and sell your car.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://car-tajir.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/weejadu.png"),
      projectName: "Wejadu",
      projectDesc:
        "Wejadu is an interactive application that focus on user 'Employability Promotion & Career Growth'. Check your skills-on-the-go. Explore how other responds to situations and improve your skills",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://wejadu.herokuapp.com/start"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jadoo.png"),
      projectName: "Jadoo- Travel Community",
      projectDesc:
        "Jadoo is a travel community that lets you know about the best destinations around the world. Jadoo is a animated landing page integrated with new and modern world animations.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://tech-worlds.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tech-world.png"),
      projectName: "Tech-World",
      projectDesc:
        "Tech-world is a digital products market place landing page with lots of modern world animations.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://tech-worlds.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/jawnjawn.png"),
      projectName: "Jawn Jawn",
      projectDesc:
        "JawnJawn is the one stop employment job listing website offering all employment skill level job opportunities with top employers posting jobs online with top paying jobs.",
      footerLink: [
        {
          name: "Visit Application",
          url: "https://www.jawnjawn.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/spark.png"),
      projectName: "Spark",
      projectDesc:
        "Spark is social media application, that let users post/share and like their thoughts, generate random quotes, and chat with other user.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://spark-6cec0.web.app/signup"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/CNX.png"),
      projectName: "CNX-Network",
      projectDesc:
        "First Mining ICO Token Start Up. The first sustainable worldwide blockchain technology network, offering encrypted, interconnected and same interface applications that are used in daily life, running on its own blockchain and currency.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cnxnetwork.herokuapp.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
