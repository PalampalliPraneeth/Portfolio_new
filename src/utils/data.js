
export const SKILLS = [
  {
    title: "Front-End",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
      { skill: "BootStrap", percentage: "75%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "React JS", percentage: "85%" },
      { skill: "Node JS", percentage: "80%" },
      { skill: "React Native", percentage: "70%" },
      { skill: "TypeScript", percentage: "65%" },
      { skill: "Angular", percentage: "85%" },
      { skill: "Next JS", percentage: "70%" },
      { skill: "NPM", percentage: "60%" },
      { skill: "Graph QL", percentage: "50%" },
      { skill: "Babel", percentage: "60%" },
      { skill: "WebPack", percentage: "65%" },
      { skill: "Figma", percentage: "70%" },
      { skill: "SharePoint", percentage: "70%" },

    ],
  },
  {
    title: "Backend",
    icon: "./assets/images/Backend.png",
    skills: [
      { skill: "Java SpringBoot", percentage: "85%" },
      { skill: "DJango", percentage: "75%" },
      { skill: "Restful APIs", percentage: "75%" },
    ],
  },
  {
    title: "Data Analysis",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Excel", percentage: "80%" },
      { skill: "Machine Learning", percentage: "75%" },
      { skill: "Generative AI", percentage: "60%" },
      { skill: "LLM", percentage: "60%" },
      { skill: "Transformers", percentage: "50%" },
      { skill: "NPM", percentage: "60%" },
      { skill: "ETL", percentage: "65%" },
      { skill: "NLP", percentage: "80%" },
      { skill: "TensorFlow", percentage: "75%" },
      { skill: "Scikit-learn", percentage: "80%" },
      { skill: "Keras", percentage: "70%" },
      { skill: "Beautiful Soap", percentage: "80%" },

    ],
  },
  {
    title: "Database Systems",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "MYSQL", percentage: "85%" },
      { skill: "Oracle", percentage: "80%" },
      { skill: "MS SQL", percentage: "75%" },
      { skill: "MangoDB", percentage: "85%" },
      { skill: "AWS DynamoDB", percentage: "85%" },
    ],
  },
  {
    title: "Cloud",
    icon: "./assets/images/c3.png",
    style:{
      'background_color': "red",
    },
    iconStyle: "fill: #7c5fe6;",
    skills: [
      { skill: "Azure DevOps", percentage: "85%" },
      { skill: "AWS Suite (S3, Glue, Redshift)", percentage: "80%" },
      { skill: "GCP", percentage: "75%" },
    ],
  },
  {
    title: "Data Visualization",
    icon: "./assets/images/vie.png",
    style:{
      'background_color': "red",
    },
    iconStyle: "fill: #7c5fe6;",
    skills: [
      { skill: "Power BI", percentage: "75%" },
      { skill: "Tableau", percentage: "65%" },
      { skill: "Google Looker Studio", percentage: "40%" },
    ],
  },
  {
    title: "Tools & Other Languages",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Google Colab", percentage: "80%" },
      { skill: "Jupyter Notebook", percentage: "80%" },
      { skill: "Google Analytics", percentage: "80%" },
      { skill: "Android Studio", percentage: "60%" },
      { skill: "C programming", percentage: "90%" },
      { skill: "C#", percentage: "85%" },
      { skill: ".Net", percentage: "85%" },
      { skill: "Python", percentage: "75%" },
      { skill: "R", percentage: "70%" },
      { skill: "MATLAB", percentage: "75%" },
      { skill: "Visual Basic for Application", percentage: "80%" },
      { skill: "SnowFlake", percentage: "70%" },

    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Evo Fitness GYM Website ",
    // date: "January 2022 - Present",
    responsibilities: [
      "It showcases the features and services offered by the gym, including classes, benefits, and contact information",
      "Built application using TypeScript, React, and Framer Motion",
    ],
    gitUrl: "https://github.com/PalampalliPraneeth/Gym-Website",
    webUrl: "https://evo-gym-fitness.vercel.app/"
  },
  {
    id: 2,
    title: "Wordle Clone ",
    // date: "January 2022 - Present",
    responsibilities: [
      "Wordle Clone is a web-based game inspired by the popular word-guessing game Wordle.",
      "Built application using React.js",
    ],
    gitUrl: "https://github.com/PalampalliPraneeth/Wordle-Clone",
    webUrl: "https://wordle-clone-95um.vercel.app/"
  },
  {
    id: 3,
    title: "Weather Application",
    // date: "January 2022 - Present",
    responsibilities: [
      "A simple weather application built with React that allows users to get the current weather information for a specific location",
      "The app fetches weather data from the OpenWeatherMap API",
    ],
    gitUrl: "https://github.com/PalampalliPraneeth/Weather-application",
    webUrl: "https://weather-application-beta-self.vercel.app/"
  },
  {
    id: 4,
    title: "URL Web Scrapper using Gemini LLM",
    // date: "January 2022 - Present",
    responsibilities: [
      "This project is a web-based application built with Streamlit that allows users to scrape text content from a URL and ask questions about the content using a LLM (Language Learning Model) based on Gemini and Langchain agents",
      "The application utilizes the Gemini LLM from Google to provide accurate and relevant answers to the user's questions"
    ],
    gitUrl:"https://github.com/PalampalliPraneeth/Url-Web-Scrapper",
    webUrl: "https://url-web-scrapper.streamlit.app/"
    },
    {
      id: 5,
      title: "Telco Customer Churn ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Revitalized machine learning pipeline, boosting telecom customer churn prediction accuracy by 20% using TensorFlow and scikit-learn, leading to a reduction in customer attrition",
        "Addressing class imbalance using SMOTE increased minority class instances by 50%, resulting in a further 10% improvement in prediction accuracy, as measured by the area under the ROC curve",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Telcom-Customer-Churn"
    },
  {
    id: 6,
    title: "Sentimental Analysis using Amazon Reviews",
    // date: "January 2022 - Present",
    responsibilities: [
      "Developed a Python-based sentiment analyzer for Amazon.com reviews, achieving a 90% accuracy rate in categorizing sentiments as positive, negative, and neutral",
      "Engineered a neural network utilizing Keras, resulting in a 20% increase in precision for sentiment analysis"
    ],
    gitUrl:"https://github.com/PalampalliPraneeth/Sentiment-analysis"
    },
    {
      id: 7,
      title: "Red Wine Quality Prediction: A Multivariate Regression Analysis ",
      // date: "January 2022 - Present",
      responsibilities: [
        "This project analyzes the quality of red wine using various machine learning models, including linear regression, polynomial regression, decision trees, and random forests",
        "The analysis uses the red wine quality dataset, exploring relationships between chemical properties and wine quality ratings",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Red-Wine-Quality-"
    },
];
