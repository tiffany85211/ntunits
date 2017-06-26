import mongoose, {Schema} from 'mongoose';
 
const UserSchema = new Schema({
    userID: String,
    userName: String,
    userPicURI: String,
    friendList: [],
    answer: {type: [Number], default: [0,0,0,0,0,0,0,0,0,0,0,0,0]}
})

const User = mongoose.model('post', UserSchema);

module.exports = User;