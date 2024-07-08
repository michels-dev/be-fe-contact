const pool = require('../database/db');
const validator = require('validator');

const nameExists = (data, name) => {
  if (!data) return false;
  return data.some(item => item.name.toLowerCase() === name.toLowerCase());
}

const validateEmail = (email) => {
  return validator.isEmail(email);
}

const validatePhone = (mobile) => {
  return validator.isMobilePhone(mobile, 'id-ID');
}

// GET all contacts
const getAllContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching contacts from database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// GET a contact detail by ID
const getContactDetail = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('SELECT * FROM contacts where id = $1', [id]);
    const contact = result.rows[0];

    if(!contact) {
      return res.status(404).json({error: 'Contact not found'});
    }

    res.json(contact);
  } catch (err) {
    console.error('Error fetching contact from database:', err);
    res.status(500).json({error: 'Internal server error'});
  }
}

// GET a contact edt by ID
const getUpdateContact = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('SELECT * FROM contacts where id = $1', [id]);
    const contact = result.rows[0];

    if(!contact) {
      return res.status(404).json({error: 'Contact not found'});
    }

    res.json(contact);
  } catch (err) {
    console.error('Error fetching contact from database:', err);
    res.status(500).json({error: 'Internal server error'});
  }
}

// post a new contact
const createContact = async (req, res) => {
  const{name, email, mobile} = req.body;

  try {
    const result = await pool.query('SELECT * FROM contacts');
    const contacts = result.rows;

    if(nameExists(contacts, name)) {
      return res.status(400).json({error: 'Name already exists'});
    }

    if(!validateEmail(email)) {
      return res.status(400).json({error: 'Email is not valid'});
    }

    if(!validatePhone(mobile)) {
      return res.status(400).json({error: 'Phone is not valid'});
    }

    await pool.query('INSERT INTO contacts (name, email, mobile) VALUES ($1, $2, $3)', [name, email, mobile]);
    res.status(200).json({message: 'Contact created'});
  } catch (err) {
    console.error('Error inserting contact into database', err);
    res.status(500).json({error: 'Internal server error'});
  }
}

// put to update a contact
const updateContact = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const {name, email, mobile} = req.body;

  try {
    const result = await pool.query('SELECT * FROM contacts');
    const contacts = result.rows;

    if (nameExists(contacts, name)) {
      return res.status(400).json({ error: 'Name already exists' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email is not valid' });
    }

    if (!validatePhone(mobile)) {
      return res.status(400).json({ error: 'Phone is not valid' });
    }

    const updateResult = await pool.query('UPDATE contacts SET name = $1, email = $2, mobile = $3 WHERE id = $4', [name, email, mobile, id]);

    if(updateResult.rowCount === 0) {
      return res.status(404).json({error: 'Contact not found'});
    }

    res.json({message: 'Contact updated'})
  } catch (err) {
    console.error('Error updating contact in database');
    res.status(500).json({error: 'Internal server error'});
  }
}

// delete a contact
const deleteContact = async (req, res) => {
  const id = parseInt(req.params.id, 10);

  try {
    const result = await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    if(result.rowCount === 0) {
      return res.status(404).json({error: 'Contact not found'});
    }

    res.json({message: 'Contact deleted'});
  } catch (err) {
    console.error('Error deleting contact from database:', err);
    res.status(500).json({error: 'Internal server error'});
  }
}

module.exports = {
  getAllContacts,
  getContactDetail,
  getUpdateContact,
  createContact,
  updateContact,
  deleteContact,
}