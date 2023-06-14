const data =  require("./fakeData");

const putUser = (req, res) => {
    const { id } =  req.query;
    const { name, job } = req.body;
    const reg = data.find((user) => user.id === id);
    reg.name = name;
    reg.job = job;
    res.send(reg);
};

module.exports =  putUser;