const express = require('express')
const router = express.Router()
const apiController = require('../app/controllers/APIController')

function api(app) {
  router.get('/courses', apiController.getAllCourses)
  router.post('/courses/create', apiController.createNewCourse)

  app.use('/api/v1', router)
}

module.exports = api
