const body = document.querySelector('body');  // selects the body
const navbar = document.querySelector('.navbar'); // selects the navbar
const toggle = document.querySelector('.toggle'); // selects the toggle button

console.log(toggle); // shows the toggle button in inspect element
console.log(navbar); // shows the navbar in inspect element
console.log(body); // shows the body in inspect element

toggle.addEventListener('click', () => {
    navbar.classList.toggle('close');
}); // when the toggle button is clicked, the navbar will close

