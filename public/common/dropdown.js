document.addEventListener('DOMContentLoaded', () => {
    let dropdownOpen = false;
    const button = document.getElementById('sort-button');
    const dropdown = document.getElementById('sort-dropdown-menu');

    function open() {
        dropdown.style.visibility = 'visible';
        dropdown.style.height = '10vh';
        dropdown.style.marginTop = 0;
        dropdown.style.opacity = 1;
        button.style.border = '1px solid var(--border-dark)';
        button.style.borderRadius = '8px 8px 0 0'
    }

    function close() {
        dropdown.style.visibility = 'hidden';
        dropdown.style.height = 0;
        dropdown.style.marginTop = '-0.5rem';
        dropdown.style.opacity = 0;
        button.style.border = '1px solid var(--border-light)';
        button.style.borderRadius = '8px'
    }

    document.getElementById('sort-button').addEventListener('click', () => {
        dropdownOpen ? close() : open();
        dropdownOpen = !dropdownOpen;
    });
});