const employeeModel = require("../models/employeeModel");
const departmentModel = require("../models/departmentModel");

//Get documents data
exports.getDocData = async (req, res) => {
  try {
    const employees = await employeeModel.find().populate('department').sort({createdAt:1});
    const departments = await departmentModel.find().sort({createdAt:1});
    res.status(200).json({ employees, departments });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Add new employee
exports.addEmployee = async(req, res) => {
  try {
    const{department}=req.body
    const dept = await departmentModel.findOne({_id:department})
    const newEmployee = employeeModel(req.body);
    newEmployee.save();
    res.status(201).json({message:"Success",dept:dept});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
};

//Add new department
exports.addDepartment =async (req, res) => {
    const {name} = req.body
  try {
    const deptExist = await departmentModel.findOne({name:name})
    if(!deptExist){
        const newDept = departmentModel(req.body);
        newDept.save();
        res.status(201).json("Success");
    }else{
        res.status(201).json('Data exist');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
