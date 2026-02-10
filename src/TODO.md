**Klickbara länkar för alla resurser:**  
I detaljvyerna (t.ex. `CharacterDetails.tsx`) visas `homeworld` som text, men det är inte en
klickbar länk. Kravspecifikationen säger att alla relaterade resurser ska vara klickbara länkar. `homeworld` är en planet och bör länka till planetens detaljsida.

**Länktexter:**  
I `LinkSection.tsx` används texten "Details" som länk, medan resursens namn visas i en `<p>`-tagg bredvid. Kravet var att länkarna ska använda resursens namn/titel.

**Varför:**  
Det är bättre UX och följer instruktionen om namnet görs till själva länken.
