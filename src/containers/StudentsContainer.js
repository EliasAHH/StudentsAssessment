import { useState, useEffect }  from 'react';
import Student from '../components/Student';


const StudentsContainer = () => {

    const [students,setStudents] = useState([])

    useEffect(() => {
        console.log("How many times am I hitting?")
        fetch('https://api.hatchways.io/assessment/students')
        .then(r => r.json())
        .then(r =>  setStudents(r.students))
    },[])


    const sendStudents = () => {
        return students.map(s => <Student student={s} />)
    }

    return(
        <div> {sendStudents()}</div>
    )

}

export default StudentsContainer