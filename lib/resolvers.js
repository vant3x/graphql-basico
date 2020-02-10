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
    _id: 'anyid',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'Una descripción',
    topic: 'programación'
  },
  {
    _id: 'anyid',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'Una descripción',
    topic: 'programación'
  }
]

module.exports = {
    getCourses: () => { 
      return courses
    }
}