let courses = [];
let id = 0;
const get = (req, res) => {
    return res.status(200).json({courses})
};

const getOne = (req, res) => {
    console.log(req.params);
    let {id} = req.params;
    let obj = courses.find(course=>course.id == id)
    return res.status(200).json({data:obj})
};

const create = (req, res) => {
    //courses.push(req.body);
    //courses = [(req.body, ...courses)];
    id++
    let obj = req.body
    obj.id = id.toString();
    courses=[obj,...courses]
    res.status(201).json({courses});
};

const upDate = (req,res)=>{
    let {id} = req.params;
    let obj = req.body;
    obj.id = id.toString();
    let newData = courses.map((course)=>{
        if(course.id==id) {
            return obj;
        }
        return course
    })
    return res.send({newData});
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