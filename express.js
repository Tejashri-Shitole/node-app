const express = require('express');
const app = express();
const mongoose = require('mongoose');

// To parse the request bodies
app.use(express.json());

console.log("======= Mongo DB connection =======");
async function mongoConnection() {
    try {
        await mongoose.connect("mongodb://localhost:27017/user_database");
        console.log("======= Connection Successful ====");
        
    } catch (error) {
        console.log(error); 
    }
}
mongoConnection();

//Defining Schema for students
const schemaStudent = new mongoose.Schema({
    name: {type: String},
    college: {type: String},
    marks: {type: String},
    city: {type: String}
},
{collection: "students_collection_database"}
);

//Creating the model for Schema: schemaStudent
const Student = mongoose.model('Student', schemaStudent);

//To retrieve or fetch the data
app.get("/students", async (request, response)=>{
    const allStudents = await Student.find({});
    response.status(200)
    .json({
        allStudents
    });
} );

// To create the resource
app.post("/create", (request, response)=>{
    const {name, college, marks, city} = request.body;
     Student.create({
         name,
         college,
         marks,
         city
     });
     response.send(`Successfully created Student `);
 } );

// To update the resource

app.put("/update", async (request, response)=>{
    const {name, college, marks} = request.body;
    const studentDocument = await Student.findOneAndUpdate(
        { marks: marks}, // Find the students by marks = 70
        { name: name, college: college }, // Update the fields
        { new: true, upsert: true}
    )
    response.status(200).json(studentDocument);

} );

// To delete the resource using particular field 
// http://localhost:8084/delete/request_param
app.delete("/delete/:mrk", async (request, response)=>{
    const mrk = request.params.mrk;
    const deletedStudent = await Student.findOneAndDelete({marks:mrk})
    if(!deletedStudent) {
        return response.status(404).json({ 
            "status": 404,
            "message":  `Not Found, Student with marks: ${mrk}`})
    }
    return response.status(200).json(deletedStudent);
} );


//to receive or fetch the data
/*app.get('/', (request, response) => {
    response.send(`Welcome to home page !!!`);
});

app.get('/home', (request, response) => {
    response.send(`Students Data is fetched successfully....`);
});

app.post('/about', (request, response) => {
    response.send(`Students Data Created Successfully at ${request.url}`);
});

app.put('/Update', (request, response) => {
    response.send(`Students Data Updated Successfully at ${request.url}`);
});

app.delete('/delete', (request, response) => {
    response.send(`Data no longer needed has been deleted successfully from ${request.url}`);
});*/

app.listen(8084, () => {
    console.log('Server is running on http://localhost:8084'); 
});


