const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();

const PORT = process.env.PORT || 3404;

app.set('view engine', 'ejs');
app.set('views', 'views');

// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//  
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});