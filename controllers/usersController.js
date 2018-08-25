const db = require('../models');

// defining methods
module.exports = {
    findAll: function(req, res) {
        db.Users
            .find(res.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Users
            .findById(req.params.id)
            .then(dbModel => res.jjson(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req,  res) {
        db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel));;
    },
    update: function(req, res) {
        db.Users
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(eerr => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Users
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};