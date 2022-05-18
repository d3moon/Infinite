const hackersController = require('./hackers-controller.js')

const hackersRoutes = (router) => {
  router.post('/hackers', hackersController.post)
}

module.exports = hackersRoutes
