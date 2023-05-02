b = document.getElementById("cardsColBut");


const myFunc = () => {
    b.addEventListener("click", () => {
        alert("Pushed");
    });
};

myFunc();