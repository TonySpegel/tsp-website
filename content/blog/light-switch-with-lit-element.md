+++
title = 'Themeauswahl als Web Component mit Lit 🔥'
date = 2021-09-23
description = 'Wie man ein Theme planen und mit einer eigenen Komponente wechseln kann.'
draft = true

[taxonomies]
tags = ['web-components', 'buildWithLit', 'TypeScript', 'a11y']

[extra]
type = 'article'
+++

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

Web Components ermöglichen es, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen.
Konkret bedeutet das, dass man sich ein `<cat-gallery>`-Element erstellen und mit anderen teilen könnte.
Wichtig bei der Bennennung ist nur, das mindestens ein Bindestrich enthalten ist.
`<light-switch>`

<!-- more -->