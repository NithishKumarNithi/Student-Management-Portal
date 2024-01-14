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
    updateStudent : async function(data){
        try{
            let updateOneResult = await this
                                        .collectionStudents
                                        .updateOne(
                                            { "roll_number": data.editroll_number},
                                            {
                                               $set : {
                                                "firstname" : data.editfirstname, 
                                                "lastname": data.editlastname,
                                                "email": data.editemail,
                                                "phonenumber": data.editphonenumber 
                                               }
                                            }
                                        );
            return updateOneResult;
        }
        catch(err){
            console.log("Something Wrong");
        }
    },
    deleteStudent : async function(rollno){
        try{
            let findOneResult = await this.collectionStudents.deleteOne({ roll_number: rollno});
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
            console.log(err);
            console.log("Something Wrong While Getting All");
        }
    },

}

module.exports = teacherSeeds;

