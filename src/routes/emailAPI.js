const express = require('express');
const app = express();
const cron = require('node-cron');

// Your other express configurations...

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
