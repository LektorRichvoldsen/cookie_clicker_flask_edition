var knappEl = document.getElementById("knapp");
var utskiftEl = document.getElementById("utskriftOmraade");

var spillOmradeEl = document.getElementById("spillOmraade");

knappEl.addEventListener("click", klikkefunksjon);

var tigangeren = 1;

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
    
        console.log(tigangeren);
        
        if(e.currentTarget.verdi >= tigangeren){
            tigangeren = tigangeren*10;
            lagKnapp("+" + tigangeren + "(koster " + tigangeren*10 + " klikk)", tigangeren*10, tigangeren);
        }
    }
}

function lagKnapp(tekst, verdi, okning){
    var knappEl = document.createElement("button");
    knappEl.innerText = tekst;
    knappEl.addEventListener("click", leggTilEtKlikk);
    knappEl.verdi = verdi;
    knappEl.klikkOkning = okning;
    spillOmradeEl.appendChild(knappEl);
}

lagKnapp("+" + tigangeren + "(koster " + tigangeren*10 + " klikk)", tigangeren*10, tigangeren);
tigangeren = tigangeren*10;
lagKnapp("+" + tigangeren + "(koster " + tigangeren*10 + " klikk)", tigangeren*10, tigangeren);
tigangeren = tigangeren*10;

