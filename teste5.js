const data = require('./fakeData');

const readUser = (req, res) => {
    const { name } =  req.query;
    let count = 0;
    data.filter((log) => {
        if(log.name === name){
            count += 1
        }
    })
    res.send(`Usuário ${name} foi lido ${count} vezes.`);
};
module.exports = readUser;