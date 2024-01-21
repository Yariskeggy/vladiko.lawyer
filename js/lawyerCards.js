const buttons = document.querySelectorAll('.lawyer__cards_col');
const lawyerBtnFwd = document.querySelectorAll(".lawyer__Btn_Fwd");
// const blocks = document.querySelectorAll('.lawyer__column_decsription');
// const elems = document.querySelectorAll('.lawyer__cards_column');

buttons.forEach((button) => {
    // Назначаем обработчик события "click" для каждой кнопки
    button.addEventListener('click', () => {


        // Получаем индекс кнопки
        const index = button.getAttribute('data-index');
        const indexcol = button.getAttribute('index-col');
        console.log(indexcol);
        // Получаем блок по индексу
        const elem = document.querySelector(`.lawyer__cards_column[index-col="${indexcol}"]`);
        console.log(elem);
        const block = document.querySelector(`.lawyer__column_decsription[data-index="${index}"]`);
        console.log(block);


        elem.style.display = 'none';
        block.style.display = 'flex';
        console.log(block.style);

        lawyerBtnFwd.forEach((btn) => {
            btn.addEventListener('click', () => {
                block.style.display = 'none';
                elem.style.display = 'flex';
            })
        });

    });

});