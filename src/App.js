import React, { useEffect } from "react"
import Home from "./components/homescreen.js"
import Quiz from "./components/quiz.js"



function App() {

  const [homepage, setHomepage] = React.useState(true)
  const [answers, setAnswers] = React.useState(null)
  const [correctAnswers, setCorrectAnswers] = React.useState(null)
  const [questions, setQuestions] = React.useState(null)
  const [score, setScore] = React.useState(null)
  const [submit, setsubmit] = React.useState(false)
  const [selectedOptions, setSelectedOptions] = React.useState([])

 

  function addSelectedOption(id, value){
    setSelectedOptions((oldValue) => {
      const newArr = [...oldValue];
      newArr[id] = value;
      return newArr;
    })
  }
  
  let selectedOptionss 
  useEffect(()=>{
  selectedOptionss = selectedOptions
  },[selectedOptions])

 let submitted = false
  useEffect(()=>{
    submitted = submit
    },[submit])

  function togglePage(){
    setHomepage((oldHomepage)=>!oldHomepage)
  }

  // Function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to extract and shuffle all answers
function extractAllAnswers(data) {
  return data.map(item => {
      const allAnswers = [...item.incorrect_answers, item.correct_answer];
      return shuffle(allAnswers);
  });
}
//extract correct answers
function extractCorrectAnswers(data) {
  return data.map(item =>item.correct_answer);
  
}

//extract questions
function extractAllQuestions(data) {
  return data.map(item =>item.question);
  
}




  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
      .then((response) => response.json())
      .then((data) => {
      
        setCorrectAnswers(extractCorrectAnswers(data.results))
        setAnswers(extractAllAnswers(data.results))
        setQuestions(extractAllQuestions(data.results))
        
        
      })
      .catch((error) => console.log(error));
  }, []);
  
  let commonCount = 0;
  function countCommonItems(arr1, arr2) {
      // Convert arrays to sets to handle unique elements efficiently
      let set1 = new Set(arr1);
    let set2 = new Set(arr2);
      // Initialize count of common items
      
  
      // Iterate over elements in set1
      set1.forEach(item => {
          // Check if item exists in set2
          if (set2.has(item)) {
              commonCount++;
          }
      });
  
      return commonCount;
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setScore(countCommonItems(selectedOptions, correctAnswers))

    setsubmit((oldValue)=>true)    
  }

 

  return (
    <div>
      {homepage?
      <Home togglePage = {()=>togglePage()}/>:
       <Quiz questions = {questions} 
       answers = {answers}
       handleSubmit={handleSubmit}
       addSelectedOption = {addSelectedOption}
       selectedOptions = {selectedOptions}
       selectedOptionss = {selectedOptionss}
       correctAnswers = {correctAnswers}
       submit = {submit}
       submitted = {submitted}
       score = {score}
       />}
  
    </div>
  );
}

export default App;
