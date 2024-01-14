let studentsCollection = require('../db/students');
let controller = {
    // home
    home : async function(req, res){
        res.render('index', {students : await studentsCollection.getAll()});
    },
    // add new student
    addStudent: function(req, res){
        studentsCollection.insert(req.body);
        res.send({msg: "student added successfully"});
    },
    // get one student
    getStudent: async function(req, res){
        let student  = await studentsCollection.getStudent(req.params.studentNo);
        res.json(student);
    },
    // get all student
    getAllStudents: async function(req, res){
        res.json(await studentsCollection.getAll());
    },
    // update student
    updateStudent: async function(req, res) {
        let updateStudent = await studentsCollection.updateStudent(req.body);
        let result = updateStudent.matchedCount ? "student updated successfully" : "student update failed";
        res.json({msg: result});
    },
    // delete student
    deleteStudent: async function(req, res) {
        let r = await studentsCollection.deleteStudent(req.params.studentNo);
        let result = r.deletedCount ? "student deleted successfully" : "student deletion failed";
        res.json({msg: result });
    },
    // test
    test : function(req, res){
        res.send( "johncool,");
    }
}

module.exports = controller;