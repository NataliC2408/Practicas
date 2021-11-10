let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswer; 0;
let timeInterval;
let time = 5;

const cuestionary = [
    {
        "question": "¿Quién pintó la monalisa?",
        "img":""
        "answers":["Leonardo Da Vinci", "Picasso", "Leonardo DiCaprio","Monet"]
    },
    {
        "question": "¿Quién pintó el jardin de las delicias?",
        "img":""
        "answers":["Picasso", "El Bosco", "Velasquez","Dalir"]
    },
    {
        "question": "¿Cuál es el primer elemento de la tabla periódica?",
        "img":""
        "answers":["Cobalto", "Titanio", "Hidrógeno","Magnesio"]
    },
    {
        "question": "¿Cuál es la edad del universo?",
        "img":""
        "answers":["12 mil millones de años", "10 mil millones de años", "14 mil millones de años","13 mil millones de años"]
    },
    {
        "question": "¿Cuál es el país mas poblado del mundo?",
        "img":""
        "answers":["Rusia", "India", "China","Mexico"]
    },
    {
        "question": " ¿Cuántos continentes tiene la tierra?",
        "img":""
        "answers":["4", "5","6","7"]
    },
    {
        "question": "¿Cuánto dura un partido de fútbol?",
        "img":""
        "answers":["90 minutos ", "120 minutos ", "60 minutos ","80 minutos "]
    },
    {
        "question": "¿Cuándo se celebró el primer mundial de futbol?",
        "img":""
        "answers":["El 13 de julio de 1930", " El 20 de junio de 1930", "El 15 de agosto de 1930","El 25 de mayo de 1930"]
    },
    {
        "question": "¿Qué representa el anillo de Green Lantern?",
        "img":""
        "answers":["Fuerza de voluntad", "Capacidad de crear manifestaciones", "Un arma poderosa","Teletransportación"]
    },
    {
        "question": "¿Dónde vivía Dumbo?",
        "img":"/",
        "answers":["Circo", "Londres", "Estados Unidos","Granja"]
    }
];
const printHTMLQuestion = (i) =>{
const q = cuestionary[i];
    let a = q.answers;
    rightAnswer= [0];
let htmtQuestionCode = `<p>${q.question}</p>`;
    const htmlAnswers = a.map( currentA => `<p><button onClick="evaluateAnswer('${currentA}')">X</button><span>${currentA}</span></p>`);

    let htmlQuestionCode = `<p>${q.question}</p><div>${htmlAnswers}</div>`;
    document.querySelector('.question').innerHTML = htmlQuestionCode;
}
const evaluateAnswer = answer =>{ 
    const parentP = obj.parentNode;
    console.log('answer: '+ answer +', rightAnswer: '+ rightAnswer)
    if(answer == rightAnswer){ 
        parentP.classlist.add('right');
    }else{
       parentP.classlist.add('wrong');
}
}
printHTMLQuestion(0);

const printHTMLQuestion = (i) =>{
    currentQuestionIndex++;
    const q = cuestionary[i];
    let a = q.answers;
    rightAnswer = a [0]
    a = a.sort((a,b) => Math.floor(Math.random() * 3) -1);

    let audion = new Audio(q. audio);
    audio.play();

    const htmlAnswersArray = a.map( currentA => <p class="answer"><button onClick="evalueAnswer('${current</button></p>)