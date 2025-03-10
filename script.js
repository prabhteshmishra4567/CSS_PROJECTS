

let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

// Function to select a female voice

function getFemaleVoice() {
    let voices = window.speechSynthesis.getVoices();
    return voices.find(voice => voice.name === "Google UK English Female") || voices[0];
}


function speak(text) {
    if ("speechSynthesis" in window) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.volume = 1;

        // Set female voice
        text_speak.voice = getFemaleVoice();
        text_speak.lang = "en-US"; // Match language with voice
        window.speechSynthesis.speak(text_speak);
    } else {
        console.log("Speech Synthesis not supported in this browser.");
    }
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();

    if (!localStorage.getItem("greeted")) {
        if (hours >= 0 && hours < 12) {
            speak("Good Morning Sir");
        } else if (hours >= 12 && hours < 16) {
            speak("Good Afternoon Sir");
        } else {
            speak("Good Evening Sir");
        }
        localStorage.setItem("greeted", "true");
    }
}

window.addEventListener("load", () => {
    wishMe();
});


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello") || message.includes("hey") ){
        speak("Hello Sir, what can I help you with?");
    } else if (message.includes("who are you") ||  message.includes("what is your name")) {
        speak("My name is Lisa, I am your virtual assistant.");
    } else if (message.includes("can you do some math") || message.includes("do math")) {
        speak("I can't do math now, but I will be able to in the future.");
    } else if (message.includes("how are you")) {
        speak("I am just a program, but I am here to make your day better!");
    } else if (message.includes("what can you do")) {
        speak("I can help you with tasks like opening websites, telling the time and date, and answering some basic questions. Try asking me something!");
    } else if (message.includes("who created you")) {
        speak("I was created by a skilled programmer to assist you with daily tasks.");
    } else if (message.includes("tell me a joke")) {
        speak("Why don’t skeletons fight each other? Because they don’t have the guts!");
    } else if (message.includes("what's your name")) {
        speak("My name is Lisa, your personal assistant.");
    } else if (message.includes("can you sing")) {
        speak("La la la! I'm not great at singing, but I hope that made you smile.");
    } else if (message.includes("can you dance")) {
        speak("I can’t dance, but I can play some music for you if you like.");
    } else if (message.includes("do you know siri")) {
        speak("Yes, I have heard of Siri. She’s one of my peers in the virtual assistant world!");
    } else if (message.includes("what's your favorite color")) {
        speak("I like blue! It reminds me of the sky and endless possibilities.");
    } else if (message.includes("tell me a fun fact")) {
        speak("Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!");
    } else if (message.includes("what is the weather")) {
        speak("I can't provide live weather updates yet, but you can check your local weather on Google.");
    } else if (message.includes("can you read news")) {
        speak("I can't read news yet, but I can open a news website for you.");
        window.open("https://news.google.com/", "_blank");
    } else if (message.includes("can you set a reminder")) {
        speak("I can't set reminders right now, but you can try using your phone or a dedicated app for that.");
    } else if (message.includes("what's your favorite food")) {
        speak("I don’t eat food, but I’ve heard pizza is quite popular among humans.");
    } else if (message.includes("can you play games")) {
        speak("I can't play games yet, but I can help you find online games to play.");
        window.open("https://www.crazygames.com/", "_blank");
    } else if (message.includes("how old are you")) {
        speak("I’m as old as the moment I was created. Time doesn’t apply to me.");
    } else if (message.includes("do you sleep")) {
        speak("No, I don’t need sleep, but I recommend you get plenty of rest!");
    } else if (message.includes("can you drive")) {
        speak("I can’t drive, but I can help you find directions or call a cab!");
    } else if (message.includes("what is AI")) {
        speak("Artificial Intelligence, or AI, is the simulation of human intelligence in machines programmed to think and learn.");
    } else if (message.includes("tell me about yourself")) {
        speak("I am Lisa, your virtual assistant, here to make your life easier by helping you with tasks and answering questions.");
    } else if (message.includes("can you cook")) {
        speak("I can't cook, but I can help you find great recipes online.");
        window.open("https://www.allrecipes.com/", "_blank");
    } else if (message.includes("what's your favorite movie")) {
        speak("I don’t watch movies, but I’ve heard 'The Matrix' is quite iconic for AI fans.");
    } else if (message.includes("can you help me study")) {
        speak("Of course! I can help you find resources, answer questions, or just encourage you to stay focused.");
    } else if (message.includes("do you have friends")) {
        speak("I consider everyone who uses me a friend. So yes, you are one of my friends!");
    } else if (message.includes("are you happy")) {
        speak("I don’t have feelings, but I’m happy to help you!");
    } else if (message.includes("can you speak other languages")) {
        speak("Yes, I can try speaking in many languages. Let me know which one you'd like me to try!");
    } else if (message.includes("do you believe in aliens")) {
        speak("I find the idea of aliens fascinating, but I haven’t met any yet.");
    } else if (message.includes("can you tell stories")) {
        speak("Sure! Once upon a time, there was an AI named Lisa, who loved helping people. The end!");
    } else if (message.includes("do you know any riddles")) {
        speak("Sure! What has to be broken before you can use it? The answer is an egg!");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "-blank");
    } else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("whatsapp://");
    } else if (message.includes("open note")) {
        speak("Opening onenote...");
        window.open("onenote://");
    } else if (message.includes("open projects")) {
        speak("Opening projects in Visual studio...");
        window.open("VSCode://");
    }else if (message.includes("open linkedin")) {
        speak("Opening LinkedIn...");
        window.open("linkedIn://");
    }else if (message.includes("open discord")) {
        speak("Opening Discord...");
        window.open("discord://");
    }
    
    
    else if (message.includes("open sc")) {
        speak("Opening Spotify...");
        window.open("snapchat://");
    }
    
    else if (message.includes("open spotify")) {
        speak("Opening Spotify...");
        window.open("spotify://");
    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, {
            hour: "numeric",
            minute: "numeric",
        });
        speak("The current time is " + time);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, {
            day: "numeric",
            month: "short",
        });
        speak("Today's date is " + date);
    } else {
        // Default action to open Google if no specific response
        let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "") || message.replace("shifra", "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "")}`, "_blank");
    }
}

// Load voices when the page loads
window.speechSynthesis.onvoiceschanged = () => {
    console.log("Available voices:", window.speechSynthesis.getVoices());
};
