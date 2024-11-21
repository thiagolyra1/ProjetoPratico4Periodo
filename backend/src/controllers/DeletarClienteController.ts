import { FastifyRequest, FastifyReply } from "fastify";
import { DeletarCLienteService } from '../services/DeletarClienteService'

class DeletarClienteController{
    async manipular(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string};

        const clienteService = new DeletarCLienteService();

        const cliente = await clienteService.executar({id});

        reply.send(cliente);
    };
};

export { DeletarClienteController};