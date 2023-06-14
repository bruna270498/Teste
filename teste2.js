const data =  require("./fakeData");

const postUser = (req, res) => {
    const { name, job } =  req.body;
    const newUser = {
        //para ter o ID podemos somar o tamanho do array + 1 para adicionar o id se caso o banco de dados não tivesse o autoincrement
        // id: data.length + 1,
        name,
        job,
    }
    //Enviei o novo usuário para o banco de dados e retornei as informações dele.
    data.push(newUser)
    res.send(newUser);
};

module.exports = postUser;