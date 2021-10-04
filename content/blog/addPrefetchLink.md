+++
title = 'Beschleunigte Navigation mit Link prefetching'
date = 2021-10-04
description = 'Wie man rel="prefetch" durch Interaktionen wie bspw. mouseover oder focus optimieren kann'
draft = false

[taxonomies]
tags = ['JavaScript', 'TypeScript', 'Performance', 'NPM']

[extra]
type = 'article'
+++

Prefetching beschreibt einen Prozess, welcher demnächst eventuell benötigte Inhalte vorlädt,
um diese schneller aufrufen zu können. Das kann beispielsweise so aussehen:
`<link rel="prefetch" href="/img/catsarecute.jpg" />`. 
Browser werden diese Ressource dann herunterladen und zwischenspeichern 
(allerdings nur im <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#how_is_browser_idle_time_determined">Idle</a>).

Alle Links einer Seite für das Prefetching hinzuzufügen ist natürlich wenig sinnvoll.
Um das zu optimieren, habe ich mich dazu entschieden, Links nur auf eine Interaktion hin prefetchen. 
Also beispielsweise das Hovern mit der Maus oder das Fokussieren mit einer Tastatur. Inspiration habe ich mir hierbei 
durch das von Google entwickelte <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://getquick.link/">Quicklink</a> geholt. Der entscheidende Unterschied zu meiner Implementation ist, dass Quicklink alle Links im sichtbaren Bereichen vorlädt 
und nicht durch eine Interaktion.

Links zu meiner Implementation:
- <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/add-prefetch-link">NPM</a>
- <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TonySpegel/addPrefetchLink">GitHub</a>
- <a class="text-link" target="_blank" rel="noopener noreferrer" href="#">Demo (Codepen)</a>

## Anforderungen

- Links welche ein `mailto:` oder `tel:` enthalten, sollen nicht prefetched werden
- Ist ein Datensparmodus aktiv oder die Verbindung zu langsam, sollen keine Links prefetched werden
- Pro Link darf nur eine Interaktion das Prefetching auslösen

## Die richtigen Links selektieren
Da es bei E-Mail Links oder Telefonnummern keinen Sinn ergibt, diese zu prefetchen, müssen diese ignoriert werden.
Ich nutze dazu einfach einen CSS Selektor welche alle Links selektiert, 
deren href-Attribut nicht mit dem entsprechenden Prefix beginnt:
```javascript
document
    .querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"])')
    .forEach((link) => /* prefetch links */);
```

## Links prefetchen
Als erstes definiere ich eine Funktion welche Links zum `<head>` hinzufügen soll und als Parameter ein 
Event erwartet und als Rückgabetyp zunächst `void` definiert:
```typescript
const addToHead = (event: Event): void => { /* Code */ }
```
Als nächstes soll geprüft werden, ob entweder ein Datensparmodus aktiv oder die Verbindung zu langsam ist:
```typescript
const addToHead = (event: Event): void | Error => { 
    if (navigator.connection) {
        const connection = navigator.connection;
        /**
         * Check if a data saver is running
         */
        if (connection.saveData) {
            return new Error('Prefetch is not available when using Data Saver');
        }
        /**
         * Check for slow connections, don't prefetch on 2g or slower.
         * effectiveType can be: slow-2g, 2g, 3g, or 4g
         */
        if (connection.effectiveType.includes('2g')) {
            return new Error('Prefetch is not available on slow connection');
        }
    }
}
```
Allerdings hat nicht jeder Browser Informationen über dessen Verbindungstyp so dass hier zuerst über `navigator.connection` 
auf das Vorhandensein hin geprüft wird. Die hier geworfenen Fehler werden nicht verwendet oder angezeigt
um nicht unnötig zu stören, es soll vor allem einfach nicht prefetched werden.

Das eigentliche Prefetching ist unspektakulär. Es wird ein Link-Element erzeugt, dessen `href`-Attribut auf einen Link 
und das `rel`-Attribut auf `prefetch`gesetzt und dieses schließlich zum `<head>` hinzugefügt:

```typescript
const addToHead = (event: Event): void | Error => { 
    // (...) previous code

    if (event.target !== null) {
        const link = document.createElement('link');

        link.href = (<HTMLAnchorElement>event.target).href;
        link.rel = 'prefetch';

        document.head.appendChild(link);
    }
}
```

## Eine Interaktion pro Link
Um unnötige Netzwerkanfragen zu vermeiden, soll nur eine Interaktion pro Link das Prefetching auslösen.
Wurde ein Link beispielsweise mit der Tastatur fokussiert, soll ein Hovern mit der Maus keinen weiteren Vorgang auslösen.
Ein Event an sich nur ein einziges Mal auslösen ist einfach:
```javascript
element.addEventListener('click', () => { /* Code */ }, { once: true });
```
Vorbereitend wird wieder eine leere Funktion erstellt. Diese erwartet einen Link und ein Array an Events, 
hier vorbelegt mit `mouseover` und `focus`.
```typescript
export const addPrefetchLink = (
    link: HTMLAnchorElement,
    userEvents: ReadonlyArray<keyof HTMLElementEventMap> = [
        'mouseover',
        'focus',
    ],
) => { /* Code */ }
```
Der Rest des Codes wird in zwei Teile unterteilt, einen der EventListener entfernt und das hinzufügen zum
`<head>` übernimmt und einen welcher EventListener hinzufügt. 
```typescript
export const addPrefetchLink = (
    link: HTMLAnchorElement,
    userEvents: ReadonlyArray<keyof HTMLElementEventMap> = [
        'mouseover',
        'focus',
    ],
) => {
    const handler = (event: Event) => {
        // Remove listeners
        userEvents.forEach((userEvent) => link.removeEventListener(userEvent, handler));
        addToHead(event);
    };

    // Register listeners
    userEvents.forEach((userEvent) => link.addEventListener(userEvent, handler));
};
```
Die hier als `handler` benannte Funktion entfernt zunächst alle auf einen Link gebundenen Events und fügt dann
den Link via `addToHead` hinzu. Fertig! Wobei da eine Sache noch bleibt: sollte ein Link öfters vorhanden sein,
wird dieser dennoch ein weiteres mal hinzugefügt. Lösen könnte man das wohl mit einem `Set` - das kommt (vielleicht)
in einem Update. 

## Mini-Benchmark
TODO: hier Benchmark einfügen

Das Ganze war auch ein erster erfolgreicher Versuch ein NPM-Modul zu schreiben und zu 
<a class="text-link" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/add-prefetch-link">veröffentlichen</a>.
Weitere Details dazu auf <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TonySpegel/addPrefetchLink/#readme">GitHub</a> (wichtig sind aber vor allem die Felder `main`, `type` sowie `files` in der <a class="text-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TonySpegel/addPrefetchLink/blob/main/package.json">package.json</a>). 
Da es mein erstes NPM-Modul ist, freue ich mich natürlich besonders über Feedback <a class="text-link" target="_blank" rel="noopener noreferrer" href="mailto:tony.spegel@gmail.com" title="E-Mail schreiben">tony.spegel@gmail.com</a>  
