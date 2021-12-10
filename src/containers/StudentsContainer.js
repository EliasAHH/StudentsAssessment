import { useState, useEffect }  from 'react';
import Student from '../components/students/Student';
import SearchBar from '../components/searchbar/SearchBar';

const StudentsContainer = () => {


    const [students,setStudents] = useState([])
    const [searchedStudents, setSearchStudents] = useState([])
    const [filtered, setFiltered] = useState(false)

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

    const searchStudent = (searchObj) => {
        let name = searchObj["name"]
        let tag = searchObj["tag"]

        if(name === "" && tag === ""){
            setFiltered(false);
        }

        if (name !== "" && tag !== ""){
            let filteredStudents = students.filter(student => { 
                let fullName = student.firstName.toLowerCase() + " " + student.lastName.toLowerCase()
                if(student.tags) {
                    return student.tags.map(t => {
                        if(t.toLowerCase().includes(tag.toLowerCase()) && fullName.includes(name.toLowerCase())) {
                            return student
                        }
                    })
                }
            })
               setSearchStudents(filteredStudents)
               setFiltered(true)
        } else if(name !== "") {
            let filteredStudents = students.filter(student => { 
                let fullName = student.firstName.toLowerCase() + " " + student.lastName.toLowerCase()
                  if (fullName.includes(name.toLowerCase())) {
                      return student
                  }
            })
            setSearchStudents(filteredStudents)
            setFiltered(true)
        } else if( tag !== "") {
            let filteredStudents = students.filter(student => { 
                if(student.tags) {
                    return student.tags.map(t => {
                        if(t.toLowerCase().includes(tag.toLowerCase())) {
                            return student
                        }
                    })
                }
        })
        console.log(filteredStudents)
            setSearchStudents(filteredStudents)
            setFiltered(true)
        } 
    }

    const displayFilteredStudents = () => {
        return searchedStudents.map(s => <Student student={s} key={s.id} addTagToStudents={addTagToStudents} />)
    }
 
   console.log(searchedStudents.length, "this is the searchedStudents array", students.length, "this is the students array")

    return(
        <div className="students">
            <SearchBar  searchStudent={searchStudent}/>
            {filtered? displayFilteredStudents():sendStudents() }
        </div>
    )

}

export default StudentsContainer