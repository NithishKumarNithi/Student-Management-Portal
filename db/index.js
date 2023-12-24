const { MongoClient } = require('mongodb');

// connection uri string
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);
let dbName;

let db = {
    connect : function (){
        try{
            dbName = client.db('student_management');
            return dbName;
        }
        catch(err){
            console.log(err)
            console.log("Database DisConnecting ...");
        }
        finally{
            // client.close();
        }
    },
}

module.exports = db;