import prismaClient from '../prisma'

class ListarClientesService{
    async executar(){

        const clientes = await prismaClient.cliente.findMany();

        return clientes;
    }
}

export { ListarClientesService };