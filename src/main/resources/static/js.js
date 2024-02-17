let filmKjopBillet = [];
function validering(){
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavnInput=document.getElementById("fornavn");
    let etternavnInput=document.getElementById("etternavn");
    let telefonnr = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;
    antall = Number(antall);

    let boolean = true;

    if(film === ""){
        let ut=document.getElementById("filmUt");
        ut.innerHTML = "Velg en Film!";
        ut.style.color = "red";
        boolean = false;
    } else{
        document.getElementById("filmUt").innerHTML = "";
    }

    if(isNaN(antall) || antall <= 0){
        let ut = document.getElementById("feilAntall");
        ut.innerHTML = "Må skrive noe inn i Antall!";
        ut.style.color = "red";
        boolean = false;
    } else {
        document.getElementById("feilAntall").innerHTML = "";
    }

    if(!fornavnInput.value.trim()){
        let ut=document.getElementById("fornavnFeilmelding");
        ut.innerHTML = "Må skrive noe inn i Fornavn!";
        ut.style.color = "red";
        boolean = false;
    }
    else{
        document.getElementById("fornavnFeilmelding").innerHTML = "";
    }

    if(!etternavnInput.value.trim()){
        let ut=document.getElementById("etternavnFeilmelding");
        ut.innerHTML = "Må skrive noe inn i Etternavn!";
        ut.style.color = "red";
        boolean = false;
    } else{
        document.getElementById("etternavnFeilmelding").innerHTML = "";
    }

    const telefonRegex = /^\d{8}$/;
    if(!telefonRegex.test(telefonnr.trim())){
        let ut = document.getElementById("telefonnrFeilmelding");
        ut.innerHTML = "Ugyldig telefonnr!";
        ut.style.color = "red";
        boolean = false;
    } else {
        document.getElementById("telefonnrFeilmelding").innerHTML = "";
    }
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!epostRegex.test(epost.trim())){
        let ut = document.getElementById("epostFeilmelding");
        ut.innerHTML = "Ugyldig Epost!";
        ut.style.color = "red";
        boolean = false;
    } else {
        document.getElementById("epostFeilmelding").innerHTML = "";
    }
    return boolean;
}
let ut;
let billett;
function kjopBillett() {

    if (validering()) {
        let film = document.getElementById("film").value;
        let antall = document.getElementById("antall").value;
        let fornavn = document.getElementById("fornavn").value;
        let etternavn = document.getElementById("etternavn").value;
        let telefonnr = document.getElementById("telefonnr").value;
        let epost = document.getElementById("epost").value;

        billett = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        filmKjopBillet.push(billett);
        ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let b of filmKjopBillet) {
            ut += "<tr>";
            ut += "<td>" + b.film + "</td><td>" +"&nbsp;&nbsp" + b.antall + "</td><td>" + b.fornavn + "</td><td>" + b.etternavn + "</td><td>" + b.telefonnr + "</td><td>" + b.epost + "</td>";
            ut += "</tr>";
        }
        ut += "</table>";
        let output = document.getElementById("output");
        output.innerHTML = ut;

        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

    }
}
function slettAlleBilletter() {
    filmKjopBillet = [];
    let output = document.getElementById("output");
    output.innerHTML = "";
}