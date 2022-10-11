const express = require('express')
const app = express()
const fs = require('fs')
const router = express.Router()

const htmlFiles = fs
  .readdirSync('./public/html', { withFileTypes: true })
  .map((file) => file.name)

app.get('/:page', async (request, response) => {
  if (!htmlFiles.includes(`${request.params.page}.html`)) {
    response
      .status(404)
      .send(await fs.promises.readFile('./public/html/404.html', 'utf8'))
  } else {
    response.send(
      await fs.promises.readFile(
        `./public/html/${request.params.page}.html`,
        'utf8'
      )
    )
  }
})

// htmlFiles.forEach((file) => {
//   let route = '/' + file.slice(0, -5)
//   route = file == 'home.html' ? '/' : route
//   router.get(route, (req, res) => {
//     fs.readFile(`./public/html/${file}`, (err, data) => {
//       if (err) {
//         throw err
//       } else {
//         res.status(200).set('Content-Type', 'text/html')
//         res.send(data)
//         res.end()
//       }
//     })
//   })
// })

// app.use('/', router)

app.listen(3000, () => {
  console.log('server started')
})

// const users = require('./routes/users')
// const posts = require('./routes/posts')

// app.use('/static', express.static(path.join(__dirname, './public')))

// app.use('/users', users)
// app.use('/posts', posts)

// app.use((req, res, next) => {
//   console.log(new Date().toLocaleDateString())
//   next()
// })

// app.get('/', [
//   (req, res, next) => {
//     console.log('middleware 1')
//     return next()
//     console.log('this is after next')
//   },
//   (req, res, next) => {
//     console.log('middleware 2')
//     next()
//   },
//   (req, res, next) => {
//     console.log('middleware 3')
//     next()
//   },
//   (req, res, next) => {
//     console.log('middleware 4')
//     res.send('<h1>This is also middleware</h1>')
//   },
// ])

// app.all('my-route', (req, res) => {
//   res.send('accessed with any HTTP method')
// })
