const UserModel = require('../models/UserModel');
const usersController = {};

usersController.getUsers = async (req,res) => {
   const users = await UserModel.find();
   // res.json({msg:'AQUI VAN LOS DATOS DE TODOS LOS USUARIOS'})
    res.json(users);
}

usersController.createUsers = async (req,res) => {
    
   const {username} = req.body;
   const newUser = new UserModel({username}) 
    //console.log(newUser)
    await newUser.save()
    res.json({msg:'User Create'}) 
}

usersController.getUser = async (req,res) => {
    const user= await UserModel.findById(req.params.id)
    res.json(user)
}

usersController.updateUSer = async (req,res) => {
    const {username} = req.body;
    await  UserModel.findOneAndUpdate({_id:req.params.id},{username})
    res.json( { msg: 'User updated' } )
}

usersController.deleteUSer = async (req,res) => {
    await UserModel.findByIdAndDelete(req.params.id)
    res.json({msg:'Usuario eliminado' })
}

module.exports = usersController;