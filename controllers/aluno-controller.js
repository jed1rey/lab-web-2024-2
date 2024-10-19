const listaAlunos = [];

const getAlunos = async (request, h) => {

    return listaAlunos;
}

const createAluno = async (request, h) => {
    //save in memory
    listaAlunos.push(request.payload);

    return request.payload;
}

module.exports = {getAlunos, createAluno};
