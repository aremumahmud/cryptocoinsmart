const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const db = require('../db')
const Refresh = new db().refreshMiddlware

router
   .route('/login')
   .post(controllers.loginController)
 
router
   .route('/register')
   .post(controllers.registerController)

router
   .route('/dashboard/:id')
   .get(Refresh , controllers.dashboardController)

router
   .route('/plans/:id')
   .get(Refresh, controllers.plansController)

router
   .route('/withdraw/:id')
   .post(Refresh , controllers.withdrawController)

router 
   .route('/deposit/:id')
   .post(Refresh , controllers.depositController)

router
   .route('/activate/:id')
   .get(Refresh , controllers.activateController)

router
   .route('/addToBalance/:id')
   .get(Refresh , controllers.addToBalanceController)

router
   .route('/history/:id')
   .get(Refresh , controllers.historyController)

router 
   .route('/edit')
   .post(controllers.editController)

router 
   .route('/modibo/dotia/mahmud/admin')
   .get(controllers.adminController)

router
   .route('/approve')
   .get(controllers.approveController)

module.exports = router