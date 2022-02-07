const express = require("express");
const router = express.Router();

const rescheduleApi = require("../../../controllers/api/v1/reschedule_api");

router.put("/reschedule-batch", rescheduleApi.reschedule);

module.exports = router;