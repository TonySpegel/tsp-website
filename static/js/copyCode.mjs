const code = document.querySelector('pre[data-lang]');
code.insertAdjacentHTML(
    'beforeend',
    '<button id="copy-code">Kopieren</button>',
);

const copyButton = document.querySelector('#copy-code');

copyButton.addEventListener('click', async () => {
    await navigator.clipboard.writeText('huhu');
});
