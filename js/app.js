document.addEventListener("DOMContentLoaded", e => {
    const a = document.querySelector('.visible-pannel');
    const b = document.querySelector('.toggle-pannel');

    let faq = false;

    a.addEventListener('click', () => {

        faq = !faq;
        faq ? b.classList.add('is-visible') : b.classList.remove('is-visible');
    });
});