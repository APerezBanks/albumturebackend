require("./db/connection");
const express = require("express");
const cors = require("cors");
const albumRouter = require("./albums/albumRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5000;
// const spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
// const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

app.use(express.json());
app.use(cors());
app.use(albumRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});