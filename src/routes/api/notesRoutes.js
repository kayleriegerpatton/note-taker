const { Router } = require("express");
const {
  getAllNotes,
  createNote,
  deleteANote,
} = require("../../controllers/api/notes");

const router = Router();
// /api/notes/
router.get("/", getAllNotes);

// /api/notes/
router.post("/", createNote);

// /api/notes/:id
router.delete("/:id", deleteANote);

// router.put("/:id", updateNote);

module.exports = router;
