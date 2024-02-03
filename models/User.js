const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 50
    },

    email:{
        type: String,
        required: [true, "Please provide email"],
        minlength: 3,
        maxlength: 50,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 3,
    },

    certificates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Certificate' }],

    profileURL: {
        type: String
    },
    aboutUs: {
        type: String
    },
    noOfProjects: {
        type: Number,
        default: 0,
    },
    skills: [{
        type: String,
        trim: true
    }],
    socialProfiles: {
        linkedin: {
            type: String
        },
        github: {
            type: String
        }
    },
    certificates: {
        certificate1: {
            type: String
        },
        certificate2: {
            type: String
        },
        certificate3: {
            type: String
        }
    }

});

UserSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

UserSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


module.exports = mongoose.model("User", UserSchema);