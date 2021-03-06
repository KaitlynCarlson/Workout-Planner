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

require(`./routes/api-routes`)(app);
require(`./routes/html-routes`)(app);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/workout`, {
  useMongoClient: true
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
