let express = require('express');
let router = express.Router();
let { users } = require('../models/users');
let { tasks } = require('../models/tasks');

router.get("/viewemployees", (req, res) => {
    res.send("View employees route");
});
//localhost:3000/api/hr/assigntask
router.post("/assign-task",async (req, res) => {
    let data = req.body;
    let newTask = tasks(data);
    let result = await newTask.save();    
    res.send(result);
});
//localhost:3000/api/hr/viewtasks
router.get("/viewtasks", (req, res) => {
    res.send("View tasks route");
});
//localhost:3000/api/hr/deleteemp
router.delete("/delete emp", (req, res) => {
    res.send("Delete emp route");
});
module.exports = router;