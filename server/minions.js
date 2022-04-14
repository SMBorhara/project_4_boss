const express = require('express');
const minionsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db')

// get array of minions
minionsRouter.get('/api/minions', (req, res, next) => {
	const allMinions = getAllFromDatabase('minions');
	res.send(allMinions);
});

// create new minion
minionsRouter.post('/api/minions', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(`Minion Created: ${newMinion}`)
})

// get single minion by Id
minionsRouter.get('/api/minions/:minionId', (req, res, next) => {
    res.send(getFromDatabaseById('minions', req.params.id))
})

// update minion by id
minionsRouter.put('/api/minions/:minionId', (req, res, next) => {
    const updatedMinion = updateInstanceInDatabase('minions', req.body)
    res.send(updatedMinion)
    
})

// delete minion by id
minionsRouter.delete('/api/minions/:minionId', (req, res, next) => {
    const minionDelete = deleteFromDatabasebyId('minions', req.params.id)
    res.send(minionDelete)
})






module.exports = minionsRouter;

