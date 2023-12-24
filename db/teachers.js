const database = require('./index').connect();

let teacherSeeds = {
    collectionTeacher : database.collection('teachers'),
    insert : async function(query){
        try{
            let insertResult = await this.collectionTeacher.insertOne(query);
            console.log(insertResult);
        }
        catch(err){
            console.log("Something Wrong");
        }
    },
    getAll : async function(){
        try{
            let findResult = await this.collectionTeacher.find({}).toArray();
            console.log(findResult);
        }
        catch(err){
            console.log("Something Wrong");
        }
    },

}

module.exports = teacherSeeds;

