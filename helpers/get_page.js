const handlebars = require('express-handlebars');

module.exports = { 
    eq: (exp1, exp2) => {
        return exp1 === exp2;
    }
};