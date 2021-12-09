

const Student = (props) => {

   console.log(props.student);

   const { city, company, email, id, lastname, pic, skill, grades} =  props.student;

   const getAverage = () =>  {
        return grades.reduce((acc, curr) => {
           return acc + parseInt(curr)
       },0) / grades.length
   }

     return(
         <div>
             <img src={pic} alt="Icon for students" /> City: {city} <br/>
             Company: {company} <br/>
             Email: {email }<br/> <br/>
             Average: {getAverage()}%
         </div>
     )
}

export default Student