let gamesRented = 0; 
// Executing after the whole HTML structure was loaded
document.addEventListener('DOMContentLoaded', function() {
    // Verifies now many element in the DOM has the .dashboard__item__img--rented
    gamesRented = document.querySelectorAll('.dashboard__item__img--rented').length;
    displayGamesRented();
});

//On click function
function changeButton(buttonId) {
    let param = `game-${buttonId}`;
    // Get which button is being pressed and change the button status/text
    changeStatus(param, '.dashboard__item__button', '.dashboard__item__img');
}

function changeStatus(id, class1, class2) {
    // Get the element <li> by Id and select children elements by class.
    let buttonStatus = document.getElementById(id).querySelector(class1);
    let changeStatus = document.getElementById(id).querySelector(class2)
    let gameName     = document.getElementById(id).querySelector('.dashboard__item__name');

    // Asking for confirmation if they want to return the rented game
    if(changeStatus.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Are you sure you want to return the game? ${gameName.textContent}?`)) {
            modifyHTML(buttonStatus,changeStatus);
            gamesRented--;
        }
    }
    else {
        modifyHTML(buttonStatus,changeStatus);
        gamesRented++;
    }   

    displayGamesRented();
}
// Function to modify both the button and the text
function modifyHTML(button, change) {
        // toggle will remove the class if it finds it and add if not
        button.classList.toggle('dashboard__item__button--return');
        change.classList.toggle('dashboard__item__img--rented');
        console.log(button.classList);
        // If after toggle the button contain said class needs to change from rent to return and vice versa.
        button.textContent = button.classList.contains('dashboard__item__button--return') ? 'Devolver' : 'Alugar';    
}
// As asked by the exercise print on the log how many games are currently rented
function displayGamesRented() {
    console.log(`The quantity of games rented is ${gamesRented}`);
}