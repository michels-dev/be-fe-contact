const express = require('express');
const router = express.Router();

const {
  getAllContacts,
  getContactDetail,
  getUpdateContact,
  createContact,
  updateContact,
  deleteContact,
} = require ('../controllers/ContactController');

router.get('/contacts', getAllContacts);
router.get('/DetailContact/:id', getContactDetail);
router.get('/EditContact/:id', getUpdateContact);
router.post('/CreateContacts', createContact);
router.put('/UpdateContacts/:id', updateContact);
router.delete('/DeleteContact/:id', deleteContact);

module.exports = router;