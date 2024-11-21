import prismaClient from "../prisma";

interface DeletarClienteProps{
    id: string;
}

class DeletarCLienteService{
    async executar({id}: DeletarClienteProps){

        if(!id){
            throw new Error("Solicitação invlida.");
        }

        const procurarCliente = await prismaClient.cliente.findFirst({
            where:{
                id: id,
            }
        });

        if(!procurarCliente){
            throw new Error("Cliente não existe!");
        }

        await prismaClient.cliente.delete({
            where:{
                id: procurarCliente.id,
            }
        });

        return { message: "Deletado com sucesso!"};
    }
}

export { DeletarCLienteService }