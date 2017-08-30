const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  body: String,
  story_id: Number,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
