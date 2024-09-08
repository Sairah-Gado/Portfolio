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
// calcu
const button1 = document.getElementById('calcu');
button1.innerHTML = `View ${projects[1].calcu} Project`;
button1.addEventListener('click', () => {
    window.open(projects[1].cLink, '_blank')
})
// random quotes
const button2 = document.getElementById('random');
button2.innerHTML = `View ${projects[2].randomQ} Project`;
button2.addEventListener('click', () => {
    window.open(projects[2].rLink, '_blank')
})
// RPS
const button3 = document.getElementById('rps');
button3.innerHTML = `View ${projects[3].rps} Project`;
button3.addEventListener('click', () => {
    window.open(projects[3].rpsLink, '_blank')
})
// todo
const button4 = document.getElementById('todo');
button4.innerHTML = `View ${projects[4].todo} Project`;
button4.addEventListener('click', () => {
    window.open(projects[4].tLink, '_blank')
})
// scorer
const button5 = document.getElementById('score');
button5.innerHTML = `View ${projects[5].score} Project`;
button5.addEventListener('click', () => {
    window.open(projects[5].sLink, '_blank')
})
// Pokemon API
const button6 = document.getElementById('pokemon');
button6.innerHTML = `View ${projects[6].pokemon} Project`;
button6.addEventListener('click', () => {
    window.open(projects[6].pLink, '_blank')
})