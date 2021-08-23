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

Sperber sind typische Vertreter der überwiegend Wald bewohnenden Gattung Accipiter (Habichte und Sperber). Weibchen sind mit 35–41 cm Körperlänge und einer Flügelspannweite von 67 bis 80 cm[4] knapp größer als ein Turmfalke und reichen in der Größe an kleine Habicht-Männchen heran.[5] Sperber-Männchen sind mit 29–34 cm Körperlänge und einer Flügelspannweite von 58 bis 65 cm[4] deutlich kleiner. Die Flügel sind relativ kurz, breit und an ihren Spitzen gerundet, der Stoß ist verhältnismäßig lang. Diese Merkmale ermöglichen keine extremen Fluggeschwindigkeiten, jedoch eine hohe Wendigkeit auf engem Raum. Beine und Zehen zeigen deutliche Anpassungen an die Jagd auf kleine und schnelle Singvögel. Die Beine sind vergleichsweise lang und sehr dünn. Die Mittelzehe ist stark verlängert, alle Zehen haben ausgeprägte Haltebeeren, die beim Greifen ein lückenloses Schließen ermöglichen und so auch noch einzelne Federn festhalten können. Die Krallen sind lang und sehr spitz.


Vordergrund: adultes Weibchen
Dahinter: adultes Männchen
Hinten rechts: Vogel im Jugendkleid
Sperber zeigen einen sehr deutlichen Geschlechtsdimorphismus hinsichtlich der Färbung. Ausgefärbte (adulte) Sperbermännchen sind auf der Oberseite graublau. Die Unterseite ist weiß und fein quer gebändert („gesperbert“). Diese Bänderung ist am Rumpf zu einem individuell in Breite und Ausdehnung sehr stark variierenden Anteil orangerot. Manche Männchen sind auf der Rumpfunterseite fast einfarbig orange, bei anderen Vögeln ist die Querbänderung nur an den Flanken deutlich orange und am übrigen Rumpf braun. Der Hals zeigt eine feine senkrechte Strichelung, die ähnlich wie die Rumpfzeichnung variiert; im Extremfall ist der Hals ebenfalls einfarbig rotorange. Weibchen sind weniger farbenprächtig als die Männchen. Sie sind auf der Oberseite schiefergraubraun, die Unterseitenbänderung kann an den Flanken ebenfalls zu hohen Anteilen orange sein; diese Orangezeichnung ist jedoch nur in Ausnahmefällen so ausgedehnt wie bei Männchen.

Jungvögel sind bis zur ersten Mauser oberseits bräunlich, alle Deckfedern sind hell braunbeige gerandet. Die Unterseite ist weiß mit einer Querbänderung, die breiter und oft tropfen- oder herzförmig ausgeprägt ist.

Das Großgefieder weist in allen Kleidern eine deutliche Bänderung auf weißem bis beigebraunem, bei Jungvögeln auf gelblichem Grund auf. Die Beine sind gelb, ebenso die Wachshaut des Schnabels. Die Iris ist bei Jungvögeln hellgelb, bei adulten Weibchen dunkelgelb und bei Männchen meist orange. Der Schnabel ist schwarz, an der Basis blaugrau.

Der Geschlechtsdimorphismus hinsichtlich der Körpergröße und des Körpergewichts ist bei dieser Art extrem. Der Unterschied ist so groß, dass es bezüglich der Körpermaße zwischen den Geschlechtern keinen Überschneidungsbereich gibt. Zum Beispiel hatten adulte Männchen der Nominatform A. nisus nisus aus Deutschland eine Flügellänge von 192 bis 209 mm, im Mittel 199 mm, Weibchen messen 223–247 mm, im Mittel 234 mm. Adulte Männchen wiegen 105–165 g, im Mittel 137 g, Weibchen 192–290 g, im Mittel 234 g. Männchen erreichen also nur etwa 60 % des Körpergewichts der Weibchen. Sperber gehören zu den kleinsten Vertretern der Gattung Accipiter, männliche Sperber gehören zu den kleinsten in Mitteleuropa brütenden Greifvögeln.

Verwechslungsmöglichkeiten bestehen in Mitteleuropa in erster Linie mit dem Habicht. Bei sitzenden Vögeln ist die Unterscheidung meistens einfach, Habichte sind viel größer und kräftiger, dies fällt insbesondere bei Betrachtung der Beine und des Kopfes auf. Habichte zeigen nie Orange auf Brust und Bauch und haben einen deutlichen, weißlichen Überaugenstreif, der bei Sperbern nur angedeutet ist. Die Augen des Sperbers sind proportional wesentlich größer und damit auffälliger als beim Habicht.

Schwieriger ist die Unterscheidung fliegender Vögel. Die Körperproportionen von Sperber und Habicht sind sehr ähnlich, auf größere Entfernung ist daher insbesondere eine Unterscheidung gleitender oder segelnder Vögel oft nicht möglich. Bei einigermaßen guten Sichtbedingungen sind jedoch auch im Flug der wesentlich massivere Körper und die proportional längeren Flügel des Habichts erkennbar. Bei aktiv fliegenden Individuen lässt auch die Flügelschlagfrequenz oft eine Artbestimmung zu: diese ist bei Sperbern etwa doppelt so hoch wie beim Habicht.

## Vorüberlegungen

Sperber sind typische Vertreter der überwiegend Wald bewohnenden Gattung Accipiter (Habichte und Sperber). Weibchen sind mit 35–41 cm Körperlänge und einer Flügelspannweite von 67 bis 80 cm[4] knapp größer als ein Turmfalke und reichen in der Größe an kleine Habicht-Männchen heran.[5] Sperber-Männchen sind mit 29–34 cm Körperlänge und einer Flügelspannweite von 58 bis 65 cm[4] deutlich kleiner. Die Flügel sind relativ kurz, breit und an ihren Spitzen gerundet, der Stoß ist verhältnismäßig lang. Diese Merkmale ermöglichen keine extremen Fluggeschwindigkeiten, jedoch eine hohe Wendigkeit auf engem Raum. Beine und Zehen zeigen deutliche Anpassungen an die Jagd auf kleine und schnelle Singvögel. Die Beine sind vergleichsweise lang und sehr dünn. Die Mittelzehe ist stark verlängert, alle Zehen haben ausgeprägte Haltebeeren, die beim Greifen ein lückenloses Schließen ermöglichen und so auch noch einzelne Federn festhalten können. Die Krallen sind lang und sehr spitz.


Vordergrund: adultes Weibchen
Dahinter: adultes Männchen
Hinten rechts: Vogel im Jugendkleid
Sperber zeigen einen sehr deutlichen Geschlechtsdimorphismus hinsichtlich der Färbung. Ausgefärbte (adulte) Sperbermännchen sind auf der Oberseite graublau. Die Unterseite ist weiß und fein quer gebändert („gesperbert“). Diese Bänderung ist am Rumpf zu einem individuell in Breite und Ausdehnung sehr stark variierenden Anteil orangerot. Manche Männchen sind auf der Rumpfunterseite fast einfarbig orange, bei anderen Vögeln ist die Querbänderung nur an den Flanken deutlich orange und am übrigen Rumpf braun. Der Hals zeigt eine feine senkrechte Strichelung, die ähnlich wie die Rumpfzeichnung variiert; im Extremfall ist der Hals ebenfalls einfarbig rotorange. Weibchen sind weniger farbenprächtig als die Männchen. Sie sind auf der Oberseite schiefergraubraun, die Unterseitenbänderung kann an den Flanken ebenfalls zu hohen Anteilen orange sein; diese Orangezeichnung ist jedoch nur in Ausnahmefällen so ausgedehnt wie bei Männchen.

Jungvögel sind bis zur ersten Mauser oberseits bräunlich, alle Deckfedern sind hell braunbeige gerandet. Die Unterseite ist weiß mit einer Querbänderung, die breiter und oft tropfen- oder herzförmig ausgeprägt ist.

Das Großgefieder weist in allen Kleidern eine deutliche Bänderung auf weißem bis beigebraunem, bei Jungvögeln auf gelblichem Grund auf. Die Beine sind gelb, ebenso die Wachshaut des Schnabels. Die Iris ist bei Jungvögeln hellgelb, bei adulten Weibchen dunkelgelb und bei Männchen meist orange. Der Schnabel ist schwarz, an der Basis blaugrau.

Der Geschlechtsdimorphismus hinsichtlich der Körpergröße und des Körpergewichts ist bei dieser Art extrem. Der Unterschied ist so groß, dass es bezüglich der Körpermaße zwischen den Geschlechtern keinen Überschneidungsbereich gibt. Zum Beispiel hatten adulte Männchen der Nominatform A. nisus nisus aus Deutschland eine Flügellänge von 192 bis 209 mm, im Mittel 199 mm, Weibchen messen 223–247 mm, im Mittel 234 mm. Adulte Männchen wiegen 105–165 g, im Mittel 137 g, Weibchen 192–290 g, im Mittel 234 g. Männchen erreichen also nur etwa 60 % des Körpergewichts der Weibchen. Sperber gehören zu den kleinsten Vertretern der Gattung Accipiter, männliche Sperber gehören zu den kleinsten in Mitteleuropa brütenden Greifvögeln.

## Greifvögeln

Verwechslungsmöglichkeiten bestehen in Mitteleuropa in erster Linie mit dem Habicht. Bei sitzenden Vögeln ist die Unterscheidung meistens einfach, Habichte sind viel größer und kräftiger, dies fällt insbesondere bei Betrachtung der Beine und des Kopfes auf. Habichte zeigen nie Orange auf Brust und Bauch und haben einen deutlichen, weißlichen Überaugenstreif, der bei Sperbern nur angedeutet ist. Die Augen des Sperbers sind proportional wesentlich größer und damit auffälliger als beim Habicht.

Schwieriger ist die Unterscheidung fliegender Vögel. Die Körperproportionen von Sperber und Habicht sind sehr ähnlich, auf größere Entfernung ist daher insbesondere eine Unterscheidung gleitender oder segelnder Vögel oft nicht möglich. Bei einigermaßen guten Sichtbedingungen sind jedoch auch im Flug der wesentlich massivere Körper und die proportional längeren Flügel des Habichts erkennbar. Bei aktiv fliegenden Individuen lässt auch die Flügelschlagfrequenz oft eine Artbestimmung zu: diese ist bei Sperbern etwa doppelt so hoch wie beim Habicht.