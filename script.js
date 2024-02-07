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