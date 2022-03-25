const Album = require("./albumModles");

exports.addAlbum = async (req, res) => {
    try {
      const album = await Album.create(req.body);
      res.status(200).send({ album: album.albumName, artistName });
    } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
    }
  };

  exports.listAlbum = async (req, res) => {
    try {
        const album = await Album.find({});
        res.status(200).send({ allAlbum: album })
    } catch (error) {
        console.log(error)
        res.status(500).send({err: error.message})
    }
}

exports.deleteAlbum = async (req, res) => {
  try {
      const deleteAlbum = await Album.deleteOne({
          [req.params.filterKey]: req.params.filterVal,
      });
      if (deleteAlbum.deletedCount >0) {
          res.status(200).send({ msg: "Successfully deleted album from list" });
      } else {
          throw new Error("Did not delete");
      }
  } catch (error) {
      console.log(error);
      res.status(500).send({ err: error.message });
  }
}