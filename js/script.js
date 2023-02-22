/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html, js e php in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora in base all'ora dell'ultimo messaggio inviato dall'utente selezionato
    
    - aggiornare i messaggio in base all'ora attuale
        #NOTA: se un messaggio è stato inviato alle 12:30 e ora sono le 12:15 non deve essere visualizzato
        #Deve essere quindi impostato un timer che ogni minuto controlli l' "arrivo" di nuovi messaggi e aggiorni la sezione più interna
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza
        #Il timer deve essere impostato durante la richiesta dei dati relativi all'utente dopo la selezione nell'aside

    - CONTA POCHISSIMO. Gestite il bottone di invio in basso aggiungendo il messaggio in coda agli altri SOLO LATO CLIENT.
        (Da fare alla fine per chi ha fatto il resto o non riesce a fare altro).
        #Aggiungere dinamicamente lato client
        #Creare sempre lato client un oggetto json con le informazioni che SI DOVREBBERO aggiungere lato server nel array opportuno
    
    NOTA. Non è possibile fare cache dei dati in array, è possibile salvare i codici nella pagina web, 
            tutto il resto deve essere prelevato dal server

*/


var indirizzoServer = "http://localhost:63342/4AI_PseudoChatTEALDI/server/";


function init(){


    let promise = fetch(indirizzoServer+"utenti.php",{
        method : 'POST',
        headers:{'Content-Type':'application/json'},

    });

    promise.then(
        async(risposta)=>{
            let dati = await risposta.json(); //<- prendo cio che ho mandato nell' eco di php
            console.log(dati);

            crea(dati);
        }


    );



}

function crea (dati)
{
    let list = document.getElementById("listUtenti");
    let i;
    for(i=1; i<dati.length; i++)
    {
        let _li = document.createElement("li");
        _li.innerHTML=dati[i].nome +" "+dati[i].cognome[0]+".";
        _li.onclick = function ()
        {
            alert("ciao");
            divN = document.getElementsByName("divNome");
            divN.InnerHTML=dati[i].nome;




        }
        list.appendChild(_li);


        let _div = document.createElement("div");
        _div.className+="material-symbols-outlined icone";
        if(dati[i].genere =="m")
            _div.innerHTML="face";
        else
            _div.innerHTML="face_3";

        _li.appendChild(_div);
    }
}

function aggiorna(nome,cognome,genere)
{
    alert("ciao");

}


