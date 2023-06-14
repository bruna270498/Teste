const validate = (req, res, next) => {
    const { Authorization } = req.headers;
    if(!Authorization) {
       res.send('Sem permisão de acesso')
    }
    return next();
};
module.exports = validate;