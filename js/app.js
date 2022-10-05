document.addEventListener("DOMContentLoaded", e => {
    const a = document.querySelector('.visible-pannel');
    const b = document.querySelector('.toggle-pannel');

    let visible = false;

    a.addEventListener('click', () => {

        visible = !visible;
        visible ? b.classList.add('is-visible') : b.classList.remove('is-visible');
    });
});