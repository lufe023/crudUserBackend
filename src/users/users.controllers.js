const uuid = require('uuid')

const usersDB = [
    {
        id: 'c15741d6-aae3-4295-b291-3798d30eeed8',
        first_name: 'Juan',
        last_name: 'De los palotes',
        email: 'email@email.com',
        password: '123456789',
        birthday: '2022/10/01'
    },
    {
        id: '8e9716f5-93b0-4f9d-a77f-e5c134df0db4',
        first_name: 'Pedro',
        last_name: 'Dijo de Juan',
        email: 'pedro@email.com',
        password: '123456789',
        birthday: '2022/09/01'
    }
]

//empecemos a retornar la DB Metodo GET

const getAllUsers = () => {
    return usersDB
}

//retornamos los usuarios por ID Metodo GET
const getUserById = (id) => {
    const data = usersDB.find(task => task.id === id)
    return data
}

//creacion de un usuario Metodo POST
const createUser = (first_name, last_name, email, password, birthday) => {
    const newUser ={
            id: uuid.v4(),
            first_name,
            last_name,
            email,
            password,
            birthday
    }

    if(usersDB.find(task => task.email === email)){
        return {email: email, message: 'Error, this email already exits'}
    }else{
    usersDB.push(newUser)
    return newUser
}
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}