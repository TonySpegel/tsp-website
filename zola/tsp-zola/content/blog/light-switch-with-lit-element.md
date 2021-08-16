+++
title = 'Dark mode toggle als Web Component mit Lit'
date = 2021-08-05

[taxonomies]
tags = ['web-components', 'lit 🔥', 'TypeScript']
+++

Der Klassiker unter den Web-Components

<!-- more -->

<button id="light-switch">Switch</button>

<script>
    let lights = false;
    const lightSwitch = document.querySelector('#light-switch');

    lightSwitch.addEventListener('click', () => {
        lights = !lights;
        
        lights ? 
            document.documentElement.setAttribute('color-mode', 'dark') :
            document.documentElement.setAttribute('color-mode', 'light'); 
    });
</script>

# Was sind Web Components

Web Components ermöglichen es, benutzerdefinierte, wiederverwendbare HTML Elemenete zu erstellen.
`<light-switch>`

<!-- more -->