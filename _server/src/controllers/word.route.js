const express = require('express');
const { Word } = require('../models/word.model');

const wordRouter = express.Router();

wordRouter.get('/', (req, res) => {
    Word.find({})
    .then(words => res.send({ success: true, words }))
    .catch(error => res.status(500).send({ success: false, message: error.message }));
});

wordRouter.post('/', (req, res) => {
    const { en, vn, isMemorized } = req.body;
    Word.createWord(en, vn, isMemorized)
    .then(word => res.status(201).send({ success: true, word }))
    .catch(error => res.status(400).send({ success: false, message: error.message }));
});

wordRouter.put('/:_id',(req, res) => {
    const { isMemorized } = req.body;
    Word.findByIdAndUpdate(req.params._id, { isMemorized })
    .then(story => {
        if (!story) throw new Error('Cannot find story.');
        res.send({ success: true, story });
    })
    .catch(error => res.status(400).send({ success: false, message: error.message }));
});

wordRouter.delete('/:_id', (req, res) => {
    Word.findByIdAndRemove(req.params._id)
    .then(word => {
        if (!word) throw new Error('Cannot find word.');
        res.send({ success: true, word });
    })
    .catch(error => res.status(404).send({ success: false, message: error.message }));
});

module.exports = { wordRouter };
