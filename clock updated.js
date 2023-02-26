
    let clock = document.getElementById('clock')
    let chng = document.getElementById('chng7');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let h= new Date().getHours();
      let min = new Date().getMinutes();
      let sec = new Date().getSeconds();
      let ampm = document.getElementById('ampm')
      let author = document.getElementById('author');
      let jour = document.getElementById('jour');
      let mois = document.getElementById('mois');
      let date = document.getElementById('date');
      let annee = document.getElementById('annee');
      let day = new Date().getDay();
      let month = new Date().getMonth();
      let dat = new Date().getDate();
      let year = new Date().getFullYear();
     

    function tim(){
    if(day===1){jour.innerHTML="Monday"}
    else if(day===2){jour.innerHTML="Tuesday"}
    else if(day===3){jour.innerHTML="Wednesday"}
    else if(day===4){jour.innerHTML="Thursady"}
    else if(day===5){jour.innerHTML="Friday"}
    else if(day===6){jour.innerHTML="Saturday"}
    else if(day===7){jour.innerHTML="Sunday"}
    else{jour.innerHTML=day;}

    if(month===9){mois.innerHTML= "october"}
    date.innerHTML= dat;
    annee.innerHTML=","+year;

      hour.innerHTML=h;
      minute.innerHTML=min;
      second.innerHTML=sec;
      sec++;
      setTimeout(tim, 1000);
      if(sec<10){second.innerHTML= "0" + sec}
      else{second.innerHTML=sec}
      if(sec===59){min++;
      sec=0}
      if(min<10){minute.innerHTML= "0" + min}
      else{min.innerHTML=min}
      if(min===59){h++;
      min=0}

      if(h>12){hour.innerHTML=h-12;
        ampm.innerHTML="PM";
        
      }else{hour.innerHTML="0" + h}
      

      if(sec==10){author.style.visibility="visible"}else if(sec==25){author.style.visibility="hidden"}
      if(sec==27){author.style.visibility="visible"}else if(sec==42){author.style.visibility="hidden"}
      if(sec==44){author.style.visibility="visible"}else if(sec==59){author.style.visibility="hidden"}
      if(sec==2){author.style.visibility="visible"}else if(sec==8){author.style.visibility="hidden"}
      //if(sec==50){author.style.visibility="visible"}else if(sec==55){author.style.visibility="hidden"}
      //if(sec==0){author.style.visibility="visible"}else if(sec==5){author.style.visibility="hidden"}
    }
    tim()

   
  
 
