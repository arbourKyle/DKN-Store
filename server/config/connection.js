const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://gammahazard:green123@cluster0.td4e5.mongodb.net/dknstore?authSource=admin&replicaSet=atlas-ik8t4x-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
