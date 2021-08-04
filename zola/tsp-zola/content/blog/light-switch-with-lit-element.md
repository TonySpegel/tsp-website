+++
title = 'Dark mode toggle als Web Component mit Lit'
date = 2021-08-05

[taxonomies]
tags = ['web-components', 'lit 🔥', 'TypeScript']
+++

<script>
    const body = document.querySelector('body');

    body.addEventListener('click', () => {
        body.classList.toggle('dark');
    })
</script>

# Was sind Web Components

Web Components ermöglichen es, benutzerdefinierte, wiederverwendbare HTML Elemenete zu erstellen.
`<light-switch>`

<!-- more -->