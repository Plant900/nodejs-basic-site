const express = require('express')
const router = express.Router()
const fs = require('fs').promises

router.get('/:page', async (req, res, next) => {
  res.send(await fs.readFile(`about.html`, 'utf8'))
})

module.exports = router
