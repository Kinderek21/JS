const gra = () => {
   let wynikGracza = 0;
   let wynikKomputer = 0;
   let ruchy = 0;
   

   const graj = () => {
       const kamienBtn = document.querySelector('.kamien');
       const papierBtn = document.querySelector('.papier');
       const nozyceBtn = document.querySelector('.nozyce');
       const opcjegracza = [kamienBtn,papierBtn,nozyceBtn];
       const opcjekomp = ['kamien','papier','nozyce']
       const image = document.querySelector('#image');
       const imagekomp = document.querySelector('#imagekomp');

       


       opcjegracza.forEach(option => {
           option.addEventListener('click',function(){

               const pozruchy = document.querySelector('.pozruchy');
               ruchy++;
               pozruchy.innerText = `Pozostałe ruchy: ${10-ruchy}`;


               const wyborNumber = Math.floor(Math.random()*3);
               const wyborKomp = opcjekomp[wyborNumber];


               wygrany(this.innerText,wyborKomp)


               if(ruchy ==  10){
                   koniecGry(opcjegracza,pozruchy);
               }

               

           })
       })

   }

   const wygrany = (Gracz,Komputer) => {
       const wynik = document.querySelector('.wynik');
       const kto = document.querySelector('.kto')
       const tabelaGracz = document.querySelector('.licznik');
       const tabelaKomp = document.querySelector('.licznikKomp');
    element = document.getElementById("image")
    element = document.getElementById("imagekomp")
       Gracz = Gracz.toLowerCase();
       Komputer = Komputer.toLowerCase();
       if(wynik ==100){
       }
       else if(Gracz == 'kamien'){
           if(Komputer == 'papier'){
               kto.textContent = 'WYGRAŁ KOMPUTER';
               wynikKomputer++;
               tabelaKomp.textContent = wynikKomputer;
               imagekomp.src = 'images/papier.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }else if(Komputer=='kamien'){
            imagekomp.src = 'images/rock.png'
            imagekomp.width=250;
            imagekomp.height=250
            kto.textContent = 'REMIS';
           }else{
               kto.textContent = 'WYGRAŁ KOMPUTER'
               wynikGracza++;
               tabelaGracz.textContent = wynikGracza;
               imagekomp.src = 'images/nozyce.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }
       }
       else if(Gracz == 'nozyce'){
           if(Komputer == 'kamien'){
               kto.textContent = 'WYGRAŁ KOMPUTER';
               wynikKomputer++;
               tabelaKomp.textContent = wynikKomputer;
               imagekomp.src = 'images/rock.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }else if (Komputer== 'nozyce'){
            imagekomp.src = 'images/nozyce.png'
            imagekomp.width=250;
            imagekomp.height=250
            kto.textContent = 'REMIS';
            }
           else{
               kto.textContent = 'WYGRAŁ GRACZ';
               wynikGracza++;
               tabelaGracz.textContent = wynikGracza;
               imagekomp.src = 'images/papier.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }
       }
       else if(Gracz == 'papier'){
           if(Komputer == 'nozyce'){
               kto.textContent = 'WYGRAŁ KOMPUTER';
               wynikKomputer++;
               tabelaKomp.textContent = wynikKomputer;
               imagekomp.src = 'images/nozyce.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }else if(Komputer=='papier'){
            imagekomp.src = 'images/papier.png'
            imagekomp.width=250;
            imagekomp.height=250
            kto.textContent = 'REMIS';
           }
           else{
               kto.textContent = 'WYGRAŁ GRACZ';
               wynikGracza++;
               tabelaGracz.textContent = wynikGracza;
               imagekomp.src = 'images/rock.png'
               imagekomp.width=250;
               imagekomp.height=250;
           }
       }
   }
  

   const koniecGry = (opcjegracza,pozruchy) => {
       const wybierzRucha = document.querySelector('.ruch');
       const wynik = document.querySelector('.kto');
       const resetBtn = document.querySelector('.reset');
       

       opcjegracza.forEach(option => {
           option.style.display = 'none';
       })
   
       wybierzRucha.innerText = 'Koniec gry!'
       pozruchy.style.display = 'none';

       if(wynikGracza > wynikKomputer){
           wynik.innerText = 'WYGRAŁ GRACZ!'
       }
       else if(wynikGracza < wynikKomputer){
           wynik.innerText = 'PRZEGRAŁEŚ!';
       }
       else{
           wynik.innerText = 'REMIS';
       }
       resetBtn.innerText = 'RESET';
       resetBtn.style.display = 'flex'
       resetBtn.addEventListener('click',() => {
           window.location.reload();
       })

   }
   graj();
}
gra();


function changeImage(myvalue){
    image.src = 'images/rock.png';
    image.width=250;
    image.height=250;
    var element = document.getElementById('image')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
    var element = document.getElementById('imagekomp')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
    
   }
   function changeImagePapier(mojevalue){
    image.src = 'images/papier.png'
    image.width=250;
    image.height=250;
    document.getElementById('image').className = 'obojetnie';
    var element = document.getElementById('image')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
    var element = document.getElementById('imagekomp')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
   }
   function changeImageNozyce(mojvalue){
    image.src = 'images/nozyce.png'
    image.width=250;
    image.height=250;
    var element = document.getElementById('image')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
    var element = document.getElementById('imagekomp')
    element.classList.remove("obojetnie");
    void element.offsetWidth
    element.classList.add("obojetnie")
   }

