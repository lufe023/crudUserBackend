const router = require('express').Router()

const usersServices = require('./users.services')

router.get("/users", usersServices.getUsers)

router.get('/users/:id', usersServices.getOneUser)

router.post('/users', usersServices.createNewuser)

module.exports = router