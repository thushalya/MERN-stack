const router =require('express').Router();
let Student =require('../models/Student');

router.route("/add").post((req,res)=>{

    const age =req.body.age;
    const name =Number(req.body.name);
    const gender =req.body.gender;

    const newStudent =new Student ({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json('Student Added')
    }).catch((err)=>{
        console.log(err);
    })

})



router.route('/').get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route('/update/:id').put(async(req,res)=>{
    let userId =req.params.id;
    const {name,age,gender} =req.body;
}) 
module.exports =router;

