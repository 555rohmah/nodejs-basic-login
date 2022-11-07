module.exports = {
    isLogin(req, res, next){
        if(req.session.loggeding === true){
            next();
            return;
        } else {
            req.session.destroy(function(err) {
                res.redirect('/login');
            })
        }
    },
    isLogout(req, res, next){

        if(req.session.loggeding !== true){
            next();
            return;
        }
        res.redirect('/');
    }
};