const app = require('./app');

const { PORT = 4000 } = process.env;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));