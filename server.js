import express from 'express'

const app = express()

app.use(express.json())

const users = []

app.post('/users', (req, res)=> {
    
    users.push(req.body)

    res.send('Ok, post deu certin.')
})

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000)
/*
Criar API de usuários

-Criar um usuário
-Listar todos os usuários
-Editar os usuários
-Deletar um usuários
*/