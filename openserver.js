const express = require('express');
const app = express();

/**
 * creat json response object
 */
const response = {
    "images":[
        "https://openserver-mobile.herokuapp.com/images/img_1.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_2.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_3.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_4.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_5.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_6.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_7.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_8.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_9.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_10.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_11.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_12.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_13.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_14.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_15.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_16.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_17.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_18.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_19.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_20.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_21.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_22.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_23.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_24.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_25.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_26.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_27.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_28.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_29.jpg",
        "https://openserver-mobile.herokuapp.com/images/img_30.jpg"
    ],

    "videos":[
        "https://openserver-mobile.herokuapp.com/video/video_2.mp4",
        "https://openserver-mobile.herokuapp.com/video/video_3.mp4"
    ]
}

/**
 * create public static folder 
 * for image and video
 */
app.use(express.static('public'));

/**
 * handle / routers
 */
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
});


/**
 * open port and listen to
 * user traffic
 */
app.listen(process.env.PORT || 3001, () =>
    console.log('listening on port '+process.env.PORT)
);