const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('total');
const select = document.getElementById('movie');
const filmName = document.getElementById('film')
const seats = document.querySelectorAll('.seat:not(.occupied)');
const trailer = document.querySelector('.trailer')


getFromLocalStorage();
calculateTotal();



//KOLTUK ÜCRETLERİNİ HESAPLAMA-fizyomustafa-C9203-MUSTAFA :)

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected');
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

 //Film adı yazdırma

 function selectedFilm (){
    if(select.value == 10){
        filmName.innerText = "Avengers: Endgame"
        trailer.innerHTML = `<iframe src="https://www.youtube.com/embed/hA6hldpSTF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(select.value == 12){
        filmName.innerText = "Joker"
        trailer.innerHTML = `<iframe src="https://www.youtube.com/embed/t433PEQGErc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(select.value == 8){
        filmName.innerText = "Toy Story 4"
        trailer.innerHTML = `<iframe src="https://www.youtube.com/embed/wmiIUN-7qhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
    else if(select.value == 9){
        filmName.innerText = "The Lion King"
        trailer.innerHTML = `<iframe src="https://www.youtube.com/embed/7TavVZMewpY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
 }
 selectedFilm()

//LOCAL STORAGE KAYIT


    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

///LOCAL STORAGE DEN OKUMA

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

