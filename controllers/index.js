const activateController = require('./controls/activate.Controller')
const addToBalanceController = require('./controls/addToBalance.Controller')
const adminController = require('./controls/admin.Controller')
const approveController = require('./controls/approve.Controller')
const dashboardController = require('./controls/dashboard.Controller')
const depositController = require('./controls/deposit.Controller')
const historyController = require('./controls/history.Controller')
const loginController = require('./controls/login.Controller')
const plansController = require('./controls/plans.Controller')
const registerController = require('./controls/register.Controller')
const withdrawController = require('./controls/withdraw.Controller')
const editController = require('./controls/edit.Controller')
const referalController = require('./controls/referal.Controllers')


// export them as a main object {}

module.exports = {
    activateController,
    addToBalanceController,
    adminController,
    approveController,
    dashboardController,
    depositController,
    historyController,
    loginController,
    plansController,
    registerController,
    withdrawController,
    editController,
    referalController
}
