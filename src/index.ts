import fastify, {FastifyInstance} from "fastify"
import { PrismaClient } from "@prisma/client"


const app:FastifyInstance = fastify()



app.get("/" , (request,reply) => {
  return "hello"
})

app.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })