document.addEventListener("DOMContentLoaded", function() {
    const chatDiv = document.getElementById("chat");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");

    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = messageInput.value;
        if (message) {
            appendMessage("You", message);
            messageInput.value = "";

            // Simulate a reply from a second user (you can replace this with a real backend or another user in a multi-user scenario)
            setTimeout(() => {
                const reply = "Thanks for your message!";
                appendMessage("User 2", reply);
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatDiv.appendChild(messageDiv);
        chatDiv.scrollTop = chatDiv.scrollHeight; // Scroll to the bottom of the chat
    }
});