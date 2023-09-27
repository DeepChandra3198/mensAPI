const express = require("express");

const router = express()
const MenRanking = require("../models/mens");

router.get("/",(req,res)=>{
    res.send('<img src="" alt="Italian Trulli">')
})

//handling post request
router.post("/mens",async(req,res)=>{
    try {
        const addingMensRecords = new MenRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens)
    } catch (error) {
        res.status(400).send(error);
    }
})

//handling get request
router.get("/mens",async(req,res)=>{
    try {
        const getMens = await MenRanking.find({}).sort({"ranking":1})
        res.send(getMens)
    } catch (error) {
        res.status(400).send(error);
    }
})

//handling get request using id (individual)
router.get("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MenRanking.findById({_id})
        res.send(getMen)
    } catch (error) {
        res.status(400).send(error);
    }
})

//handling get request patch using id (individual)
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const getMen = await MenRanking.findByIdAndUpdate(_id , req.body, {new:true})
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error);
    }
})

//handling delete request of individual 
router.delete("/mens/:id",async(req,res)=>{
    try {
        const getMen = await MenRanking.findByIdAndDelete(req.params.id)
        res.send(getMen)
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;
