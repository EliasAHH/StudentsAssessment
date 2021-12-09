import { useState } from 'react'
import  "./Student.css";
import TagLine from '../TagLine';

const Student = (props) => {

    const { city, company, email, id, firstName,  lastName, pic, skill, grades} =  props.student;

   const getAverage = () =>  {
        return grades.reduce((acc, curr) => {
           return acc + parseInt(curr)
       },0) / grades.length
   }

   const displayGrades = () => {
    return grades.map((g,i) =>{
        return(<li>
                Test {i+1}: {g}%
            </li>
        )
    })}

    const displayTags = () => {
        return props.student.tags.map(t => {
            return(
                <p>{t}</p>
            )
        })
    }

    const handleEnter = (e) => {
        // i probably want a function that takes in the student and the tag and adds it to the
        if(e.key === "Enter") {
            let tag =  e.target.value
            props.addTagToStudents(props.student, tag)
        }
    }


     return(
         <div className="student-container">
             <div className="student-image">
                 <img src={pic} alt="Icon for students" />
            </div> 
             <div className="student-info">
                <h1>{firstName} {lastName}</h1>
                Email: {email }<br/>
                Company: {company} <br/>
                Skill: {skill} <br/>
                Average: {getAverage()}%<br/>
                <ul>
                {displayGrades()}
                </ul>
                {props.student.tags? displayTags() : null}

            <input 
                placeholder="Add a Tag"
                type="text"
                name="tag"
                onKeyPress={handleEnter}
                />
            </div>
         </div>
     )
}

export default Student