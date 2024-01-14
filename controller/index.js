const routes = require("express").Router();
const controller = require('./routes');

const multer = require('multer');
const upload = multer();

routes.get('/', controller.home)   // home
routes.post('/add-student', upload.none(), controller.addStudent)   // add new student
routes.get('/student/:studentNo', controller.getStudent)   // get student
routes.put('/update/student', upload.none(), controller.updateStudent)   // update student
routes.delete('/delete/student/:studentNo', controller.deleteStudent)   // delete student
routes.get('/get-students', controller.getAllStudents)   // all students
routes.get('/test', controller.test) // test

module.exports = routes;