const express = require('express')
const router = express.Router()
const { addEmployee,addDepartment, getDocData } = require('../controllers/controller')

//Get get data
router.get('/',getDocData)

//Add new employee
router.post('/add-employee',addEmployee)

//Add new department
router.post('/add-department',addDepartment)

module.exports = router