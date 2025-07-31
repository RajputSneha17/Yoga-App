const express = require("express");
const { sessions, mySessions, mySessionId, saveDraft, publish } = require("../Controllers/SessionController.js");
const route = express.Router();

route.get("/sessions", sessions);
route.get("/my-sessions", mySessions);
route.get("//my-sessions/:id", mySessionId);
route.post("/my-sessions/save-draft", saveDraft);
route.post("/my-sessions/publish", publish);