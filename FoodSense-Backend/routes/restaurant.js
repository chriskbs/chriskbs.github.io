import {writeRestaurantData} from '../database/restaurant.js';
import { database } from '../database/firebase.js';
import { get, ref } from 'firebase/database';
import restaurantData from '../data/restaurant.json' assert { type: 'json' };

import express from 'express';
var router = express.Router();

router.route('/')
.get(function(req, res, next) {
  /*
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    

    res.end();
  } catch (err) {
    next(err);
  }
  */
  try {
    // console.log(`restaurant/${req.params.restaurantId}`);
    const dbref = ref(database, `restaurant`);
    get(dbref).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, data: snapshot.val()});
        res.end();
      } else {
        // console.log("Data not available");
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, data: "Data not available"});
        res.end();
      }
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
})
.post(function(req, res, next) {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    console.log(req.body.command)
    if (req.body.command === "update") {
      restaurantData.map(restaurant => {
        
        writeRestaurantData(
          restaurant.restaurantID, 
          restaurant.restaurantName,
          restaurant.restaurantPhotoUrl,
          restaurant.restaurantSentimentAnalysis,
          restaurant.restaurantDetails
        )
      })
      res.json({success: true});
    } else {
      res.json({success: false});
    }

    /*
    let restaurantId = req.body.restaurantId;
    let restaurantName = req.body.restaurantName;
    let restaurantPhotoUrl = req.body.restaurantPhotoUrl;
    let restaurantSentimentAnalysis = req.body.restaurantSentimentAnalysis;
    let restaurantDetails = req.body.restaurantDetails;
    let restaurantCategories = req.body.restaurantCategories;
    writeRestaurantData(3, 
      restaurantName,
      restaurantPhotoUrl,
      restaurantSentimentAnalysis,
      restaurantDetails,
      restaurantCategories
    )
    */
    
    res.end();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.route('/:restaurantId')
.get((req,res,next) => {
  try {
    // console.log(`restaurant/${req.params.restaurantId}`);
    const dbref = ref(database, `restaurant/${req.params.restaurantId}`);
    get(dbref).then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, data: snapshot.val()});
        res.end();
      } else {
        // console.log("Data not available");
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: false, data: "Data not available"});
        res.end();
      }
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
})

export default router;



/* POST WORKS
.post(function(req, res, next) {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    let email = req.body.email;
    let password = req.body.password;
    const accountExist = database.find((user) => (user.email === email && user.password === password));
    console.log(req.body);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (accountExist) {
      res.json({success: true, status: 'Login Successful'});
    } else {
      res.json({success: false, status: 'Login Unsuccessful'});
    }
    res.end();
  } catch (err) {
    console.log(err);
    next(err);
  }
});
*/