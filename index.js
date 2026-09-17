let express=require('express');
let app=express();
let hrRoute=require('./routes/hr_route');
let empRoute=require('./routes/emp_route');
let mongoose=require('mongoose');
app.use(express.json());
 mongoose.connect("mongodb://127.0.0.1:27017/hrmanagment")
 .then(()=>{
console.log("MongoDB connected");
 }).catch((err)=>{
console.log(err);
 });
app.use('/api/hr', hrRoute);
app.use('/api/employes', empRoute);

//run the server
app.listen(3000, ()=>{
    console.log("Server is listening on port 3000")
})
//open browser type http://localhost:3000/getStudents

