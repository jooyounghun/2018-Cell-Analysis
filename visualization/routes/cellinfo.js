var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conf = require('../conf/db');
var pool = mysql.createPool(conf.local);

/* router select query in bigdata DB */

router.get('/cell', function(req, res){
	console.log("in cell route");

	pool.getConnection(function(err, conn){
		conn.query('select index2,Ratio from bd3'
			,function (err, rows){

			if(err) return res.status(500).json({error: err});
			if(!rows) return res.status(400).json({error: 'not found'});

			var msg = {
				status 	: 'success',
				err 	: '',
				result	: rows,
				length	: rows.length
			};
			res.json(msg);
		});
		conn.release();
	});
});









/* router insert query in bigdata DB */
//router.post('/:table/:begin/:end', function(req, res){});

/* router delete query in bigdata DB */
//router.delete('/:table/:begin/:end', function(req, res){});

module.exports = router;
