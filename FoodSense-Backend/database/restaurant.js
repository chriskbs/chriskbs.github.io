import { database, auth } from "./firebase.js";
import { ref, set, get, onValue } from "firebase/database";

export function writeRestaurantData(restaurantID, 
                                    restaurantName,
                                    restaurantPhotoUrl,
                                    restaurantSentimentAnalysis,
                                    restaurantDetails) {
    set(ref(database, 'restaurant/' + restaurantID), {
        restaurantID: restaurantID,
        restaurantName: restaurantName,
        restaurantPhotoUrl: restaurantPhotoUrl,
        restaurantSentimentAnalysis: restaurantSentimentAnalysis,
        restaurantDetails: restaurantDetails
    });
}

export function readRestaurantData(restaurantID, res) {
    return onValue(ref(database, '/restaurant/' + restaurantID), (snapshot) => {
        if (snapshot.exists()) {
            return {success: true, data: snapshot.val()};
        } else {
            return {success: false, data: "No data available"};
        }
      }, {
        onlyOnce: true
    });
}

export function readRestaurantAll() {
    return onValue(ref(database, '/restaurant/'), (snapshot) => {
        if (snapshot.exists()) {
            return {success: true, data: snapshot.val()};
        } else {
            return {success: false, data: "No data available"};
        }
      }, {
        onlyOnce: true
    });
}