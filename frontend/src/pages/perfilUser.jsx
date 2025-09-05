import Cabecalho from '../components/cabecalho/cabecalho'

import phUser from '../assets/ph.jpg'

import './perfilUser.scss'

export default function PerfilUsuario(){
    return (
        <main>

            <Cabecalho/>

            <div className='perfil'>

                <section className='perfil-sessao perfil-cabecalho'>

                    <img src={phUser} alt="" className='perfil-cabecalho-foto' width='125px'/>
                    <div className='perfil-cabecalho-info'>

                        <h2 className='perfil-nome perfil-cabecalho-info-item'> Ricardo Hideki </h2>
                        <h4 className='perfil-area perfil-cabecalho-info-item'> Web Designer </h4>
                        <div className='perfil-notas perfil-cabecalho-info-item'>
                            <i class="bi bi-star-fill perfil-nota"></i>
                            <i class="bi bi-star-fill perfil-nota"></i>
                            <i class="bi bi-star-fill perfil-nota"></i>
                            <i class="bi bi-star-fill perfil-nota"></i>
                            <i class="bi bi-star-half perfil-nota"></i>
                        </div>
                        
                    </div>
                </section>

                <section className='perfil-sessao perfil-conteudo-btns'>
                        
                        <button className='btn-perfil btn-selecionado'>Sobre</button>
                        <button className='btn-perfil'>Tarefas Finalizadas</button>
                        <button className='btn-perfil'>Gráficos</button>

                </section>


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

            </div>

        </main>
    )
}