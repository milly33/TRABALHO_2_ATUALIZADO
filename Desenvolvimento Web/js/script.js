const objs = [
    {
        "nome": "Matehus",
        "idade": 30,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "Profissao": "Programdor",
            "empresa": "Empresa X"

        },
        "hobbies": ["Porgramar", "Correr", "Ler"]
    },
    {
        "ID": "Matehus",
        "NACAO": 30,
        "CASA": true,
        "CASA": true,
        "CASA": true,
        "CASA": true,

        "detalhes_profissao": {
            "Profissao": "Programdor",
            "empresa": "Empresa X"

        },
        "hobbies": ["Porgramar", "Correr", "Ler"]
    }
    
  
]

console.log(objs)

// JSON 

//CONVERTE OBJETO PARA JSON

const jsonData = JSON.stringify(objs)
console.log(typeof jsonData)


//CONVERTER JSON PARA OBJETO
const objsdata = JSON.parse(jsonData);
console.log(objsdata)
console.log(typeof objsdata)

objsdata.map((pessoa)=>{
    console.log(pessoa.hobbies)
})