export const SKILLS = [
  {
    title: "Front-End/UI",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "HTML5", percentage: "90%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "75%" },
      { skill: "BootStrap", percentage: "75%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "React js", percentage: "80%" },
      { skill: "Node js", percentage: "70%" },
      { skill: "React Native", percentage: "60%" },
      { skill: "TypeScript", percentage: "60%" },
      { skill: "NPM", percentage: "60%" },

    ],
  },
  {
    title: "Data Analysis",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Python", percentage: "75%" },
      { skill: "R", percentage: "70%" },
      { skill: "Excel", percentage: "80%" },
      { skill: "Power BI", percentage: "50%" },
      { skill: "Tableau", percentage: "65%" },
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
      { skill: "SQL", percentage: "85%" },
      { skill: "Oracle", percentage: "80%" },
      { skill: "MS SQL", percentage: "75%" },
    ],
  },
  {
    title: "Tools & Languages",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git & GitHub", percentage: "85%" },
      { skill: "Google Analytics", percentage: "65%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Google Colab", percentage: "80%" },
      { skill: "Jupyter Notebook", percentage: "80%" },
      { skill: "Android Studio", percentage: "40%" },
      { skill: "C programming", percentage: "70%" },
      { skill: "MATLAB", percentage: "75%" },
      { skill: "Visual Basic for Application", percentage: "70%" },

    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Sentimental Analysis using Amazon Reviews",
    // date: "January 2022 - Present",
    responsibilities: [
      "Developed a Python-based sentiment analyzer for Amazon.com reviews, achieving a 90% accuracy rate in categorizing sentiments as positive, negative, and neutral",
      "Engineered a neural network utilizing Keras, resulting in a 20% increase in precision for sentiment analysis"
    ],
    gitUrl:"https://github.com/PalampalliPraneeth/Sentiment-analysis"
    },
    {
      id: 2,
      title: "Telco Customer Churn ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Revitalized machine learning pipeline, boosting telecom customer churn prediction accuracy by 20% using TensorFlow and scikit-learn, leading to a reduction in customer attrition",
        "Addressing class imbalance using SMOTE increased minority class instances by 50%, resulting in a further 10% improvement in prediction accuracy, as measured by the area under the ROC curve",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Telcom-Customer-Churn"
    },
    {
      id: 3,
      title: "Red Wine Quality Prediction: A Multivariate Regression Analysis ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Utilized R to analyze physicochemical data of red wine variants, generating actionable insights for quality prediction, achieving a 15% increase in predictive accuracy compared to previous methods",
        "Developed interactive visualizations using Matplotlib and ggplot2 to illustrate correlations between key variables, facilitating a 30% improvement in understanding wine quality determinants",
      ],
      gitUrl:"https://github.com/PalampalliPraneeth/Red-Wine-Quality-"
    },
    {
      id: 4,
      title: "Wordle Clone ",
      // date: "January 2022 - Present",
      responsibilities: [
        "Developed a Wordle clone app using React.js, which replicates the popular word guessing game",
        "Achieved 15% improvement in user engagement through responsive design implementation",
      ],
      gitUrl: "https://github.com/PalampalliPraneeth/Wordle-Clone",
      webUrl: "https://wordle-clone-95um.vercel.app/"
    },
    {
      id: 5,
      title: "Weather Application",
      // date: "January 2022 - Present",
      responsibilities: [
        "Spearheaded the development of a weather application utilizing React.js, Axios, and OpenWeatherMap API, delivering real-time weather updates with precision and efficiency",
        "Successfully integrated key weather metrics such as temperature, feels-like temperature, humidity, and wind speed, enhancing user experience and satisfaction by 30%",
      ],
      gitUrl: "https://github.com/PalampalliPraneeth/Weather-application",
      webUrl: "https://weather-application-beta-self.vercel.app/"
    },
];
