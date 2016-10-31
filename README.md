Oppdatering 2016-08-23: Vi prøver å få på plass noen flere funksjoner i prosjektportalen. Vi ønsker derfor å skyve releasen noe. En installerbar pakke forventes å kunne lastes ned fra denne siden ila. Høst 2016.

Prosjektportalen for bygg- og anleggsprosjekter er utviklet for Asker kommune, og er en videreføring av prosjektportalen for SharePoint. I tillegg til det en får i den vanlige prosjektportalen, vil en her få spesialtilpassede mapper, oppgaver, interessenter og fasesjekklister.

# Hva er prosjektportalen for SharePoint?

Se <a href="https://github.com/prosjektstotte/sp-prosjektportal">Prosjektportalen</a> for mer informasjon, feilsøking etc.

# Installasjon av bygg og anlegg

Installasjonspakken er pakketert sammen med standard Prosjektportalen. Det vil derfor holde å kjøre gjennom stegene under en gang for hver områdesamling.

*VIKTIG: Det finnes èn installasjonskonfigurasjon for anlegg og èn for bygg. Disse krever _hver sin_ områdesamling - det er ikke mulig å installere en felles eller kombinert variant.*

# Hvordan installere løsningen?
## Viktig! Før du starter
Før du starter er det viktig å være klar over følgende
* Glittertind setter opp taksonomi i den globale managed metadata servicen ved å opprette en termgruppe 'Glittertind' og term set og termer i denne gruppen
* Områdesamlingen ('site collection') må opprettes på forhånd, se steg 1 under.
* Applikasjonen <strong>må</strong> kjøres av en bruker som er termlagrinsadministrator ('term store administrator') og områdesamlingsadministrator ('site collection administrator') i områdesamlingen som prosjektportalen skal installeres i
* (On-Premises) Prosjektportalen støtter ikke SharePoint 2016, selv om sannsynligvis mye vil fungere der også
* (On-Premises) Du bør ha patchet SharePoint-farmen til en nyere versjon. Absolutt minimum er Service Pack 1 (15.0.4571.1502)
* (On-Premises) Servicen 'Microsoft SharePoint Foundation Sandboxed Code Service' må være startet i farmen
* (On-Premises) Løsningen er avhengig av at søkeservicen fungerer og at innhold blir crawlet. Du vil få installert løsningen selv om søk ikke fungerer

## Steg for steg

Dersom du skal installere for anlegg, bruk konfigurasjonsfilen anlegg-sitehierarchy.json. Dersom du skal installere for bygg, bruk konfigurasjonsfilen bygg-sitehierarchy.json.

1. En områdesamling må opprettes for hver prosjektportal. Vi anbefaler ikke at prosjektportalen installeres i en områdesamling som brukes til noe annet fra før. Vi anbefaler at områdesamlingen opprettes med norsk språk (selve SharePoint-installasjonen trenger ikke være norsk) og malen 'gruppeområde' ('team site').
2. (Foreløpig) Pakken er distribuert til noen få kunder og interesserte for pilotering, og kan p.t. ikke lastes ned herfra.
3. Pakk ut installasjonspakken, og naviger til mappen via kommandolinjen.
4. Dersom du skal installere til SharePoint Online: På kommandolinjen, skriv sherpa.exe --url "URL til nyopprettet områdesamling" --userName "brukernavn til administrator" --spo --conf "Navn på konfigurasjonsfil (se over)"
4. Dersom du skal installere til SharePoint 2013 On-Premises og skal logge inn som allerede innlogget bruker: På kommandolinjen, skriv sherpa.exe --url "URL til nyopprettet områdesamling" --conf "Navn på konfigurasjonsfil (se over)"
5. Applikasjonen starter. Dersom du skal installere til SharePoint Online må du skrive passord.
6. Kjør gjennom operasjonene i applikasjonen 1, 2, 3, 4, 5 og 8 i rekkefølge. Hvert steg må gå gjennom uten feil for at installasjonen skal blir vellykket. Dersom du opplever feil kan du se seksjonen Feilsøking på siden for <a href="https://github.com/prosjektstotte/sp-prosjektportal">Prosjektportalen</a>.

Etter at operasjonene er gjennomført skal prosjektportalen for bygg eller anlegg være oppe og kjøre.

## Eksempel på installasjon i Vestøst kommune

Nina i Vestøst kommune skal installere prosjektportalen for bygg-prosjekter. Vestøst kommune har Office 365, og Nina er global admin og er termstore administrator. URL til Vestøst kommune sin Office 365 tenant er https://vestost.sharepoint.com og Ninas brukernavn for å logge inn på tenanten er nina@vestost.no. Nina gjør følgende

1. Hun oppretter områdesamlingen https://vestost.sharepoint.com/sites/prosjektportalen-bygg
2. Hun har pakket ut installasjonspakken til C:\pp-bygg-anlegg\ og navigerer dit med kommandolinjen
3. Hun skriver i cmd: .\sherpa.exe --url https://vestost.sharepoint.com/sites/prosjektportalen-bygg --userName nina@vestost.no --spo --conf bygg-sitehierarchy.json
4. Hun skriver inn passord og får ingen feilmeldinger. Hun er klar til å installere.
5. Hun velger operasjon 1. Deretter operasjon 2. Deretter 3, 4, 5 og 8, i den rekkefølgen.
6. Hun navigerer til https://vestost.sharepoint.com/sites/prosjektportalen-bygg og ser at Prosjektportalen for byggprosjekter er ferdig installert.

# Kontakt
For spørsmål og innspill, ta kontakt med Asker Kommune ved <a href="mailto:Geir.Graff@asker.kommune.no">Geir Graff</a>. For bistand til installasjon av løsningen eller muligheter for videreutvikling og spesialtilpasninger, ta kontakt med <a href="mailto:support@puzzlepart.com">Puzzlepart</a> eller <a href="mailto:tormod.guldvog@puzzlepart.com">Tormod Guldvog</a>. Vi gjør oppmerksom på at eventuell bistand vil være en fakturerbar tjeneste.

# Maintainers
Tarjei Ormestøyl [<a href="mailto:tarjeieo@puzzlepart.com">tarjeieo@puzzlepart.com</a>]
