const express = require('express');
const app = express();

/**
 * creat json response object
 */
// const response = {
//     "images":[
//         "https://openserver-mobile.herokuapp.com/images/img_1.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_2.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_3.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_4.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_5.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_6.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_7.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_8.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_9.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_10.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_11.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_12.png",
//         "https://openserver-mobile.herokuapp.com/images/img_13.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_14.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_15.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_16.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_17.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_18.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_19.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_20.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_21.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_22.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_23.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_24.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_25.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_26.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_27.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_28.jpeg",
//         "https://openserver-mobile.herokuapp.com/images/img_29.jpg",
//         "https://openserver-mobile.herokuapp.com/images/img_30.jpg"
//     ],

//     "videos":[
//         "https://openserver-mobile.herokuapp.com/video/video_2.mp4",
//         "https://openserver-mobile.herokuapp.com/video/video_3.mp4"
//     ]
// }

/**
 * creat json response object
 */
const response = {
    "data":[
        {"url":"https://openserver-mobile.herokuapp.com/images/img_1.jpg",
         "name":"img_1.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_1.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_2.jpg",
         "name":"img_2.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_2.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_3.jpg",
         "name":"img_3.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_3.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_4.jpg",
         "name":"img_4.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_4.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_5.jpg",
         "name":"img_5.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_5.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_6.jpeg",
         "name":"img_6.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_6.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_7.jpeg",
         "name":"img_7.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_7.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_8.jpeg",
         "name":"img_8.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_8.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_9.jpg",
         "name":"img_9.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_9.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_10.jpg",
         "name":"img_10.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_10.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_11.jpg",
         "name":"img_11.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_11.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_12.png",
         "name":"img_12.png",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_12.png",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_13.jpg",
         "name":"img_13.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_13.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_14.jpg",
         "name":"img_14.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_14.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_15.jpg",
         "name":"img_15.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_15.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_16.jpg",
         "name":"img_16.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_16.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_17.jpg",
         "name":"img_17.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_17.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_18.jpg",
         "name":"img_18.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_18.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_19.jpg",
         "name":"img_19.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_19.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_20.jpeg",
         "name":"img_20.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_20.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_21.jpeg",
         "name":"img_21.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_21.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_22.jpg",
         "name":"img_22.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_22.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_23.jpg",
         "name":"img_23.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_23.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_24.jpg",
         "name":"img_24.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_24.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_25.jpg",
         "name":"img_25.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_25.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_26.jpg",
         "name":"img_26.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_26.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_27.jpg",
         "name":"img_27.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_27.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_28.jpeg",
         "name":"img_28.jpeg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_28.jpeg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_29.jpg",
         "name":"img_29.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_29.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/images/img_30.jpg",
         "name":"img_30.jpg",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/img_30.jpg",
         "type":"image"},
         {"url":"https://openserver-mobile.herokuapp.com/video/video_2.mp4",
         "name":"video_2.mp4",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/video_screen_1.jpg",
         "type":"video"},
         {"url":"https://openserver-mobile.herokuapp.com/video/video_3.mp4",
         "name":"video_3.mp4",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/video_screen_2.jpg",
         "type":"video"},
         {"url":"https://openserver-mobile.herokuapp.com/video/video_1.mp4",
         "name":"video_1.mp4",
         "thumbnail":"https://openserver-mobile.herokuapp.com/images/video_screen_2.jpg",
         "type":"video"}
         
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