const agreementHint = '1 — полностью не согласен(-на); 2 — скорее не согласен(-на); 3 — ни согласен(-на), ни не согласен(-на); 4 — скорее согласен(-на); 5 — полностью согласен(-на).';
const frequencyHint = '1 — ни разу; 2 — редко; 3 — иногда; 4 — часто; 5 — почти каждый день.';

const sections = [
  { title: 'Начало учёбы', description: 'Сначала несколько вопросов о вашем опыте после поступления.', ids: [1, 2, 3] },
  { title: 'Учёба и организация времени', description: 'Расписание, нагрузка и учебные задачи.', ids: [4, 5, 6, 7, 8, 9, 10, 11] },
  { title: 'Люди и жизнь университета', description: 'Общение, совместная работа и участие в жизни БФУ.', ids: [12, 13, 14, 15, 16, 17] },
  { title: 'Самочувствие и переезд', description: 'Эти вопросы можно пропустить, если не хочется отвечать.', ids: [18, 19, 20, 21, 22] },
  { title: 'Помощь и предложения', description: 'Последние вопросы помогут понять, какая поддержка нужна.', ids: [23, 24, 25] }
];

const questions = [
  { id: 1, title: 'Где вы жили до поступления в БФУ?', type: 'radio', required: false, options: ['В Калининграде', 'В другом населённом пункте Калининградской области', 'За пределами Калининградской области', 'Предпочитаю не отвечать'] },
  { id: 2, title: 'Работаете ли вы сейчас наряду с учёбой?', type: 'radio', required: false, options: ['Да', 'Нет', 'Предпочитаю не отвечать'] },
  { id: 3, title: 'Насколько хорошо вы в целом освоились в университете?', type: 'scale', required: true, low: 'Совсем не освоился(-ась)', high: 'Полностью освоился(-ась)' },
  { id: 4, title: 'Мне понятно расписание занятий.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 5, title: 'Мне понятны требования по учебным дисциплинам.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 6, title: 'Мне легко пользоваться цифровыми сервисами БФУ, нужными для учёбы.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 7, title: 'Какой вам кажется текущая учебная нагрузка?', type: 'scale', required: true, low: 'Очень низкая', high: 'Очень высокая', hint: '2 — низкая; 3 — умеренная; 4 — высокая.' },
  { id: 8, title: 'Какие области учёбы вызывают у вас заметные трудности?', type: 'checkbox', required: true, exclusiveLast: true, options: ['Математика', 'Программирование', 'Экономические дисциплины', 'Управленческие дисциплины', 'Цифровые сервисы БФУ', 'Заметных трудностей нет'] },
  { id: 9, title: 'Мне удаётся заранее планировать учебные задачи.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 10, title: 'Я успеваю сдавать учебные задания в срок.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 11, title: 'Насколько вам удаётся сохранять удобный для себя баланс между учёбой и остальной жизнью?', type: 'scale', required: true, low: 'Совсем не удаётся', high: 'Полностью удаётся' },
  { id: 12, title: 'Насколько вы довольны общением с одногруппниками?', type: 'scale', required: true, low: 'Совсем не доволен(-льна)', high: 'Полностью доволен(-льна)' },
  { id: 13, title: 'Насколько легко вам работать с одногруппниками над общими заданиями?', type: 'scale', required: true, low: 'Очень трудно', high: 'Очень легко' },
  { id: 14, title: 'Насколько вы довольны общением с преподавателями?', type: 'scale', required: true, low: 'Совсем не доволен(-льна)', high: 'Полностью доволен(-льна)' },
  { id: 15, title: 'Насколько легко вам знакомиться с другими студентами БФУ?', type: 'scale', required: true, low: 'Очень трудно', high: 'Очень легко' },
  { id: 16, title: 'В каких активностях БФУ вы участвовали с начала учёбы?', type: 'checkbox', required: true, exclusiveLast: true, options: ['Студенческие мероприятия', 'Клубы или объединения', 'Учебные или внеучебные проекты', 'Спортивные занятия или соревнования', 'Пока ни в чём не участвовал(-а)'] },
  { id: 17, title: 'Я чувствую себя частью студенческого сообщества БФУ.', type: 'scale', required: true, low: 'Полностью не согласен(-на)', high: 'Полностью согласен(-на)', hint: agreementHint },
  { id: 18, title: 'Как часто вы испытывали стресс из-за учёбы за последние две недели?', type: 'scale', required: false, low: 'Ни разу', high: 'Почти каждый день', hint: frequencyHint },
  { id: 19, title: 'Как часто вы чувствовали сильную усталость за последние две недели?', type: 'scale', required: false, low: 'Ни разу', high: 'Почти каждый день', hint: frequencyHint },
  { id: 20, title: 'Насколько вы уверены, что справитесь с обучением на направлении?', type: 'scale', required: false, low: 'Совсем не уверен(-а)', high: 'Полностью уверен(-а)' },
  { id: 21, title: 'Насколько вам сейчас интересно продолжать обучение на направлении?', type: 'scale', required: false, low: 'Совсем не интересно', high: 'Очень интересно' },
  { id: 22, title: 'Если вы переехали в Калининград ради учёбы, насколько легко вам было привыкнуть к жизни в городе?', type: 'radio', required: false, options: ['1 — очень трудно', '2 — скорее трудно', '3 — средне', '4 — скорее легко', '5 — очень легко', 'Не переезжал(-а) ради учёбы'] },
  { id: 23, title: 'К кому вы обращались за помощью с начала учёбы?', type: 'checkbox', required: true, exclusiveLast: true, options: ['К одногруппникам', 'К преподавателям', 'К куратору или наставнику', 'К друзьям или семье', 'К студенческим объединениям', 'В службы поддержки БФУ', 'Ни к кому не обращался(-ась)'] },
  { id: 24, title: 'Что было для вас самым трудным после начала учёбы?', type: 'text', required: false },
  { id: 25, title: 'Что помогло бы первокурсникам быстрее освоиться в БФУ?', type: 'text', required: false }
];

const form = document.getElementById('survey-form');
const content = document.getElementById('form-content');
const error = document.getElementById('form-error');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
let step = 0;

function makeQuestion(question) {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'question';
  fieldset.dataset.questionId = String(question.id);
  const legend = document.createElement('legend');
  const number = document.createElement('span');
  number.className = 'question-number';
  number.textContent = String(question.id).padStart(2, '0');
  legend.append(number, document.createTextNode(question.title));
  if (!question.required) {
    const optional = document.createElement('span');
    optional.className = 'optional';
    optional.textContent = ' · необязательно';
    legend.append(optional);
  }
  fieldset.append(legend);

  if (question.type === 'scale') {
    const row = document.createElement('div');
    row.className = 'scale-row';
    for (let value = 1; value <= 5; value++) {
      const label = document.createElement('label');
      label.className = 'choice';
      const input = document.createElement('input');
      input.type = 'radio'; input.name = `q${question.id}-ui`; input.value = String(value);
      input.setAttribute('aria-label', `${value} из 5`);
      const display = document.createElement('span');
      display.textContent = String(value);
      label.append(input, display); row.append(label);
    }
    const ends = document.createElement('div');
    ends.className = 'scale-ends';
    const low = document.createElement('span'); low.textContent = question.low;
    const high = document.createElement('span'); high.textContent = question.high;
    ends.append(low, high); fieldset.append(row, ends);
  } else if (question.type === 'text') {
    const textarea = document.createElement('textarea');
    textarea.name = `q${question.id}-ui`;
    textarea.maxLength = 1200;
    textarea.placeholder = 'Ваш ответ';
    textarea.setAttribute('aria-label', question.title);
    fieldset.append(textarea);
  } else {
    const options = document.createElement('div');
    options.className = 'options';
    question.options.forEach((value, index) => {
      const label = document.createElement('label');
      label.className = 'choice';
      const input = document.createElement('input');
      input.type = question.type;
      input.name = `q${question.id}-ui`;
      input.value = value;
      if (question.exclusiveLast) input.dataset.exclusive = index === question.options.length - 1 ? 'last' : 'regular';
      const text = document.createElement('span'); text.textContent = value;
      label.append(input, text); options.append(label);
    });
    fieldset.append(options);
  }
  if (question.hint) {
    const hint = document.createElement('p'); hint.className = 'hint'; hint.textContent = question.hint;
    fieldset.append(hint);
  }
  return fieldset;
}

function render() {
  const section = sections[step];
  content.replaceChildren();
  const kicker = document.createElement('p'); kicker.className = 'section-kicker'; kicker.textContent = `Раздел ${step + 1} из ${sections.length}`;
  const title = document.createElement('h2'); title.className = 'section-title'; title.id = 'step-title'; title.textContent = section.title;
  const description = document.createElement('p'); description.className = 'section-description'; description.textContent = section.description;
  content.append(kicker, title, description);
  for (const id of section.ids) content.append(makeQuestion(questions[id - 1]));
  document.getElementById('step-counter').textContent = `Шаг ${step + 1} из ${sections.length}`;
  document.getElementById('progress-percent').textContent = `${Math.round((step + 1) / sections.length * 100)}%`;
  document.getElementById('progress-fill').style.width = `${(step + 1) / sections.length * 100}%`;
  prevButton.hidden = step === 0;
  nextButton.hidden = step === sections.length - 1;
  submitButton.hidden = step !== sections.length - 1;
  error.hidden = true;
}

const answers = new Map();
function readAnswer(question) {
  const fieldset = content.querySelector(`[data-question-id="${question.id}"]`);
  if (!fieldset) return answers.get(question.id) ?? '';
  if (question.type === 'text') return fieldset.querySelector('textarea').value.trim();
  const checked = [...fieldset.querySelectorAll('input:checked')].map(input => input.value);
  return question.type === 'checkbox' ? checked : (checked[0] ?? '');
}

function saveStep() {
  for (const id of sections[step].ids) answers.set(id, readAnswer(questions[id - 1]));
}

function restoreStep() {
  for (const id of sections[step].ids) {
    const question = questions[id - 1];
    const saved = answers.get(id);
    if (saved === undefined) continue;
    const fieldset = content.querySelector(`[data-question-id="${id}"]`);
    if (question.type === 'text') fieldset.querySelector('textarea').value = saved;
    else fieldset.querySelectorAll('input').forEach(input => { input.checked = Array.isArray(saved) ? saved.includes(input.value) : saved === input.value; });
  }
}

function validateStep() {
  for (const id of sections[step].ids) {
    const question = questions[id - 1];
    if (!question.required) continue;
    const value = readAnswer(question);
    if (value === '' || (Array.isArray(value) && value.length === 0)) {
      error.textContent = `Ответьте на вопрос ${id}, чтобы продолжить.`;
      error.hidden = false;
      content.querySelector(`[data-question-id="${id}"] input, [data-question-id="${id}"] textarea`)?.focus();
      return false;
    }
  }
  error.hidden = true;
  return true;
}

content.addEventListener('change', event => {
  const input = event.target;
  if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox' || !input.checked) return;
  const fieldset = input.closest('fieldset');
  if (input.dataset.exclusive === 'last') fieldset.querySelectorAll('input[type="checkbox"]').forEach(other => { if (other !== input) other.checked = false; });
  else fieldset.querySelector('input[data-exclusive="last"]')?.checked && (fieldset.querySelector('input[data-exclusive="last"]').checked = false);
});

nextButton.addEventListener('click', () => {
  if (!validateStep()) return;
  saveStep(); step++; render(); restoreStep();
  document.querySelector('.survey-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
prevButton.addEventListener('click', () => {
  saveStep(); step--; render(); restoreStep();
  document.querySelector('.survey-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!validateStep()) return;
  saveStep();
  document.querySelectorAll('.answer-field').forEach(input => input.remove());
  questions.forEach(question => {
    const answer = answers.get(question.id);
    if (answer === '' || (Array.isArray(answer) && answer.length === 0)) return;
    const field = document.createElement('input');
    field.type = 'hidden'; field.className = 'answer-field';
    field.name = `${String(question.id).padStart(2, '0')}. ${question.title}`;
    field.value = Array.isArray(answer) ? answer.join('; ') : answer;
    form.append(field);
  });
  document.getElementById('next-url').value = new URL('thanks.html', window.location.href).href;
  content.querySelectorAll('input, textarea').forEach(input => { input.disabled = true; });
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляем…';
  HTMLFormElement.prototype.submit.call(form);
});

render();
