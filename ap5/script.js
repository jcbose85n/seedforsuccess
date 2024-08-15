document.addEventListener("DOMContentLoaded", function() {
    var treeview = document.querySelectorAll('.treeview > li > a');

    treeview.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var parent = event.target.parentElement;
            var submenu = parent.querySelector('ul');
            
            if (submenu) {
                event.preventDefault();
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                parent.classList.toggle('open');
            }
        });
    });
});
