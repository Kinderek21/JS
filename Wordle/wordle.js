const slownik = [
    'pilka',
    'kafar',
    'kajak',
    'plaza',
    'ocean',
    'pwele',
    "konto",
    "fotka",
    "cytat",
    "pokaz",
    "tylko",
    "marek",
    "temat",
    "kosci",
    "glowa",
    "wyraz",
    "sklep",
    "tosty",
    "cudna",
    "cudny",
    "nudny",
    "agata",
    "kubek",
    "nozyk",
    "lozko",
    "czapa",
    "drzwi",
    "zegar",
    "kreda",
    "oczko",
    "tasma",
    "wafel",
    "fotka",
    "ramka",
    "karta",
    "kwiat",
    "baton",
    "trawa",
    "sufit",
    "lampa",
    "ogien",
    "balon",
    "okrag",
    "zabka",
    "zabki",
    "sonia",
    "monia",
    "magda",
    "jedza",
    "super",
    "serek",
    "linki",
    "filmy",
    "dodaj",
    "nauka",
    "łyzka",
    "szafa",
    "mieso",
    "obraz",
    "schód",
    "oceny",
    "ferie",
    "smaki",
    "jezyk",
    "wlosy",
    "liter",
    "pliki",
    "pomoc",
    "wieża",
    "dlugo",
    "kocha",
    "Konie",
    "Bluza",
    "Plyta",
    "Gumka",
    "Lampa",
    "Lezak",
    "Picie",
    "Kwiat",
    "Drzwi",
    "Salsa",
    "Piwoo",
    "Fanta",
    "Banan",
    "Pilka",
    "Morze",
    "Rower",
    "Serce",
    "konto",
    "fotka",
    "cytat",
    "pokaz",
    "tylko",
    "marek",
    "temat",
    "kosci",
    "glowa",
    "wyraz",
    "sklep",
    "tosty",
    "cudna",
    "cudny",
    "nudny",
    "zabki",
    "kubek",
];
const tablica ={
    sekret: slownik[Math.floor(Math.random() * slownik.length)],
    grid: Array(6)
    .fill()
    .map(()=> Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
};
function aktuGrid(){
    for (let i = 0; i < tablica.grid.length; i++) {
        for (let j = 0; j < tablica.grid[i].length; j++) {
            const box = document.getElementById(`box${i}${j}`);
            box.textContent = tablica.grid[i][j];
        }
    }
};
function narysujBox(container,row,col,litera = ''){
    const box = document.createElement('div');
    box.className = 'box';
    box.id = `box${row}${col}`;
    box.textContent = litera;
    container.appendChild(box);
    return box;
};
function narysujSiatke(container){
    const grid = document.createElement('div');
    grid.className = 'grid';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            narysujBox(grid, i, j);
        }
    }
    container.appendChild(grid);
};
function EventyKlawiatury(){
    document.body.onkeydown = (e) => {
        const key = e.key;
        if (key === 'Enter'){
            if(tablica.currentCol ===5){
                const wyraz = getCurrentWyraz();
                if(isWyrazValid(wyraz)){
                    pokazWyraz(wyraz);
                    tablica.currentRow++;
                    tablica.currentCol = 0;
                }else {
                    alert('Nieprawidlowe slowo')
                }
            }
        }
        if (key === 'Backspace'){
            usunLitere();
        }
        if (islitera(key)){
            dodajlitera(key);
        }
        aktuGrid();
    }
}
function getCurrentWyraz(){
    return tablica.grid[tablica.currentRow].reduce((prev, curr) => prev + curr);
}

function isWyrazValid(wyraz){
    return slownik.includes(wyraz);
}
function pokazWyraz(pytanie){
    const row = tablica.currentRow;
    const animation_duration = 500;
    for (let i =0; i <5;i++){
        const box = document.getElementById(`box${row}${i}`);
        const litera = box.textContent;
        setTimeout(()=>{
        if(litera === tablica.sekret[i]){
            box.classList.add('poprawny');
        }else if (tablica.sekret.includes(litera)){
            box.classList.add('niepoprawny')
        }else{
            box.classList.add('pusty');
        }
    },((i+1)*animation_duration)/4);
        box.classList.add('animacja');
        box.style.animationDelay=`${(1 * animation_duration)/2}ms`;
    }
    const isWygrany = tablica.sekret === pytanie;
    const isKoniecGry = tablica.currentRow ===5;
    setTimeout(()=> {
        if(isWygrany){
            alert('Wygrales');
        }else if (isKoniecGry){
            alert('Koniec Gry Poprawne slowo to' + tablica.sekret);
        }
    },3 * animation_duration);
    

}
function islitera(key){
    return key.length ===1 && key.match(/[a-z]/i);
}
function dodajlitera(litera){
    if(tablica.currentCol ===5) return;
    tablica.grid[tablica.currentRow][tablica.currentCol] = litera;
    tablica.currentCol++;
}
function usunLitere(){
    if(tablica.currentCol===0) return;
    tablica.grid[tablica.currentRow][tablica.currentCol-1]='';
    tablica.currentCol--;
}
function start(){
    const gra = document.getElementById('gra');
    narysujSiatke(gra);
    EventyKlawiatury();
    console.log(tablica.sekret)
}
start();