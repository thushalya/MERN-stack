import {useEffect, useState} from 'react'
import axios from 'axios'


function AllStudents() {
    const [students,setStudents] =useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message)
            })
        }

        getStudents();
    },[])
  return (
    <div>AllStudents</div>
  )
}

export default AllStudents