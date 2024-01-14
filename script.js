document.querySelectorAll('.filter__select-item').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.filter__select-item-active');
    const dropDownList = dropDownWrapper.querySelector('.filter__select-item-list');
    const dropDownListItems = dropDownWrapper.querySelectorAll('.list-item');
    const dropDownListInput = dropDownWrapper.querySelector('.list-input');


    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('filter__select-item-list-visible')
    })

    dropDownListItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            dropDownBtn.innerText = this.innerText;
            dropDownBtn.focus();
            dropDownListInput.value = this.dataset.value;
            dropDownList.classList.remove('filter__select-item-list-visible')
        })
    })

    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('filter__select-item-list-visible')
        }
    })
})

