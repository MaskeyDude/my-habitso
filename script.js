// btns
const Btn_1 = document.querySelectorAll(".btn-1");
const Btn_2 = document.querySelectorAll(".btn-2");
// content divs
const Cont_1 = document.querySelectorAll(".cont-1");
const Cont_2 = document.querySelectorAll(".cont-2");


Btn_1.addEventListener('click', function() {
    Cont_1.style.display = "block";
    Cont_2.style.display = "none";

    Btn_1.classList.add("clicked")
    Btn_2.classList.remove("clicked");
});

Btn_2.addEventListener('click', function() {
    Cont_2.style.display = "block";
    Cont_1.style.display = "none";

    Btn_2.classList.add("clicked");
    Btn_1.classList.remove("clicked");
});




// const Checkboxes = document.querySelectorAll(".checkbox");
// const Chaikbaxes = document.querySelectorAll(".chaikbax");

// let Checkboxes_array = Array.prototype.slice.call(Checkboxes);
// // let Checkboxes_array.pop();

// Checkboxes_array.forEach(element => {
//     element.addEventListener('click', function () {
//         classList.add("strike");
//     })
// });




// onst Checkboxes = document.querySelectorAll(".checkbox");
// const Chaikbaxes = document.querySelectorAll(".chaikbax");


// let Checkboxes_array = Array.prototype.slice.call(Checkboxes);
// // let Checkboxes_array.pop();

// Checkboxes_array.forEach(element => {
//     element.addEventListener('click', function () {
//         classList.add("strike");
//     })
// });