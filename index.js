
function trigger() {

    let hours = document.getElementById('hours');
    let mins = document.getElementById('mins');
    let secs = document.getElementById('secs');
    let ampm = document.getElementById('am');
    const d = new Date();
    let realhour = d.getHours()
    let realminutes = d.getMinutes()
    let realsecs= d.getSeconds()
  
    if(realhour == 0){
        realhour = 12
    }
    if(realhour>12){
        realhour = realhour - 12
        ampm.innerText = "PM"
    }
    if(realhour < 10){
        realhour = "0"+realhour
        
    }
    if(realminutes<10){
        realminutes = "0"+realminutes
    }
    if(realsecs<10){
        realsecs = "0"+realsecs
    }
    hours.innerText = realhour + "\nHours"
    mins.innerText = realminutes + "\nMin"
    secs.innerText = realsecs + "\nSecs"
    
    
   

}
setInterval(trigger,1000)


let select_wakeuptime = document.getElementById('wakeup_time');
let select_lunchtime = document.getElementById('lunch_time');
let select_naptime = document.getElementById('nap_time');
let select_nighttime = document.getElementById('night_time');



function setTime(){
    const datenew=new Date()
    hours = datenew.getHours();
    let photo = document.getElementById("displayimg")
    let message = document.getElementById('container6')
    
    let message1 = document.getElementById('container5')
    
    
    if(hours>8 && hours<=11){
        message.innerText =  "Good Moring !! Wake Up!!!"
        message1.innerText = "Go Get ready for Work and pray god !!"
        photo.setAttribute('src','./girl.svg')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>=11 && hours<=14){
        message.innerText =  "Good Afternoon !! Take Some Sleep"
        message1.innerText = "Let's Have Some Lunch !!"
        photo.setAttribute('src','./lunchimage.jpg')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>=18 && hours<=20){
        message.innerText =  "Good Evening !!!"
        message1.innerText = "Stop Yawning, Get Some Tea.. It's Just Evening !!"
        photo.setAttribute('src','./tea.png')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>=20 ){
        message.innerText =  "Good Night !! Sleep Soon!!!"
        message1.innerText = "Sweet Dreams, Take Care! !!"
    }

    let waketime = document.getElementById("text")
    let lunchtime = document.getElementById("text1")
    let naptime = document.getElementById("text2")
    let nighttime = document.getElementById("text3")
    var am_pm = ""
 

  
    
    waketime.innerText = select_wakeuptime.options[select_wakeuptime.selectedIndex].text
    lunchtime.innerText = select_lunchtime.options[select_lunchtime.selectedIndex].text
    naptime.innerText = select_naptime.options[select_naptime.selectedIndex].text
    nighttime.innerText = select_nighttime.options[select_nighttime.selectedIndex].text
}

setInterval(setTime,1000)

