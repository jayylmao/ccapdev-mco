module.exports = {
    ensureAuth: (req, res, next) => {
        if(req.session.user)
            return next();
        else
            res.redirect('/account/login');
    },

    ensureGuest: (req, res, next) => {
        if(req.session.user)
            res.redirect('/');
        else
            return next();
    }
}