import Cabecalho from '../components/cabecalho/cabecalho'

import './configPage.scss'

export default function ConfigPage(){
    return (
        <main className='config'>
            <Cabecalho/>

            <h1 className='config-title'>Configurações</h1>

            <section className='config-block'>
                
                <div className="config-item">
                    <i class="bi bi-person config-item-icon"></i>
                    <div className='config-item-text'>
                        <h2 className='config-item-titulo'>Conta</h2>
                        <p className='config-item-texto'>Alterar perfil, dados da conta...</p>
                    </div>
                </div>

                <div className="config-item">
                    <i class="bi bi-lock config-item-icon"></i>
                    <div className='config-item-text'>
                        <h2 className='config-item-titulo'>Privacidade</h2>
                        <p className='config-item-texto'>Usuários Bloqueados, Perfil...</p>
                    </div>
                </div>

                <div className="config-item">
                    <i class="bi bi-bell config-item-icon"></i>
                    <div className='config-item-text '>
                        <h2 className='config-item-titulo'>Notificações</h2>
                        <p className='config-item-texto'>Mensagens, oportunidades...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}