import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())



app.post('/users', async (req, res)=> {

   await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

app.get("/users", async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        password: req.query.password,
        age: req.query.age
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.put('/users/:id', async (req, res)=> {

   await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            age: req.body.age
        }
    })    
    res.status(201).json(req.body)
})

app.delete("/users/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário Deletado com sucesso" });
});

app.listen(3000)
/*
Criar API de usuários

-Criar um usuário
-Listar todos os usuários
-Editar os usuários
-Deletar um usuários
*/