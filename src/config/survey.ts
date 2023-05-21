const defaultSurveyJSON = {
  title: "COVID Screening",
  description:
    "This survey is made to collect information about potential COVID infected patients",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          title: "Do you have any of the following new or worsening symptoms?",
          isRequired: true,
          choices: [
            {
              value: "Item 1",
              text: "Fever or chills",
            },
            {
              value: "Item 2",
              text: "Cough",
            },
            {
              value: "Item 3",
              text: "Difficulty in breathing",
            },
            {
              value: "Item 4",
              text: "Sore throat",
            },
            {
              value: "Item 5",
              text: "Runny or stuffy nose",
            },
            {
              value: "Item 6",
              text: "Decrease or loss of taste or smell",
            },
            {
              value: "Item 7",
              text: "Nausea, vomiting or diarrhea",
            },
            {
              value: "Item 8",
              text: "Not feeling well, extreme tiredness or sore muscles",
            },
            {
              value: "Item 9",
              text: "Pink eye or headache",
            },
            {
              value: "Item 10",
              text: "None of the above",
            },
          ],
        },
        {
          type: "boolean",
          name: "question2",
          title:
            "Does anyone in your household have one or more of the above symptoms?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "question3",
          title:
            "Have you been notified as a close contact of someone with COVID-19?",
          isRequired: true,
        },
        {
          type: "boolean",
          name: "question4",
          title:
            "In the last 14 days, have you or anyone in your household travelled outside of India?",
          isRequired: true,
        },
      ],
    },
  ],
};
const defaultSurveyCSS = {
  header: "bg-primary text-white p-3",
  body: "bg-light",
  completedPage: "p-3",
};
const defaultSurveyDATA = {};

const defaultSurveyConfig = {
  defaultSurveyCSS,
  defaultSurveyDATA,
  defaultSurveyJSON,
};

export default defaultSurveyConfig;
