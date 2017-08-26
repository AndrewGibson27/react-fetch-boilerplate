import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
  body: String,
  headline: String,
});

const Story = mongoose.model('Story', storySchema);

export default Story;
