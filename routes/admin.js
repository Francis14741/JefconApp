const express = require("express");
const router = express.Router();
const Message = require('../models/message');

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.render("admin/messages/index", { messages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
});

// View single message
router.get('/messages/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).send('Message not found');
    res.render('admin/message_detail', { message });
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not load message');
  }
});

// ✅ Delete a message
router.post("/messages/delete/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    req.flash("success", "Message deleted successfully!");
    res.redirect("/admin/messages");
  } catch (err) {
    console.error(err);
    req.flash("error", "Could not delete message.");
    res.redirect("/admin/messages");
  }
});

router.post("/messages/toggle/:id", async (req, res) => {
  try {
    const msg = await Message.findById(req.params.id);
    msg.read = !msg.read; // flip value
    await msg.save();
    res.redirect("/admin/messages");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating message status");
  }
});

module.exports = router;
