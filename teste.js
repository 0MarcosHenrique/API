import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function testar() {
  try {
    await prisma.$connect()
    console.log('✅ CONECTOU NO MONGO COM SUCESSO!')
  } catch (error) {
    console.log('❌ ERRO:', error)
  }
}

testar()