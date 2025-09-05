import Cabecalho from '../components/cabecalho/cabecalho'

import PerfilInicial from '../components/perfil/inicial/inicial'
import TarefasConcluidas from '../components/perfil/tarefasConcluidas/tarefasConcluidas'
import Graficos from '../components/perfil/graficos/graficos';

import phUser from '../assets/ph.jpg'

import './perfilUser.scss'
import { useState } from 'react'

export default function PerfilUsuario(){

    const [sessaoAtual, setSessaoAtual] = useState(1);

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
                        
                        <button className={sessaoAtual == 1 ? 'btn-perfil btn-selecionado' : 'btn-perfil'} onClick={() => setSessaoAtual(1)}>Sobre</button>
                        <button className={sessaoAtual == 2 ? 'btn-perfil btn-selecionado' : 'btn-perfil'} onClick={() => setSessaoAtual(2)}>Tarefas Finalizadas</button>
                        <button className={sessaoAtual == 3 ? 'btn-perfil btn-selecionado' : 'btn-perfil'} onClick={() => setSessaoAtual(3)}>Gráficos</button>

                </section>

                {sessaoAtual == 1 && <PerfilInicial/>}
                {sessaoAtual == 2 && <TarefasConcluidas/>}
                {sessaoAtual == 3 && <Graficos/>}
                

            </div>

        </main>
    )
}