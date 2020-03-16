'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Mi titulo',
    teacher: 'Mi profesor',
    description: 'Una descripción',
    topic: 'programación'
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'Una descripción',
    topic: 'programación'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'Una descripción',
    topic: 'programación'
  }
]

module.exports = {
  Query: {
    getCourses: () => { 
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}