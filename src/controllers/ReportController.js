const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // find all users who have email ending w @vigads.com.br
    // find all users I want to get who lives on street "Rua Lacoruna"
    // find all users I want to get the techs who star with react

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@vigads.com.br'
        },
      },
      include: [
        { association: 'addresses', where: { street: 'Rua Lacoruna'} }, // address
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        }, //techs
      ]
    });

    return res.json(users);
  }
}
