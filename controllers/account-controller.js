const renderLoginPage = async (req, res) => {
    res.render('login',{
        layout: 'login_layout',
        title: 'Log In to rabble*'
    });
}

const renderRegisterPage = async (req, res) => {
    res.render('register',{
        layout: 'register_layout',
        title: 'Register for rabble*'
    });
}

module.exports = {
    renderLoginPage,
    renderRegisterPage
}