const express = require('express');
const app = express();
const path = require('path');  // A path modul importálása a fájl elérési utak kezelésére
const port = 3000;

app.use(express.static('public'));    


// A /test útvonal esetén küldd vissza a test.html fájlt a public mappából
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'test.html'));  // A test.html fájl visszaküldése
});

app.get('/favicon.ico', (req, res) => {res.status(404).json({ message:  "Nincs favicon!"})});

app.use((req, res) => {
    res.status(404).send("<h1>404 - az oldal nem található!</h1>")
})


app.listen(port, () => { console.log(`Szerver a ${port} -es/-as porton figyel!`) });