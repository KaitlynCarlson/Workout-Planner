"use strict";

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

require(`./routes/api-Routes`)(app);
require(`./routes/html-routes`)(app);

const MONGODB_URI =
  process.env.MONGODB_URI || `mongodb://localhost/mongoHeadlines`;
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
