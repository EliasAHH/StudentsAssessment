import  "./Student.css";

const Student = (props) => {

   console.log(props.student);

   const { city, company, email, id, firstName,  lastName, pic, skill, grades} =  props.student;

   const getAverage = () =>  {
        return grades.reduce((acc, curr) => {
           return acc + parseInt(curr)
       },0) / grades.length
   }

   const displayGrades = () => {
    return grades.map((g,index) =>{
        return(<li>
                Test {index+1}: {g}%
            </li>
        )
    })}


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
            </div>
         </div>
     )
}

export default Student