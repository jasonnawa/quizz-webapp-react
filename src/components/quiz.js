import React, { useEffect } from "react";
import "../index.css"
import {decode} from 'html-entities';
import { nanoid } from 'nanoid'

export default function Quiz(props){
    const allAnswers = props.answers
    const questions = props.questions
    const correctAnswers = props.correctAnswers
    let id = [0,1,2,3]
    return(

      <div className="container">
    <form onSubmit={props.handleSubmit}>
      <div className="All-question-box">
      
       {questions && questions.map((eachQuestion, index)=>{
       
        return (
       
      <div className="Question-box">
      
        <h2>{decode(eachQuestion)}</h2>
      <div className="answers-row">
      
      <input type="radio" id="option1" name="option1" />
      <label onClick={()=>props.addSelectedOption(index, allAnswers[index][0] )} htmlFor="option1" 
    className={`${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][0])? "active" : ""} 
    ${props.submit && correctAnswers.includes(allAnswers[index][0])?"correct":"incorrect"}
    ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][0]) && props.submit && correctAnswers.includes(allAnswers[index][0])?"neutral":""}
    ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][0]) && props.submit && !correctAnswers.includes(allAnswers[index][0])?"wrong":""}
    `}>{decode(allAnswers[index][0])}</label> 
      
        
      <input type="radio" id="option2" name="option2" />
      <label onClick={()=>props.addSelectedOption(index,allAnswers[index][1] )} htmlFor="option2" 
      className={`${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][1])? "active" : ""}
      ${props.submit && correctAnswers.includes(allAnswers[index][1])?"correct":"incorrect"}
      ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][1]) && props.submit && correctAnswers.includes(allAnswers[index][1])?"neutral":""}
      ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][1]) && props.submit && !correctAnswers.includes(allAnswers[index][1])?"wrong":""}`}>{decode(allAnswers[index][1])}</label> 
      

      <input type="radio" id="option3" name="option3" />
      <label onClick={()=>props.addSelectedOption(index,allAnswers[index][2] )} htmlFor="option3" 
      className={`${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][2])? "active" : ""}
      ${props.submit && correctAnswers.includes(allAnswers[index][2])?"correct":"incorrect"}
      ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][2]) && props.submit && correctAnswers.includes(allAnswers[index][2])?"neutral":""}
            ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][2]) && props.submit && !correctAnswers.includes(allAnswers[index][2])?"wrong":""}`}>{decode(allAnswers[index][2])}</label>  
      
      
      <input type="radio" id="option4" name="option4" /> 
      <label onClick={()=>props.addSelectedOption(index,allAnswers[index][3] )} htmlFor="option4" 
      className={`${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][3])? "active" : ""}
      ${props.submit && correctAnswers.includes(allAnswers[index][3])?"correct":"incorrect"}
      ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][3]) && props.submit && correctAnswers.includes(allAnswers[index][3])?"neutral":""}
         ${props.selectedOptions && props.selectedOptions.includes(allAnswers[index][3]) && props.submit && !correctAnswers.includes(allAnswers[index][3])?"wrong":""}`} >{decode(allAnswers[index][3])}</label> 
      
        <hr/>
      </div>
      
      
      
      </div>
       )
       
       })}
        
      </div>
      
     <div className="center"> {props.submit && <div className="message">Your scored {props.score}/5 correct answers </div>}
      {props.submit?  
      <button className="checkanswer--btn" onClick= {()=>window.location.reload()}>Play again</button>:
      
      <button type="submit" className="checkanswer--btn">Show answers</button>}</div>
      </form>
      
      
      </div>
        
    )
    
}