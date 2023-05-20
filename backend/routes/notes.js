const express = require('express')
const router = express.Router();
const Notes = require("../models/Notes");
var fetchUser = require("../middleware/fetchUser");

//Route 1: Get all notes from database: GET "/api/auth/fetchallnotes". Login required

router.get('/fetchallnotes', fetchUser, async (req,res)=>{
    res.json([])
})

module.exports= router