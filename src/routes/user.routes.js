const connection = require('../db-config');
const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req);
    connection.query('SELECT * FROM user_profiles', (err, result) => {
      if (err) {
        res.status(500).send('Error retrieving users from database');
      } else {
        res.json(result);
      }
    });
  });

router.get('/:id', (req, res) => {
const userId = req.params.id;
connection.query(
    'SELECT * FROM user_profiles WHERE id = ?',
    [userId],
    (err, results) => {
    if (err) {
        res.status(500).send('Error retrieving user from database');
    } else {
        if (results.length) res.json(results[0]);
        else res.status(404).send('User not found');
    }
    }
);
}); 



module.exports = router;