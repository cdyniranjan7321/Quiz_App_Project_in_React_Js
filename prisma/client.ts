import { PrismaClient } from '@prisma/client'

declare global{
  namespace NodeJS {
    interface Global {}
  }

}

//add prisma to nodejs global type
interface CustomNodeJsGlobal extends NodeJS.Global{
  prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === 'development') 
  global.prisma = prisma

export default prisma

/* -------------------------------- */


// let prisma: PrismaClient

// if(process.env.NODE_ENV === 'production') 
//   prisma = new PrismaClient()
// else{
//   if(!global.prisma){
//     global.prisma = new PrismaClient()
//   }

//   prisma= global.prisma
// }

// export default prisma


/* ------------------------- */


// const prisma = new PrismaClient()

// async function main() {
//   const allPosts = await prisma.post.findMany()
//   console.log(allPosts)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
