const router=require('express').Router();
const { Courses }=require('../db/models');

module.exports=router;

router.get('/hello', (req, res) => res.send({hello:'world!'}))

router.get('/', function(req, res, next){
	Courses.findAll()
		.then(courses=>console.log( 'all the courses are here'))
		.catch(next)
});