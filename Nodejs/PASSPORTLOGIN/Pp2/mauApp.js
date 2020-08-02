var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        //logic username , 
        AccountModel.findOne({
          username: username,
          password: password
        }).then(data=>{
          if(!data) done(null, false)
  
          done(null, data)
        })
        .catch(err=>{
          done(err)
        })
    }
  ));
  
  app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) { return res.status(500).json('loi server') }
      if (!user) { return res.status(500).json('username pass k hop le') }
  
      if(user){
        jwt.sign(user.toObject(), '123', function(err, token){
          if(err) return res.status(500).json('loi server')
          return res.json(token)
        })
      }
    })(req, res, next);
  });


  app.get('/private', (req, res, next)=>{
    var token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, '123', function(err, data){
      if(err) return res.status(403).json('Invalid token')
      next()
    })
  },  (req, res, next)=>{
    res.json('Du lieu bi mat')
  })
  