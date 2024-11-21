import { FastifyRequest, FastifyReply } from "fastify";
import { ListarClientesService } from '../services/ListarClientesService';

class ListarClientesController{
    async manipular(request: FastifyRequest, reply: FastifyReply){
        const listarClientesService = new ListarClientesService();

        const clientes = await listarClientesService.executar();

        reply.send(clientes);
    };

};


export {ListarClientesController}