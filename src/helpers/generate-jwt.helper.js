
import jwt from 'jsonwebtoken';



export const generateJwt = ( userId = '' ) => {
    
    return new Promise( ( res, rej ) => {
        const payload = {
            uid: userId,
        }
        jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h',
            algorithm: 'HS256'
        }, (err, token) => {
            if(err){
                rej( err );
                return;
            }
            res(token);
        });
    });
}

