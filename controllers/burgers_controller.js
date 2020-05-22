let express = require("express");
let router = express.Router();
let db = require("../models");

// module.exports = function (app) {

// };

router.get("/", function (req, res) {
    console.log("got this far")
    db.Burger.findAll({}).then(function (dbBurger) {
        console.log("got this far 2")
        // res.json(dbBurger);
        res.render("index", dbBurger)
    });
});

router.post("/api/burgers", function (req, res) {
    db.Burger.create({
        name: req.body.name,
    }).then(function (dbBurger) {
        res.json(dbBurger)
    });
});

router.put("/api/burgers", function (req, res) {
    db.Burger.update({
        name: req.body.name,
    }, {
        where: {
            id: req.body.id
        }
    })
        .then(function (dbBurger) {
            res.json(dbBurger);
        });
});

module.exports = router;

// router.get("/", function(req, res) {
//     burger.selectAll(function(data) {
//         let hbsObject = {
//             burgers: data
//         };
//         console.log(hbsObject);
//         res.render("index", hbsObject);
//     });
// });

// router.post("/api/burgers", function(req, res) {
//     burger.insertOne([
//         "name"
//     ], [
//         req.body.name
//     ], function (result) {
//         res.redirect("/")
//     }); 
// });

// router.put("/api/burgers/:id", function(req, res){
//     let cols = ["devoured"];
//     let vals = [JSON.parse(req.body.devoured)];

//     burger.updateOne(
//         cols, vals, req.params.id,

//         function(result) {
//         if (result.changedRows == 0){
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


