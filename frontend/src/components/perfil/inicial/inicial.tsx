import '../perfilGeneral.scss';
import './inicial.scss';

export default function PerfilInicial(){
    return(
        <section className='perfil-sessao perfil-conteudo'>
            
            <div className='perfil-conteudo-item perfil-sobre'>
                <h4 className='perfil-conteudo-titulo perfil-sobre-titulo'> Sobre Mim </h4>
                <p className='perfil-sobre-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
            </div>

            <div className='perfil-conteudo-item perfil-habilidades'>
                <h4 className='perfil-conteudo-titulo perfil-habilidades-titulo'>Minhas Habilidades</h4>
                <div className='perfil-habilidades-blocos'>
                    <div className='perfil-habilidades-item'>Desenvolvimento Web</div>
                    <div className='perfil-habilidades-item'>Front-End</div>
                    <div className='perfil-habilidades-item'>Figma</div>
                </div>
            </div>

            <div className='perfil-conteudo-item perfil-formacoes'>
                <h4 className='perfil-conteudo-titulo perfil-formacoes-titulo'>Minhas Formações</h4>

                <div className='perfil-formacoes-blocos'>
                    <div className='perfil-formacoes-item'>
                        <h4 className='perfil-formacoes-item-line perfil-formacoes-curso'> Técnico em Análise e Desenvolvimento de Sistemas </h4>
                        <p className='perfil-formacoes-item-line perfil-formacoes-periodo'> <span className='fw-bold'>Período:</span> 2024 - 2026 </p>
                        <p className='perfil-formacoes-item-line perfil-formacoes-instituicao'> IFPR, Campus Telêmaco Borba </p>
                    </div>
                </div>

            </div>

        </section>
    )
}