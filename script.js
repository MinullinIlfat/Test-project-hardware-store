document.querySelectorAll('.filter__select-item').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.filter__select-item-active');
    const dropDownList = dropDownWrapper.querySelector('.filter__select-item-list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.list-item');
    const dropDownListInput = dropDownWrapper.querySelector('.list-input');


    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('filter__select-item-list-visible');
    });

    dropDownListItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownListInput.value = this.dataset.value;
            dropDownList.classList.remove('filter__select-item-list-visible');
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('filter__select-item-list-visible');
        }
    });
});

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menu-hidden');
burger.addEventListener('click', function () {
    burgerMenu.classList.toggle('menu-hidden-visible');
});


const search = document.querySelector('.svg-hidden');
const searchMenu = document.querySelector('.search-hidden');
const close = document.querySelector('.popup__close-svg');
const filterIcon = document.querySelector('.filter__select-icon-hidden');
const selectPopup = document.querySelector('.select-popup');
search.addEventListener('click', function () {
    searchMenu.classList.toggle('search-hidden-visible');
});
close.addEventListener('click', function () {
    selectPopup.classList.remove('popup__hidden');
});

filterIcon.addEventListener('click', function () {
    selectPopup.classList.add('popup__hidden');
});

