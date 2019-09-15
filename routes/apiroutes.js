const db = require('../models');

module.exports = function(app) {
    app.post("/api/createuser/", function(req, res) {
        console.log(req.body);
        db.User.create({
          firstName: req.body.firstname,
          lastName: req.body.lastname,
          userName: req.body.username,
          password: req.body.password
        })
          .then(data => res.json(data));
      });
}