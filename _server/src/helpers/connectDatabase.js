const mongoose = require('mongoose');

function getDatabaseUri() {
    if (process.env.NODE_ENV === 'test') return 'mongodb://localhost/project1901-test';
    // if (process.env.NODE_ENV === 'production') return 'mongodb://localhost/project1901-test';
    return 'mongodb://localhost/project1812'
}

mongoose.connect(getDatabaseUri())
.catch(() => process.exit(1));