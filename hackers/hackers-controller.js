const users = []

const hackersController = (() => {
  const post = (req, res) => {
    const {
      name,
      email,
      password,
      paypal,
      projects,
      offers
    } = req.body

    const hackers = {
      name,
      email,
      password,
      paypal,
      projects,
      offers
    }

    users.push(hackers)
    return res.status(201).json({ data: hackers })
  }
  return {
    post
  }
})()

module.exports = hackersController
