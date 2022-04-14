const express = require('express');
const {
	getAllFromDatabase,
	addToDatabase,
	getFromDatabaseById,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
} = require('./db');
const ideaRouter = express.Router();

// get array of ideas
ideaRouter.get('/', (req, res, next) => {
	res.send(getAllFromDatabase('ideas'));
});

// add idea
ideaRouter.post('/', (req, res, next) => {
	res.status(201).send(addToDatabase('ideas', req.body));
});

// get idea by id
ideaRouter.get('/:ideaId', (req, res, next) => {
	res.send(getFromDatabaseById('ideas', req.body.ideaId));
});

// update instance by id
ideaRouter.put('/:ideaId', (req, res, next) => {
	res.send(updateInstanceInDatabase('ideas', req.body));
});

// delete idea
ideaRouter.delete('/:ideaId', (req, res, next) => {
	res.send(deleteFromDatabasebyId('ideas', req.params.ideaId));
});

module.exports = ideaRouter;
