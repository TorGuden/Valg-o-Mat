// Question Container
const questions = [
    {question: 'Det bør bli færre parkeringsplasser i sentrum',
        heltEnig: {R: 2, SV: 2, AP: 1, SP: -2, MDG: 2, KRF: -2, V: 2, H: -2, FrP:-2 },
        littEnig: {R: 1, SV: 1, AP: 2, SP: -1, MDG: 1, KRF: -1, V: 1, H: -1, FrP:-1 },
        littUenig: {R: -1, SV: -1, AP: -1, SP: 1, MDG: -1, KRF: 2, V: -1, H: 1, FrP:1 },
        heltUenig: {R: -2, SV: -2, AP: -2, SP: 2, MDG: -2, KRF: 1, V: -2, H: 2, FrP:2 },
    },
    {question: 'Alle Bergens eldrehjem skal ha egne kjøkken',
        heltEnig: {R: 2, SV: 2, AP: -2, SP: 2, MDG: -2, KRF: -2, V: -2, H: -2, FrP:2 },
        littEnig: {R: 1, SV: 1, AP: -1, SP: 1, MDG: -1, KRF: -1, V: -1, H: -1, FrP:1 },
        littUenig: {R: -1, SV: -1, AP: 2, SP: -1, MDG: 2, KRF: 2, V: 1, H: 2, FrP:-1 },
        heltUenig: {R: -2, SV: -2, AP: 1, SP: -2, MDG: 1, KRF: 1, V: 2, H: 1, FrP:-2 },
    },
    {question: 'Norsk politi må ha lov til å ransake deg for å finne ut om du har narkotika til eget bruk',
        heltEnig: {R: -2, SV: -2, AP: 1, SP: 2, MDG: -2, KRF: 2, V: -2, H: -2, FrP: 2},
        littEnig: {R: -1, SV: -1, AP: 2, SP: 1, MDG: -1, KRF: 1, V: -1, H: -1, FrP: 1},
        littUenig: {R: 1, SV: 1, AP: -1, SP: -1, MDG: 1, KRF: -1, V: 1, H: 1, FrP: -1},
        heltUenig: {R: 2, SV: 1, AP: -2, SP: -2, MDG: 2, KRF: -2, V: 2, H: 2, FrP: -2},
    },
    {question: 'Vi kan prøve ut regulert salg av cannabis i Norge',
        heltEnig: {R: -2, SV: -2, AP:-2 , SP:-2 , MDG: 2, KRF:-2 , V: 2, H:-2 , FrP:-2 },
        littEnig: {R: -1, SV: -1, AP:-1 , SP:-1 , MDG: 1, KRF:-1 , V: 1, H:-1 , FrP:-1 },
        littUenig: {R: 1, SV: 1, AP:1 , SP:1 , MDG: -1, KRF:1 , V: -1, H:1 , FrP:1 },
        heltUenig: {R: 2, SV: 2, AP:2 , SP:2 , MDG: -2, KRF:2 , V: -2, H:2 , FrP:2 },
    },
    {question: 'Det er ikke greit å øke bompengene mer',
        heltEnig: {R: 2, SV: -2, AP: 2, SP: 2, MDG: -2, KRF: 1, V: -2, H: 2, FrP:2 },
        littEnig: {R: 1, SV: -1, AP: 1, SP: 1, MDG: -1, KRF: 2, V: -1, H: 1, FrP:1 },
        littUenig: {R: -1, SV: 1, AP: -1, SP: -1, MDG: 1, KRF: -1, V: 2, H: -1, FrP:-1 },
        heltUenig: {R: -2, SV: 2, AP: -2, SP: -2, MDG: 2, KRF: -2, V: 1, H: -2, FrP:-2 },
    },
    {question: 'Det skal ikke få komme cruiseskip til Bergen',
        heltEnig: {R: 2, SV: 2, AP: -2, SP: -2, MDG: 2, KRF: -2, V: 1, H: -2, FrP: -2},
        littEnig: {R: 1, SV: 1, AP: -1, SP: -1, MDG: 1, KRF: -1, V: 2, H: -1, FrP: -1},
        littUenig: {R: -1, SV: -1, AP: 1, SP: 2, MDG: -1, KRF: 1, V: -1, H: 1, FrP: 1},
        heltUenig: {R: -2, SV: -2, AP: 2, SP: 1, MDG: -2, KRF: 2, V: -2, H: 2, FrP: 2},
    },
    {question: 'Ungdomsskoleelever i Bergen skal få gratis skolemåltider',
        heltEnig: {R: 2, SV: 2, AP: 2, SP: 2, MDG: 2, KRF: -2, V: -2, H: -2, FrP: -2},
        littEnig: {R: 1, SV: 1, AP: 1, SP: 1, MDG: 1, KRF: -1, V: -1, H: -1, FrP: -1},
        littUenig: {R: -1, SV: -1, AP: -1, SP: -1, MDG: -1, KRF: 2, V: 2, H: 1, FrP: 1},
        heltUenig: {R: -2, SV: -2, AP: -2, SP: -2, MDG: -2, KRF: 1, V: 1, H: 2, FrP: 2},
    },
    {question: 'På havbunnen finnes nyttige metaller og mineraler som Norge bør hente opp',
        heltEnig: {R: -2, SV: -2, AP: 2, SP: 1, MDG: -2, KRF: 1, V: -2, H: 1, FrP: 2},
        littEnig: {R: -1, SV: -1, AP: 1, SP: 2, MDG: -1, KRF: 2, V: -1, H: 2, FrP: 1},
        littUenig: {R: 2, SV: 2, AP: -1, SP: -1, MDG: 1, KRF: -1, V: 1, H: -1, FrP: -1},
        heltUenig: {R: 1, SV: 1, AP: -2, SP: -2, MDG: 2, KRF: -2, V: 2, H: -2, FrP: -2},
    },
    {question: 'Eiendomsskatten i Bergen må fjernes på sikt',
        heltEnig: {R: -2, SV: -2, AP: -2, SP: 2, MDG: -2, KRF: -2, V: -2, H: 2, FrP: 2},
        littEnig: {R: -1, SV: -1, AP: -1, SP: 1, MDG: -1, KRF: -1, V: -1, H: 1, FrP: 1},
        littUenig: {R: 1, SV: 1, AP: 1, SP: -1, MDG: 1, KRF: 2, V: 2, H: -1, FrP: -1},
        heltUenig: {R: 2, SV: 2, AP: 2, SP: -2, MDG: 2, KRF: 1, V: 1, H: -2, FrP: -2},
    },
    {question: 'Utepils på Torgallmenningen bør bli et fast tilbud',
        heltEnig: {R: -2, SV: -2, AP: -2, SP: -2, MDG: 2, KRF: -2, V: 2, H: 2, FrP: 2},
        littEnig: {R: -1, SV: -1, AP: -1, SP: -1, MDG: 1, KRF: -1, V: 1, H: 1, FrP: 1},
        littUenig: {R: 1, SV: 1, AP: 1, SP: 1, MDG: -1, KRF: 1, V: -1, H: -1, FrP: -1},
        heltUenig: {R: 2, SV: 2, AP: 2, SP: 2, MDG: -2, KRF: 2, V: -2, H: -2, FrP: -2},
    }
]; // ... add more questions

let partyScores = {
    R: 0,
    SV: 0,
    AP: 0,
    SP: 0,
    MDG: 0,
    KRF: 0,
    V: 0,
    H: 0,
    FrP: 0
}

let partyList = {
    R: "Rødt",
    SV: "SV",
    AP: "Arbeiderpartiet",
    SP: "Senterpartiet",
    MDG: "Miljøpartiet De Grønne",
    KRF: "Kristelig Folkeparti",
    V: "Venstre",
    H: "Høyre",
    FrP: "Fremskrittspartiet"
}



const btnNext = document.getElementById('btnNext');
const questionT = document.getElementById('question');
const resultBox = document.getElementById('partyResult');
const button = document.getElementById('awnser');
const form = document.getElementById('valgomatForm');
const progressBar = document.getElementById('progressBar');
const startButton = document.getElementById('buttonStart');
const griddyform = document.getElementById('griddyform');
const result = document.getElementById('result');

startButton.addEventListener('click', triggerstart)
btnNext.addEventListener('click', nextQuesiton);

let qidx = 0
questionT.innerHTML = questions[qidx].question

function triggerstart() {
    startButton.style.display = "none";
    griddyform.style.display = "inline";
    updateProgress();
}

function updateProgress() {
    if ( (qidx+1) == questions.length) {
        progressBar.innerHTML = "<p id='currentProgress'> Siste Spørsmål! </p>"
    } else {
    progressBar.innerHTML = "<p id='currentProgress'> Spørsmål " + (qidx+1) + " av " + questions.length + "</p>"
    }
};

function nextQuesiton() {
    let radioChecked = document.querySelector('input[name="answer"]:checked')
    if (radioChecked) {
        calculateResults(qidx, radioChecked.value)
        qidx++
        if (qidx < questions.length ) {
            questionT.innerHTML = questions[qidx].question
            updateProgress();
        } else {
            showResult()
            form.style.display = 'none'
        }
        radioChecked.checked = false
    }
}

function calculateResults(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices){
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}

function showResult() {
    let sorted = new Map()
    
    while (sorted.size < Object.keys(partyScores).length) {
        let max = null
        for (party in partyScores) {
            if (max === null && !sorted.has(party)) {
                max = party
            }
            else if (partyScores[party] > partyScores[max] && !sorted.has(party)) {
                max = party 
            }
        }
        sorted.set(max, partyScores[max])
        result.style.display = 'inline'
    }
    console.log(sorted)
    let resultText = ""
    sorted.forEach((score, party) => {
        partyName = partyList[party]
        resultText += "<p class='party'>" + partyName + " = " + score + "</p>"
        console.log(party, score)
    });
    resultBox.innerHTML = resultText
}

// Parallax scrolling
const container = document.querySelector('.parallax-container');
const foreground = document.querySelector('.foreground');
const middleground = document.querySelector('.middleground');

container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    foreground.style.transform = `translate(${xAxis * 1.5}px, ${yAxis * 1.5}px)`;
    middleground.style.transform = `translate(${xAxis * 0.5}px, ${yAxis * 0.5}px)`;
});