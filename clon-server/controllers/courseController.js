const Course = require('../models/course');
let courses = [];
let id = 0;
const get = async(req, res) => {
    let allCourses = await Course.find({});
    return res.status(200).json({allCourses});
};

const getOne = async(req, res) => {
    //console.log(req.params);
    let {id} = req.params;
    //let obj = courses.find(course=>course.id == id)
    let course = await Course.findById({_id:id});
    return res.status(200).json({course});
};

const create = async(req, res) => {
    //courses.push(req.body);
    //courses = [(req.body, ...courses)];
    // id++
    // let obj = req.body
    // obj.id = id.toString();
    // courses=[obj,...courses]
    // res.status(201).json({courses});
    
    const course=req.body;
    const newCourse=new Course(course);
    await newCourse.save();
    return res.status(201).json({msg:'el curso fue creado con éxito', course:newCourse});
};

const upDate = async(req,res)=>{
    let {id} = req.params;
    let obj = req.body;
    let courses = await Course.findByIdAndUpdate(id, obj, {new:true});

    // obj.id = id.toString();
    // let newData = courses.map((course)=>{
    //     if(course.id==id) {
    //         return obj;
    //     }
    //     return course
    // })

    return res.send({courses});
};

const del = (req,res) => {
    let {id} = req.params;
    let newCourses = courses.filter(course=>course.id!=id)
    courses = newCourses
    return res.status(202).json({courses}) 
};

module.exports={
    get,
    getOne,
    create,
    upDate,
    del
}