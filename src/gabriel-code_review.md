# Förbättringsförslag

## 🔴 Hög prioritet

**Klickbara länkar för alla resurser:**  
I detaljvyerna (t.ex. `CharacterDetails.tsx`) visas `homeworld` som text, men det är inte en klickbar länk. Kravspecifikationen säger att alla relaterade resurser ska vara klickbara länkar. `homeworld` är en planet och bör länka till planetens detaljsida.

**Länktexter:**  
I `LinkSection.tsx` används texten "Details" som länk, medan resursens namn visas i en `<p>`-tagg bredvid. Kravet var att länkarna ska använda resursens namn/titel.

**Varför:**  
Det är bättre UX och följer instruktionen om namnet görs till själva länken.

## 🟡 Medel prioritet

**Kodduplicering i hooks:**  
I `useGetAndSearchAPI.ts` finns en stor `useEffect` med många `if`-satser som i princip gör samma sak. Eftersom du redan har en generisk `get`-funktion i din service, kan du förenkla hooken genom att skicka in den specifika API-funktionen som argument istället för en sträng ("FILMS", "PEOPLE" etc.).

**Typ-assertions (Type casting):**  
I `Card.tsx` används `data as DataResFilm` etc. Detta är type casting som man helst vill undvika. Eftersom du har en `variant`-prop kan du använda type guards eller en mer generisk lösning så att TypeScript förstår vilken typ `data` har utan manuell casting.

## 🟢 Låg prioritet

**Död kod/Kommentarer:**  
Du har kvar kommentarer som `//preguntar?` och `//extract any type ids` (trots att det inte är `any`). Att rensa bort gamla anteckningar innan inlämning ger ett mer proffsigt intryck.

**Vercel vs Netlify:**  
Uppgiften nämner helst Netlify, men du har använt Vercel. Detta är inget funktionellt problem eftersom applikationen fungerar bra, men värt att notera om läraren har specifika krav på plattform.
