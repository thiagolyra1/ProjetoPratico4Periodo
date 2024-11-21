import '../../styles/App.scss'
import { useEffect, useState, useRef, FormEvent } from 'react';
import {FiTrash} from 'react-icons/fi';
import {api} from '../services/api';

interface ClienteProps{
    id: string;
    nome: string;
    email: string;
    status: boolean;
    created_at: string;
}

export default function Formulario(){

    const [clientes , setClientes] = useState<ClienteProps[]>([]);
    const nomeRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        carregarClientes();
    }, [])

    async function carregarClientes(){
        const resposta = await api.get("clientes");
        setClientes(resposta.data);
    }

    async function manipularSubmit(evento: FormEvent){
        evento.preventDefault();

        if(!nomeRef.current?.value || !emailRef.current?.value) return;

        const resposta = await api.post("cliente", {
            nome: nomeRef.current?.value,
            email: emailRef.current?.value
        });

        setClientes(todosClientes => [...todosClientes, resposta.data])

        nomeRef.current.value = "";
        emailRef.current.value = "";


    }

    async function manipularDelete(id: string){
        try{
            await api.delete("cliente", {
                params:{
                    id: id,
                }
            })
            carregarClientes();

        }catch(erro){
            console.log(erro);
        }

        
    }

    return (
        <div className='div1'>
            <main>
                <h1 className='titulo'>Cadastar Clientes</h1>

                <form className="form" onSubmit={manipularSubmit}>

                    <label className='label'>Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome completo..."
                        className='input'
                        ref={nomeRef}
                    />

                    <label className='label'>E-mail:</label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail..."
                        className='input'
                        ref={emailRef}
                    />

                    <input 
                    type='submit' 
                    value='Cadastrar'
                    className='botao'
                    />
                </form>

                <section>
                    <h1 className='titulo'>Lista de Clientes</h1>

                    {clientes.map( (cliente) => (
                        <article key={cliente.id}>
                            <p><span>Nome: </span>{cliente.nome}</p>
                            <p><span>E-mail: </span>{cliente.email}</p>
                            <p><span>Status: </span>{cliente.status ? "ATIVO" : "INATIVO"}</p>

                            <button className='botaodeletar' onClick={() => manipularDelete(cliente.id)}>
                                <FiTrash size={18} color ="#FFF"/>
                            </button>
                        </article>
                    ))}

                </section>
            </main>
        </div>
    )
}