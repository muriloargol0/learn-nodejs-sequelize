const User = require('../models/User');

module.exports = {
    async index(req, res){
        const users = await User.findAll();

        return res.json(users);
    },

    // That's an async function with the parameters req to REQUEST and res to RESPONSE
    async store(req, res){
        const { name, email } = req.body; // req.body is responsible for catch the values from a url request (promise)

        const user = await User.create({ name, email });

        return res.json(user);
    }
};