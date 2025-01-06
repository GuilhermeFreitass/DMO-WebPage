function showDenunciasPopup() {
    const popupHtml = `
        <div id="denuncias-popup" class="popup-overlay">
            <div class="popup-content">
                <div class="popup-header">
                    <h2>Canal de Denúncias</h2>
                    <button onclick="closeDenunciasPopup()" class="close-button">&times;</button>
                </div>
                <div class="popup-body">
                    <p>Nosso intuito não só de conferir transparência a seus atos, mas também de ser auxiliada na fiscalização da integridade de suas atividades, a DMO disponibiliza o Canal de Denúncias, para que, se for ocaso, receba o comunicado de eventuais transgressões ao Código de Ética; ao Manual de Política de Integridade, Prevenção à Corrupção e Relação com o Mercado; à Legislação e ao Acordo Setorial Ética Saúde.</p>
                    <p>As denúncias podem ser efetivadas pelo telefone (21) 3289-8900, diretamente ao Oficial de Compliance ou através do e-mail etica@dmorj.com.br, não havendo necessidade de identificação do denunciante, se assim este entender conveniente.</p>
                    <p>Recebida a denúncia, o caso será apurado e as medidas necessárias serão adotadas, podendo o denunciante acompanhar o andamento do Processo pela via telefônica ou pelo e-mail acima descrito.</p>

                </div>
            </div>
        </div>`;

    // Adiciona o HTML do popup ao body
    document.body.insertAdjacentHTML('beforeend', popupHtml);

    // Adiciona listener para fechar o popup ao clicar fora
    document.getElementById('denuncias-popup').addEventListener('click', function(e) {
        if (e.target === this) {
            closeDenunciasPopup();
        }
    });
}

function closeDenunciasPopup() {
    const popup = document.getElementById('denuncias-popup');
    if (popup) {
        // Adiciona classe para animação de saída
        popup.style.animation = 'fadeIn 0.3s ease-out reverse';
        popup.querySelector('.popup-content').style.animation = 'slideIn 0.3s ease-out reverse';
        
        // Remove o popup após a animação terminar
        setTimeout(() => {
            popup.remove();
        }, 300);
    }
} 