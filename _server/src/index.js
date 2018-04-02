const { app } = require('./app');
require('./helpers/connectDatabase');

app.listen(process.env.PORT || 3000, () => console.log('Server started.'));
