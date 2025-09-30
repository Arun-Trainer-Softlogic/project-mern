//mongoose schema

import mongoose from "mongoose";

const nechieSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  nickname: String,
  birthday: Date,
  favoriteFood: String,
  favoriteSong: String,
  hobbies: String,
  bestMemory: String,
});

const Nechie = mongoose.model("Nechie", nechieSchema);

export default Nechie;
