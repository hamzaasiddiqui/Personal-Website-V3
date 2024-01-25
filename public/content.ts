interface Experience {
  title: string;
  company: string;
  description: string;
  skills: string[];
}

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Social {
  link: string;
}

export const exp1: Experience = {
  title: "Lead Residential Network Administrator",
  company: "NETRONiX (GIKI) | April 23 - present",
  description: "Manage GIK Institute's residential network compromising of 3500+ nodes. Designed and conducted comprehensive training sessions and workshops on computer networking for students. Provide and maintain peer-to-peer file sharing and IPTV services for 3000+ residents of GIK Institute.",
  skills: ["Network Administration", "Network Design", "Project Management"],
};

export const exp2: Experience = {
  title: "Software Developr Intern",
  company: "Keystone Consulting | June 23 - August 23",
  description: "Led the development of a business intelligence visualization application leveraging Natural Language Processing techniques. Employed Flask, Python, React.js, and Next.js. Integrated LangChain and OpenAI technologies, and authored multiple Python scripts to create a sophisticated chatbot interface.",
  skills: ["React.js", "Next.js", "Javascript", "HTML", "CSS", "Flask", "Python", "Material UI", "Git"],
};

export const exp3: Experience = {
  title: "Software Engineer Intern",
  company: "Mantula Solar | July 23 - August 23",
  description: "Collaborated with a team of 5 full-stack web developers to engineer Mantula's web application, utilizing React.js and Firebase. Developed and integrated a decision tree-based price estimator offering a tailored and engaging user experience. Leveraged various NPM packages, contributing to a sophisticated and seamless user experience.",
  skills: ["React.js", "Node.js", "Javascript", "HTML", "CSS", "Firebase", "Bootstrap", "REST APIs", "Git", "Figma"],
};

export const proj1: Project = {
  title: 'NLP Powered Business Intelligence↗',
  description: "Developed a business intelligence application that uses natural language input to generate custom data visualizations and reports.",
  link: "https://github.com/hamzaasiddiqui/Traffic-Sign-Detector.git",
};

export const proj2: Project = {
  title: 'Traffic Sign Detector↗',
  description: "Designed a custom CNN model to correctly predict traffic signs.",
  link: "https://github.com/hamzaasiddiqui/NLP-Powered-BI",
};

export const proj3: Project = {
  title: 'Spoken Digits Recognition Cepstrum Analysis↗',
  description: "Spoken digits recognition using cepstrum method by implementing a custom ANN model.",
  link: "https://github.com/hamzaasiddiqui/Spoken-Digits-Recognition-Cepstrum-Analysis.git",
};

export const proj4: Project = {
  title: 'H.E.L.I.X. (IoT Virtual Assistant)↗',
  description: "Developed an AI bot that used voice recognition to enable users to control IoT devices.",
  link: "https://github.com/hamzaasiddiqui/HELIX-VirtualAssistant",
};

export const proj5: Project = {
  title: 'University Complaint Portal↗',
  description: "Developed a full-stack web portal to enable university residents to lodge and track complaints and feedback.",
  link: "https://github.com/hamzaasiddiqui/University-Complaint-Portal",
};

export const proj6: Project = {
  title: 'Console-based Text Editor↗',
  description: "Created a simple text editor for a Linux environment by employing Linux system calls in C.",
  link: "https://github.com/hamzaasiddiqui/Text-Editor",
};

export const email: Social = {
  link: "hamza.eins@gmail.com",
};

export const linkedin: Social = {
  link: "https://www.linkedin.com/in/-hamza-siddiqui/",
};

export const github: Social = {
  link: "https://github.com/hamzaasiddiqui/Text-Editor",
};

export const resume: Social = {
  link: "./HamzaSiddiquiResume.pdf",
};