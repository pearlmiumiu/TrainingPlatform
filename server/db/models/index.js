const Courses=require('./Courses')
const Users=require('./Users')

Courses.belongTo(Users);

module.exports={
	Courses, 
	Users
}