function closepop() {
    const pop = document.getElementById('popupContainer');
    pop.classList.add('moveout');
    setTimeout((pop) => {
        document.querySelector('.moveout').style.display = "none";
    }, 1500)
}

document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        const chkbtn = document.querySelector('.chkbtn')
        // Add event au click
        chkbtn.addEventListener('click', () => {
            const ul = document.querySelector('ul')
            // Change la class au click
            ul.classList.toggle('show')
        })
    }
}