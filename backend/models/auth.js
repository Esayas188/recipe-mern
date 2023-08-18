const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
      }
});

userSchema.statics.signup = async function(email,password){
    // validation
    if (!email || !password){
        throw Error('all fields must be filled')

    }
    if(!validator.isEmail(email)){
        throw Error('invalid email')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('password is not strong enough.')
    }

    const exist = await this.findOne({email})

    if(exist){
        throw Error('email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email, password:hash})

    return user
}
// static login method
userSchema.statics.login = async function(email,password){

    if(!email ||!password){
        throw Error('all fields must be fill')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('email is not registered')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect password')
    }
    return user


}

User = mongoose.model('User',userSchema);

module.exports = User