const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    albumName: {
      type: String,
    },
    artistName: {
        type: String,
    },
  });
  
  const Album = mongoose.model("Album", albumSchema);
  
  module.exports = Album;