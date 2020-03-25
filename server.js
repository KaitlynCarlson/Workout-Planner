"use strict";

const express = require(`express`);
const logger = require(`morgan`);
const mongoose = require(`mongoose`);
const PORT = process.env.PORT || 3000;
const app = express();
const htmlRoutes = require(`./routes/html-routes`);
app.use(logger(`dev`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
htmlRoutes(app);
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/populatedb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
