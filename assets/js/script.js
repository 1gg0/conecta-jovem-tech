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
const registrationForm = document.getElementById('registrationForm');
const formFeedback = document.getElementById('formFeedback');
const registrationsList = document.getElementById('registrationsList');
const panelCounter = document.getElementById('panelCounter');
const clearRegistrationsButton = document.getElementById('clearRegistrations');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const backToTopBtn = document.getElementById('backToTopBtn');
const heroWorkshopsCount = document.getElementById('heroWorkshopsCount');
const heroVacanciesCount = document.getElementById('heroVacanciesCount');

const summaryCategory = document.getElementById('summaryCategory');
const summaryCount = document.getElementById('summaryCount');
const summaryNextDate = document.getElementById('summaryNextDate');
const summaryNextTime = document.getElementById('summaryNextTime');
const summaryWorkload = document.getElementById('summaryWorkload');
const summaryVacancies = document.getElementById('summaryVacancies');

let activeCategory = 'Programação';

function renderHeroStats() {
  heroWorkshopsCount.textContent = String(workshops.length);
  heroVacanciesCount.textContent = String(workshops.reduce((total, item) => total + item.vacancies, 0));
}

function renderWorkshops() {
  workshopsGrid.innerHTML = workshops.map((workshop) => {
    const meta = categoryMeta[workshop.category];
    return `
      <article class="workshop-card ${meta.colorClass}">
        <span class="pill ${meta.colorClass}">${workshop.category}</span>
        <h3>${workshop.title}</h3>
        <p>${workshop.description}</p>
        <div class="workshop-meta">
          <span>${workshop.level}</span>
          <span>${workshop.duration}</span>
          <span>${workshop.modality}</span>
          <span>${workshop.place}</span>
        </div>
      </article>
    `;
  }).join('');
}

function renderScheduleTabs() {
  const categories = Object.keys(categoryMeta);
  scheduleTabs.innerHTML = categories.map((category) => `
    <button class="tab ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
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
  const items = workshops.filter((workshop) => workshop.category === activeCategory);
  renderScheduleSummary(items);

  scheduleList.innerHTML = items.map((item) => {
    const meta = categoryMeta[item.category];
    return `
      <article class="schedule-item ${meta.colorClass}">
        <div class="schedule-date-wrap">
          <span class="schedule-category-badge ${meta.colorClass}">${item.category}</span>
          <div class="schedule-date">${item.date}</div>
        </div>
        <div class="schedule-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="schedule-meta">
            <span>${item.level}</span>
            <span>${item.duration}</span>
            <span>${item.time}</span>
            <span>${item.place}</span>
            <span>${item.vacancies} vagas</span>
          </div>
        </div>
        <button type="button" class="button button-primary small schedule-enroll" data-workshop-id="${item.id}">Inscreva-se</button>
      </article>
    `;
  }).join('');

  scheduleList.querySelectorAll('.schedule-enroll').forEach((button) => {
    button.addEventListener('click', () => {
      const workshopId = button.dataset.workshopId;
      selectWorkshopAndScroll(workshopId);
    });
  });
}

function populateWorkshopSelect() {
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
  return JSON.parse(localStorage.getItem('conectaJovemTechRegistrations') || '[]');
}

function saveRegistrations(registrations) {
  localStorage.setItem('conectaJovemTechRegistrations', JSON.stringify(registrations));
}

function renderRegistrations() {
  const registrations = getRegistrations();
  panelCounter.textContent = `${registrations.length} inscrição${registrations.length === 1 ? '' : 'ões'} registrada${registrations.length === 1 ? '' : 's'}`;

  if (!registrations.length) {
    registrationsList.innerHTML = '<p class="panel-empty">Nenhuma inscrição registrada ainda. Preencha o formulário para testar o MVP.</p>';
    return;
  }

  registrationsList.innerHTML = registrations.map((registration) => `
    <article class="registration-item">
      <h3>${registration.nome}</h3>
      <p><strong>Oficina:</strong> ${registration.oficinaTitulo}</p>
      <p><strong>Categoria:</strong> ${registration.categoria}</p>
      <p><strong>E-mail:</strong> ${registration.email}</p>
      <p><strong>Idade:</strong> ${registration.idade} anos</p>
      ${registration.mensagem ? `<p><strong>Mensagem:</strong> ${registration.mensagem}</p>` : ''}
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

  if (!input.value.trim()) {
    message = 'Este campo é obrigatório.';
  } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
    message = 'Informe um e-mail válido.';
  } else if (input.id === 'idade') {
    const age = Number(input.value);
    if (Number.isNaN(age) || age < 12 || age > 29) {
      message = 'Informe uma idade entre 12 e 29 anos.';
    }
  }

  if (errorMessage) {
    errorMessage.textContent = message;
  }

  return !message;
}

function clearValidationMessages() {
  document.querySelectorAll('.error-message').forEach((message) => {
    message.textContent = '';
  });
  formFeedback.textContent = '';
  formFeedback.className = 'form-feedback';
}

function selectWorkshopAndScroll(workshopId) {
  const workshop = getWorkshopById(workshopId);
  if (!workshop) return;

  workshopSelect.value = workshop.id;
  document.getElementById('inscricao').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => workshopSelect.focus(), 350);
}

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  clearValidationMessages();

  const requiredFields = Array.from(registrationForm.querySelectorAll('input[required], select[required]'));
  const isValid = requiredFields.every(validateField);

  if (!isValid) {
    formFeedback.textContent = 'Revise os campos destacados para concluir a inscrição.';
    formFeedback.classList.add('error');
    return;
  }

  const workshop = getWorkshopById(workshopSelect.value);

  const registration = {
    nome: document.getElementById('nome').value.trim(),
    email: document.getElementById('email').value.trim(),
    idade: document.getElementById('idade').value.trim(),
    oficinaId: workshop.id,
    oficinaTitulo: workshop.title,
    categoria: workshop.category,
    mensagem: document.getElementById('mensagem').value.trim()
  };

  const registrations = getRegistrations();
  registrations.unshift(registration);
  saveRegistrations(registrations);
  renderRegistrations();

  registrationForm.reset();
  formFeedback.textContent = 'Inscrição enviada com sucesso no MVP demonstrativo.';
  formFeedback.classList.add('success');
});

registrationForm.querySelectorAll('input[required], select[required]').forEach((input) => {
  input.addEventListener('blur', () => validateField(input));
});

clearRegistrationsButton.addEventListener('click', () => {
  localStorage.removeItem('conectaJovemTechRegistrations');
  renderRegistrations();
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function initializeSectionToggles() {
  const savedState = JSON.parse(localStorage.getItem('conectaJovemTechSectionState') || '{}');

  document.querySelectorAll('.collapse-toggle').forEach((button) => {
    const targetId = button.dataset.target;
    const content = document.getElementById(targetId);
    const sectionKey = targetId;

    const setState = (isExpanded) => {
      button.setAttribute('aria-expanded', String(isExpanded));
      button.textContent = isExpanded ? '− Minimizar' : '+ Maximizar';
      content.classList.toggle('is-open', isExpanded);
      content.classList.toggle('is-collapsed', !isExpanded);
      savedState[sectionKey] = isExpanded;
      localStorage.setItem('conectaJovemTechSectionState', JSON.stringify(savedState));
    };

    const initialState = savedState[sectionKey] !== undefined ? savedState[sectionKey] : true;
    setState(initialState);

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      setState(!isExpanded);
    });
  });
}

renderHeroStats();
renderWorkshops();
renderScheduleTabs();
renderSchedule();
populateWorkshopSelect();
renderRegistrations();
initializeSectionToggles();
