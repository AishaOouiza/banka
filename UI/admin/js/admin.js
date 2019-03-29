// Get the activate/deactivate links and
// attach a click event listener which would
// later call the activate/deactivate function
var activateLinks = document.getElementsByClassName('activate-link'),
    deactivateLinks = document.getElementsByClassName('deactivate-link');

for (var i = 0 ; i < activateLinks.length; i++) {
    activateLinks[i].addEventListener('click' , activateUser) ; 
}

for (var i = 0 ; i < activateLinks.length; i++) {
    deactivateLinks[i].addEventListener('click' , deactivateUser) ; 
}

function activateUser() {
    confirm("Do you want to activate this user?");
}

function deactivateUser() {
    confirm("Do you want to deactivate this user?");
}