const User = require('../models/user-model.js');

const user = {
    username: 'bilibili',
    fName: 'nihao',
    lName: 'lu',
    password: '123456',
    description: 'Cybersecurity analyst',
    backgroundImg: 'https://static.vecteezy.com/system/resources/thumbnails/006/240/302/small_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg',
    profileImg: 'https://i.pinimg.com/1200x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg'
}

const renderProfilePage = (req, res) => {
    res.render('profile_page.hbs', {
        layout: 'user_profile_layout.hbs',
        user: user
    })
}

module.exports = {
    renderProfilePage
}