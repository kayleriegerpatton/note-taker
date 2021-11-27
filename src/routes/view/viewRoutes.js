const { Router } = require("express");

const { getAllNotes } = require("../../controllers/api/notes");

const router = Router();

router.get("/notes", getAllNotes);

// router.get('*', getAllNotes)

module.exports = router;
