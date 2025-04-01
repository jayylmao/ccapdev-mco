// allow global access to the currently logged-in user.
const loggedUser = async (req, res, next) => {
	res.locals.user = req.session.user || null;
	next();
}

module.exports = { loggedUser };