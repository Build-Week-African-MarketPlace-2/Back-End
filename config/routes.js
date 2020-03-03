const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const itemsRouter = require('../items/items-router')

module.exports = server => {
    server.use('/auth', authRouter);
    server.use('/users', usersRouter);
    server.use('/items', itemsRouter);
  };