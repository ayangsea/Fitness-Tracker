const express = require('express')
const Workout = require('../models/workoutModel')
const { getWorkouts, getWorkout, createWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all routes
router.use(requireAuth)

//GET  all worokouts
router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router