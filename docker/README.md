# Build & Deployment Plan

Dieser Plan soll einen Überblick geben, was grundsätzlich getan werden muss,
um eine Zola Website mit NPM Modulen anzureichern und schließlich auf 
GitHub Pages deployen zu können.

## Probleme

- Zola kann NPM Imports in JavaScript Dateien nicht auflösen

## Bestehende Lösungen

- Der Part des Builds und Deployments wurde bereits mit einer GitHub Action gelöst:
https://github.com/shalzz/zola-deploy-action. Diese Action kann allerdings nur bauen und deployen, den Part des "NPM Imports auflösen" kann es nicht übernehmen. 

## Ansatz

- Die bereits bestehende Läsung muss aufgesplittet und um eine weitere ergänzt werden. Diese Ergänzung steht zwischen dem Build und dem Deployment und kann mit RollUp gelöst werden.