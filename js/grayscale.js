/*!
 * Grayscale Theme JavaScript
 * Updated 2026 - Zero dependencies beyond Bootstrap 5
 */

// Navbar background on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('top-nav-collapse', window.scrollY > 50);
});

// Close mobile menu on nav link click
document.querySelectorAll('.navbar-collapse .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
        var navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse && navCollapse.classList.contains('show')) {
            var bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
            if (bsCollapse) bsCollapse.hide();
        }
    });
});

// Gallery category filtering
document.querySelectorAll('.gallery-category a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Update active state
        document.querySelectorAll('.gallery-category a').forEach(function(a) {
            a.classList.remove('active');
        });
        this.classList.add('active');

        var filter = this.dataset.filter;
        document.querySelectorAll('.project-gallery .gallery').forEach(function(item) {
            if (item.classList.contains(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
