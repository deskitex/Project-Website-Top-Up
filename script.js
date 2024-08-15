


let availableKeywords = [
    "Mobile Legends",
    "Genshin Impact",
    "Honkai Star Rail",
    "Zenless Zone Zero",
    "Free Fire",
    "Honkai Impact 3rd",
    "Netflix",
    "Bstation",
    "Vidio",
    "Google Play",
    "Steam",
    "Playstation",
    "Axis",
    "Telkomsel",
    "Indosat",
    "XL",
    "Smartfren",
    "Tri",
];

const resulBox = document.querySelector('.result-box')
const inputBox = document.getElementById('input-box')

resulBox.style.display = 'none';

inputBox.onkeyup = function(){
    if (inputBox.value.length === 0) {
        resulBox.style.display = 'none';
    } else {
        resulBox.style.display = 'flex';
    }
    let result = [];
    let input = inputBox.value.toLowerCase();
    if(input.length){
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input);
        });
        console.log(result);
    }
    showResult(result);
}

function showResult(list){
    const listData = list.map((data) => {
        return `<a>${data}</a>`
    });
    resulBox.innerHTML = "<a>" + listData.join('') + "</a>";
};
