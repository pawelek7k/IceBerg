document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider");
    let slideIndex = 0;

    function showSlides() {
        slideIndex++;
        if (slideIndex >= slider.children.length) {
            slideIndex = 0;
        }
        const translateValue = -slideIndex * 100 + "%";
        slider.style.transform = `translateX(${translateValue})`;
    }

    setInterval(showSlides, 2000);
});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll('.tab-el');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            tabs.forEach(t => {
                t.classList.remove('tab-el-active');
            });

            tab.classList.add('tab-el-active');

            contents.forEach(content => {
                content.classList.remove('tab-content-active');
            });

            const tabId = tab.querySelector('a').getAttribute('href').substring(1);
            const clickedContent = document.getElementById(tabId);
            clickedContent.classList.add('tab-content-active');
        });
    });
});

const inputHeroHtml = document.querySelector(".index-hero-input");

const textsArr = [
    "Najokrutniejsze morderstwa",
    "Słynni Seryjni Mordercy i Ich Zabójcze Zestawy Umiejętności",
    "Jak Zabójcy Są Ścigani?",
    "Ciemna Strona Umysłu: Co Skłania Ludzi do Zabójstw?",
    "Jak Przestępczość Staje się Sensacją?",
    "Światowe Zbrodnie: Tajemnicze Przestępstwa, Które Wstrząsnęły Światem",
    "Morderstwo i Motyw", "Profilowanie Kryminalne"
  ];

function displayRandomText() {
    const randomIndex = Math.floor(Math.random() * textsArr.length);
    inputHeroHtml.value = textsArr[randomIndex]
  }
  setInterval(displayRandomText, 5000);

