const mongoose = require('mongoose');

const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
};
exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};
exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully Created ${store.name}. Care to leave a review?`);
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) => {
  // 1. Query the datbase for a list of all stores
  const stores = await Store.find();
  res.render('stores', { title: 'stores', stores });
};

exports.editStore = async (req, res) => {
  // 1. Find the store given the id
  // 2. Confirm they are the owner of the store
  // 3. Render out the edit form sothe user can update their store
};
