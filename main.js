function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById("task-list");
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.addEventListener("DOMContentLoaded", function () {
    const chatMessages = document.getElementById("chat-messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement("div");
            messageElement.className = "message";
            messageElement.textContent = messageText;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();  
            sendButton.click();  
        }
    });
});



 document.addEventListener('DOMContentLoaded', function () {
            const progressBar = document.getElementById('progress');
            const progressInput = document.getElementById('progress-input');
            const updateButton = document.getElementById('update-button');

            updateButton.addEventListener('click', function () {
                const newProgress = parseInt(progressInput.value);
                if (!isNaN(newProgress) && newProgress >= 0 && newProgress <= 100) {
                    progressBar.style.width = newProgress + '%';
                    progressBar.textContent = newProgress + '%';
                } else {
                    alert('Please enter a valid progress value between 0 and 100.');
                }
            });
        });