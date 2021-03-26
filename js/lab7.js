function openChat() {
    btn = document.getElementById("openChat");
    div = document.getElementById("chatBox");
    new_btn = document.getElementById("closeChat");
    div.style.display = "block";
    btn.style.display = "none";
    new_btn.style.display = "block";
}

function closeChat() {
    btn = document.getElementById("closeChat");
    div = document.getElementById("chatBox");
    new_btn = document.getElementById("openChat");
    div.style.display = "none";
    new_btn.style.display = "block";
    btn.style.display = "none";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function deleteMessage(message) {
    message.target.parentNode.remove();
}

function sendMessage() {
    chatMessages = document.getElementById("chatMessages");

    message = document.createElement("div");
    message.classList.toggle("chatMessage");
    cross = document.createElement("img");
    cross.classList.toggle("chatCross");
    cross.src = "imgs/cross.png";
    cross.onclick = deleteMessage;
    message.appendChild(cross);
    message.appendChild(document.createTextNode(" " + document.getElementById("userText").value));
    document.getElementById("userText").value = "";
    chatMessages.append(message);

    adj = ["Черный", "Быстрый", "Медленный", "Жёлтый", "Синий", "Зеленый", "Белый"];
    noun = ["стол", "автомобиль", "стул", "самолёт", "заяц", "кот", "снег"];
    verb = ["бежит", "скачет", "ползет", "радуется", "кричит", "летает", "прыгает"]

    answer = adj[getRandomInt(0, adj.length)] + " " + noun[getRandomInt(0, noun.length)] + " " + verb[getRandomInt(0, verb.length)];
    ansMessage = document.createElement("div");
    ansMessage.classList.toggle("chatMessage");
    new_cross = cross.cloneNode(true);
    new_cross.onclick = deleteMessage;
    ansMessage.appendChild(new_cross);
    ansMessage.appendChild(document.createTextNode(" " + answer));
    chatMessages.append(ansMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}