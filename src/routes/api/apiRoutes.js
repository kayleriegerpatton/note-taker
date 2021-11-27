const { Router } = require("express");

const notesRoutes = require("./notesRoutes");

const router = Router();

router.use("/notes", notesRoutes);

module.exports = router;
