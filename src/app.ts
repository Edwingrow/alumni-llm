

const express = require('express');
import { json } from 'body-parser';
import router from './router/route';

const app = express();

app.use(json());
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT + "!");
});

