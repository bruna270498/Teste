const data =  require("./fakeData");

const deleteUser = (req, res) => {
    const { name } =  req.query;
    data.filter((user, index) => {
        if(user.name === name){
            //Utilizei o método splice para remover do meu array o usuário:
            data.splice(index, 1)
            res.send("success");
        }
    })
};

module.exports = deleteUser;