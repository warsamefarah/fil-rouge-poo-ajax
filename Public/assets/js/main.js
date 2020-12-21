function closepop() {
    const pop = document.getElementById('popupContainer');
    pop.classList.add('moveout');
    setTimeout((pop) => {
        document.querySelector('.moveout').style.display = "none";
    }, 1500)
}

// let user = "";

// let score = 0;

// let indice = -1;

document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        const chkbtn = document.querySelector('.chkbtn')
        // Add event au click
        chkbtn.addEventListener('click', () => {
            const ul = document.querySelector('ul')
            // Change la class au click
            ul.classList.toggle('show')
        })

        // const formpop = document.querySelector('#popup form')

        // formpop.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     user = document.getElementById('user').value;
        //     closepop();
        // })

        // if (document.title == 'aPollon - Quiz'){
        //     questionDisplay();
        //     const labela = document.querySelector('label[for="a"]');
        //     const labelb = document.querySelector('label[for="b"]');
        //     const labelc = document.querySelector('label[for="c"]');
            
        //     [labela, labelb, labelc].forEach(
        //         label => label.addEventListener('click', () => {
        //             scoreEval(indice, label);
        //             setTimeout(() => {
        //                 questionDisplay()
        //                 label.parentElement.classList.remove('good')
        //                 label.parentElement.classList.remove('bad')
        //             }, 1000);
        //         })
        //     )
        // }

    }
}


// function scoreEval (indice, reponsediv) {
//     let reponses = questions[indice].answers;
//     let reponse = reponsediv.innerHTML;
//     let good = false;
//     switch (reponse) {
//         case reponses.a[0]:
//             if(reponses.a[1]){
//                 score += 1/questions.length;
//                 good = true;
//             }
//             break;
//         case reponses.b[0]:
//             if(reponses.b[1]){
//                 score += 1/questions.length;
//                 good = true;
//             }
//             break;
//         case reponses.c[0]:
//             if(reponses.c[1]){
//                 score += 1/questions.length;
//                 good = true;
//             }
//             break;
//         default:
//             break;
//     }

//     if(good){
//         reponsediv.parentElement.classList.add('good');
//     } else {
//         reponsediv.parentElement.classList.add('bad');
//     }

//     document.querySelector('#resultuser').innerHTML = `Merci d'avoir joué, ${user} !`
//     document.querySelector('#scoreuser').innerHTML = `Ton score est de ${score * 100}/100`

//     if(indice == questions.length-1){
//         document.querySelector('section div').classList.add('resultsshow')
//     }

// }

// function questionDisplay () {
//     indice += 1
//     document.querySelector('form h1').innerHTML = questions[indice].question;
//     let labels = document.querySelectorAll('.option label');
//     labels[0].innerHTML = questions[indice].answers.a[0]
//     labels[1].innerHTML = questions[indice].answers.b[0]
//     labels[2].innerHTML = questions[indice].answers.c[0]
// }

// let questions = [
//     {
//         question: "Parmi les choix présents, quel est le super héros favoris des fans ?",
//         answers: {
//             a: ['Superman', false],
//             b: ['Batman', false],
//             c: ['Spider-Man', true]
//         }
//     },
//     {
//         question: "Parmi les choix présents, qui est un héros de DC Comics ?",
//         answers: {
//             a: ['All-Might', false],
//             b: ['Shazam', true],
//             c: ['Black Panther', false]
//         }
//     },
//     {
//         question: "Parmi les choix présents, qui n'est PAS un héros ?",
//         answers: {
//             a: ['Hank Pimm', true],
//             b: ['Shuri', false],
//             c: ['Iron Man', false]
//         }
//     },
//     {
//         question: "Parmi les choix présents, qui est l'ennemi de Peter Quill ?",
//         answers: {
//             a: ['Ronan', true],
//             b: ['Le Mandarin', false],
//             c: ['Red Skull', false]
//         }
//     },
//     {
//         question: "Parmi les choix présents, qui a vaincu Dormammu ?",
//         answers: {
//             a: ['Hulk', false],
//             b: ['Hawkeye', false],
//             c: ['Docteur Strange', true]
//         }
//     },

// ]