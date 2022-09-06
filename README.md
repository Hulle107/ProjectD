<div align="center">

![ProjectD](https://drive.google.com/uc?export=view&id=1ueq4ihuiduU984P5iKqIdljQaFTGWEOh)

</div>

[![Build](https://img.shields.io/netlify/eef90d0f-016a-4017-9e83-8ab4ffd8958f?style=for-the-badge&logo=netlify&logoColor=#00C7B7)](https://sunny-cassata-fd4c22.netlify.app/)
[![Version](https://img.shields.io/github/package-json/v/Hulle107/ProjectD?style=for-the-badge)](package.json)
[![License](https://img.shields.io/github/license/Hulle107/ProjectD?style=for-the-badge)](LICENSE)

[![node](https://img.shields.io/badge/node-%5E16.0.0-informational?style=flat-square)](https://nodejs.org/en/)
[![netlify-cli](https://img.shields.io/badge/netlify--cli-%5E11.5.1-informational?style=flat-square)](https://www.npmjs.com/package/netlify-cli)

## Indholdsfortegnelse

- [Introduktion](#introduktion)
- [Installation af udviklingsmiljø](#installation-af-udviklingsmiljø)
- [Udviklingsmiljø krav](#udviklingsmiljø-krav)
- [Produkt dokumentation](#produkt-dokumentation)
- [Proces dokumentation](#proces-dokumentation)
- [Referencer](#referencer)

## Introduktion

**ProjectD** er et projekt der udvikles, for min svendeprøve som **Datamatiker med speciale i programmering** på TEC Ballerup.

Projektet omhandler at lave en blog-hjemmeside, hvor det er muligt at kunne logge ind, som administrator, og redigere sidens indhold. Brugere af siden vil også kunne logge ind for at kunne kommentere og rate, på sidens indhold. Hjemmesiden vil være brugervenlig, og være i et modern design.

Der vil være en API[^1] med fuld CRUD[^2], til at håndtere brugere, artikler, kommentere og rate's.

Til hjemmesiden vil vi bruge React[^3] til frontend og Express[^4] til API'en, dette vil blive lanceret på et serverless[^5] miljø. For det serverless miljø vil der bruges Netlify[^6], og for databasen vil vi bruge MongoDB[^7].

For at udviklingsmiljø vil vi bruge Node.js[^8].

[^1]: "API - Wikipedia." https://en.wikipedia.org/wiki/API.
[^2]: "Create, read, update and delete - Wikipedia." https://en.wikipedia.org/wiki/Create,_read,_update_and_delete.
[^3]: "React (JavaScript library) - Wikipedia." https://en.wikipedia.org/wiki/React_(JavaScript_library).
[^4]: "Express.js - Wikipedia." https://en.wikipedia.org/wiki/Express.js.
[^5]: "Serverless computing - Wikipedia." https://en.wikipedia.org/wiki/Serverless_computing.
[^6]: "Netlify - Wikipedia." https://en.wikipedia.org/wiki/Netlify.
[^7]: "MongoDB - Wikipedia." https://en.wikipedia.org/wiki/MongoDB.
[^8]: "Node.js - Wikipedia." https://en.wikipedia.org/wiki/Node.js.

For fuld briskrivelse af idéen check [idébeskrivelse.pdf]().

## Installation af udviklingsmiljø

1. Clone projektet fra github.
2. `npm install` for at upsætte og downloade miljøet.
3. `netlify dev` for at starte udviklingsserveren.

## Udviklingsmiljø krav

Disse ting er krævet for at kunne køre udviklingsmiljøet.

- **node v16.0.0**
- **netlify-cli v11.5.1**

Til hjælp med at installere **node** & **netlify-cli** brug denne [guide](https://docs.netlify.com/cli/get-started/).

## Produkt dokumentation

**System dokumentation:**

- [Kravspecifikation]()
- [Brugeroplevelse design specifikation]()
- [Arkitektur design specifikation]()
- [Kvalitetssikring specifikation]()
- [Kildekode dokument]()
- [API dokumentation]()

**Bruger dokumentation:**

- [Brugervejledning]()
- [Administratorvejledning]()

## Proces dokumentation

- [Estimeret tidsplan]()
- [Realiseret tidsplan]()
- [Arbejdsfordeling]()
- [Projektdagbog]()
- [Testrapport]()

## Referencer