import './message.scss';

export default function Menssagem({ user, mensagem }){
    return (
        <section className='msg'>
            <img src={user.fotoUser} alt="" className='fotoUser'/>
            <div className="msgTexto">
                <h4 className="mensagem-nome">{user.nome}</h4>
                <div className='mensagem-texto'>{mensagem}</div>
            </div>
        </section>
    )
}