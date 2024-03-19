const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    rollno: String,
    name: String,
    t1: Number,
    t2: Number,
    totaloft1t2: {
        type: Number,
        default: function () {
            return (this.t1 + this.t2) / 2;
        }
    },
    at1: Number,
    at2: Number,
    ap: Number,
    total: {
        type: Number,
        default: function () {
            return this.totaloft1t2 + this.at1 + this.at2 + this.ap;
        }
    }
});

const UserModel = mongoose.model("students", UserSchema);

module.exports = UserModel;
