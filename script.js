let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
let isSpeaking = false;

// Chatbox Elements
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Function to make the assistant speak
function speak(text) {
    window.speechSynthesis.cancel();
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-IN";
    window.speechSynthesis.speak(text_speak);
    addMessage(text, "bot"); // Add bot's response to chatbox
}






// Function to greet the user based on the time of day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir, how can I help you?");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir, how can I help you?");
    } else {
        speak("Good Evening Sir, how can I help you?");
    }
}

// Event to greet the user on page load
window.addEventListener("load", () => {
    wishMe();
});

// Recognition result handler
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
    addMessage(transcript, "user"); // Add user's voice input to chatbox
};

// Button click event to start recognition
btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

// Chatbox Functionality
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle commands
function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("hello") || message.includes("hey")  || message.includes("hi") || message.includes("infina") || message.includes("infinite")) {
        speak("Hello Sir, what can I help you with?");
   
    } else if (message.includes("good morning") || message.includes("Good morning")){
        speak("Good morning!  I hope you have a fantastic day ahead. Is there anything you'd like to talk about or need help with today? ")
     } else if (message.includes("good afternoon") || message.includes("Good afternoon")){
            speak("Good afternoon!  I hope your day is going well. How can I assist you today? Whether it's something specific or just a chat, I'm here for you! ")
     } else if (message.includes("good evening") || message.includes("Good evening")){
        speak("Good evening!  I hope you're having a wonderful evening.")   
      } else if(message.includes("good night") || message.includes("Good night")){
            speak("Good night!  I hope you have a restful sleep and wake up feeling refreshed. If there's anything on your mind before you drift off, I'm here to chat. Sweet dreams! ")
    } else if (message.includes("namaskar")){
       speak("नमस्कार! मी तुमची सहाय्यक आहे, सांगा, कशी मदत करू?");
    } else if (message.includes("what is Infina 2.0") || message.includes("infina 2.0 ")) {
        speak("infina 2.0 is a advance AI model of infina infina 2.0 is created by mayur-code ")
    } else if (message.includes("you are developer") || message.includes("who is developer")){
        speak("I am voice assistant develop by Mayur-code")
    } else if (message.includes("are you bad") || message.includes("bad")){
        speak("I'm sorry if my response wasn't what you expected! I'm here to help, so please let me know how I can improve or assist you better.")
    } else if (message.includes("i am sad") || message.includes("sad")){
        speak("I'm really sorry you're feeling this way. Do you want to talk about what's making you feel sad? I'm here to listen and help however I can.")
    } else if (message.includes("i dont feel well") || message.includes("bad feel") || message.includes("feel bad")){
        speak("I'm sorry to hear that you're not feeling well. Do you want to talk about it, or would you like some advice on how to feel better?")
    } else if (message.includes("are you mad ") || message.includes("mad")){
        speak("No, I'm not mad! I'm here to help you with anything you need. If something went wrong, just let me know, and I'll do my best to assist you.")
    } else if (message.includes("ram ram") || message.includes("ram")){
        speak("Ram Ram! Kaise ho")
    } else if (message.includes("what is my name") || message.includes("my name")){
        speak("your name is mayur");
    } else if (message.includes("who are you") || message.includes("hu r u")){
        speak("I am Infina Your voice assistant, created by Mayur Sir.");
    } else if (message.includes("give me your number") || message.includes("your number")){
        speak("I don't have a phone number, as I'm an voice assistant AI created to assist with information and tasks online. But feel free to reach out anytime here, and I'll be happy to help you!")
    }  else if (message.includes("what is data science") || message.includes("data science")){
        speak("Data Science is an interdisciplinary field that uses scientific methods, algorithms, processes, and systems to extract insights and knowledge from structured and unstructured data. It combines elements of statistics, computer science, mathematics, and domain expertise to analyze and interpret complex data.")
    } else if (message.includes("what is open ai") || message.includes("openai") || message.includes("open ai")){
        speak("OpenAI is an artificial intelligence research organization and technology company. It was founded in December 2015 by a group of prominent entrepreneurs and researchers, including Elon Musk, Sam Altman, Greg Brockman, Ilya Sutskever, Wojciech Zaremba, and others. The mission of OpenAI is to ensure that artificial general intelligence (AGI) benefits all of humanity. Here's an overview of OpenAI:")
    } else if (message.includes("what is gemini") || message.includes("gemini")){
        speak("Gemini is a suite of advanced AI models developed by Google DeepMind (formerly part of Google Research). It is designed to compete with and surpass similar models like OpenAI's GPT series. Gemini focuses on combining state-of-the-art natural language processing (NLP) capabilities with features from DeepMind's expertise in areas like reinforcement learning, advanced reasoning, and multimodal interactions.")
    } else if (message.includes("what is siri") || message.includes("siri")){
        speak("Siri is a virtual assistant created by Apple, designed to interact with users through voice commands and perform a variety of tasks. It uses artificial intelligence and natural language processing to understand and respond to user queries.")
    } else if (message.includes("what is microsoft") || message.includes("microsoft means") || message.includes("microsoft")){
       speak("Microsoft is a multinational technology company known for developing, licensing, and supporting a wide range of software products, services, and hardware. It was founded by Bill Gates and Paul Allen on April 4, 1975. Headquartered in Redmond, Washington, Microsoft is one of the world's largest and most valuable companies.")
    } else if(message.includes("what is cloud computing") || message.includes("cloud computing")){
        speak("Cloud computing refers to the delivery of computing services—such as storage, processing power, databases, software, and networking—over the internet (the cloud). Instead of owning and maintaining physical data centers and servers, organizations and individuals can access these services on-demand from cloud service providers. This model enables users to rent or lease computing resources on a pay-as-you-go basis, which can help reduce costs, improve efficiency, and scale resources quickly based on demand.")
    } else if (message.includes("1 to 50") || message.includes("one to fifty") || message.includes("type 1 to 50")){
        speak("1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31, 32, 33, 34, 35, 36, 37, 38, 39, 40,41, 42, 43, 44, 45, 46, 47, 48, 49, 50.")
    } else if (message.includes("1 to 20") || message.includes("type 1 to 20")){
        speak("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20")
    } else if (message.includes("1 2 3") || message.includes("ek do teen")){
        speak("चार पाच सहा सात आठ नऊ दहा!");
    } else if (message.includes("tu kashi aahe")) { 
        speak("मी ठिक आहे, तुम्ही कसे आहात?");
    }else if (message.includes("can you speak marathi") || message.includes("speak marathi")){
        speak("हो, मी मराठीत बोलू शकते. तुम्हाला मराठीत काही विचारायचं आहे का?")
    } else if (message.includes("tumse nav kay aahe")){
        speak("माझं नाव Infina आहे. मी Mayur यांच्याकडून तयार करण्यात आलेली सहाय्यक आहे.");
    } else if  (message.includes("speak hindi")) {
        speak("नमस्ते, मैं आपकी मदद करने के लिए यहाँ हूँ।", "hi-IN");
    } else if (message.includes("hindi mein bolo")) {
        speak("Namaste, main Infina hoon. Aapki kya madad kar sakti hoon?");
    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://youtube.com/", "_blank");
    } else if (message.includes("how are you") || message.includes("how r u")) {
        speak("I am fine Sir, and you?");
    }else if (message.includes("what is your name") || message.includes("your name")) {
        speak("My name is Infina.");
    } else if (message.includes("tell me about yourself") || message.includes("yourself")) {
        speak("I am a Infina voice assistant AI developed by Mayur Bores. My purpose is to assist, inform, and engage with users.");
    } else if (message.includes("are you chatgpt") || message.includes("are you chat gpt")){
        speak("No i am not chat gpt i am Infina")
    } else if (message.includes("call brother") || message.includes("call mom" ) || message.includes("call dad")){
        speak("i can't call. i don't have access to the system.")
    }else if (message.includes("can you help me")) {
        speak("Of course! How can I assist you? Let me know what you need help with.");
    } else if (message.includes("voice assistant means")) {
        speak("A voice assistant is a software program designed to perform tasks or provide information in response to voice commands, like  Infina (mayur code) Alexa (amazon), Siri (apple), Google Assistant (google), or Cortana (microsoft).");
    } else if (message.includes("open google")) {
        speak("Opening Google...");
        window.open("https://google.com/", "_blank");
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://facebook.com/", "_blank");
    } else if (message.includes("play music")) {
        speak("Playing music on YouTube...");
        window.open("https://music.youtube.com/", "_blank");
    } else if (message.includes("tell me a joke")) {
        let jokes = [
            "Why don’t scientists trust atoms? Because they make up everything!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ];
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    } else if (message.includes("spotify music")) {
        speak("Playing your favorite music.");
        window.open("https://open.spotify.com/", "_blank");
    }  else if (message.includes("motivate me") || message.includes("quote")) {
        let quotes = [
            "Believe in yourself! You are capable of amazing things.",
            "The best time to plant a tree was 20 years ago. The second best time is now.",
            "Do what you can, with what you have, where you are.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
        ];
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
     
    } else if (message.includes("play movie")){
        speak("playing movie...");
        window.open("https://www.netflix.com", "_blank")
    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://instagram.com/", "_blank");






   
    } else if (message.includes("add") || message.includes("and") || message.includes("+")){
        let numbers = message.match(/\d+/g);
        
        if (numbers && numbers.length > 1) {
            let sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
            speak(`The sum of the numbers is ${sum}`, "en-US");
        } else {
            speak("Please provide at least two numbers for addition.", "en-US");
            }
        //subtract
        } else if (message.includes("subtract") || message.includes("sub") || message.includes("-")) {
        let numbers = message.match(/\d+/g);
        if (numbers && numbers.length > 1) {
            let result = numbers.reduce((acc, num) => acc - parseInt(num));
            speak(`The result of subtraction is ${result}`, "en-US");
        } else {
            speak("Please provide at least two numbers for subtraction.", "en-US");
        }
        //multiply
        } else if (message.includes("multiply") || message.includes("into") || message.includes("×") || message.includes("*")) {
        let numbers = message.match(/\d+/g);
        if (numbers && numbers.length > 1) {
            let result = numbers.reduce((acc, num) => acc * parseInt(num));
            speak(`The result of multiplication is ${result}`, "en-US");
        } else {
            speak("Please provide at least two numbers for multiplication.", "en-US");
        }
        //divide
        } else if (message.includes("divide") || message.includes("by") || message.includes("/")) {
        let numbers = message.match(/\d+/g);
        if (numbers && numbers.length > 1) {
            let result = numbers.reduce((acc, num) => acc / parseInt(num));
            speak(`The result of division is ${result.toFixed(2)}`, "en-US");
        } else 
            speak("Please provide at least two numbers for division.", "en-US");






































    } else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    } else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
        speak(`Today's date is ${date}`);

        

    } else {
         let finalText="This is what i found on internet regarding" + message.replace("infina","") || message.replace("infina","")
        speak(finalText);
        window.open(`https://www.google.com/search?q=${message.replace("infina","")}`, "_blank");
    } 
    }


// Chatbox Input Handling
function handleUserInput() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, "user");
        userInput.value = "";
        takeCommand(message); // Use the same takeCommand function for chatbox input
    }
}

// Event Listeners for Chatbox
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleUserInput();
    }
});
