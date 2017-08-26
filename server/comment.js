import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  body: String,
  story_id: Number,
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
