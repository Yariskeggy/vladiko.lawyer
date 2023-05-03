const buttons = document.querySelectorAll('.lawyer__cards_col');
const lawyerBtnFwd = document.querySelectorAll(".lawyer__Btn_Fwd");

buttons.forEach((button) => {
    // Назначаем обработчик события "click" для каждой кнопки
    button.addEventListener('click', () => {
        // Получаем индекс кнопки
        const index = button.getAttribute('data-index');
        // Получаем блок по индексу
        const block = document.querySelector(`.lawyer__column_decsription[data-index="${index}"]`);

        // Скрываем остальные блоки
        const blocks = document.querySelectorAll('.lawyer__column_decsription');
        const elem = document.querySelector(".lawyer__cards_column");

        elem.style.display = 'none';
        block.style.display = 'flex';

        lawyerBtnFwd.forEach((btn) => {
            btn.addEventListener('click', () => {
                block.style.display = 'none';
                elem.style.display = 'flex';
            })
        });


    });

});