# COLLABORATORI:

        - Alberto Russo : Repository Owner  ---> https://github.com/AlbertoRusso94

        - Emanuele Braco      ---> https://github.com/EmanueleBraco97

        - Consiglia D'Amaro   ---> https://github.com/clariglia

        - Fabrizio Marinelli  ---> https://github.com/f-marinelli

        - Fabrizio Boschetto  ---> https://github.com/fabry84x

---

//Lavoro strutturato su trello ---> https://trello.com/b/PPXEr5AR/progetto-react-node

---

• COMANDI DA SEGUIRE :

clonare repo da terminale tramite il seguente comando

## git clone https://github.com/AlbertoRusso94/Node-Project-Team1.git

una volta clonata la repo passare al proprio branch di lavoro

## git switch "nome branch"

---

• Repo github --> GIT : https://github.com/AlbertoRusso94/Node-Project-Team1

---

• STRUTTURA DI LAVORO :

                                       MAIN
                                        ↓
                                        |
                                        |
                                        |
                                       Auth
                                        ↓
                           _____________|_____________
                          |      |      |      |      |
                          |      |      |      |      |
                          ↓      ↓      ↓      ↓      ↓
                          b1     b2     b3     b4     b5

Dal grafico riportato si ha una un idea di come lavorare ,
partendo dal branch "Auth" si crea un nuovo branch dove svolgere la task
assegnata dove una volta completata si manda in contemporanea una pull request
su "Auth" e lo spostamento della task su Trello nella sezione "Code Review".
Dopo che il merge su "Auth" viene confermato spostare la task di Trello su "Done"

---

• Maggiori info sulle task assegnate --> TRELLO : https://trello.com/b/PPXEr5AR/progetto-react-node

---

• DEPENDENCIES :

## "cors": "^2.8.5"

L'utilizzo di Cors è vantagioso qual'ora si volesse comunicare con un client residente in un altro dominio (vedi porte diverse come 8080 ecc...), di contro è meno sicuro per il client stesso.

---

## "dotenv": "^16.0.1"

Il pacchetto Dotenv serve per le variabili d'ambiente. (es. file '.env' dove abbiamo il numero di PORT)

---

## "express": "^4.18.1"

E' un framework, l'abbiamo utilizzato per creare il server con Node.js

---

## "jsonwebtoken": "^8.5.1"

contiene informazioni di un entità o un utente(ad esempio), e serve appunto per autenticare il client. Procedimento: client invia una richiesta al server, quest'ultimo genera il token di autenticazione che il client userà per collegarsi.

---

## "mysql2": "^2.3.3"

Sistema di gestione di database relazionali. Un database relazionale è un modello di database che salva i dati strutturandoli su tabelle, righe e colonne collegate tra loro tramite relazioni.

---

## "sequelize": "^6.21.4"

Sequelize è un ORM basato su promise per Node.js e Javascript. Ha lo scopo di tradurre il codice Javascript in codice MySQL.

---

## "nodemon": "^2.0.19"

Nodemon viene utilizzato per riavviare il nostro server ogniqualvolta viene salvata una modifica

---
