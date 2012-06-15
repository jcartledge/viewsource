var get_url = require('request')
  , hl = require('highlight').Highlight
;

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.main = function(req, res) {
  var url=req.params[0];
  get_url(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('main', {
        title: 'View source:' + url
      , body: hl(body.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))
      });
    }
  });
};