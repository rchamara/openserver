const express = require('express');
const app = express();

/**
 * create public static folder 
 * for image and video
 */
app.use(express.static('public'));

/**
 * handle / routers
 */
app.get('/', (req, res) => {
    res.send('Hello world')
});


/**
 * open port and listen to
 * user traffic
 */
app.listen(process.env.PORT || 3001, () =>
    console.log('listening on port '+process.env.PORT)
);