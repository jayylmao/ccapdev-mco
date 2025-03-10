const fs = require('fs');

const renderAboutPage = async (req, res) => {
    res.render('about', {
        layout: 'about_layout',
        references: JSON.parse(fs.readFileSync('./db/references.json'))
    });
};

module.exports = { renderAboutPage };