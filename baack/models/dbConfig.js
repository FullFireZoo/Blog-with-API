const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://YellowSurimi:ykzdt9AQyewyQ1FR@lesfideles.847mu.mongodb.net/Blog?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Mongodb connected")
        }
        else {
            console.log("Connection error :" + err)
        }
    })