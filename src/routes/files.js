import { Router } from 'express'

import { getFilesList, getFiles } from '../controllers/files.js'

const router = Router()

router.get('/data', getFiles)
router.get('/list', getFilesList)

export default router
