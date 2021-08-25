const preTags = [...document.querySelectorAll('pre[data-lang]')];
const codeTags = [...document.querySelectorAll('pre[data-lang] > code')];

if (preTags.length > 0 && codeTags.length > 0) {
    // Insert button into every pre tag to copy the content of every code tag individually
    preTags.map((preTag) => {
        preTag.insertAdjacentHTML(
            'beforeEnd',
            '<button aria-live="polite" aria-label="Code kopieren" role="status" class="article-tag">kopieren</button>',
        );
    });
    // Insert an ID for every code tag so that it can be easily referenced
    codeTags.map((codeTag, index) => {
        codeTag.id = `code-tag-${index}`;
    });

    const copyButtons = [...document.querySelectorAll('pre[data-lang] > .article-tag')];

    copyButtons.map((copyButton, index) => {
        copyButton.addEventListener('click', async (event) => {
            // Use the index of map as a reference because it has to be the 
            // same as the map function from above
            const codeElementContent = document.querySelector(
                `#code-tag-${index}`,
            ).textContent;

            await navigator.clipboard.writeText(codeElementContent);
            event.target.innerText = 'kopiert';

            setTimeout(() => {
                event.target.innerText = 'kopieren';
            }, 3000);
        });
    });
}
