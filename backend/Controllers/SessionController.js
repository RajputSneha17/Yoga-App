const Session = require("../Model/SessionModel.js");

const sessions = async (req, res) => {
  try {
    const data = await Session.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
};

const mySessions = async (req, res) => {
  const { user_id } = req.body;
  try {
    const data = await Session.find({ user_id });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch your session" });
  }
};

const mySessionId = async (req, res) => {
  const sessionId = req.params.id;
  try {
    const data = await Session.findById(sessionId);
    if (!data) {
      res.status(404).json({ error: "session not found" });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch your session" });
  }
};
const saveDraft = async (req, res) => {
  const { id, title, tags, json_file_url } = req.body;
  const userId = req.userId;
  try {
    let session;
    if (id) {
      session = await Session.findByIdAndUpdate(
        id,
        { title, tags, json_file_url, status: "draft", updated_at: Date.now() },
        { new: true }
      );
    } else {
      session = await Session.create({
        user_id: userId,
        title,
        tags,
        json_file_url,
        status: "draft",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
    }
    res.status(200).json({ message: "Draft saved", session });
  } catch (error) {
    console.error("Error in saving draft:", error);
    res.status(500).json({ error: "Failed to save draft" });
  }
};

const publish = async (req, res) => {
  const { id, title, tags, json_file_url } = req.body;
  const userId = req.userId;
  try {
    let session;

    if (id) {
      session = await Session.findByIdAndUpdate(
        id,
        {
          title,
          tags,
          json_file_url,
          status: "published",
          updated_at: Date.now(),
        },
        { new: true }
      );
    } else {
      session = await Session.create({
        user_id: userId,
        title,
        tags,
        json_file_url,
        status: "published",
        created_at: Date.now(),
        updated_at: Date.now(),
      });
    }

    res.status(200).json({ message: "Session published", session });
  } catch (error) {
    console.error("Error in publishing session:", error);
    res.status(500).json({ error: "Failed to publish session" });
  }
};

module.exports = { sessions, mySessions, mySessionId, saveDraft, publish };
