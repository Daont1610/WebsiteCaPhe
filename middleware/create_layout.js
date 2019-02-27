Category = require('../models/Category');
var Handlebars = require('hbs');
exports.layouts = async (req, res, next) => {
  let resultCategory = await Category.find();
  let menu = ``;
  resultCategory.map((v, i) => {
    menu += `<a class="dropdown-item" href="/danh-muc/${v._id}">${v.name}</a>`;
  });
  // console.log(menu);
  Handlebars.registerHelper('mainmenu', ()=>menu);
  next();
};