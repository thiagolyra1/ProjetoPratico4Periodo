import { FastifyRequest, FastifyReply } from "fastify";
import { CriarClienteService } from '../services/CriarClienteService';

class CriarClienteController{

    async manipular(request: FastifyRequest, reply: FastifyReply){

        const { nome, email} = request.body as { nome: string, email: string};
        console.log(nome);
        console.log(email);

        const clienteService = new CriarClienteService();

        const cliente = await clienteService.executar({nome, email});

        reply.send(cliente);
    };
};

export {CriarClienteController};