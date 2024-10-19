const listaAlunos = [
    {
        id: 11,
        nome: "joao da silva"
    }, 
    {
        id: 22,
        nome: "maria da silva"
    }
];

const getAlunos = async (request, h) => {

    return listaAlunos;
}

const createAluno = async(request, h) => {
    console.log(request.payload)
    return request.payload;

}

module.exports = {getAlunos, createAluno};
