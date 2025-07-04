import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {

    const token = jwt.sign({id: userId }, process.env.JWT_SECRET, {expiresIn: '1d'});

    res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // false in dev
        sameSite: process.env.NODE_ENV === 'production' ? 'Strict' : 'Lax',
        maxAge: 1 * 24 * 60 * 60 * 1000, 
        path: '/', // add this for consistency
    });


};

export default generateTokenAndSetCookie