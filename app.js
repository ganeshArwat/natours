const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');
const golbalErrorHandler = require('./controllers/errorController');
// process.env.NODE_ENV = 'production';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  req.requsetTime = new Date().toISOString();
  next();
});

const tourRouter = require('./routes/tourRoutes');

app.use('/api/v1/tours', tourRouter);

const userRouter = require('./routes/userRoutes');

app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(golbalErrorHandler);

module.exports = app;
