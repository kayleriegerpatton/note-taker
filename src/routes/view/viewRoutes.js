const { Router } = require("express");

const { renderNotes } = require("../../controllers/view/notes");

const router = Router();

router.get("/notes", renderNotes("notes"));

// router.get("*", renderNotes("index"));

module.exports = router;
