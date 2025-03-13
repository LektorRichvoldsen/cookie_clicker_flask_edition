var knappEl = document.getElementById("knapp");
var plussEnKnappEl = document.getElementById("plussEnKnapp");
var utskiftEl = document.getElementById("utskriftOmraade");
var plussTiKnapp = document.getElementById("plussTiKnapp");

knappEl.addEventListener("click", klikkefunksjon);
plussEnKnappEl.addEventListener("click", leggTilEtKlikk);
plussTiKnapp.addEventListener("click", leggTilEtKlikk);

// Legger til verdier som skal lese ut av click-eventet
plussEnKnappEl.verdi = 10;
plussEnKnappEl.klikkOkning = 1;
plussTiKnapp.verdi = 100;
plussTiKnapp.klikkOkning = 10;

var antallPoengPerKlikk = 1;
var antallKlikk = 0;

function klikkefunksjon(e){
    antallKlikk += antallPoengPerKlikk;
    utskiftEl.innerHTML = "Du har klikket " + antallKlikk + " ganger.";
    document.forms.saveScore.score.value = antallKlikk; // <--- her legges verdien som sendes til PHP-koden
}

function leggTilEtKlikk(e){
    if(antallKlikk <e.currentTarget.verdi){
        alert("Du har ikke nok poeng enda. Klikk mer.");
    } else {
        antallKlikk -= e.currentTarget.verdi;
        antallPoengPerKlikk += e.currentTarget.klikkOkning;
        utskiftEl.innerHTML = "Du har kjøpt en oppgradering. Antall klikk er nå " + antallKlikk + ", og du får " + antallPoengPerKlikk + " poeng per klikk";
    }
}

