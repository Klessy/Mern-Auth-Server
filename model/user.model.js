import mongoose from "mongoose";


const userSchema = mongoose.userSchema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
        require: true,
    }, 
    
}, {timestamp: true});

const User = mongoose.model('User', userSchema);

export default User;

