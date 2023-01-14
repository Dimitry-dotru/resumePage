window.onload = () => {
    const el = document.querySelector('.preloader');
    el.classList.add('hidden_opacity');
    setTimeout(() => {
        el.classList.add('hidden');
        el.classList.remove('hidden_opacity');
    }, 500);
};