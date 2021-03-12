const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes');
const handleError = require('./middleware/handleError');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(indexRouter);
app.use(handleError);

app.listen(port, () => {
  console.log('app listen to', port);
})