const { Router } = require("express");

const viewRoutes = require("./view/viewRoutes");
const apiRoutes = require("./api/apiRoutes");

const router = Router();

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;
