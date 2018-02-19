const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const html = fs.readFileSync("dist/index.html");
const webpackConfig = require("../config/webpack.config");
const compiler = require("webpack")(webpackConfig);
const middleware = require("webpack-dev-middleware");

app.use(middleware(compiler));
app.use("/static", express.static("dist"));
app.get("/", (req, res, next)=>{
    res.set("content-type", "text/html");
    res.status(200).send(html);
}).listen(8080);