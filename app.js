let addFriendBtn = document.getElementById("addFriendBtn");
let friendName = document.getElementById("friendName");
let candidates = ["Nabia", "Mahnoor", "Mirha", "Arisha", "Javeria"];

addFriendBtn.addEventListener("click", () => {
    candidates.push(friendName.value);
    friendName.value = "";
    displayCandidates();
});

function displayCandidates() {
    var friendList = document.getElementById("friendList");
    friendList.innerHTML = "";

    candidates.forEach((candidate, index) => {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = candidate;

        var indexCell = document.createElement("td");
        indexCell.textContent = index + 1;

        var voteCell = document.createElement("td");
        voteCell.textContent = 0;

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(voteCell);

        row.addEventListener("click", () => {
            voteCell.innerHTML++;
        });

        friendList.appendChild(row);
    });
}

displayCandidates();