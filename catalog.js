const catalogGrid = document.querySelector('.catalog__catalog-grid');
const categoryButtons = document.querySelectorAll('.catalog__category');
const moreButton = document.querySelector('.catalog__more-button');

const CARDS_PER_PAGE = 10;

let currentCategory = 'all';
let visibleCount = CARDS_PER_PAGE;


function createCard(investment) {
  const card = document.createElement('article');

  card.className = 'investment-card';

  card.dataset.id = investment.id;
  card.dataset.category = investment.category;

  card.innerHTML = `
    <span class="investment-card__category investment-card__category--${investment.categoryClass}">
      ${investment.categoryLabel}
    </span>

    <div class="investment-card__header">

      <div class="investment-card__about">

        <div class="investment-card__heading">
          <h2 class="investment-card__name">
            ${investment.name}
          </h2>

          <span class="investment-card__ticker">
            ${investment.ticker}
          </span>
        </div>

      </div>

      <button
        class="investment-card__favorite"
        type="button"
        aria-label="Добавить в избранное"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          />
        </svg>
      </button>

    </div>

    <div class="investment-card__content">

      <p class="investment-card__description">
        ${investment.description}
      </p>

      <div class="investment-card__price">
        <span>
          $${investment.price.toFixed(2)}
        </span>

        <small>
          ${investment.currency} / ${investment.unit}
        </small>
      </div>

      <div class="investment-card__footer">

        <div class="
          investment-card__change
          investment-card__change--${investment.change24h >= 0 ? 'positive' : 'negative'}
        ">
          ${investment.change24h >= 0 ? '+' : ''}${investment.change24h}%
          <span>24ч</span>
        </div>

      </div>

    </div>

    <span class="
      investment-card__risk
      investment-card__risk--${investment.riskLevel}
    ">
      ${investment.risk} риск
    </span>
  `;

  return card;
}

catalogGrid.addEventListener('click', (event) => {
  // Не открываем модалку при нажатии на избранное
  const favoriteButton = event.target.closest('.investment-card__favorite');

  if (favoriteButton) {
    return;
  }

  const card = event.target.closest('.investment-card');

  if (!card) {
    return;
  }

  const investment = investments.find(
    (item) => item.id === card.dataset.id
  );

  if (!investment) {
    return;
  }

  openModal(investment);
});

// Получение карточек выбранной категории
function getFilteredInvestments() {
  if (currentCategory === 'all') {
    return investments;
  }

  return investments.filter(
    (investment) => investment.category === currentCategory
  );
}


// Отрисовка карточек
function renderCards() {
  const filteredInvestments = getFilteredInvestments();

  catalogGrid.innerHTML = '';

  const visibleInvestments = filteredInvestments.slice(
    0,
    visibleCount
  );

  visibleInvestments.forEach((investment) => {
    const card = createCard(investment);

    catalogGrid.append(card);
  });

  updateMoreButton(filteredInvestments.length);
}


// Обновление кнопки
function updateMoreButton(totalCards) {
  if (totalCards <= CARDS_PER_PAGE) {
    moreButton.style.display = 'none';
    return;
  }

  moreButton.style.display = 'block';

  if (visibleCount >= totalCards) {
    moreButton.style.display = 'none';
  } else {
    moreButton.textContent = 'Показать ещё';
  }
}

moreButton.addEventListener('click', () => {
  const filteredInvestments = getFilteredInvestments();

  if (visibleCount >= filteredInvestments.length) {
    visibleCount = CARDS_PER_PAGE;
  } else {
    visibleCount += CARDS_PER_PAGE;
  }

  renderCards();
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentCategory = button.dataset.category;

    visibleCount = CARDS_PER_PAGE;

    categoryButtons.forEach((button) => {
      button.classList.remove('catalog__category--active');
    });

    button.classList.add('catalog__category--active');

    renderCards();
  });
});


renderCards();

const modal = document.querySelector('#investmentModal');

const modalOverlay = modal.querySelector('.modal__overlay');
const modalClose = modal.querySelector('.modal__close');

//const modalIcon = document.querySelector('#modalIcon');
const modalCategory = document.querySelector('#modalCategory');
const modalName = document.querySelector('#modalName');
const modalTicker = document.querySelector('#modalTicker');
const modalDescription = document.querySelector('#modalDescription');

const modalPrice = document.querySelector('#modalPrice');
const modalChange = document.querySelector('#modalChange');
const modalRisk = document.querySelector('#modalRisk');
const modalSector = document.querySelector('#modalSector');

const modalAmountOptions =
  document.querySelector('#modalAmountOptions');

const modalTermOptions =
  document.querySelector('#modalTermOptions');

const modalInvestmentAmount =
  document.querySelector('#modalInvestmentAmount');

const modalPotentialResult =
  document.querySelector('#modalPotentialResult');


let currentInvestment = null;
let selectedAmount = 0;
let selectedTerm = '';


function openModal(investment) {

  currentInvestment = investment;

  selectedAmount =
    investment.investment.defaultAmount;

  selectedTerm =
    investment.investment.defaultTerm;


  /* modalIcon.innerHTML = `
     <img
       src="${investment.icon}"
       alt="${investment.name}"
     >
   `; */

  modalCategory.textContent =
    investment.categoryLabel;

  modalName.textContent =
    investment.name;

  modalTicker.textContent =
    investment.ticker;

  modalDescription.textContent =
    investment.fullDescription ||
    investment.description;

  modalPrice.textContent =
    `${investment.price.toFixed(2)} ${investment.currency}`;

  modalChange.textContent =
    `${investment.change24h >= 0 ? '+' : ''}${investment.change24h}%`;

  modalRisk.textContent =
    investment.risk;

  modalSector.textContent =
    investment.sector;



  renderAmountOptions();
  renderTermOptions();


  updateModalResult();


  modal.classList.add('modal--active');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.style.overflow = 'hidden';
}


function renderAmountOptions() {

  modalAmountOptions.innerHTML = '';

  currentInvestment.investment.amountOptions.forEach(
    (amount) => {

      const button =
        document.createElement('button');

      button.type = 'button';

      button.className =
        'modal__option';


      if (amount === selectedAmount) {

        button.classList.add(
          'modal__option--active'
        );

      }


      button.textContent =
        `${amount.toLocaleString('en-US')} USD`;


      button.addEventListener(
        'click',
        () => {

          selectedAmount = amount;

          renderAmountOptions();

          updateModalResult();

        }
      );


      modalAmountOptions.appendChild(button);

    }
  );
}


function renderTermOptions() {

  modalTermOptions.innerHTML = '';

  currentInvestment.investment.termOptions.forEach(
    (term) => {

      const button =
        document.createElement('button');

      button.type = 'button';

      button.className =
        'modal__option';


      if (term === selectedTerm) {

        button.classList.add(
          'modal__option--active'
        );

      }


      button.textContent = term;


      button.addEventListener(
        'click',
        () => {

          selectedTerm = term;

          renderTermOptions();

          updateModalResult();

        }
      );


      modalTermOptions.appendChild(button);

    }
  );
}


function updateModalResult() {

  if (!currentInvestment) {
    return;
  }


  const returnPercent =
    currentInvestment.investment
      .expectedReturn[selectedTerm];


  const profit =
    selectedAmount *
    returnPercent /
    100;


  const potentialResult =
    selectedAmount +
    profit;


  modalInvestmentAmount.textContent =
    `${selectedAmount.toLocaleString('en-US')} USD`;


  modalPotentialResult.textContent =
    `+${potentialResult.toLocaleString(
      'en-US',
      {
        maximumFractionDigits: 2
      }
    )} USD`;
}


function closeModal() {

  modal.classList.remove(
    'modal--active'
  );

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.style.overflow = '';
}


modalClose.addEventListener(
  'click',
  closeModal
);


modalOverlay.addEventListener(
  'click',
  closeModal
);


document.addEventListener(
  'keydown',
  (event) => {

    if (
      event.key === 'Escape' &&
      modal.classList.contains(
        'modal--active'
      )
    ) {

      closeModal();

    }

  }
);

catalogGrid.addEventListener(
  'click',
  (event) => {
    if (
      event.target.closest(
        '.investment-card__favorite'
      )
    ) {

      return;

    }

    const card =
      event.target.closest(
        '.investment-card'
      );


    if (!card) {

      return;

    }

    const investment =
      investments.find(
        (item) =>
          item.id === card.dataset.id
      );


    if (!investment) {

      console.error(
        'Инвестиция не найдена:',
        card.dataset.id
      );

      return;

    }


    openModal(investment);

  }
);