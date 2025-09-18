(function () {
    const base = document.getElementById('baseCSS');
    const alt  = document.getElementById('altCSS');
    const btn  = document.getElementById('themeToggle');

    // restore last choice
    const saved = localStorage.getItem('site-style') || 'base';
    if (saved === 'alt') {
        alt.disabled = false;
        base.disabled = true;
    }

    btn.addEventListener('click', () => {
        const useAlt = alt.disabled;
        alt.disabled  = !useAlt;
        base.disabled = useAlt;
        localStorage.setItem('site-style', useAlt ? 'alt' : 'base');
        btn.textContent = useAlt ? 'Switch to Default Style' : 'Switch Style';
    });

    // set initial button label
    btn.textContent = (alt.disabled ? 'Switch Style' : 'Switch to Default Style');
})();
