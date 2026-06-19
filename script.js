$(document).ready(function () {
    
    // ==========================================
    // LÓGICA DA PÁGINA 1: CAPTURA DO FORMULÁRIO
    // ==========================================
    if ($('#form-diagnostico').length > 0) {
        $('#form-diagnostico').on('submit', function (e) {
            e.preventDefault();

            // Guardar inputs brutos no localStorage para persistência de custo zero
            const dados = {
                faturamento: parseFloat($('#faturamento').val()),
                ticketMedio: parseFloat($('#ticketMedio').val()),
                atendimentos: parseInt($('#atendimentos').val()),
                vendas: parseInt($('#vendas').val()),
                investimentoDigital: parseFloat($('#investimentoDigital').val()),
                clientesSumidos: parseInt($('#clientesSumidos').val())
            };

            localStorage.setItem('copiloto_dados', JSON.stringify(dados));
            
            // Redireciona para a página de resultado
            window.location.href = 'results.html';
        });
    }

    // ==========================================
    // LÓGICA DA PÁGINA 2: MOTOR DE DIAGNÓSTICO
    // ==========================================
    if ($('#val-dinheiro-perdido').length > 0) {
        const dadosLocais = localStorage.getItem('copiloto_dados');

        if (!dadosLocais) {
            // Se tentar acessar o resultado sem dados, volta para a index
            window.location.href = 'index.html';
            return;
        }

        const dados = JSON.parse(dadosLocais);

        // --- CÁLCULOS PRINCIPAIS ---
        const naoConvertidos = dados.atendimentos - dados.vendas;
        const dinheiroPerdido = naoConvertidos * dados.ticketMedio;
        
        // Taxa de conversão atual da loja
        const taxaConversao = dados.atendimentos > 0 ? (dados.vendas / dados.atendimentos) * 100 : 0;
        
        // Oportunidade: Recuperar 5% dos não convertidos do mês + reativar 5% dos clientes sumidos há um ano
        const oportunidadeGanho = ((naoConvertidos * 0.05) + (dados.clientesSumidos * 0.05)) * dados.ticketMedio;

        // --- RENDERIZAÇÃO NA TELA ---
        $('#val-dinheiro-perdido').text(formatarMoeda(dinheiroPerdido));
        $('#val-oportunidade').text(formatarMoeda(oportunidadeGanho));

        // --- ENGINE IF/THEN: GARGALOS E CONSELHOS DO COPILOTO ---
        let htmlGargalos = '';
        let htmlActions = '';

        // Regra 1: Avaliação de Conversão no Balcão
        if (taxaConversao < 35) {
            htmlGargalos += criarLinhaGargalo("Perda Crítica no Balcão", `Sua taxa de conversão está em ${taxaConversao.toFixed(1)}%. O padrão saudável de mercado é acima de 40%. Você está deixando o fluxo de clientes da sua rua ir embora sem comprar.`);
            htmlActions += criarCardAcao("Treinamento de Balcão", "Sua taxa de conversão está baixa. Ação: Desenvolva uma rotina de quebra de objeções com seus vendedores focando no produto de maior margem.", "🔴 Urgente");
        } else {
            htmlActions += criarCardAcao("Blindagem de Script", "A conversão está saudável. Ação: Crie um manual dos argumentos que mais funcionam para garantir consistência em novas contratações.", "🟢 Manutenção");
        }

        // Regra 2: Avaliação de Retenção e Clientes Sumidos
        if (dados.clientesSumidos > (dados.vendas * 2)) {
            htmlGargalos += criarLinhaGargalo("Fidelização Inexistente", `A estimativa de ${dados.clientesSumidos} clientes inativos indica que a receita atual depende unicamente de novos clientes. Reter um cliente custa 5x menos do que atrair um novo.`);
            htmlActions += criarCardAcao("Resgate Manual de Base", "Sua taxa de retorno está baixa. Ação: Extraia uma lista de clientes sumidos há mais de 1 ano e ofereça um benefício exclusivo para reavaliação técnica/retorno à loja.", "🟡 Prioridade");
        } else {
            htmlActions += criarCardAcao("Clube de Vantagens", "A retenção está equilibrada. Ação: Inicie um programa de indicação premiada para aproveitar a alta satisfação dos clientes ativos.", "🟢 Crescimento");
        }

        // Regra 3: Avaliação de Eficiência Digital (ROI aproximado)
        const faturamentoAtribuidoDigital = dados.faturamento * 0.2; // Estimativa padrão mercadológica de impacto passivo
        if (dados.investimentoDigital > 0 && (faturamentoAtribuidoDigital / dados.investimentoDigital) < 2) {
            htmlGargalos += criarLinhaGargalo("Marketing Desperdiçado", `O valor investido em anúncios digitais (R$ ${dados.investimentoDigital}) pode estar atraindo público sem qualificação ou o destino do clique final está sem resposta rápida.`);
            htmlActions += criarCardAcao("Refino de Público Alvo", "Anúncios sem retorno claro. Ação: Pause campanhas abertas demais. Direcione a verba digital exclusivamente para pessoas em um raio de 5km da loja física.", "🟡 Ajuste Técnico");
        } else if (dados.investimentoDigital === 0) {
            htmlActions += criarCardAcao("Ativação de Tráfego Local", "Inércia digital detectada. Ação: Invista uma verba mínima residual (ex: R$ 10/dia) em campanhas de geolocalização focadas no Instagram.", "🔵 Oportunidade");
        } else {
            htmlActions += criarCardAcao("Escalar Anúncios Ganhadores", "Marketing eficiente. Ação: Aumente o orçamento das campanhas digitais validadas em 15% para ampliar a oxigenação da carteira.", "🟢 Escala");
        }

        // Injeta o HTML gerado nas seções corretas
        $('#gargalos-container').html(htmlGargalos || '<p class="text-success mb-0">✓ Nenhum gargalo crítico severo identificado com os dados fornecidos.</p>');
        $('#actions-container').html(htmlActions);

        // --- EVENTOS DA PÁGINA DE RESULTADO ---
        
        // Simulação elegante do PDF usando a folha de estilo customizada para impressão
        $('#btn-print').on('click', function () {
            window.print();
        });

        // Simulação da lista de espera (front-end puro)
        $('#btn-lista-espera').on('click', function () {
            const email = $('#email-espera').val();
            if (email.includes('@') && email.length > 4) {
                $('#msg-sucesso-espera').removeClass('d-none');
                $('#email-espera').val('');
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }

    // ==========================================
    // INTERATIVIDADE: COMPONENTES INFORMATIVOS
    // ==========================================
    // Inicializar Popovers do Bootstrap para os ícones de informação (gatilho por clique externo automatizado)
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'click',
            placement: 'top'
        });
    });

    // Fecha o popover ativo ao clicar fora dele
    $('body').on('click', function (e) {
        $('[data-bs-toggle="popover"]').each(function () {
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                (bootstrap.Popover.getInstance(this) || { hide: () => {} }).hide();
            }
        });
    });

    // --- FUNÇÕES AUXILIARES ---
    function formatarMoeda(valor) {
        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function criarLinhaGargalo(titulo, descricao) {
        return `
            <div class="mb-3 pb-3 border-bottom">
                <h4 class="h6 fw-bold text-danger mb-1"><i class="bi bi-exclamation-triangle-fill me-2"></i>${titulo}</h4>
                <p class="text-muted small mb-0">${descricao}</p>
            </div>
        `;
    }

    function criarCardAcao(titulo, acao, badgeTexto) {
        let badgeClass = 'bg-navy';
        if (badgeTexto.includes('🔴')) badgeClass = 'bg-danger';
        if (badgeTexto.includes('🟡')) badgeClass = 'bg-warning text-dark';
        if (badgeTexto.includes('🟢')) badgeClass = 'bg-success';
        if (badgeTexto.includes('🔵')) badgeClass = 'bg-primary';

        return `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm p-3 bg-white">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge ${badgeClass} text-xs px-2 py-1 rounded">${badgeTexto.replace(/[🟢🔴🔵🟡]/g, '').trim()}</span>
                    </div>
                    <h4 class="h6 fw-bold text-navy mb-2">${titulo}</h4>
                    <p class="text-muted small mb-0">${acao}</p>
                </div>
            </div>
        `;
    }
});