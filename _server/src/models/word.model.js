const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    en: { type: String, trim: true, required: true },
    vn: { type: String, trim: true, required: true },
    isMemorized: { type: Boolean, default: false },
})

const WordModel = mongoose.model('Word', wordSchema);

class Word extends WordModel {
    static createWord(en, vn, isMemorized) {
        const word = new Word({ en, vn, isMemorized });
        return word.save();
    }
}

module.exports = { Word };
