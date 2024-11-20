import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CriarClienteController } from "./controllers/CriarClienteController";
import { ListarClientesController } from "./controllers/ListarClientesController";
import { DeletarClienteController } from "./controllers/DeletarClienteController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.post("/cliente", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new CriarClienteController().manipular(request, reply);
    })

    fastify.get("/clientes", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new ListarClientesController().manipular(request, reply);
    })

    fastify.delete("/cliente", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new DeletarClienteController().manipular(request, reply);
    })

}