const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoutes');
const productRouter = require('./routes/productRoutes');

const app = express();
// GLOBAL MIDLLEWAREs
//Set security HTTP headers
app.use(helmet());
// Development loggin
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Limit requests from the same IP
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hour',
});

app.use('/api', limiter);

// Body parser, reading data from the body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitazation agains XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['createdAt', 'name', 'email', 'surname'],
  }),
);

// ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/products', productRouter);

// Set a route for all non-matching routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find${req.originalUrl} on this server`, 404));
});

//Global Error Handling Middleware - 4 argument express recognize it as an error middleware
app.use(globalErrorHandler);

module.exports = app;
