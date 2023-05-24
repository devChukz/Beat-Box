const navLink1 = document.getElementById('nav-link1')
const navLink2 = document.getElementById('nav-link2')
const chartPage = document.querySelectorAll(".chart-page")
const home = document.querySelector('.home');
const viewCharts = document.querySelector('.view-charts')
const collections = document.querySelector('.collections')
const hamburger = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav-bar')



navLink1.addEventListener('click', () => {
    home.style.display = "block";
    viewCharts.style.display = "none";
    collections.style.display = "none";


    const collectionPage = navLink2.children[0].children;
    for (let i = 0; i < collectionPage.length; i++) {
        collectionPage[i].style.fill = "#EFEEE0";
        collectionPage[i].style.fillOpacity = 0.25;
        navLink2.style.color = "#efeee040";
    }


    const homePage = navLink1.children[0].children;
    for (let i = 0; i < homePage.length; i++) {
        homePage[i].style.fill = "#FACD66";
        homePage[i].style.fillOpacity = 1;
        navLink1.style.color = "#ffffff";
    }
})


navLink2.addEventListener('click', (e)=> {
    collections.style.display = "block";
    viewCharts.style.display = 'none'
    home.style.display = "none";


    const collectionPage = navLink2.children[0].children;
    for (let i = 0; i < collectionPage.length; i++) {
        collectionPage[i].style.fill = "#FACD66";
        collectionPage[i].style.fillOpacity = 1;
        collectionPage[i].style.transition = "0.5s";
        navLink2.style.color = "#ffffff";
    }


    const homePage = navLink1.children[0].children;
    for (let i = 0; i < homePage.length; i++) {
        homePage[i].style.fill = "#EFEEE0";
        homePage[i].style.fillOpacity = 0.25;
        homePage[i].style.transition = '0.5s';
        navLink1.style.color = "#efeee040";
    }
})

chartPage.forEach(e => e.addEventListener('click', () => {
    home.style.display = "none";
    viewCharts.style.display = "block";
    collections.style.display = "none";
}))



hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(e => e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navBar.classList.remove('active');
}))