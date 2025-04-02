// allow global access to the currently logged-in user.
const loggedUser = async (req, res, next) => {
    console.log(res.locals.user);
	res.locals.user = req.session.user || null;
	next();
}

module.exports = { loggedUser };