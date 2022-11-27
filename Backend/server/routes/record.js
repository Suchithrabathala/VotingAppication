const express = require("express");
 

const recordRoutes = express.Router();
 

const dbo = require("../db/conn");
 

const ObjectId = require("mongodb").ObjectId;
 
 

recordRoutes.route("/voter").get(function (req, res) {
 let db_connect = dbo.getDb("voters");
 db_connect
   .collection("voters")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/voter/:id").get(function (req, res) {
 let db_connect = dbo.getDb("voters");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("voters")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 

recordRoutes.route("/voter/add").post(function (req, response) {
 let db_connect = dbo.getDb("voters");
 let myobj = {
  voterid: req.body.voterid,
  fname: req.body.fname,
  lname: req.body.lname,
  dob:req.body.dob,
  email:req.body.email,
  eligible:req.body.eligible,
  eligiblityreason:req.body.eligiblereason,
  gender:req.body.gender,
  ward:req.body.ward

 };
 db_connect.collection("voters").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 

recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb("voters");
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    voterid: req.body.voterid,
   fname: req.body.fname,
   lname: req.body.lname,
   dob:req.body.dob,
   email:req.body.email,
   eligible:req.body.eligible,
   eligiblityreason:req.body.eligiblereason,
   gender:req.body.gender,
   ward:req.body.ward
   },
 };
 db_connect
   .collection("voters")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 

recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb("voters");
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("voters").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = recordRoutes;