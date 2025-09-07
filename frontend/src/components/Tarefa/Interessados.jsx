import './Interessados.scss'
import PHIcon from '../../assets/ph.jpg'

export default function Interessados(){
    return (
        <div className="Interessados">
            <section className="Interessados-secao">
                <h2 className='Interessados-titulo Interessados-titulo'>Nome Usuário</h2>
                <h3 className='Interessados-area Interessados-texto'>Área de Atuação do Aluno</h3>
                <h3 className='Interessados-instituicao Interessados-texto'>Instituição Ligada</h3>

                <div className="Interessados-info-habilidades interessados-sessao">
                    <h4 className='Interessados-titulo Interessados-texto'>Habilidades</h4>
                    <div className="Interessados-info-item Interessados-habilidade">
                        <span className='Interessados-texto Interessados-generalItem'>Design Gráfico</span>
                        <span className='Interessados-texto Interessados-generalItem'>Programação Web</span>
                        <span className='Interessados-texto Interessados-generalItem'>Canva</span>
                    </div>
                </div>

                <div className='Interessados-info-sobre interessados-sessao'>
                    <h4 className='Interessados-tituloSobre Interessados-titulo Interessados-texto'>Sobre Mim</h4>
                    <p className='Interessados-sobreTarefa Interessados-texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum sem a risus gravida facilisis. Vivamus id mauris suscipit, elementum lorem eget, pulvinar libero. Mauris lobortis eleifend volutpat. Duis commodo vel odio id pharetra. Sed rhoncus pharetra nisl, eget fermentum elit ornare sed. In maximus sodales vulputate. </p>
                </div>

        
                <div className='Interessados-info interessados-sessao'>

                    <table className="Interessados-info-formacao">
                        <tr>

                            <th className='Interessados-titulo Interessados-texto'>Formação</th>
                            <th className='Interessados-titulo Interessados-texto'>Conclusão</th>

                        </tr>
                        <tr>

                            <td className="Interessados-info-item Interessados-generalItem">
                                <div className="Interessados-formacao-curso"> Informática para Internet </div>
                                <div className="Interessados-formacao-instituicao">IFPR, Campus Telêmaco Borba</div>
                            </td>
                            <td className='Interessados-info-item Interessados-generalItem'>xxxx</td>                     
                            

                        </tr>
                        <tr>
                            <td className="Interessados-info-item Interessados-generalItem">
                                <div className="Interessados-formacao-curso"> Técnico em Análise e Desenvolvimento de Sistemas </div>
                                <div className="Interessados-formacao-instituicao">IFPR, Campus Telêmaco Borba</div>
                            </td>
                            <td className='Interessados-info-item Interessados-generalItem'>xxxx</td>      
                        </tr>

                    </table>

                </div>
                <button className='Interessados-btn'>Ver Mais</button>
            </section>
        </div>
    )
}