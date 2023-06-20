// import people from './users.js'
// let users = people
import * as usersDao from './users-dao.js'

// const findUsers = (req, res) => {
//     const type = req.query.type
//     if(type) {
//         const usersOfType = users
//         .filter(u => u.type === type)
//         res.json(usersOfType)
//         return
//     }

//     res.json(users)
//  }
const findUsers = async (req,res) =>{
  const user=await usersDao.findUsers();
  res.json(user);
}


const findUserById = async (req, res) => {
    const userId = req.params.uid;
    // const user = users
    //     .find(u => u._id === userId);
    const user=await usersDao.findUserById(userId);
    res.json(user);
}
  
const createUser = async (req, res) => {
    const newUser = req.body;
    // newUser._id = (new Date()).getTime() + '';
    const user=await usersDao.createUser(newUser);
    // users.push(newUser);
    res.json(newUser);
}

const deleteUser = async (req, res) => {
    const userId = req.params['uid'];
    let del=await usersDao.deleteUser(userId);
    // users = users.filter(usr => usr._id !== userId);
    res.sendStatus(200);
  }

const updateUser = async (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    // users = users.map((usr) =>
    //     usr._id === userId ?
    //     {...usr, ...updates} :
    //     usr
    // );
    let update=await usersDao.updateUser(userId,updates);
    res.json(update);
}

  
// const UserController = (app) => {
//    app.get('/api/users', findUsers)
//    app.get('/api/users/:uid', findUserById);
//    app.post('/api/users', createUser);
//    app.delete('/api/users/:uid', deleteUser);
//    app.put('/api/users/:uid', updateUser);
// }

const UserController = (app) => {
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser);
 }

export default UserController