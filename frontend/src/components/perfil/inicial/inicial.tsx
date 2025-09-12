import '../perfilGeneral.scss';
import './inicial.scss';

export default function PerfilInicial(){
    return(
        <section className='perfil-sessao perfil-conteudo'>
            
            <div className='perfil-conteudo-item perfil-sobre'>
                <h4 className='perfil-conteudo-titulo perfil-sobre-titulo'> Sobre </h4>
                <p className='perfil-sobre-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
            </div>

            <div className='perfil-conteudo-item'>
                <h4 className='perfil-conteudo-titulo'>Tipo de Empresa</h4>
                <p className='perfil-conteudo-texto'>Startup</p>
            </div>
   
            <div className='perfil-conteudo-item'>
                <h4 className='perfil-conteudo-titulo'>Localização</h4>
                <p className='perfil-conteudo-texto'>Rua XXXXX, Nº 12 - Centro </p>
                <p className='perfil-conteudo-texto'> Telêmaco Borba - PR </p>
            </div>

            <div className='perfil-conteudo-item'>
                <h4 className='perfil-conteudo-titulo'>Perfis de Contato</h4>
                <ul>
                    <li className='perfil-conteudo-texto perfil-conteudo-perfis'> <i className="bi bi-globe perfil-conteudo-icon"></i> <span className='perfil-conteudo-rede'>www.webcom.startup</span></li>
                    <li className='perfil-conteudo-texto perfil-conteudo-perfis'> <i className="bi bi-instagram perfil-conteudo-icon"></i> <span className='perfil-conteudo-rede'>@startup_webcom</span></li>
                    <li className='perfil-conteudo-texto perfil-conteudo-perfis'> <i className="bi-twitter-x perfil-conteudo-icon"></i> <span className='perfil-conteudo-rede'>@startup_webcom</span></li>
                </ul>
            </div>

        </section>
    )
}