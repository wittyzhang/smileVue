const mongoose = require('mongoose');

const Schema = mongoose.schema;

const ObjectId = Schema.Types.ObjectId;

// 创建我们的用户
const userSchema = new Schema({
  userId: ObjectId,
  userName: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() },
});

// 发布模型
mongoose.model('User', userSchema);
