document.addEventListener('DOMContentLoaded', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    var navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    document.getElementById('refresh-page').addEventListener('click', function() {
        window.location.reload(); // 현재 페이지 새로고침
    });
});

function toggleDescription(descId) {
    var description = document.getElementById(descId);
    var collapsible = description.previousElementSibling;
    var item = description.parentNode;
    if (description.style.display === "none") {
        description.style.display = "block";
        item.classList.add('active');
        collapsible.classList.add('active');
    } else {
        description.style.display = "none";
        item.classList.remove('active');
        collapsible.classList.remove('active');
    }
}