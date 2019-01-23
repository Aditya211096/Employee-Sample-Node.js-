const express = require('express');
const router = express.Router();
const router1 = express.Router();

const employee = require('./employee');
const payroll = require('./payroll');

router.use('/api/allemployee', employee);
router1.use('/api/employeepayroll', payroll);

module.exports = router;
module.exports = router1;