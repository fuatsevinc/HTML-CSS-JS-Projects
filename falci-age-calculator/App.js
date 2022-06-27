

date.addEventListener("change", function event(){
    let diffYear = new Date().getFullYear()-new Date(date.value).getFullYear();
    let diffMonth =new Date().getMonth()-new Date(date.value).getMonth();
    let diffDay = new  Date().getDate()-new Date(date.value).getDate();
    let diffHour = new  Date().getHours()-new Date(date.value).getHours();
    let diffMinute = new  Date().getMinutes()-new Date(date.value).getMinutes();
    let diffSecond = new  Date().getSeconds()-new Date(date.value).getSeconds();
    
    if (diffDay<0){
        diffDay+=30;
        diffMonth-=1;}
    if (diffMonth<0) {
        diffMonth+=12;
        diffYear-=1;        
    }

    /*--change is begining--*/
    year.firstElementChild.innerText = (diffYear+"").padStart(2,"0");
    month.firstElementChild.innerText= (diffMonth+"").padStart(2,"0");
    day.firstElementChild.innerText=(diffDay+"").padStart(2,"0");
    hour.firstElementChild.innerText=(diffHour+"").padStart(2,"0");
    minute.firstElementChild.innerText=(diffMinute+"").padStart(2,"0");
    second.firstElementChild.innerText=(diffSecond+"").padStart(2,"0");


    /*----Funny Part---*/
    if (diffYear < '0'  && new Date(date.value).getMonth() > new Date().getMonth()){
        document.getElementById("sonuc").innerHTML = ("Doğmamış çocuğa don biçemem :)")
    
    }
    else if(new Date(date.value).getFullYear() > new Date().getFullYear()){
        document.getElementById("sonuc").innerHTML = "Doğmamış çocuğa don biçemem..."
    }

    
    else if (diffYear == '40'){

        document.getElementById("sonuc").innerHTML = "40ından sonra huy değiştireni teneşir paklar. Sonuçlar 40a çıkınca bekle uzmanından geliyor cevaplar...."

        setTimeout(()=>{
            window.location.href = 'https://www.youtube.com/watch?v=c_m364Kki5A'
            },5000);
    }
        
    else if(diffYear == '39'){
        document.getElementById("sonuc").innerHTML = "40 a kaldı bir yıl. Sen yine de yaşını soranlara 30 küsür diyebilirsin"
    }

    else if(diffYear == '38'){
        document.getElementById("sonuc").innerHTML = "38 bana Kayseriyi hatırlatıyor. O da yediğim kazıkları. Pek haz etmedim bu yaştan."
    }
    else if(diffYear == '37'){
        document.getElementById("sonuc").innerHTML = "37 yaşında Christiana Ronaldo'nun yada Engin Altan Düzyatan'ın tipine bak bir de kendine. Acilen spora başlamalısın."
    }
    else if(diffYear == '36'){
        document.getElementById("sonuc").innerHTML = "Brad Pitt, Jeniffer Aniston ile bu yaşta evlendi. Hani belki Brad Pitt'ten önde olduğun yanlar vardır :) Mutlu ol..."
    }

    else if(diffYear == '30'){
        document.getElementById("sonuc").innerHTML = "Dünyayı değiştiren Twitter, Whatsapp, Amazon, AliBaba, Netflix ve Paypal gibi fikirlerin hepsi 30 yaşından sonra ortaya çıkmış. Önğndeki 10 senenin kıymetini bil, tekrarı yok."
    }

    else if(diffYear == '70'){
        document.getElementById("sonuc").innerHTML = "Yaş yetmiş iş bitmiş, artık öteki tarafa daha fazla çalışmalısın "
    }
    else if(diffYear == '50'){
        document.getElementById("sonuc").innerHTML = "Defne Samyeli 50 yaşındaymış. Bilgisayar kamerasını aç da bir bak. Fazla bişey demek istemiyorum "
    }
    else if(diffYear == '19'){
        
        document.getElementById("sonuc").innerHTML = "Yürü hala ne diye oyunla oynaştasın."
        
        setTimeout(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=E4_36-M4Cx4'
        },5000);
    }

    else if(diffYear == '44'){
        ;
        document.getElementById("sonuc").innerHTML = "Sana bir Ebru Şallı videosu açıyorum. Bak akranların ne halde, gör gör..."

        setTimeout(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=XxCCR6wR390'
        },5000);
    }

    else if(diffYear == '24'){

        document.getElementById("sonuc").innerHTML = "Einstein da 24 yaşında evlenmiş. Gerçi o daha evlenmeden ceviz kırmaya başlamış ama sen akıllı ol evladım. Heyheylerin geldiyse git evlen bir an önce, yoksa sen o kadar zeki değilsin mazallah bir iş gelir başına."
    }

    else if(diffYear == '25'){

        document.getElementById("sonuc").innerHTML = "25 yaşında üniversiteden hala mezun olmadıysanız yada hala askerliğinizi yapmadıysanız hayat zor be. Hele ki daha ne iş yapacağınız belli değilse sen burayı bırak git iş ara kardeşim. Senin yaşında çoluk çocuğa karışmıştım ben."
        
        setTimeout(()=>{
            window.location.href = 'https://www.google.com/search?q=vas%C4%B1fs%C4%B1z+i%C5%9F+ilanlar%C4%B1&rlz=1C1GCEU_trTR949TR949&oq=vas%C4%B1fs%C4%B1z+i%C5%9F+ilanlar%C4%B1&aqs=chrome.0.69i59.7438j0j4&sourceid=chrome&ie=UTF-8'
            },10000);
    }

    else if(diffYear == '31'){

        document.getElementById("sonuc").innerHTML = "Böyle bir yaş olamaz, bu yaşla dalga geçilemez, dalga geçilmesi teklif dahi edilemez. Şaka yapmayacam merak etme. -Bu böyle bir bir artıyorsa 40a dayanır- diyerek telaş edebilirsin. Aman deyim gözünü dahi kırpma, çabucak bitiyor. Ya bir baltaya sap ol yada karşı cinsin günahına girmeden sap kal."
        
        setTimeout(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=OkPJrrfu9mc'
        },15000);
    }

    else if(diffYear == '33'){

        document.getElementById("sonuc").innerHTML = "Yaş 33. Mükemmel bir zaman. Hem gençleri hem yaşlıları hem de hayatı senden daha iyi anlayan bulunmaz kardeşim. Yalnız dikkat et en narsist duygular da bu yaşta ortaya çıkar. Az bekle seni işin uzmanına yönlendiriyorum..."
        
        setTimeout(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=jKO842GNjw4'
        },15000);
    }


    else if(diffYear == '29'){

        document.getElementById("sonuc").innerHTML = "Hayatta herşey başımıza gelir. 29 yaş olgunluğa geçmeden önceki son ergen yıllardır aslında. Son haytalıklar, son virajlar, son dönemeçler ve yeni bir sayfa açmak için gençliğe dönüp söylenecek son sözlerdir. Futbolcuların en verimli çağı, şairlerin zirve yapmıştır gönül dağı. Artık hayat yeni şeyler söylemek için daha tatlı gelecektir ve sen de durma artık tüm gücünle koştur. 29 Muştur, yolu yokuştur, koştur kardeşim hadi koştur. İyi motivasyon vermediğimi düşünen hain kuştur :) Hadi sana bir de Eye of the Tiger çalayım da gaza gel..."
       
        setTimeout(()=>{
        window.location.href = 'https://www.youtube.com/watch?v=ERT_7u5L0dc'
        },20000);
    }
        

    
    /*footer circle*/
    let snipper = document.getElementById("image");
    setInterval(event,1000);
    snipper.style.display = "none";


});











let snipper = document.getElementById("image");
