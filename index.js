const d = new Date();
function trigger() {

    let hours = document.getElementById('hours');
    let mins = document.getElementById('mins');
    let secs = document.getElementById('secs');
    let ampm = document.getElementById('am');
    
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

function schedule(){

    

    if(select_wakeuptime.value === d.getHours()  ){
        let message = document.getElementById('container6')
        message.innerText = "Good Morning !! Wake Up!!!"
        let message1 = document.getElementById('container5')
        message1.innerText = "Go Get ready for Work and pray god !!"
        let photo = document.getElementById("displayimg")
        photo.setAttribute('src','./girl.svg')
        photo.style.height = "400px"
        photo.style.width = "530px"
        
        
    }

    if(select_lunchtime.value === d.getHours() ){
        let message = document.getElementById('container6')
        message.innerText = "Good Afternoon !! Take Some Sleep"
        let message1 = document.getElementById('container5')
        message1.innerText = "Let's Have Some Lunch !!"
        let photo = document.getElementById("displayimg")
        photo.setAttribute('src','./lunchimage.jpg')
        photo.style.height = "400px"
        photo.style.width = "530px"
        
        
    }

    if(select_naptime.value === d.getHours() ){
        let message = document.getElementById('container6')
        message.innerText = "Good Evening !!!"
        let message1 = document.getElementById('container5')
        message1.innerText = "Stop Yawning, Get Some Tea.. It's Just Evening !!"
        let photo = document.getElementById("displayimg")
        photo.setAttribute('src','./tea.png')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }

    
    if(select_nighttime.value === d.getHours() ){
        let message = document.getElementById('container6')
        message.innerText = "Good Night !! Sleep Soon!!!!"
        let message1 = document.getElementById('container5')
        message1.innerText = "Sweet Dreams, Take Care! !"
        let photo = document.getElementById("displayimg")
        photo.setAttribute('src','./tea.png')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
}

function setTime(){
    let d=new Date()
    hours = d.getHours();
    let photo = document.getElementById("displayimg")
    let message = document.getElementById('container6')
    
    let message1 = document.getElementById('container5')
    
    
    if(hours>8 && hours<11){
        message.innerText =  "Good Moring !! Wake Up!!!"
        message1.innerText = "Go Get ready for Work and pray god !!"
        photo.setAttribute('src','./girl.svg')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>11 && hours<14){
        message.innerText =  "Good Afternoon !! Take Some Sleep"
        message1.innerText = "Let's Have Some Lunch !!"
        photo.setAttribute('src','./lunchimage.jpg')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>=16 && hours<=17){
        message.innerText =  "Good Evening !!!"
        message1.innerText = "Stop Yawning, Get Some Tea.. It's Just Evening !!"
        photo.setAttribute('src','./tea.png')
        photo.style.height = "400px"
        photo.style.width = "530px"
    }
    if(hours>20 ){
        message.innerText =  "Good Night !! Sleep Soon!!!"
        message1.innerText = "Sweet Dreams, Take Care! !!"
    }

    let waketime = document.getElementById("text")
    let lunchtime = document.getElementById("text1")
    let naptime = document.getElementById("text2")
    let nighttime = document.getElementById("text3")
    var am_pm = ""
 
    function showWake(){
        if(select_wakeuptime.value>12){
            select_wakeuptime.value =  select_wakeuptime.value - 12
            am_pm = "PM"
        }
        return select_wakeuptime.value
    }
    function showLunch(){
        if(select_lunchtime.value>12){
            select_lunchtime.value =  select_lunchtime.value - 12
            am_pm = "PM"
        }
        return select_lunchtime.value + am_pm
    }
    function showNap(){
        if(select_naptime.value>12){
            select_naptime.value =  select_naptime.value - 12
            am_pm = "PM"
        }
        return select_naptime.value
    }
    function showNight(){
        if(select_nighttime.value>12){
            select_nighttime.value =  select_nighttime.value - 12
            am_pm = "PM"
        }
        return select_nighttime.value
    }
  
    
    waketime.innerText = select_wakeuptime.options[select_wakeuptime.selectedIndex].text
    lunchtime.innerText = select_lunchtime.options[select_lunchtime.selectedIndex].text
    naptime.innerText = select_naptime.options[select_naptime.selectedIndex].text
    nighttime.innerText = select_nighttime.options[select_nighttime.selectedIndex].text
}

setInterval(setTime,1000)

