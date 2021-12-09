import { useState, useEffect }  from 'react';
import Student from '../components/Student/Student';


const StudentsContainer = () => {

    const [students,setStudents] = useState([])

    useEffect(() => {
        console.log("How many times am I hitting?")
        fetch('https://api.hatchways.io/assessment/students')
        .then(r => r.json())
        .then(r =>  setStudents(r.students))
    },[])



    const addTagToStudents = (student, tag) => {
        let studentsCopy =  students.slice()
        let index = studentsCopy.indexOf(student)
        if (student["tags"]) {
            studentsCopy[index].tags.push(tag)
        }else {
            student["tags"] = []
            studentsCopy[index].tags.push(tag)
        }
        setStudents(studentsCopy)
    }


    const sendStudents = () => {
        return students.map(s => <Student student={s} key={s.id} addTagToStudents={addTagToStudents} />)
    }


    return(
        <div> {sendStudents()}</div>
    )

}

export default StudentsContainer