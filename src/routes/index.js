import filesRouter from './files.js'

const configRouters = (app) => {
  app.use('/files', filesRouter)
}

export default configRouters
