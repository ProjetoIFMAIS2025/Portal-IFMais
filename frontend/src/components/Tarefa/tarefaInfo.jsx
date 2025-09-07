export default function TarefaInfo({ titulo, conteudo }){
    return (
        <p className='tarefaAberta-texto'><span className='tarefaAberta-titulo'>{titulo} </span>{conteudo}</p>
    )
}