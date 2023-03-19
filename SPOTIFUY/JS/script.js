const KPOP = [
    "New Jeans - Cookie",
    "New Jeans - OMG",
    "Winner - Color Ring",
    "Big Bang - Sober"
];

const JPOP = [
    "Aimer - Kataomoi",
    "Radwimps - Zen Zen Sense",
    "Kana Boon - Silhouette"
];


const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const showKPOP = document.getElementById("KPOP");
const showJPOP = document.getElementById("JPOP");
const total = document.querySelector(".total");

showKPOP.addEventListener("click", function () {
    mixInfo(KPOP);
    mixList.classList.remove("hide");
    showKPOP.classList.add("hide");
    showJPOP.classList.add("hide");
});

showJPOP.addEventListener("click", function () {
    mixInfo(JPOP);
    mixList.classList.remove("hide");
    showJPOP.classList.add("hide");
    showKPOP.classList.add("hide");
});



total.innerText = `${KPOP.length + JPOP.length} great songs!`;

const mixInfo = function (mix) {
    mix.forEach(function (song, index) {
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
        mixList.append(li);
    });
};