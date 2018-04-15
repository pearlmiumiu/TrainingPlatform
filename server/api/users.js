const router=require('express').Router();
const { Users }=require('../db/models');

module.exports=router;

// router.get('/hello', (req, res) => res.send({hello:'world!!!!!!!!!!'}))

// router.get('/login', (req, res)=>{
// 	console.log('please log in here!')

// })

router.get('/', (req, res, next)=>{
	Users.findAll()
		.then(users=>console.log('helloooooooo'))
		.catch(next)
})

