const  Sequelize=require('sequelize');

const db=require('../db');

const Users=db.define('users',{
	id: {type: Sequelize.Integer, allowNull: false},
	userName: {
		type: Seqelize.STRING,
		 allowNull: false, 
		 validate:{
			notEmpty:false
	},
	currentCourse:{
		type: Seqelize.STRING

	},
	courseStatus:{
		type: Seqelize.STRING
	},
	progress:{
		type: Seqelize.FLOAT
	}

})

module.exports=Users