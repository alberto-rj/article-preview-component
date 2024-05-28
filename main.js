const sharePanel = document.querySelector('.share__panel');
const shareButton = document.querySelector('#share-btn');
const internShareButton = document.querySelector('.share__panel .share__btn');

const openSharePanel = () => {
  sharePanel.classList.remove('d--none');
  sharePanel.classList.remove('close');
  sharePanel.classList.add('open');
};

const closeSharePanel = () => {
  sharePanel.classList.remove('open');
  sharePanel.classList.add('close');
};

const hideSharePanel = () => {
  if (sharePanel.classList.contains('close')) {
    sharePanel.classList.add('d--none');
  }
};

const updateButtonStates = (attribute, value) => {
  shareButton.setAttribute(attribute, value);
  internShareButton.setAttribute(attribute, value);
};

const toggleSharePanel = (event) => {
  const btn = event.target;
  const attribute = 'aria-expanded';
  const ariaExpanded = btn.getAttribute(attribute) === 'true';
  const newAriaExpanded = !ariaExpanded;
  if (newAriaExpanded) {
    openSharePanel();
  } else {
    closeSharePanel();
  }
  updateButtonStates(attribute, newAriaExpanded);
};

sharePanel.addEventListener('animationend', hideSharePanel);
shareButton.addEventListener('click', toggleSharePanel);
internShareButton.addEventListener('click', toggleSharePanel);