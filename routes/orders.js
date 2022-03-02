import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  checkout,
  getMyOrders,
  getAllOrders
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', auth, content('multipart/form-data'), upload, checkout)
router.get('/me', auth, getMyOrders)
router.get('/all', auth, admin, getAllOrders)

export default router
