const express = require("express");
const vhost = require("vhost");

const app = express();
const port = 80;

// Set VHOSTS
// Template: app.use(vhost('[URL]', require("[./PATH/TO/MAIN/JS/FILE]").app));



app.get("/", (req, res) => {
    res.status(301).send("Try accessing from a different URL")
})

app.listen(port, () => console.log(`VHOST Server is listening on ${port}`));