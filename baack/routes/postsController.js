const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { PostsModel } = require ('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if (!err)res.send(docs);
        else console.log("error To Get Data : "+ err)
    })
});

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        titre: req.body.titre,
        contenu: req.body.contenu,
    })
    newRecord.save((err, docs)=> {
        if (!err)res.send(docs);
        else console.log("error creating new data : " + err)
    })
});
// update
router.put("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id)

    const updateRecord = {
        titre: req.body.titre,
        contenu: req.body.contenu,
    }

    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set : updateRecord},
        {new : true},
        (err, docs) => {
            if (!err)res.send(docs);
            else console.log("Update error : " + err);
        }
    )
})

router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID unknow : " + req.params.id);

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err)res.send(docs)
            else console.log("Delete error : " + err);
        })
        });

    module.exports = router;