const Course = require('../models/Course')

class CourseController {
  //[GET] /courses/:slug
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => res.render('courses/show', { course }))
  }

  //[GET] /courses/create
  create(req, res) {
    res.render('courses/create')
  }

  //[POST] /courses/store
  store(req, res) {
    const course = new Course(req.body)
    course.save().then(() => res.redirect('/courses'))
  }

  //[GET] /courses/:id/edit
  edit(req, res) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render('courses/edit', { course }))
  }

  //[PUT] /courses/:id
  update(req, res) {
    Course.updateOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect('/courses')
    )
  }

  //[DELETE] /courses/:id
  delete(req, res) {
    // res.send('Delete')
    Course.deleteOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect('back')
    )
  }

  // [GET] /courses
  index(req, res) {
    Course.find({})
      .lean()
      .then((courses) => res.render('courses', { courses }))
  }
}

module.exports = new CourseController()
