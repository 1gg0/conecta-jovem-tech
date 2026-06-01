const categoryMeta = {
  'Programação': {
    colorClass: 'cat-programacao',
    description: 'Base inicial com lógica, raciocínio e resolução de problemas.',
    totalHours: 8,
    vacancies: 40
  },
  'HTML e CSS': {
    colorClass: 'cat-htmlcss',
    description: 'Estrutura visual para construir páginas bem organizadas e responsivas.',
    totalHours: 8,
    vacancies: 40
  },
  'JavaScript': {
    colorClass: 'cat-javascript',
    description: 'Interatividade, formulários e manipulação básica de dados no navegador.',
    totalHours: 8,
    vacancies: 40
  },
  'Projetos Web': {
    colorClass: 'cat-projetos',
    description: 'Aplicação integrada do conteúdo em pequenos projetos orientados.',
    totalHours: 8,
    vacancies: 40
  }
};

const workshops = [
  {
    id: 'intro-programacao',
    category: 'Programação',
    title: 'Introdução à Programação',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 01',
    date: '15 de Junho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Primeiro contato com lógica, algoritmos e noções básicas de programação para quem está começando.'
  },
  {
    id: 'logica-algoritmos',
    category: 'Programação',
    title: 'Lógica e Algoritmos na Prática',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 01',
    date: '17 de Junho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Exercícios guiados para aprender sequência lógica, condições e repetição com exemplos acessíveis.'
  },
  {
    id: 'pensamento-computacional',
    category: 'Programação',
    title: 'Pensamento Computacional para Iniciantes',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 02',
    date: '22 de Junho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Desenvolvimento de raciocínio para decompor problemas e criar soluções passo a passo.'
  },
  {
    id: 'fluxogramas',
    category: 'Programação',
    title: 'Resolução de Problemas com Fluxogramas',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 02',
    date: '24 de Junho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Criação de fluxogramas simples para representar decisões e processos antes de programar.'
  },
  {
    id: 'desvendando-html-css',
    category: 'HTML e CSS',
    title: 'Desvendando HTML e CSS',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 03',
    date: '29 de Junho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Aprenda como páginas da web são estruturadas e estilizadas, entendendo os fundamentos do front-end.'
  },
  {
    id: 'paginas-responsivas',
    category: 'HTML e CSS',
    title: 'Construindo Páginas Responsivas',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 03',
    date: '01 de Julho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Conceitos práticos de responsividade para adaptar páginas a diferentes tamanhos de tela.'
  },
  {
    id: 'componentes-visuais',
    category: 'HTML e CSS',
    title: 'Componentes Visuais com Flexbox',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 04',
    date: '06 de Julho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Organização de blocos visuais, espaçamento e alinhamento usando flexbox em exemplos reais.'
  },
  {
    id: 'landing-page',
    category: 'HTML e CSS',
    title: 'Landing Page do Zero',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 04',
    date: '08 de Julho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Montagem orientada de uma página simples com cabeçalho, chamada principal e blocos visuais.'
  },
  {
    id: 'primeiros-passos-js',
    category: 'JavaScript',
    title: 'Primeiros Passos com JavaScript',
    level: 'Iniciante',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 05',
    date: '13 de Julho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Conceitos de variáveis, funções e interatividade na web com linguagem simples e exemplos iniciais.'
  },
  {
    id: 'eventos-interatividade',
    category: 'JavaScript',
    title: 'Eventos e Interatividade na Página',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 05',
    date: '15 de Julho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Cliques, mudanças de interface e elementos da página com exemplos práticos de interação.'
  },
  {
    id: 'formularios-js',
    category: 'JavaScript',
    title: 'Manipulando Formulários com JavaScript',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 06',
    date: '20 de Julho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Validação de campos, mensagens de feedback e tratamento de dados de formulários no navegador.'
  },
  {
    id: 'dados-navegador',
    category: 'JavaScript',
    title: 'Consumo de Dados e Objetos no Navegador',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório 06',
    date: '22 de Julho',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Organização de informações com arrays e objetos, abrindo caminho para armazenamento na interface.'
  },
  {
    id: 'oficina-projetos-web',
    category: 'Projetos Web',
    title: 'Oficina Prática de Projetos Web',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório Maker',
    date: '27 de Julho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Atividade prática para juntar os conhecimentos iniciais e construir uma pequena página funcional.'
  },
  {
    id: 'portfolio-pessoal',
    category: 'Projetos Web',
    title: 'Portfólio Pessoal para Iniciantes',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório Maker',
    date: '29 de Julho',
    time: '14:00 - 16:00',
    vacancies: 10,
    description: 'Planejamento e montagem de um portfólio simples para apresentar projetos e habilidades.'
  },
  {
    id: 'site-comunitario',
    category: 'Projetos Web',
    title: 'Site Comunitário Colaborativo',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório Maker',
    date: '03 de Agosto',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Construção colaborativa de uma página com foco em comunicação de ações da comunidade.'
  },
  {
    id: 'prototipo-final',
    category: 'Projetos Web',
    title: 'Protótipo Final: Página de Oficina',
    level: 'Básico',
    duration: '2h',
    modality: 'Presencial',
    place: 'Laboratório Maker',
    date: '05 de Agosto',
    time: '09:00 - 11:00',
    vacancies: 10,
    description: 'Síntese final com criação de uma página de oficina, integrando estrutura, estilo e interação básica.'
  }
];


const workshopsGrid = document.getElementById('workshopsGrid');
const scheduleList = document.getElementById('scheduleList');
const scheduleTabs = document.getElementById('scheduleTabs');
const workshopSelect = document.getElementById('oficina');
const workshopSearch = document.getElementById('workshopSearch');
const workshopCategoryFilter = document.getElementById('workshopCategoryFilter');
const workshopResultCount = document.getElementById('workshopResultCount');
const registrationForm = document.getElementById('registrationForm');
const formFeedback = document.getElementById('formFeedback');
const registrationsList = document.getElementById('registrationsList');
const panelCounter = document.getElementById('panelCounter');
const clearRegistrationsButton = document.getElementById('clearRegistrations');
const exportRegistrationsButton = document.getElementById('exportRegistrations');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
const backToTopBtn = document.getElementById('backToTopBtn');
const heroWorkshopsCount = document.getElementById('heroWorkshopsCount');
const heroVacanciesCount = document.getElementById('heroVacanciesCount');

const summaryCategory = document.getElementById('summaryCategory');
const summaryCount = document.getElementById('summaryCount');
const summaryNextDate = document.getElementById('summaryNextDate');
const summaryNextTime = document.getElementById('summaryNextTime');
const summaryWorkload = document.getElementById('summaryWorkload');
const summaryVacancies = document.getElementById('summaryVacancies');

const STORAGE_KEY = 'conectaJovemTechRegistrations';
const SECTION_STATE_KEY = 'conectaJovemTechSectionState';
let activeCategory = 'Programação';

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[char]));
}

function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function renderHeroStats() {
  if (!heroWorkshopsCount || !heroVacanciesCount) return;
  heroWorkshopsCount.textContent = String(workshops.length);
  heroVacanciesCount.textContent = String(workshops.reduce((total, item) => total + item.vacancies, 0));
}

function getFilteredWorkshops() {
  const searchTerm = normalizeText(workshopSearch?.value || '');
  const selectedCategory = workshopCategoryFilter?.value || 'todas';

  return workshops.filter((workshop) => {
    const matchesCategory = selectedCategory === 'todas' || workshop.category === selectedCategory;
    const searchableText = normalizeText(`${workshop.title} ${workshop.category} ${workshop.description} ${workshop.place} ${workshop.level}`);
    const matchesSearch = !searchTerm || searchableText.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderWorkshopResultCount(total) {
  if (!workshopResultCount) return;
  workshopResultCount.textContent = `${total} oficina${total === 1 ? '' : 's'} encontrada${total === 1 ? '' : 's'}`;
}

function renderWorkshops() {
  if (!workshopsGrid) return;
  const filteredWorkshops = getFilteredWorkshops();
  renderWorkshopResultCount(filteredWorkshops.length);

  if (!filteredWorkshops.length) {
    workshopsGrid.innerHTML = '<p class="workshop-empty">Nenhuma oficina encontrada para os filtros selecionados.</p>';
    return;
  }

  workshopsGrid.innerHTML = filteredWorkshops.map((workshop) => {
    const meta = categoryMeta[workshop.category];
    return `
      <article class="workshop-card ${meta.colorClass}">
        <span class="pill ${meta.colorClass}">${escapeHTML(workshop.category)}</span>
        <h3>${escapeHTML(workshop.title)}</h3>
        <p>${escapeHTML(workshop.description)}</p>
        <div class="workshop-meta">
          <span>${escapeHTML(workshop.level)}</span>
          <span>${escapeHTML(workshop.duration)}</span>
          <span>${escapeHTML(workshop.modality)}</span>
          <span>${escapeHTML(workshop.place)}</span>
        </div>
      </article>
    `;
  }).join('');
}

function populateWorkshopCategoryFilter() {
  if (!workshopCategoryFilter) return;
  Object.keys(categoryMeta).forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    workshopCategoryFilter.appendChild(option);
  });
}

function renderScheduleTabs() {
  if (!scheduleTabs) return;
  const categories = Object.keys(categoryMeta);
  scheduleTabs.innerHTML = categories.map((category) => `
    <button class="tab ${category === activeCategory ? 'active' : ''}" data-category="${escapeHTML(category)}" aria-pressed="${category === activeCategory}">${escapeHTML(category)}</button>
  `).join('');

  scheduleTabs.querySelectorAll('.tab').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.category;
      renderScheduleTabs();
      renderSchedule();
    });
  });
}

function renderScheduleSummary(items) {
  if (!summaryCategory || !summaryCount || !summaryNextDate || !summaryNextTime || !summaryWorkload || !summaryVacancies) return;
  const meta = categoryMeta[activeCategory];
  const nextItem = items[0];
  summaryCategory.textContent = activeCategory;
  summaryCount.textContent = `${items.length} oficina${items.length > 1 ? 's' : ''} planejada${items.length > 1 ? 's' : ''} para esta categoria.`;
  summaryNextDate.textContent = nextItem?.date || 'Em definição';
  summaryNextTime.textContent = nextItem ? `${nextItem.time} • ${nextItem.place}` : 'Cronograma em atualização';
  summaryWorkload.textContent = `${meta.totalHours} horas`;
  summaryVacancies.textContent = `${meta.vacancies} vagas distribuídas nas oficinas.`;
}

function renderSchedule() {
  if (!scheduleList) return;
  const items = workshops.filter((workshop) => workshop.category === activeCategory);
  renderScheduleSummary(items);

  scheduleList.innerHTML = items.map((item) => {
    const meta = categoryMeta[item.category];
    return `
      <article class="schedule-item ${meta.colorClass}">
        <div class="schedule-date-wrap">
          <span class="schedule-category-badge ${meta.colorClass}">${escapeHTML(item.category)}</span>
          <div class="schedule-date">${escapeHTML(item.date)}</div>
        </div>
        <div class="schedule-content">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
          <div class="schedule-meta">
            <span>${escapeHTML(item.level)}</span>
            <span>${escapeHTML(item.duration)}</span>
            <span>${escapeHTML(item.time)}</span>
            <span>${escapeHTML(item.place)}</span>
            <span>${item.vacancies} vagas</span>
          </div>
        </div>
        <button type="button" class="button button-primary small schedule-enroll" data-workshop-id="${escapeHTML(item.id)}">Inscreva-se</button>
      </article>
    `;
  }).join('');

  scheduleList.querySelectorAll('.schedule-enroll').forEach((button) => {
    button.addEventListener('click', () => selectWorkshopAndScroll(button.dataset.workshopId));
  });
}

function populateWorkshopSelect() {
  if (!workshopSelect) return;
  const categories = Object.keys(categoryMeta);
  workshopSelect.innerHTML = '<option value="">Selecione</option>';

  categories.forEach((category) => {
    const group = document.createElement('optgroup');
    group.label = category;

    workshops
      .filter((workshop) => workshop.category === category)
      .forEach((workshop) => {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = `${workshop.title} — ${workshop.date}`;
        group.appendChild(option);
      });

    workshopSelect.appendChild(group);
  });
}

function getWorkshopById(id) {
  return workshops.find((workshop) => workshop.id === id);
}

function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    console.warn('Não foi possível ler as inscrições locais.', error);
    return [];
  }
}

function saveRegistrations(registrations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
}

function formatDateTime(isoDate) {
  if (!isoDate) return 'Data não registrada';
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(isoDate));
}

function updateExportButtonState(registrations) {
  if (!exportRegistrationsButton) return;
  exportRegistrationsButton.disabled = registrations.length === 0;
  exportRegistrationsButton.title = registrations.length ? 'Exportar inscrições em CSV' : 'Nenhuma inscrição para exportar';
}

function renderRegistrations() {
  if (!registrationsList || !panelCounter) return;
  const registrations = getRegistrations();
  panelCounter.textContent = `${registrations.length} inscrição${registrations.length === 1 ? '' : 'ões'} registrada${registrations.length === 1 ? '' : 's'}`;
  updateExportButtonState(registrations);

  if (!registrations.length) {
    registrationsList.innerHTML = '<p class="panel-empty">Nenhuma inscrição registrada ainda. Preencha o formulário para testar o MVP.</p>';
    return;
  }

  registrationsList.innerHTML = registrations.map((registration) => `
    <article class="registration-item">
      <h3>${escapeHTML(registration.nome)}</h3>
      <time datetime="${escapeHTML(registration.createdAt || '')}">Registrado em ${escapeHTML(formatDateTime(registration.createdAt))}</time>
      <p><strong>Oficina:</strong> ${escapeHTML(registration.oficinaTitulo)}</p>
      <p><strong>Categoria:</strong> ${escapeHTML(registration.categoria)}</p>
      <p><strong>E-mail:</strong> ${escapeHTML(registration.email)}</p>
      <p><strong>Idade:</strong> ${escapeHTML(registration.idade)} anos</p>
      ${registration.mensagem ? `<p><strong>Mensagem:</strong> ${escapeHTML(registration.mensagem)}</p>` : ''}
    </article>
  `).join('');
}

function validateField(input) {
  const fieldContainer = input.closest('.form-row') || input.parentElement;
  const errorMessage = fieldContainer.querySelector('.error-message');

  if (input.type === 'checkbox') {
    const checkboxError = document.querySelector('.checkbox-error');
    if (!input.checked) {
      checkboxError.textContent = 'Você precisa confirmar a participação para enviar a inscrição.';
      return false;
    }
    checkboxError.textContent = '';
    return true;
  }

  let message = '';
  const value = input.value.trim();

  if (!value) {
    message = 'Este campo é obrigatório.';
  } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    message = 'Informe um e-mail válido.';
  } else if (input.id === 'idade') {
    const age = Number(value);
    if (!Number.isInteger(age) || age < 12 || age > 29) {
      message = 'Informe uma idade inteira entre 12 e 29 anos.';
    }
  }

  if (errorMessage) errorMessage.textContent = message;
  return !message;
}

function clearValidationMessages() {
  document.querySelectorAll('.error-message').forEach((message) => {
    message.textContent = '';
  });
  if (formFeedback) {
    formFeedback.textContent = '';
    formFeedback.className = 'form-feedback';
  }
}

function getSavedSectionState() {
  try {
    return JSON.parse(localStorage.getItem(SECTION_STATE_KEY) || '{}');
  } catch (error) {
    return {};
  }
}

function persistSectionState(savedState) {
  localStorage.setItem(SECTION_STATE_KEY, JSON.stringify(savedState));
}

function updateGlobalSectionToggle() {
  const globalToggle = document.getElementById('toggleAllSections');
  const sectionButtons = Array.from(document.querySelectorAll('.collapse-toggle[data-target]'));
  if (!globalToggle || sectionButtons.length === 0) return;

  const allExpanded = sectionButtons.every((button) => button.getAttribute('aria-expanded') === 'true');
  const shouldCollapse = allExpanded;

  globalToggle.dataset.action = shouldCollapse ? 'collapse' : 'expand';
  globalToggle.textContent = shouldCollapse ? '− Minimizar tudo' : '+ Maximizar tudo';
  globalToggle.setAttribute(
    'aria-label',
    shouldCollapse ? 'Minimizar todas as seções' : 'Maximizar todas as seções'
  );
}

function setSectionState(button, content, isExpanded, savedState, shouldPersist = true) {
  const section = content.closest('.section');

  button.setAttribute('aria-expanded', String(isExpanded));
  button.textContent = isExpanded ? '− Minimizar' : '+ Maximizar';
  content.classList.toggle('is-open', isExpanded);
  content.classList.toggle('is-collapsed', !isExpanded);
  content.setAttribute('aria-hidden', String(!isExpanded));

  if (section) {
    section.classList.toggle('is-section-collapsed', !isExpanded);
  }

  savedState[content.id] = isExpanded;
  if (shouldPersist) persistSectionState(savedState);
  updateGlobalSectionToggle();
}

function expandSectionByContentId(contentId) {
  const content = document.getElementById(contentId);
  const button = document.querySelector(`.collapse-toggle[data-target="${contentId}"]`);
  if (!content || !button) return;

  const savedState = getSavedSectionState();
  setSectionState(button, content, true, savedState);
}

function selectWorkshopAndScroll(workshopId) {
  const workshop = getWorkshopById(workshopId);
  if (!workshop || !workshopSelect) return;

  expandSectionByContentId('inscricaoContent');
  workshopSelect.value = workshop.id;
  document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => workshopSelect.focus(), 350);
}

function handleRegistrationSubmit(event) {
  event.preventDefault();
  clearValidationMessages();

  const requiredFields = Array.from(registrationForm.querySelectorAll('input[required], select[required]'));
  const validationResults = requiredFields.map(validateField);
  const isValid = validationResults.every(Boolean);

  if (!isValid) {
    formFeedback.textContent = 'Revise os campos destacados para concluir a inscrição.';
    formFeedback.classList.add('error');
    return;
  }

  const workshop = getWorkshopById(workshopSelect.value);
  if (!workshop) {
    formFeedback.textContent = 'Selecione uma oficina válida para continuar.';
    formFeedback.classList.add('error');
    return;
  }

  const email = document.getElementById('email').value.trim().toLowerCase();
  const registrations = getRegistrations();
  const alreadyRegistered = registrations.some((item) => item.email.toLowerCase() === email && item.oficinaId === workshop.id);

  if (alreadyRegistered) {
    formFeedback.textContent = 'Este e-mail já possui inscrição local registrada para a oficina selecionada.';
    formFeedback.classList.add('error');
    return;
  }

  const registration = {
    nome: document.getElementById('nome').value.trim(),
    email,
    idade: document.getElementById('idade').value.trim(),
    oficinaId: workshop.id,
    oficinaTitulo: workshop.title,
    categoria: workshop.category,
    mensagem: document.getElementById('mensagem').value.trim(),
    createdAt: new Date().toISOString()
  };

  registrations.unshift(registration);
  saveRegistrations(registrations);
  renderRegistrations();

  registrationForm.reset();
  formFeedback.textContent = 'Inscrição enviada com sucesso no MVP demonstrativo.';
  formFeedback.classList.add('success');
}

function exportRegistrationsAsCSV() {
  const registrations = getRegistrations();
  if (!registrations.length) return;

  const headers = ['Nome', 'E-mail', 'Idade', 'Oficina', 'Categoria', 'Mensagem', 'Data de registro'];
  const rows = registrations.map((item) => [
    item.nome,
    item.email,
    item.idade,
    item.oficinaTitulo,
    item.categoria,
    item.mensagem || '',
    formatDateTime(item.createdAt)
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(';'))
    .join('\n');

  const blob = new Blob([`\ufeff${csvContent}`], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'inscricoes-conecta-jovem-tech.csv';
  link.click();
  URL.revokeObjectURL(url);
}

function initializeForm() {
  if (!registrationForm) return;
  registrationForm.addEventListener('submit', handleRegistrationSubmit);
  registrationForm.querySelectorAll('input[required], select[required]').forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.value || input.checked) validateField(input);
    });
  });
}

function initializePanelActions() {
  if (clearRegistrationsButton) {
    clearRegistrationsButton.addEventListener('click', () => {
      const registrations = getRegistrations();
      if (!registrations.length) return;
      const confirmClear = window.confirm('Deseja realmente limpar as inscrições registradas neste navegador?');
      if (!confirmClear) return;
      localStorage.removeItem(STORAGE_KEY);
      renderRegistrations();
    });
  }

  if (exportRegistrationsButton) {
    exportRegistrationsButton.addEventListener('click', exportRegistrationsAsCSV);
  }
}

function initializeMobileMenu() {
  if (!menuToggle || !mainNav) return;

  const closeMenu = () => {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mainNav.contains(event.target) || menuToggle.contains(event.target);
    if (!clickedInsideMenu) closeMenu();
  });
}

function initializeBackToTop() {
  if (!backToTopBtn) return;
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initializeWorkshopFilters() {
  populateWorkshopCategoryFilter();
  workshopSearch?.addEventListener('input', renderWorkshops);
  workshopCategoryFilter?.addEventListener('change', renderWorkshops);
}

function initializeSectionToggles() {
  const savedState = getSavedSectionState();
  const sectionButtons = Array.from(document.querySelectorAll('.collapse-toggle[data-target]'));
  const globalToggle = document.getElementById('toggleAllSections');

  sectionButtons.forEach((button) => {
    const targetId = button.dataset.target;
    const content = document.getElementById(targetId);
    if (!content) return;

    const initialState = savedState[targetId] !== undefined ? savedState[targetId] : true;
    setSectionState(button, content, initialState, savedState, false);

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      setSectionState(button, content, !isExpanded, savedState);
    });
  });

  persistSectionState(savedState);
  updateGlobalSectionToggle();

  globalToggle?.addEventListener('click', () => {
    const shouldExpand = globalToggle.dataset.action !== 'collapse';
    sectionButtons.forEach((button) => {
      const content = document.getElementById(button.dataset.target);
      if (!content) return;
      setSectionState(button, content, shouldExpand, savedState, false);
    });
    persistSectionState(savedState);
    updateGlobalSectionToggle();
  });
}

function initializeActiveNavigation() {
  if (!navLinks.length || !('IntersectionObserver' in window)) return;

  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeId = `#${entry.target.id}`;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === activeId));
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}

function initializeRevealAnimations() {
  const elements = document.querySelectorAll('.info-card, .workshop-card, .schedule-item, .form-card, .panel-card, .contact-card, .two-column-card, .hero-visual, .hero-text');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('reveal-visible'));
    return;
  }

  elements.forEach((element) => element.classList.add('reveal-on-scroll'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach((element) => observer.observe(element));
}

function initializeApp() {
  renderHeroStats();
  initializeWorkshopFilters();
  renderWorkshops();
  renderScheduleTabs();
  renderSchedule();
  populateWorkshopSelect();
  renderRegistrations();
  initializeForm();
  initializePanelActions();
  initializeMobileMenu();
  initializeBackToTop();
  initializeSectionToggles();
  initializeActiveNavigation();
  initializeRevealAnimations();
}

initializeApp();
