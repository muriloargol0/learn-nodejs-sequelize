const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        // find all the users who has the e-mail terminated with @live.com
        // after this filter I want to find all the user who lives in the street called "Rua da casa do user 1"
        // and finally find all the users who has the "ReactJS" in his techs

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    // when we use something inside the [] in this case the javascript will understand as an text (an attribute name)
                    [Op.like]: '%live.com'
                }
            },
            // we use the include as an array because we'll have more than one association
            include: [
                { association: 'addresses', where: { street: 'Rua da casa do user 1' } }, //addresses
                { 
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.like]: 'React%',
                        }
                    } 
                }, //techs
            ]
        })

        return res.json(users);
    }
};