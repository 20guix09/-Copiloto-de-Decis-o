// Base de Dados de Perguntas
const database = {
    perguntas: [
        { id: 1, pilar: "Retenção", titulo: "Sua empresa possui um processo ativo de pós-venda após a entrega do produto?", subtopico: "Relacionamento contínuo para mitigar atritos de satisfação e preparar a próxima recompra.", opcoes: [{ texto: "Nunca fazemos qualquer ação pós-venda", peso: 1 }, { texto: "Entramos em contato apenas se houver reclamação direta", peso: 2 }, { texto: "Fazemos abordagens de forma ocasional e sem padronização", peso: 3 }, { texto: "Executamos pós-venda consistentemente, mas de forma manual", peso: 4 }, { texto: "Processo 100% estruturado e automatizado dentro do funil", peso: 5 }] },
        { id: 2, pilar: "Retenção", titulo: "Você sabe exatamente quantos clientes deixaram de comprar com você no último ano?", subtopico: "Monitoramento e controle preditivo sobre a taxa de abandono (churn) da base ativa.", opcoes: [{ texto: "Não tenho ideia de quantos clientes saíram", peso: 1 }, { texto: "Sei empiricamente que muitos clientes sumiram recentemente", peso: 2 }, { texto: "Tenho uma noção básica gerada por estimativas gerais", peso: 3 }, { texto: "Consigo exportar uma listagem de quem são os inativos", peso: 4 }, { texto: "Monitoro a evasão em tempo real através de dashboards integrados", peso: 5 }] },
        { id: 3, pilar: "Inteligência de Dados", titulo: "Suas decisões de estoque e compras são baseadas em dados reais ou na intuição?", subtopico: "Modelagem de inventário inteligente para evitar a imobilização de capital de giro em gôndolas.", opcoes: [{ texto: "Decisões baseadas 100% em intuição comercial", peso: 1 }, { texto: "Maior parte guiada por perceptions intuitivas do momento", peso: 2 }, { texto: "Modelo misto (dividido entre intuição e algumas planilhas)", peso: 3 }, { texto: "Maior parte da compra é orientada por dados de histórico", peso: 4 }, { texto: "100% guiado por relatórios de demanda preditiva e curvas de giro", peso: 5 }] },
        { id: 4, pilar: "Conversão", titulo: "Sua equipe de vendas recebe treinamentos de conversão e aumento de ticket médio?", subtopico: "Capacitação técnica em metodologias de Upsell e Cross-sell para maximizar margem.", opcoes: [{ texto: "Nunca fornecemos treinamento técnico de vendas", peso: 1 }, { texto: "Treinamentos ocorrem de forma extremamente rara", peso: 2 }, { texto: "A equipe recebe apenas orientações informais básicas", peso: 3 }, { texto: "Realizamos workshops comerciais semestrais", peso: 4 }, { texto: "Treinamento mensal avançado e focado no atingimento de metas", peso: 5 }] },
        { id: 5, pilar: "Retenção", titulo: "Você monitora o ciclo de retorno (tempo médio entre compras) do seu cliente?", subtopico: "Identificação da janela ideal de recompra para ativação de campanhas personalizadas.", opcoes: [{ texto: "Não realizamos nenhum tipo de acompanhamento de frequência", peso: 1 }, { texto: "Apenas esperamos de forma passiva o cliente retornar", peso: 2 }, { texto: "Conhecemos o prazo médio geral, mas sem ações ativas", peso: 3 }, { texto: "O time de vendas faz contatos manuais quando lembra do cliente", peso: 4 }, { texto: "Disparamos alertas automáticos no dia exato do ciclo de retorno", peso: 5 }] },
        { id: 6, pilar: "Conversão", titulo: "Seu atendimento via WhatsApp utiliza automações e respostas rápidas?", subtopico: "Otimização do canal de conversão primário utilizado pelo consumidor premium.", opcoes: [{ texto: "Atendimento muito lento, gerando gargalos e confusão", peso: 1 }, { texto: "Processo lento e inteiramente dependente do digito manual", peso: 2 }, { texto: "Atendimento padronizado em horário comercial básico", peso: 3 }, { texto: "Rápido e organizado com roteiros claros de resposta", peso: 4 }, { texto: "Retorno instantâneo estruturado com catálogos nativos", peso: 5 }] },
        { id: 7, pilar: "Inteligência de Dados", titulo: "Sua empresa possui uma base de dados (CRM) com as preferências dos clientes?", subtopico: "Profundidade de segmentação cadastral para hiper-personalização de ofertas de valor.", opcoes: [{ texto: "Não possuímos base cadastral consolidada", peso: 1 }, { texto: "Armazenamos unicamente dados básicos como nome e telefone", peso: 2 }, { texto: "Cadastro básico focado no histórico de notas fiscais", peso: 3 }, { texto: "Perfis consolidados contendo preferências e hábitos de consumo", peso: 4 }, { texto: "Histórico completo sincronizado com comportamento e datas sazonais", peso: 5 }] },
        { id: 8, pilar: "Atração", titulo: "Existe um processo formal para coletar feedbacks e nota de satisfação (NPS)?", subtopico: "Métricas qualificadas para certificar que a experiência da marca está gerando defensores.", opcoes: [{ texto: "Nunca realizamos pesquisas de satisfação", peso: 1 }, { texto: "Coletamos a opinião somente diante de crises de reclamação", peso: 2 }, { texto: "Perguntamos informal e casualmente ao cliente", peso: 3 }, { texto: "Pesquisa quantitativa enviada periodicamente por lote", peso: 4 }, { texto: "Pesquisa estruturada de NPS disparada logo após cada venda", peso: 5 }] },
        { id: 9, pilar: "Atração", titulo: "Sua empresa tem um programa estruturado de incentivo a indicações?", subtopico: "Engenharia de crescimento orgânico transformando clientes fiéis em canais de atração.", opcoes: [{ texto: "Não incentivamos nem estruturamos indicações", peso: 1 }, { texto: "As indicações acontecem de forma espontânea e por acaso", peso: 2 }, { texto: "Agradecemos verbalmente as poucas indicações recebidas", peso: 3 }, { texto: "Oferecemos mimos ou descontos eventuais por indicação", peso: 4 }, { texto: "Programa oficial de Member Get Member com recompensas claras", peso: 5 }] },
        { id: 10, pilar: "Inteligência de Dados", titulo: "Você consegue visualizar seu lucro líquido real de forma diária ou semanal?", subtopico: "Controle cirúrgico do fluxo financeiro livre subtraindo custos, impostos e custos fixos.", opcoes: [{ texto: "Não fazemos acompanhamento ou controle estruturado de margem", peso: 1 }, { texto: "Visualizamos unicamente o faturamento bruto total", peso: 2 }, { texto: "A apuração de lucro real acontece somente uma vez ao mês", peso: 3 }, { texto: "Acompanhamos e fechamos a margem de forma semanal", peso: 4 }, { texto: "Painel ou dashboard automatizado exibindo o lucro real diariamente", peso: 5 }] }
    ]
};

// Gerenciamento de Estado
let estadoQuiz = {
    passoAtual: 1, 
    respostasOperacionais: {},
    faturamentoMensal: 0,
    ticketMedio: 0,
    dadosLead: { nome: '', email: '', whatsapp: '' }
};

// Elementos Centrais do DOM
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');
const stepLabel = document.getElementById('step-label');
const stepPercentage = document.getElementById('step-percentage');
const wizardContent = document.getElementById('wizard-content');

document.addEventListener("DOMContentLoaded", () => { renderizarPasso(); });

function atualizarBarraProgresso(totalPassos = 15) {
    let percentual = Math.round(((estadoQuiz.passoAtual - 1) / totalPassos) * 100);
    progressBar.style.width = `${percentual}%`;
    stepPercentage.innerText = `${percentual}%`;
    stepLabel.innerText = `Etapa Estratégica ${estadoQuiz.passoAtual} de ${totalPassos}`;
}

function renderizarPasso() {
    wizardContent.innerHTML = "";
    wizardContent.className = "fade-in w-full";
    
    if (estadoQuiz.passoAtual === 1) renderizarEtapaFinanceira('faturamento');
    else if (estadoQuiz.passoAtual === 2) renderizarEtapaFinanceira('ticket');
    else if (estadoQuiz.passoAtual >= 3 && estadoQuiz.passoAtual <= 6) renderizarQuestaoLikert(database.perguntas[estadoQuiz.passoAtual - 3]);
    else if (estadoQuiz.passoAtual === 7) renderizarCardInsight(1);
    else if (estadoQuiz.passoAtual >= 8 && estadoQuiz.passoAtual <= 11) renderizarQuestaoLikert(database.perguntas[estadoQuiz.passoAtual - 4]);
    else if (estadoQuiz.passoAtual === 12) renderizarCardInsight(2);
    else if (estadoQuiz.passoAtual >= 13 && estadoQuiz.passoAtual <= 14) renderizarQuestaoLikert(database.perguntas[estadoQuiz.passoAtual - 5]);
    else if (estadoQuiz.passoAtual === 15) renderizarCapturaLead();
    else renderizarDashboardCompleto();
    
    lucide.createIcons();
}

function renderizarEtapaFinanceira(tipo) {
    atualizarBarraProgresso();
    let isFaturamento = tipo === 'faturamento';
    
    let opcoes = isFaturamento ? [
        { texto: "Até R$ 20.000 / mês", valor: 15000 },
        { texto: "R$ 20.000 a R$ 50.000 / mês", valor: 35000 },
        { texto: "R$ 50.000 a R$ 100.000 / mês", valor: 75000 },
        { texto: "R$ 100.000 a R$ 250.000 / mês", valor: 175000 },
        { texto: "Acima de R$ 250.000 / mês", valor: 400000 }
    ] : [
        { texto: "Até R$ 50,00", valor: 35 },
        { texto: "R$ 50,00 a R$ 120,00", valor: 85 },
        { texto: "R$ 120,00 a R$ 250,00", valor: 185 },
        { texto: "R$ 250,00 a R$ 500,00", valor: 375 },
        { texto: "Acima de R$ 500,00", valor: 750 }
    ];

    let valorAtual = isFaturamento ? estadoQuiz.faturamentoMensal : estadoQuiz.ticketMedio;

    let htmlOpcoes = opcoes.map((opcao) => {
        let isSelected = valorAtual === opcao.valor;
        return `
            <div class="w-full">
                <button onclick="salvarEscolhaFinanceira('${tipo}', ${opcao.valor})" 
                    class="w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-150 text-left group btn-option
                    ${isSelected ? 'btn-option-selected' : ''}">
                    <span class="text-sm font-medium ${isSelected ? 'font-bold text-white' : ''}">${opcao.texto}</span>
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4
                        ${isSelected ? 'border-[#C59A3F] bg-[#C59A3F]' : 'border-slate-600'}">
                        ${isSelected ? '<div class="w-2 h-2 bg-[#020C1B] rounded-full"></div>' : ''}
                    </div>
                </button>
            </div>
        `;
    }).join('');

    wizardContent.innerHTML = `
        <div class="w-full space-y-6">
            <div class="flex items-center gap-2 text-[#C59A3F] text-xs font-semibold uppercase tracking-wider">
                <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
                Mapeamento Macroeconômico da Operação
            </div>
            <div>
                <h2 class="text-2xl font-bold text-white mb-2">
                    ${isFaturamento ? 'Qual o faturamento bruto mensal aproximado da sua empresa?' : 'Qual o valor estimado do seu Ticket Médio por venda?'}
                </h2>
                <p class="text-slate-400 text-sm">Selecione a faixa ideal para parametrizar os algoritmos de auditoria financeira e calcular o seu Retorno Real.</p>
            </div>
            <div class="w-full space-y-3 pt-2">
                ${htmlOpcoes}
            </div>
        </div>
    `;
}

function salvarEscolhaFinanceira(tipo, valor) {
    if (tipo === 'faturamento') estadoQuiz.faturamentoMensal = valor;
    else estadoQuiz.ticketMedio = valor;
    
    setTimeout(() => { estadoQuiz.passoAtual++; renderizarPasso(); }, 200);
}

function renderizarQuestaoLikert(q) {
    atualizarBarraProgresso();
    
    let htmlOpcoes = q.opcoes.map((opcao) => {
        let isSelected = estadoQuiz.respostasOperacionais[q.id] === opcao.peso;
        return `
            <div class="w-full">
                <button onclick="salvarRespostaLikert(${q.id}, ${opcao.peso})" 
                    class="w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-150 text-left group btn-option
                    ${isSelected ? 'btn-option-selected' : ''}">
                    <span class="text-sm font-medium ${isSelected ? 'font-bold text-white' : ''}">${opcao.texto}</span>
                    <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-4
                        ${isSelected ? 'border-[#C59A3F] bg-[#C59A3F]' : 'border-slate-600'}">
                        ${isSelected ? '<div class="w-2 h-2 bg-[#020C1B] rounded-full"></div>' : ''}
                    </div>
                </button>
            </div>
        `;
    }).join('');

    wizardContent.innerHTML = `
        <div class="w-full space-y-6">
            <div class="flex items-center gap-2 text-[#C59A3F] text-xs font-semibold uppercase tracking-wider">
                <i data-lucide="folder-git" class="w-4 h-4"></i>
                Pilar Estratégico: <span class="text-white font-bold">${q.pilar}</span>
            </div>
            <div>
                <h2 class="text-2xl font-bold text-white mb-2">${q.titulo}</h2>
                <p class="text-slate-400 text-sm">${q.subtopico}</p>
            </div>
            <div class="w-full space-y-3 pt-2">
                ${htmlOpcoes}
            </div>
        </div>
    `;
}

function salvarRespostaLikert(perguntaId, peso) {
    estadoQuiz.respostasOperacionais[perguntaId] = peso;
    setTimeout(() => { estadoQuiz.passoAtual++; renderizarPasso(); }, 200);
}

function renderizarCardInsight(cardId) {
    atualizarBarraProgresso();
    
    let copyTitulo = cardId === 1 ? "O Custo Oculto da Tomada de Decisão Baseada em Percepções" : "A Sangria Invisível de Margem de Lucro por Falta de Processamento Ativo";
    let copyDescricao = cardId === 1 
        ? "Organizações que negligenciam a automação e o acompanhamento de dados operacionais perdem, em média, até 30% do seu faturamento bruto anual gerando gargalos invisíveis de atendimento."
        : "A dependência de canais analógicos e de atendimento sem triagem rápida de dados deixa seu concorrente um passo à frente. O cliente premium não aceita esperas longas.";

    wizardContent.innerHTML = `
        <div class="w-full bg-[#020C1B] border border-[#C59A3F]/30 rounded-2xl p-6 md:p-8 text-white space-y-6">
            <div class="flex items-center gap-2 text-[#C59A3F] text-xs font-bold uppercase tracking-widest">
                <i data-lucide="shield-alert" class="w-5 h-5"></i>
                Alerta de Desempenho Empresarial
            </div>
            <div class="space-y-3">
                <h3 class="text-xl md:text-2xl font-bold tracking-tight">${copyTitulo}</h3>
                <p class="text-slate-300 text-sm md:text-base leading-relaxed">${copyDescricao}</p>
            </div>
            
            <div class="p-4 bg-[#172A45] border border-white/10 rounded-xl flex items-start gap-3">
                <div class="p-2 bg-[#C59A3F]/10 rounded-lg text-[#C59A3F] flex-shrink-0">
                    <i data-lucide="zap" class="w-5 h-5"></i>
                </div>
                <p class="text-xs text-slate-300 leading-normal">
                    <span class="font-bold text-[#C59A3F]">Como a Nexus Studio soluciona:</span> Nós eliminamos esse atraso sistêmico desenvolvendo camadas customizadas de dados estruturados e automação.
                </p>
            </div>

            <div class="pt-2">
                <button onclick="estadoQuiz.passoAtual++; renderizarPasso();" class="w-full inline-flex items-center justify-center gap-2 btn-gold font-bold py-4 px-6 rounded-xl shadow-lg transition-all text-[#020C1B]">
                    Entendi os Riscos, Continuar
                    <i data-lucide="chevron-right" class="w-4 h-4"></i>
                </button>
            </div>
        </div>
    `;
}

function renderizarCapturaLead() {
    atualizarBarraProgresso();
    
    wizardContent.innerHTML = `
        <div class="w-full space-y-6">
            <div class="text-center max-w-lg mx-auto space-y-3">
                <div class="inline-flex p-3 bg-[#C59A3F]/10 rounded-full text-[#C59A3F] mb-2">
                    <i data-lucide="lock" class="w-6 h-6"></i>
                </div>
                <h2 class="text-2xl font-bold text-white">Seu Diagnóstico Operacional foi Processado</h2>
                <p class="text-slate-400 text-sm">Insira suas credenciais para liberar o Dashboard Analítico e as Projeções Financeiras.</p>
            </div>

            <form id="form-lead" onsubmit="submeterLead(event)" class="space-y-4 max-w-xl mx-auto pt-4">
                <div class="w-full">
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-2">Nome Completo</label>
                    <input type="text" id="lead-nome" required class="w-full rounded-xl p-4 text-sm input-custom" placeholder="Ex: Rogério Vasconcelos">
                </div>
                <div class="w-full">
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-2">E-mail Corporativo</label>
                    <input type="email" id="lead-email" required class="w-full rounded-xl p-4 text-sm input-custom" placeholder="Ex: rogerio@suaempresa.com.br">
                </div>
                <div class="w-full">
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-2">WhatsApp</label>
                    <input type="tel" id="lead-whatsapp" required class="w-full rounded-xl p-4 text-sm input-custom" placeholder="Ex: (11) 99999-9999">
                </div>

                <div class="pt-4">
                    <button type="submit" class="w-full inline-flex items-center justify-center gap-2 btn-gold font-bold py-4 px-6 rounded-xl shadow-lg transition-all text-[#020C1B]">
                        Desbloquear Painel Completo
                        <i data-lucide="line-chart" class="w-4 h-4"></i>
                    </button>
                </div>
            </form>
        </div>
    `;

    const telInput = document.getElementById('lead-whatsapp');
    telInput.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}

function submeterLead(e) {
    e.preventDefault();
    estadoQuiz.dadosLead.nome = document.getElementById('lead-nome').value.trim();
    estadoQuiz.dadosLead.email = document.getElementById('lead-email').value.trim();
    estadoQuiz.dadosLead.whatsapp = document.getElementById('lead-whatsapp').value.trim();
    if (estadoQuiz.dadosLead.nome) { estadoQuiz.passoAtual++; renderizarPasso(); }
}

function renderizarDashboardCompleto() {
    progressContainer.classList.add('hidden');
    
    let somaPesos = Object.values(estadoQuiz.respostasOperacionais).reduce((a, b) => a + b, 0);
    let tierFaturamento = estadoQuiz.faturamentoMensal > 100000 ? 5 : (estadoQuiz.faturamentoMensal > 40000 ? 3 : 1);
    let tierTicket = estadoQuiz.ticketMedio > 150 ? 5 : (estadoQuiz.ticketMedio > 60 ? 3 : 1);
    
    let totalPontosGeral = somaPesos + tierFaturamento + tierTicket;
    let percentualMaturidadeGeral = Math.round((totalPontosGeral / 60) * 100);

    const calc = (q1, q2, q3) => Math.round((((estadoQuiz.respostasOperacionais[q1]||3) + (estadoQuiz.respostasOperacionais[q2]||3) + (q3?estadoQuiz.respostasOperacionais[q3]||3:0)) / (q3?15:10)) * 100);
    
    let pctAtracao = calc(8, 9);
    let pctConversao = calc(4, 6);
    let pctRetencao = calc(1, 2, 5);
    let pctInteligencia = calc(3, 7, 10);

    const resolverSemaforo = (pct) => {
        if (pct < 50) return { texto: "Crítico", corText: "text-red-400", corBg: "bg-red-900/20", border: "border-red-500/30", icone: "alert-circle" };
        if (pct >= 50 && pct < 80) return { texto: "Atenção", corText: "text-amber-400", corBg: "bg-amber-900/20", border: "border-amber-500/30", icone: "alert-triangle" };
        return { texto: "Otimizado", corText: "text-[#C59A3F]", corBg: "bg-[#C59A3F]/10", border: "border-[#C59A3F]/30", icone: "check-circle" };
    };

    let sAtracao = resolverSemaforo(pctAtracao), sConversao = resolverSemaforo(pctConversao), sRetencao = resolverSemaforo(pctRetencao), sInteligencia = resolverSemaforo(pctInteligencia);

    let fatAnual = estadoQuiz.faturamentoMensal * 12;
    let custoFeeling = Math.round(fatAnual * (0.35 - (percentualMaturidadeGeral / 100) * 0.25));
    let ganhoProj = Math.round(fatAnual * 0.05 * (1.3 - (pctRetencao / 100))) + Math.round(fatAnual * 0.05 * (1.3 - (pctConversao / 100)));

    const formatarBRL = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    wizardContent.innerHTML = `
        <div class="w-full space-y-8">
            <div class="border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <span class="text-xs font-bold text-[#C59A3F] uppercase tracking-widest block mb-1">Auditoria Digital de Conformidade</span>
                    <h2 class="text-2xl font-bold text-white">Painel Geral de Diagnóstico Estratégico</h2>
                    <p class="text-slate-400 text-sm mt-0.5">Empresa auditada sob a gestão de: <span class="font-semibold text-white">${estadoQuiz.dadosLead.nome}</span></p>
                </div>
            </div>

            <div class="bg-[#020C1B] border border-[#C59A3F]/20 text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-[0_0_15px_rgba(197,154,63,0.1)]">
                <div class="space-y-2 text-center md:text-left">
                    <h3 class="text-lg font-bold tracking-tight text-white">Índice de Maturidade Comercial Expandido</h3>
                    <p class="text-xs text-slate-400 max-w-md">Sua nota reflete a eficiência tecnológica integrada somando os canais de atendimento, processos de back-office e inteligência de dados.</p>
                </div>
                <div class="flex items-center gap-4 flex-shrink-0">
                    <div class="text-right">
                        <span class="text-4xl font-extrabold text-[#C59A3F] block">${percentualMaturidadeGeral}%</span>
                        <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Score de Conformidade</span>
                    </div>
                    <div class="w-12 h-12 rounded-xl bg-[#172A45] flex items-center justify-center text-[#C59A3F]">
                        <i data-lucide="gauge" class="w-6 h-6"></i>
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="layers" class="w-4 h-4 text-[#C59A3F]"></i> Desempenho por Pilares Organizacionais
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${[
                        {nome: 'Atração Comercial', desc: 'Captação e NPS', pct: pctAtracao, sem: sAtracao},
                        {nome: 'Conversão Operacional', desc: 'Canais e equipes', pct: pctConversao, sem: sConversao},
                        {nome: 'Retenção de Base', desc: 'Pós-venda e recompra', pct: pctRetencao, sem: sRetencao},
                        {nome: 'Inteligência de Dados', desc: 'DRE e CRM', pct: pctInteligencia, sem: sInteligencia}
                    ].map(p => `
                        <div class="border border-white/10 rounded-xl p-5 bg-[#172A45] space-y-3">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-white text-sm">${p.nome}</h4>
                                    <p class="text-slate-400 text-xs mt-0.5">${p.desc}</p>
                                </div>
                                <span class="text-xs font-bold px-2 py-1 rounded ${p.sem.corBg} ${p.sem.corText} border ${p.sem.border} flex items-center gap-1">
                                    <i data-lucide="${p.sem.icone}" class="w-3.5 h-3.5"></i> ${p.sem.texto}
                                </span>
                            </div>
                            <div class="w-full bg-[#020C1B] rounded-full h-1.5 overflow-hidden">
                                <div class="bg-[#C59A3F] h-full" style="width: ${p.pct}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="trending-up" class="w-4 h-4 text-[#C59A3F]"></i> Projeção Macroeconômica de Perdas & Ganhos
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border border-red-500/20 bg-red-900/10 rounded-xl p-5 space-y-2">
                        <div class="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                            <i data-lucide="trending-down" class="w-4 h-4"></i> Custo Atual do Feeling
                        </div>
                        <p class="text-2xl font-extrabold text-white">${formatarBRL(custoFeeling)}</p>
                        <p class="text-xs text-slate-400 leading-normal">Volume financeiro que sua empresa perde anualmente devido a vazamentos operacionais e falta de automação.</p>
                    </div>
                    <div class="border border-[#C59A3F]/30 bg-[#C59A3F]/10 rounded-xl p-5 space-y-2">
                        <div class="flex items-center gap-2 text-[#C59A3F] font-bold text-xs uppercase tracking-wider">
                            <i data-lucide="sparkles" class="w-4 h-4"></i> Margem Recuperável Alvo
                        </div>
                        <p class="text-2xl font-extrabold text-[#C59A3F]">+ ${formatarBRL(ganhoProj)}</p>
                        <p class="text-xs text-slate-400 leading-normal">Faturamento real projetado recuperando inativos e automatizando processos de conversão.</p>
                    </div>
                </div>
            </div>

            <div class="bg-[#020C1B] border border-white/10 text-white rounded-2xl p-6 md:p-8 text-center space-y-4 print:hidden mt-8">
                <h3 class="text-xl font-bold tracking-tight">Pronto para otimizar sua operação?</h3>
                <p class="text-slate-400 text-sm max-w-xl mx-auto">Fale com os engenheiros da Nexus Studio para implementar seu plano de automação personalizado.</p>
                <div class="pt-2">
                    <a href="https://wa.me/5551999999999?text=Olá! Acabei de concluir meu diagnóstico empresarial no Copiloto de Decisão com ${percentualMaturidadeGeral}% de maturidade." 
                        target="_blank" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gold font-bold py-4 px-6 rounded-xl shadow-lg text-[#020C1B]">
                        <i data-lucide="phone-call" class="w-4 h-4 text-[#020C1B]"></i> Otimizar Agora com Especialista
                    </a>
                </div>
            </div>

            <div class="space-y-4 print:hidden pt-4">
                <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <i data-lucide="help-circle" class="w-4 h-4 text-[#C59A3F]"></i> Perguntas Frequentes
                </h3>
                <div class="space-y-2">
                    ${[
                        { p: 'Como é calculado o Índice?', r: 'Baseia-se nas variáveis mapeadas e pontua os pilares operacionais.' },
                        { p: 'O que representa o "Custo do Feeling"?', r: 'Representa a ineficiência financeira e o vazamento de receita provocados por processos manuais.' },
                        { p: 'O que a Nexus Studio faz exatamente?', r: 'Desenvolvemos engenharia de software e integrações sob medida (WhatsApp, CRM e Dashboards).' }
                    ].map((faq, i) => `
                        <div class="border border-white/10 rounded-xl overflow-hidden bg-[#172A45]">
                            <button onclick="alternarFaq(${i})" class="w-full flex justify-between items-center p-4 text-left font-semibold text-white text-sm hover:bg-[#172A45]/80">
                                <span>${faq.p}</span>
                                <i data-lucide="chevron-down" id="faq-icone-${i}" class="w-4 h-4 text-slate-400 transition-transform"></i>
                            </button>
                            <div id="faq-conteudo-${i}" class="hidden p-4 border-t border-white/10 text-xs text-slate-400 leading-relaxed bg-[#020C1B]">
                                ${faq.r}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function alternarFaq(id) {
    const cont = document.getElementById(`faq-conteudo-${id}`);
    const icone = document.getElementById(`faq-icone-${id}`);
    cont.classList.toggle('hidden');
    icone.classList.toggle('rotate-180');
}