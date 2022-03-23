const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const PostsModel = mongoose.model(
    "Blog",
    {
        titre:{
            type : String,
            required : true
        },
        contenu:{
            type : String,
            required : true
        }
    },
    "Articles"
)

module.exports = { PostsModel };