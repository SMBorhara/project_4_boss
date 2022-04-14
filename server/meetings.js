const express = require('express');
const {
	getAllFromDatabase,
	createMeeting,
	addToDatabase,
	deleteAllFromDatabase,
} = require('./db');
const meetingRouter = express.Router();

// get array of all meetings
meetingRouter.get('/', (req, res, next) => {
	res.send(getAllFromDatabase('meetings'));
});

meetingRouter.post('/', (req, res, next) => {
	const newMeeting = addToDatabase('meetings', createMeeting());
	res.status(201).send(newMeeting);
});

meetingRouter.delete('/', (req, res, next) => {
	res.send(deleteAllFromDatabase('meetings'));
});

module.exports = meetingRouter;
