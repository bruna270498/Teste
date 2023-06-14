const data =  require("./fakeData");

//foi mudado as VAR para const pois traz benefícios como melhor controle de escopo e 
//prevenção de erros causados por reatribuição indesejada de valores.
const getUser = ( req, res, _next ) => {
    // neste ponto fiz uma desestruturação para evitar repetições
    const { name } =  req.query;
    // Foi utilizado o match filter para buscar somente o elemento desejado
    const userGet =  data.filter((user) => {
        if(user.name === name) {
            return user;
        }
    })
    //usei o if ternario para diminuir linhas de códigos 
    !userGet.length ? res.send('Usuário não encontrado') : res.send(userGet);
};

const getUsers = ( _req, res, _next ) => {
    // Não vejo necessidade de mudanças, pois aqui o objetivo é apenas retornar todos os usuários.
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};