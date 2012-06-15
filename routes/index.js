var request = require('request')
  , hljs = require('hljs')
;

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.main = function(req, res) {

  var url = req.params[0];
  request(url, function(error, response, body) {
    if(!error && response.statusCode == 200) {
      res.render('main', {
        title: 'View source:' + url
      , body: hljs(body).value
      });
    }
  });

};