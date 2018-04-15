const Sequelize=require('sequelize');
const db=require('../db')

const Courses= db.define('courses', {
	courseName:{
		type: Sequelize.STRING,
		allowNull: false
	},
	courseLink:{
		type: Sequelize.STRING,
		validate:{
			isUrl: true
		}
	}
})

module.exports=Courses