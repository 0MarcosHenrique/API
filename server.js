import express from 'express'

const app = express()

const users = []

app.post('/users', (req, res)=> {
    console.log(req)

    res.send('ok, post deu certin')
})

app.get('/users', (req, res) => {
    res.send("")
})

app.listen(3000)
/*
Criar API de usuários

-Criar um usuário
-Listar todos os usuários
-Editar os usuários
-Deletar um usuários
*/