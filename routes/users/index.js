const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send(`<h1>${req.query.theme}<h1>`)
})

router.get('/:username/:favChannel', (req, res, next) => {
  res.send(
    `<h1>This is ${req.params.username} and their favorite channel is ${req.params.favChannel}</h1>`
  )
  next()
})

//www.wittcode.com/posts?theme=dark&sort=ascending

module.exports = router
