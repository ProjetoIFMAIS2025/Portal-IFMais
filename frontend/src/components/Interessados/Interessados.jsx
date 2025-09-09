import './Interessados.scss'

export default function Interessados({dadosAluno}){
    return (
        <div className="Interessados">
            <section className="Interessados-secao">
                <h2 className='Interessados-titulo Interessados-titulo'>{dadosAluno.nome}</h2>
                <h3 className='Interessados-area Interessados-texto'>{dadosAluno.area}</h3>
                <h3 className='Interessados-instituicao Interessados-texto'>{dadosAluno.instituicao}</h3>

                <div className="Interessados-info-habilidades interessados-sessao">
                    <h4 className='Interessados-titulo Interessados-texto'>Habilidades</h4>
                    <div className="Interessados-info-item Interessados-habilidade">
                        {
                            dadosAluno.habilidades.map((item, idx) => (
                                <span className='Interessados-texto Interessados-generalItem' key={idx}>{item}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='Interessados-info-sobre interessados-sessao'>
                    <h4 className='Interessados-tituloSobre Interessados-titulo Interessados-texto'>Sobre Mim</h4>
                    <p className='Interessados-sobreTarefa Interessados-texto'>{dadosAluno.sobre}</p>
                </div>

                <button className='Interessados-btn'>Ver Mais</button>
            </section>
        </div>
    )
}