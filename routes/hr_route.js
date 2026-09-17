let express = require('express');
let router = express.Router();
router.get("/viewemployees", (req, res) => {
    res.send("View employees route");
});
//localhost:3000/api/hr/assigntask
router.post("/assigntask", (req, res) => {
    res.send("Assign task route");
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