import express from 'express';
var router = express.Router();

router.route('/')
.get(function(req, res, next) {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end();
  } catch (err) {
    next(err);
  }
})
.post(function(req, res, next) {
  try {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let email = req.body.email;
    let password = req.body.password;

    /*
    if (errMessage === "") {
      res.json({success: true, status: 'Signup Successful', errorMessage: ''});
    } else {
      res.json({success: false, status: 'Signup Unsuccessful', errorMessage: errMessage});
    }
    */
  
    res.end();
  } catch (err) {
    console.log(err);
    next(err);
  }
});

export default router;