from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from datetime import datetime

app = FastAPI()

# Serve per rendere accessibili CSS e JS
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/home.html')

@app.get("/ora")
def dammi_ora():
    return {"orario": datetime.now().strftime("%H:%M:%S")}

# NUOVO: Endpoint con parametro di query
@app.get("/saluta")
def saluta_utente(nome: str):
    return {"messaggio": f"Ciao {nome}, benvenuto nel server di Terza!"}

@app.get("/somma")
def somma(a: float, b: float):
    risultato = a + b
    return {"risultato": risultato}

@app.get("/calcola")
def calcola(a: float, b: float, operazione: str):
    if operazione == "somma":
        risultato = a + b
    elif operazione == "sottrazione":
        risultato = a - b
    elif operazione == "moltiplicazione":
        risultato = a * b
    elif operazione == "divisione":
        if b == 0:
            return {"errore": "divisione per zero"}
        risultato = a / b
    else:
        return {"errore": "operazione non valida"}

    return {"risultato2": risultato}

