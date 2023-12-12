const User = require('../models/userModels');
const jwt = requre('jsonwebtoken');

exports.userRegister = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if(error) {
            console.log(error);
            res.status(401).json({message: 'Requete invalide'});
        } 
        else {
            res.status(201).json({message: 'User crée: ${user.email}'});
        }
    })
}

exports.loginRegister = (req, res) => {
    User.findOne({email: req.body.email}, (error, user) => {
        if(error) {
            console.log(error);
            res.status(500).json({message: 'utilisateur non trouvé'});
        }
        else {
            if(user.email == req.body.email && user.password == req.body.password) {
                let userData = {
                    id: user._id,
                    email: user.email,
                    role: 'admin'
                };

                jwt.sign(userData, process.env.JWT_KEY, {expiresIn: "10h"}, (error, token) => {
                    if(error) {
                        console.log(error);
                        res.status(500).json({message: 'impossible de générer le token'});
                    }
                    else {
                        res.status(200).json({token});
                    }
                });
            }
            else {
                console.log(error);
                res.status(401).json({message: 'Email ou password incorrect'});
            }
        }
    })
}