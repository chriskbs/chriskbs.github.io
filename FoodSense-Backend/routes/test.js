import express from 'express';
var router = express.Router();

router.route('/')
.get((req, res) => {
    try {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.send('All is fine!');
    } catch (err) {
        console.log(err);
    }
})

export default router;