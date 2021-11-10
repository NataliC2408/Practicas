const cuestionary = [
{
 "question":"¿Quién pinto la mona lisa?",
 "answers":["Leonardo da Vinci","Picasso","Leonardo DiCaprio","Monet"]
}
{
 "question":"¿Quién pinto el jardín de las delicias?",
 "answers":["Leonardo da Vinci","Picasso","Leonardo DiCaprio","Monet"]
}
{
 "question":"¿Quién pinto la mona lisa?",
 "answers":["Leonardo da Vinci","Picasso","Leonardo DiCaprio","Monet"]
}
];

const printHTMLQuestion = (i) =>{
     const q = cuestionary [i];
     let a = q.answers;

     const htmlanswers = a.map( currentA =>'<p><button onClick="evaluateAnswer('${currentA}')">X</button><span>${currentA}</span></p>');
     const htmlAnswers = htmlAnswersArray.join(' ');

     let htmlQuestionCode ='<p>${q.question}</p><div>$ {htmlAnswers}</div>';
     document.querySelector('.question').innerHTML =htmlQuestionCode;

 }

 const evaluateAnswer = answer =>{ 
     const parentP = obj.parentNode;
     if(answer == rightAnswer){ 
         parentP.classlist.add('right');
     }else{
        parentP.classlist.add('right');
 }

printHTMLQuestion(0);


