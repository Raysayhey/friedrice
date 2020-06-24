---
title: Wordpress als CMS für Ihre Webseite
date: 2020-06-02T10:33:38.127Z
thumb_img_path: /images/gatsby-wordpress.png
template: post
---
Wordpress in Verbindung mit GatsbyJS ist eine Möglichkeit um die bestehende Wordpress Webseite zu verbessern oder komplett neu etwas zu entwickeln. 

In diesem Fall nennt man Wordpress ein "headless CMS" - es wird nur zur Datenspeicherung verwendet, also wie ein backend mit einem Graphic User Interface oder auch GUI genannt, wird der Blog, die Galerie, Events o.a. direkt im CMS verwaltet.

Dies erlaubt die bestehenden Daten komplett zu übernehmen indem man sie durch GraphQL in die neue Webseite einspeist. 
Danach wird die Webseite bei jedem neuen Post oder Bild - je nachdem was man einstellt - automatisch neu gebaut und die neuen Daten hineingezogen. Dies erlaubt es den Inhabern der Webseite die Daten selbst zu verwalten, ohne dass man in den Code eingreifen muss.

Ein weiterer riesiger Vorteil ist die Gestaltung von SEO - speziell eher Technisches SEO d.h. Webseiten Ladezeiten-Optimierung ist mit Wordpress selbst ein Problem und wird mit Gatsbys gelöst. 

Die Tools wie Yoast-SEO sind für Wordpress Seiten ein muss, sind aber doch mehr Allgemein angelegt um spezifisch den Suchmaschinen die richtigen Informationen einzuspeisen. 

### Die Vor- und Nachteile


#### Schnelle Websites: 
Der Hauptvorteil der Erstellung einer statischen Website mit Gatsby ist die Geschwindigkeit, die Web-Entwickler seit Googles Ankündigung, die Geschwindigkeit von Websites für das Ranking in der Websuche zu nutzen, zu optimieren versuchen. Die Ladezeiten wirken sich auch auf Seitenaufrufe und Konversionen aus. Es wird geschätzt, dass eine Verzögerung von einer Sekunde bei der Ladezeit der Website zu einer Verringerung der Konversionen um 7% führen kann.

#### Sicherheit: 
Mit einer statischen Website erhalten Sie auch zusätzliche Sicherheit. Da es sich um einen Haufen statischer Dateien handelt, gibt es nicht viel zu hacken. Außerdem können Sie die statischen Dateien jederzeit neu generieren, wenn sie verloren gehen.

#### Server-Kosten: 
Das Hosten einer dynamischen Website erfordert, dass Ihr Server mit Ihrem Technologiestack kompatibel ist. Wenn Sie mit einer statischen Website arbeiten, können Sie sie auf fast jedem Server hosten, was auch die mit dem Hosting verbundenen Kosten senkt.

Die Generierung der statischen Seite mit GatsbyJS bei jeder Änderung erfordert JavaScript, was auch auf einem lokalen Rechner erfolgen kann, bevor die statischen Dateien auf die Seite übertragen werden.

#### Warum Gatsby vermeiden?
Kein Einbau dynamischer Inhalte: Wenn Sie Gatsby verwenden möchten, müssen Sie die Steuerung und Bereitstellung dynamischer Inhalte überdenken, d.h. Sie müssen eine Mischung aus statischem und dynamischem Inhalt erstellen, um dies zu erreichen 

Zum Beispiel müssen Kommentare extern über einen Dienst wie Disqus gehostet werden.

Kontaktformulare müssten auch über einen externen Partner wie Google Forms umgeleitet werden. Kurz gesagt, Sie würden die direkte Kontrolle über solche dynamischen Inhalte verlieren, da ihre Antworten nicht auf Ihren Servern gespeichert werden.

Häufige "Builds" sind unpraktisch: Auch statische Websites haben das Problem häufiger Neukonvertierungen. Jede Änderung, die Sie an Ihrer Seite vornehmen, wird erst dann reflektiert, wenn Sie die Seiten neu generiert und erneut auf den Server geladen haben. Dafür benutzen wir "Hooks" welche automatisch die Seite bei neuem Content neu bauen. Dies ist in den meisten Fällen auch komplett gratis - ausser man reizt diese Funktion aus und generiert die Seite 3 mal neu am Tag.

Technisches Fachwissen: Gatsby baut auf ReactJS und GraphQL auf. Daher sind einige Kenntnisse von JavaScript und eine Grundidee von GraphQL erforderlich, um mit Gatsby zu arbeiten und eine Webseite mit Gatsby zu erstellen.

<a href="https://www.youtube.com/watch?v=4vstfmB3wBE&feature=emb_title" > Hier ein Video auf englisch. Erklärung wie das Ganze funktioniert </a>

Unser Favorit an diesem Combo von Wordpress und GatsbyJS ist die Möglichkeit mit Javascript eine schönere Webseite zu gestalten und diese im Detail anzupassen, da man mit "richtigem" Code arbeitet und nicht mit einem Site-Builder von Wordpress.
Ein weiterer Vorteil sind die Möglichkeiten nicht nur von Wordpress sondern auch von anderen Orten Daten hinein zu laden. (Instagram, Twitter, Facebook, Netlify-CMS etc.) 

Obwohl Wordpress durch die vielen Plugins ein reiches Ökosystem hat, kommt es nicht annähernd an die Breite von Javascript (React-Framework) heran.

Die Schwierigkeiten beim Entwickeln ist das ausarbeiten der Texte und Bilder, welche direkt im Code einzubauen sind und was man dynamisch vom Wordpress CMS o.a. hinein laden möchte.

Natürlich ist ales immer einfacher gesagt als getan und bei grösseren Webseiten hat man um einiges länger an der Entwicklung als wenn man mit Wordpress die Webseite gestaltet.
Dafür hat man im Endergebnis aber auch eine gute Webseite, welche den neusten Standards entspricht und sich vernünftiger anpassen und ausbauen lässt.






