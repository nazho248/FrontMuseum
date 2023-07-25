document.addEventListener('DOMContentLoaded', function() {
    var navIcon = document.getElementById('nav-icon');
    var card = document.querySelector('.card');

    function toggleNavIcon() {
        navIcon.classList.toggle('open');
        card.classList.toggle('active');
    }

    navIcon.addEventListener('click', toggleNavIcon);

    var closeIcons = document.querySelectorAll('.icon.close');
    for (var i = 0; i < closeIcons.length; i++) {
        closeIcons[i].addEventListener('click', function() {
            toggleNavIcon();
        });
    }
});



