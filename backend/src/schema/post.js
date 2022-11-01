import { model, Schema } from "mongoose";
const postSchema = new Schema({
  body: String,
  username: String,
  createAt: String,
  comments: [
    {
      body: String,
      username: String,
      createAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createAt: String,
    },
  ],
});

module.exports = model("Post", postSchema);
