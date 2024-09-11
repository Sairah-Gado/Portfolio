document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navList = document.getElementById('nav-list');
    const navbar = document.querySelector('.navbar');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
const projects = [
    {excel: "Excel", eLink: "https://sg.docworkspace.com/d/sIJzC2orDAbTf77YG"},
    {excel2: "Excel", eeLink: "https://sg.docworkspace.com/d/sIAfC2orDAcmghbcG"},
    {calcu: "Calculator", cLink: "https://sairah-gado.github.io/Simple-calculator/"},
    {randomQ: "Random Quotes", rLink: "https://sairah-gado.github.io/Random-Quotes/"},
    {rps: "Rock Paper Scissor", rpsLink: "https://sairah-gado.github.io/Rock-Paper-Scissors/"},
    {todo: "Todo List", tLink: "https://sairah-gado.github.io/To-do/"},
    {score: "Scorer", sLink: "https://sairah-gado.github.io/Scorer/"},
    {pokemon: "Pokemon API", pLink: "https://sairah-gado.github.io/fetch-API-pokemon/"}
]
// excel
const button = document.getElementById('excel-proj');
button.innerHTML = `View ${projects[0].excel} Project`;
button.addEventListener('click', () => {
    window.open(projects[0].eLink, '_blank')
})
// excel2
const button7 = document.getElementById('excel-proj2');
button7.innerHTML = `View ${projects[1].excel2} Project`;
button7.addEventListener('click', () => {
    window.open(projects[1].eeLink, '_blank')
})
// calcu
const button1 = document.getElementById('calcu');
button1.innerHTML = `View ${projects[2].calcu} Project`;
button1.addEventListener('click', () => {
    window.open(projects[2].cLink, '_blank')
})
// random quotes
const button2 = document.getElementById('random');
button2.innerHTML = `View ${projects[3].randomQ} Project`;
button2.addEventListener('click', () => {
    window.open(projects[3].rLink, '_blank')
})
// RPS
const button3 = document.getElementById('rps');
button3.innerHTML = `View ${projects[4].rps} Project`;
button3.addEventListener('click', () => {
    window.open(projects[4].rpsLink, '_blank')
})
// todo
const button4 = document.getElementById('todo');
button4.innerHTML = `View ${projects[5].todo} Project`;
button4.addEventListener('click', () => {
    window.open(projects[5].tLink, '_blank')
})
// scorer
const button5 = document.getElementById('score');
button5.innerHTML = `View ${projects[6].score} Project`;
button5.addEventListener('click', () => {
    window.open(projects[6].sLink, '_blank')
})
// Pokemon API
const button6 = document.getElementById('pokemon');
button6.innerHTML = `View ${projects[7].pokemon} Project`;
button6.addEventListener('click', () => {
    window.open(projects[7].pLink, '_blank')
})