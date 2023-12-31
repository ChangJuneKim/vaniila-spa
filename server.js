const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
});

app.use("/static", express.static(path.resolve(__dirname, "frontend", "dist")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));
