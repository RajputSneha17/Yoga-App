const express = require("express");
const {
  sessions,
  mySessions,
  mySessionId,
  saveDraft,
  publish,
} = require("../Controllers/SessionController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/sessions", sessions);
router.get("/my-sessions", authMiddleware, mySessions);
router.get("/my-sessions/:id", authMiddleware, mySessionId);
router.post("/my-sessions/save-draft", authMiddleware, saveDraft);
router.post("/my-sessions/publish", authMiddleware, publish);

module.exports = router;
