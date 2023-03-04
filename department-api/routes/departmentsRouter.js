import express from 'express';
import {StatusCodes,ReasonPhrases} from 'http-status-codes';

const router=express.Router();

const departments=[
    {
        id:1,
        name:'Produkti',
        content:' haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },{
        id:2,
        name:'Produkti2',
        content:' haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' 
    },{
        id:3,
        name:'Produkti3',
        content:' haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
]
router.get('/list',(req,res)=>{
    return res.json(departments)
});

router.get('/:departmentId',(req,res)=>{
    const{departmentId} = req.params;

    console.log('departmentId -',departmentId);
    const department =departments.find((department)=> department.id.toString()=== departmentId)
    if(!department)return res.status(StatusCodes.NOT_FOUND).json({error:ReasonPhrases.NOT_FOUND});
    return res.json(department);
});
router.post('/create',(req,res)=>{
   // const name=req.body.name;
    //const content=req.body.content;
    const{creatorId,name,content}=req.body;
const departmentsIds=departments.map((department)=>department.id)
const nextId=Math.max(...departmentsIds)+1
    const newDepartment ={
        id:nextId,
        creatorId,
        name,
        content
    };
    departments.push(newDepartment);

    return res.json(newDepartment);
})


export default router;