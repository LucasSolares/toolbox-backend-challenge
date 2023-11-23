import express from 'express'

import configRouters from './routes/index.js'

const bootstrap = () => {
  try {
    const app = express()

    configRouters(app)

    app.listen(4000, () => {
      console.log('Server is listening on port -> 4000')
    })
  } catch (error) {
    console.error(error)
  }
}

bootstrap()
