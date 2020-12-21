let indice = 0;
let questions = [];
let score = 0;
let user = "";

$(document).ready(function () {
    id = get('id');
    _questions = renderPoll(id);
    _questions.then( results =>{
        questions = results;
        const labels = document.querySelectorAll('.option label');
        labels.forEach(
            label => label.addEventListener('click', () => {
                scoreEval(indice, label);
                setTimeout(() => {
                    if(indice < questions.length -1)
                        questionDisplay()
                    label.parentElement.classList.remove('good')
                    label.parentElement.classList.remove('bad')
                }, 1000);
            })
        );
    });    
});


async function renderPoll(id)
{
    let res
    $(".zone").html("")
    await $.ajax({
        url:`routeur.php?function=getPoll&id=${id}`,
        contentType: 'application/json; charset=utf-8',
        dataType:"json",
        success:function(response){
            $(".zone").append(`<h1>${response[0].question}</h1><div class="pollform"></div>`)
            answers = response[0].reponses;
            answers.forEach(reponse => {
                $(".pollform").append(`<div class="option"><input type="radio" id="${reponse.key}" name="drone" value="${reponse.value}" required><label for="${reponse.key}" class="choice">${reponse.value}</label></div>`)
            });
            res = response;
        },
        error: function(err){
            console.log(err);
        }
    })
    return res;
}

function get(name) 
{
    regex = new RegExp(`[?&](${encodeURIComponent(name)})=([^&]*)`, 'g')
    match = regex.exec(location.search)
    if (name == match[1] ) {
        return decodeURIComponent(match[2]);
    }
}

function questionDisplay () {
    indice += 1
    $(".zone").html("")
    $(".zone").append(`<h1>${questions[indice].question}</h1><div class="pollform"></div>`)
    let answers = questions[indice].reponses;
    answers.forEach(reponse => {
        $(".pollform").append(`<div class="option"><input type="radio" id="${reponse.key}" name="drone" value="${reponse.value}" required><label for="${reponse.key}" class="choice">${reponse.value}</label></div>`)

    });

    const labels = document.querySelectorAll('.option label');
    labels.forEach(
        label => label.addEventListener('click', () => {
            scoreEval(indice, label);
            setTimeout(() => {
                if(indice < questions.length -1)
                    questionDisplay()
                label.parentElement.classList.remove('good')
                label.parentElement.classList.remove('bad')
            }, 1000);
        })
    );
}

function scoreEval (indice, reponsediv) {
    console.log(questions)
    let reponses = questions[indice].reponses;
    let reponse = reponsediv.innerHTML;
    let good = false;
    switch (reponse) {
        case reponses[0].value:
            if(reponses[0].validity){
                score += 1/questions.length;
                good = true;
            }
            break;
        case reponses[1].value:
            if(reponses[1].validity){
                score += 1/questions.length;
                good = true;
            }
            break;
        case reponses[2].value:
            if(reponses[2].validity){
                score += 1/questions.length;
                good = true;
            }
            break;
        default:
            break;
    }

    if(good){
        reponsediv.parentElement.classList.add('good');
    } else {
        reponsediv.parentElement.classList.add('bad');
    }

    document.querySelector('#resultuser').innerHTML = `Merci d'avoir joué, ${user} !`
    document.querySelector('#scoreuser').innerHTML = `Ton score est de ${score * 100}/100`

    if(indice == questions.length-1){
        document.querySelector('section div').classList.add('resultsshow')
    }

}