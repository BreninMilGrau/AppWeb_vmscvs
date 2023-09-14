// JavaScript code for handling chat functionality
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chat = document.querySelector(".chat");

// Event listener for the "Send" button
sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;

    if (messageText.trim() !== "") {
        // Create a new sent message
        const sentMessage = document.createElement("div");
        sentMessage.className = "message sent";
        sentMessage.innerHTML = `<p>${messageText}</p>`;

        // Append the sent message to the chat
        chat.appendChild(sentMessage);

        // Clear the message input
        messageInput.value = "";
    }
});

// Event listener for pressing Enter key
messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendButton.click(); // Trigger a click on the "Send" button when Enter is pressed
        event.preventDefault(); // Prevent a line break in the input field
    }
});
