const questions = [
    {question: 'Vi må begrense hvor mye en kan tjene på å eie private barnehager',
        heltEnig: {R:2 , SV:2 , AP:1 , MDG:1},
        littEnig: {R:1 , SV:1 , AP:2 , MDG:2},
        littUenig: {SP:2 , KRF:2 , V:2 , H:1 , FrP:1 },
        heltUenig: {SP:1 , KRF:1 , V:1 , H:2 , FrP:2 },
    },
    {question: 'Bør mer av Bergen sitt arial bli brukt for å bygge boliger',
        heltEnig: {AP:1 , SP:1, KRF:1, H:2, FrP:2},
        littEnig: {AP:2 , SP:2, KRF:2, H:1, FrP:1},
        littUenig: {R:1 , SV:2 , MDG:1, V:2},
        heltUenig: {R:2 , SV:1 , MDG:2, V:1},
    },
    {question: 'Det bør bli omkamp for å hindre at bybanen går forbi Bryggen',
        heltEnig: {SP:2, FrP:2},
        littEnig: {SP:1, FrP:1},
        littUenig: {R:1 , SV:1 , AP:1, MDG:1, KRF:1, V:1, H:1},
        heltUenig: {R:2 , SV:2 , AP:2, MDG:2, KRF:2, V:2, H:2},
    },
    {question: 'Det skal ikke komme cruiseskip til Bergen',
        heltEnig: {R:2, SV:2, MDG:2, V:1},
        littEnig: {R:1, SV:1, MDG:1, V:2},
        littUenig: {AP:1 , SP:2, KRF:1, H:1, FrP:1},
        heltUenig: {AP:2 , SP:1, KRF:2, H:2, FrP:2},
    },
    {question: 'Your question/statement',
        heltEnig: {R:2, SV:2, AP:2, SP:2, MDG:2},
        littEnig: {R:1, SV:1, AP:1, SP:1, MDG:1},
        littUenig: {KRF:2, V:2, H:1, FrP:1},
        heltUenig: {KRF:1, V:1, H:2, FrP:2},
    },
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

const btnNext = document.getElementById('btnNext');
const questionT = document.getElementById('question');
const result = document.getElementById('result');

btnNext.addEventListener('click', nextQuesiton);

let qidx = 0
questionT.innerHTML = questions[qidx].question

function nextQuesiton() {
    let radioChecked = document.querySelector('input[name="answer"]:checked')
    
    if (radioChecked) {
        calculateResults(qidx, radioChecked.value)
        qidx++
        if (qidx <= questions.length -1) { 
            questionT.innerHTML = questions[qidx].question
            radioChecked.checked = false
        } else {
            //
        }
    }
}



function calculateResults(qidx, chosen) {
    console.log(qidx, chosen)

    let partyChoices = questions[qidx][chosen]
    console.log(partyChoices)

    for (let party in partyChoices) {
        partyScores[party] += partyChoices[party]
    }
    console.log(partyScores)
}