
    // Pobieranie wszystkich elementów z klasą "has-dropdown"
    var dropdownItems = document.querySelectorAll('.has-dropdown');

    // Iteracja po wszystkich elementach z klasą "has-dropdown"
    dropdownItems.forEach(function(item) {
        // Dodanie nasłuchiwania zdarzenia "click" dla każdego elementu
        item.addEventListener('click', function() {
            // Pobranie podmenu dla danego elementu
            var submenu = item.querySelector('.submenu');
            // Dodanie lub usunięcie klasy "show" dla podmenu
            submenu.classList.toggle('show');
        });
    });

