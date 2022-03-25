const { Router } = require("express");
const { addAlbum } = require("./albumControllers");
const albumRouter = Router();

albumRouter.post("/album", addAlbum);

module.exports = albumRouter;