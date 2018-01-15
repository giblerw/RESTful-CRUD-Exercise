const express = require('express');
const router = express.Router();
const db = require('../db/query');


// Create the route for get all
router.get('/', (req, res, next) => {
  db.getAll()
  .list()
  .then((cartoons) => {
    res.json(cartoons);
});
})

// Create the route for get one
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
    db.getOne(id)
      .then((cartoon) => {
        res.json(cartoon)
    })
});

// Create the route for creating an item
router.post('/', (req, res, next) => {
  db.create(req.body)
  .then((id) => {
    res.json({cartoon_id: id[0]});
  })
});


// Create the route for updating
router.put('/:id', (req, res, next) => {
  const id = req.params.id;
    db.update(id, req.body)
      .then(() => res.send("updated!"))

});

// Route for deleting an item
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
    db.remove(id)
      .then(() => res.send("Deleted")
    )
});


module.exports = router;
