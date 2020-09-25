const router = require('express').Router();
const {
  addThoughts,
  removeThoughts,
  addReactions,
  removeReactions
} = require('../../controllers/thoughts-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThoughts);

// /api/thoughts/<userId>/<thoughtsId>
router.route('/:userId/:thoughtsId').put(addReactions).delete(removeThoughts);

// /api/thoughts/<userId>/<thoughtsId>/<reactionsId>
router.route('/:userId/:thoughtsId/:reactionsId').delete(removeReactions);

module.exports = router;
