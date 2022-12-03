const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();

const PORT = process.env.PORT || 3404;

app.set('view engine', 'pug');
app.set('views', 'views');

// Routes
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//  
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});