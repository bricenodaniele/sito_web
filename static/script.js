// Funzione che interroga il server
// Funzione per l'ora (già vista)
async function aggiornaOra() {
    const res = await fetch('/ora');
    const json = await res.json();
    document.getElementById('orario').innerText = "Ora del server: " + json.orario;
}

// NUOVA FUNZIONE: Saluto
async function inviaSaluto() {
    // 1. Prendiamo quello che l'utente ha scritto
    const nomeUmano = document.getElementById('input-nome').value;

    if (nomeUmano === "") {
        alert("Ehi, inserisci un nome!");
        return;
    }

    // 2. Chiamiamo il server passando il nome nell'URL (?nome=...)
    const res = await fetch(`/saluta?nome=${nomeUmano}`);
    const json = await res.json();

    // 3. Mostriamo la risposta del server nella pagina
    document.getElementById('risposta-saluto').innerText = json.messaggio;
}
  async function calcolaSomma() {
            let a = document.getElementById("num1").value;
            let b = document.getElementById("num2").value;

            let response = await fetch(`/somma?a=${a}&b=${b}`);
            let data = await response.json();
        document.getElementById("risultato").innerText = "Risultato: " + data.risultato;
  }

   async function calcola() {
            let a = document.getElementById("num1").value;
            let b = document.getElementById("num2").value;
            let op = document.getElementById("operazione").value;

            let response = await fetch(`/calcola?a=${a}&b=${b}&operazione=${op}`);
            let data = await response.json();

            if (data.errore) {
                document.getElementById("risultato2").innerText = "Errore: " + data.errore;
            } else {
                document.getElementById("risultato2").innerText = "Risultato: " + data.risultato;
            }
        }
// Colleghiamo i bottoni alle funzioni
document.getElementById('btn-ora').addEventListener('click', aggiornaOra);
document.getElementById('btn-saluto').addEventListener('click', inviaSaluto);
document.getElementById('btn-somma').addEventListener('click', calcolaSomma);
document.getElementById('btn-calcolo').addEventListener('click', calcola);