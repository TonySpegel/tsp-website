+++
title = 'Challenge: Progress Stepper'
date = 2021-08-21
description = 'Fortschritt anzeigen als (CSS) Challenge'

[taxonomies]
tags = ['challenge', 'css', 'FrontEndChallengesClub']
+++

<div class="img-box">
    <img 
        src="/img/fecc-challenge-008.png" 
        alt="Challenge #008 (Front-End Challenges Club)" 
        loading="lazy"
        width="320"
        height="303"
    />
    <span>© Andy Bell</span>
</div>


Vor einer Weile habe ich auf Twitter diese <a class="text-link" href="https://mobile.twitter.com/piccalilli_/status/1316309289854799874">Challenge</a> entdeckt, gespeichert und schließlich für längere Zeit vergessen (kennt man ja).

In dieser Challenge geht es darum, einen so genanten Progress Stepper umzusetzen - also etwas das man beispielsweise aus
einem Lieferprozess oder im Checkout Prozess eines Onlineshops kennt. Die wichtigsten Punkte welche dieser erfüllen soll sind:
- Die Lösung nutzt semantisches HTML
- Die Lösung funktioniert sowohl mit wenigen als auch beliebig vielen Punkten
- Lange wie kurze Texte sollen unterstützt werden

## Vorüberlegungen

- Da eine zeitliche Abfolge dargestellt werden soll, bietet es sich an ein `<ol>`-Element zu nutzen - eine _ordered list_
- verschiedene Zustände müssen dargestellt werden: _offen_, _in Bearbeitung_ und _abgeschlossen_
- Auch Screenreader müssen den jeweiligen Status eines Schritts verarbeiten können so dass jede/r weiß was der aktuelle Stand ist

## HTML

Für ein Layout dieser Form habe ich mich entschieden für jeden Schritt sowie der Liste als Ganzes `display: flex;` 
und für den Fortschrittsindikator und den Verbindungsstücken `:before` bzw. `:after` zu nutzen. Die Anzeige des 
jeweiligen Schritts und dessen Beschreibung wird jeweils mit einem `<div>` umschlossen. Über das `data-state="complete"`-Attribut
wird ein abgeschlossener Zustand signalisiert und mit `aria-current="step"` für Screenreader der aktuelle Schritt gekennzeichnet
(mehr zum `aria-tag` <a class="text-link" href="https://developer.mozilla.org/en-US/docs/Web/API/Element/ariaCurrent">hier</a>).

```html
<div class="progress-stepper">
    <ol>
        <li data-state="complete">
            <div class="step">
                <span>Schritt 1</span>
                <strong>Warenkorb</strong>
            </div>
        </li>
        <li data-state="complete">
            <div class="step">
                <span>Schritt 2</span>
                <strong>Details</strong>
            </div>
        </li>
        <li aria-current="step">
            <div class="step">
                <span>Schritt 3</span>
                <strong>Zahlungsmittel</strong>
            </div>
        </li>
        <li>
            <div class="step">
                <span>Schritt 4</span>
                <strong>Zahlung abschließen<strong>
            </div>
        </li>
    </ol>
</div>
```

## CSS

Um verschieden Lange und beliebig viele Schritte darzustellen nutze ich 
CSS custom properties / CSS Variablen. Diese Variablen sind hier besonders praktisch, um die Länge der Verbindungsstücke zu berechnen. Der Rest ist vor allem viel Berechnung mit Hilfe von `calc()` und den Eingangs erwähnten Zuständen via `[data-state='complete']`.

### Variablen & Reset

Die hier genutzten Variablen sind relativ überschaubar, ich lege vor allem
ein paar Grundfarben sowie Abstände, die größe des Indikators, die Zeilenhöhe,
den abstand zwischen den Schritten sowie die Breite des Verbindungsstücks fest.
Die Farben sind hierbei selbst gewählt und weichen etwas von der Vorgabe ab; oft bietet es sich auch an neben _surface colors_ auch noch Schriftfarben zu definieren.

```css
:root {
    --surface-1: #cb99e1;
    --surface-2: #debfed;
    --surface-3: #f2e6f8;
    --surface-4: #f8f2fb;

    --base-gap: 16px;
    --circle-size: 26px;

    --line-height: var(--circle-size);
    --step-margin: 16px;
    --connection-width: 4px;
}

body {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

/* Container element */
.progress-stepper {
    padding: var(--base-gap);
}

/* Wrapper for desciption */
.step {
    display: flex;
    flex-direction: column;
    justify-content: center;

    line-height: var(--line-height);
}
```

### Die Liste

Die Liste als solches ist schnell beschrieben: ein `flex`-Layout 
in der Vertikalen sowie in der Horizontalen für jeden Schritt.
Hierbei noch erwähnenswert ist die Property `gap` welche mittlerweile auch für `flex`-Container verfügbar ist und einen Abstand zwischen Elementen erzeugt.

```css
ol {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    list-style-type: none;
}

li {
    display: flex;
    gap: var(--base-gap);
    margin-bottom: var(--step-margin);

    position: relative;
    cursor: pointer;
}

li:last-child {
    margin-bottom: 0;
}
```

### Fortschrittsindikator

Der Fortschrittsindikator (der jeweilige Kreis in jedem Schritt)
wiederum ist auch nur ein `flex`-Container und wird mittels `align-self: center` vertikal zentriert. Ist ein Schritt als abgeschlossen markiert, ändert sich dessen Farbe und ein Haken wird hinzugefügt. 

```css
/**
 * Circle Element - default
 */
li:before {
    content: '';
    display: flex;
    align-self: center;
    place-content: center;

    border: 1px solid var(--surface-1);
    border-radius: var(--circle-size);
    min-width: var(--circle-size);
    min-height: var(--circle-size);

    z-index: 1;
    background-color: var(--surface-4);
}

/**
 * Circle Element - complete
 */
li[data-state='complete']:before {
    content: '✓';
    background-color: var(--surface-1);
}
```

### Verbindungselement

Die eigentliche Herausforderung waren die Verbindungselemente zwischen den Kreisen. Diese mussten nahtlos ineinander übergehen und das möglichst bei verschieden langen Beschriftungen. Um nicht zu viel zusätzliches HTML zu schreiben, hat es sich als praktisch erwiesen, das Verbindungselement absolut zu positionieren. Die Länger der Verbindung ergibt sich dann aus Abstand, Höhe des Schritts sowie der Zeilenhöhe. Das Ganze ist auf jeden Fall nicht perfekt und funktioniert nicht mehr optimal bei Beschriftungen die sich über drei Zeilen erstrecken - was hoffentlich selten der Fall sein sollte. Falls jemand noch eine bessere Lösung hat - gern an mich schicken <a class="text-link no-fetch" href="mailto:tony.spegel@gmail.com" title="E-Mail schreiben">tony.spegel@gmail.com</a>  

```css
/* Connection - default */
li:after {
    content: '';
    display: none;
    width: var(--connection-width);
    height: 50%;

    position: absolute;
    left: calc(
        var(--circle-size) / 2 - var(--connection-width) / 2
    );

    z-index: 0;
    background-color: var(--surface-2);
}

/* Finished step */
li[data-state='complete']:after {
    display: flex;
    height: calc(100% + var(--step-margin) + var(--line-height));
}

/* First connection */
li:first-child:after {
    height: calc(100% + var(--step-margin));
    transform: translateY(var(--line-height));
}

/* Last connection */
li:last-child:after {
    height: 50%;
}
```

## Fazit

Perfekt ist meine Lösung zwar nicht aber interessant war es alle Mal. Besonders geholfen haben hier dir CSS Variablen mit denen zwar viel mit festen Werten gerechnet wurde aber diese immerhin voneinander abhängig sind und somit kein großes Problem darstellen sollten.
Den Code als Ganzes gibt es noch einmal hier auf meinem 
<a class="text-link" href="https://codepen.io/TonySpegel/pen/XWgWRgm?editors=1100" title="Progress Stepper auf Codepen">Codepen</a>  
