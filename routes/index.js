
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Bootstrap Learning' });
};
exports.signin = function(req, res){
	res.render('signin', {title: 'signin'});
};
exports.theme = function(req, res){
	res.render('theme', {});
};