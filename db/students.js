const database = require('./index').connect();

let teacherSeeds = {
    collectionStudents : database.collection('students'),
    insert : async function(query){
        try{
            let insertResult = await this.collectionStudents.insertOne(query);
        }
        catch(err){
            console.log("Something Wrong");
        }
    },
    getStudent : async function(rollno){
        try{
            let findOneResult = await this.collectionStudents.findOne({"roll_number":rollno});
            return findOneResult;
        }
        catch(err){
            console.log("Something Wrong");
        }
    },
    getAll : async function(){
        try{
            let findResult = await this.collectionStudents.find({}).toArray();
            return findResult;
        }
        catch(err){
            console.log("Something Wrong");
        }
    },

}

module.exports = teacherSeeds;

