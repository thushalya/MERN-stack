import  { useState } from  'react'
import { Form,Button } from 'react-bootstrap'
import axios from "axios";


function AddStudent() {
    const [name,setName] =useState("");
    const [age,setAge] =useState("");
    const [gender,setGender] =useState("");

    function sendData(e){
        e.preventDefault();

        const newStudent ={
            name,
            age,
            gender,
        }

        axios.post('http://localhost:8070/student/add',newStudent).then(()=>{
            alert ("Student added")
            
        }).catch((err)=>alert(err))
    }

  return (
      <div className='container'>
    <Form onSubmit={sendData}>
  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Student Name" onChange={(e)=>{setName(e.target.value)}} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Age">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Enter Student Age"  onChange={(e)=>{setAge(e.target.value)}}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="Gender">
    <Form.Label>Gender</Form.Label>
    <Form.Control type="text" placeholder="Enter Student Gender"  onChange={(e)=>{setGender(e.target.value)}} />
  </Form.Group>

 
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
</div>
  )
}

export default AddStudent