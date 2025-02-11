//https://youtu.be/C4LBV38aqb0?si=Gs4JczH6DhZoeMkM
let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
     if (hours>=0 && hours<12){ 
        speak("Good Morning Sir,I am Chotu")
     }
     else if(hours>=12 && hours<4){
        speak("Good Afternoon Sir,I am Chotu")
     }
     else{
        speak("Good Evening sir,I am Chotu")
     }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
   
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello") || message.includes("hey") || message.includes("i")){
        speak("hello sir,how can i help you?")
    }
    else if(message.includes("Who are you?")){
        speak("i am Chotu an virtual assistant,created by koushik sir")
    }
    else if(message.includes("How are you")){
        speak("i am fine sir,what about you")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.co.in/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opeing instagram...")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open mail")){
        speak("opening mail...")
        window.open("https://mail.google.com/")
    }
    else if(message.include("open hotstar")){
        speak("opening Hotstar...")
        window.open("https://www.hotstar.com/")
    }
    else if(message.include("open netflix")){
        speak("opening Hotstar...")
        window.open("https://www.netflix.com/")
    }
    
}