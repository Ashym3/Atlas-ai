const input = document.querySelector(".input-area input");
const button = document.querySelector(".input-area button");
const chat = document.querySelector(".chat");


button.addEventListener("click", sendMessage);


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});


function sendMessage() {

    let text = input.value;

    if (text.trim() === "") {
        return;
    }


    addMessage(text, "user");


    input.value = "";


    setTimeout(() => {

        addMessage(
            "I am currently offline, but my systems are ready.",
            "ai"
        );

    }, 500);

}



function addMessage(text, type) {

    let message = document.createElement("div");

    message.className = "message " + type;

    message.innerText = text;


    chat.appendChild(message);


    chat.scrollTop = chat.scrollHeight;

}
