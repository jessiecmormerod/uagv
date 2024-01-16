// Load the observable runtime
import { Runtime, Inspector } from "//cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your survey observable notebook
const survey = Runtime.module(function survey() {

  // Survey questions
  const questions = [
    {text: "What is your age?", type: "number"},
    {text: "What is your gender?", type: "text"},
    {text: "Which food do you like most?", type: "text"}
  ];

  // Answers object
  const answers = Object.fromEntries(questions.map(q => [q.text, ""]));

  // Return answers
  return new Inspector(answers);
  
});

// Render the survey 
survey.value;