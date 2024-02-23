const Course = require('../models/Course')

class APIController {
  getAllCourses(req, res) {
    Course.find({})
      .lean()
      .then((course) => {
        return res.status(200).json({ message: 'ok', data: course })
      })
  }

  createNewCourse(req, res) {}
}

module.exports = new APIController()
