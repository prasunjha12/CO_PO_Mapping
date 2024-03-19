const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const UserModel = require("./models/Users");
const COPOModel = require('./models/cos');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error(err));

// Routes for User Model
app.get('/users', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;

    // Ensure rollno and name are compulsory
    const { rollno, name, ...updateFields } = req.body;

    if (!rollno || !name) {
        return res.status(400).json({ error: 'RollNo and Name are compulsory fields' });
    }

    const updateData = {
        rollno,
        name,
        ...updateFields,
    };

    UserModel.findByIdAndUpdate({ _id: id }, updateData, { new: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.json(err));
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post("/users", (req, res) => {
    const newUser = new UserModel({
        rollno: req.body.rollno,
        name: req.body.name,
        ...req.body, // Include all other fields provided in the request body
    });

    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

// Routes for COPOModel
app.get('/cos', (req, res) => {
    COPOModel.find({})
        .then(cos => res.json(cos))
        .catch(err => res.json(err));
});

app.get('/cos/:id', (req, res) => {
    const id = req.params.id;
    COPOModel.findById({ _id: id })
        .then(co => res.json(co))
        .catch(err => res.json(err));
});

app.put('/cos/:id', (req, res) => {
    const id = req.params.id;
    const { sno, cos } = req.body;

    if (!sno) {
        return res.status(400).json({ error: 'SNo is a compulsory field' });
    }

    const updateData = {
        sno,
        cos,
    };

    COPOModel.findByIdAndUpdate({ _id: id }, updateData, { new: true })
        .then(updatedCO => res.json(updatedCO))
        .catch(err => res.json(err));
});

app.delete('/cos/:id', (req, res) => {
    const id = req.params.id;
    COPOModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post("/cos", (req, res) => {
    const newCO = new COPOModel({
        sno: req.body.sno,
        cos: req.body.cos,
    });

    newCO.save()
        .then(co => res.json(co))
        .catch(err => res.json(err));
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
