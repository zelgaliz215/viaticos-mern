const {Router} = require ('express');
const router = Router();
const {getUsers,
       createUsers,
       getUser,
       updateUSer,
       deleteUSer} = require ('../controllers/usersController')


router.route('/')
    .get(getUsers) 
    .post(createUsers)


router.route('/:id')    
    .get(getUser) 
    .put(updateUSer)
    .delete(deleteUSer)


module.exports = router