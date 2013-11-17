
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

exports.carbinet = function(req, res){
	res.render('carbinet', {title: '智能货架'});
};

exports.carbinet2 = function(req, res){
	res.render('carbinet2', {title: '智能货架'});
};

//支持根据屏幕大小自动适应
exports.carbinet3 = function(req, res){
	res.render('carbinet3', {title: '智能货架'});
};