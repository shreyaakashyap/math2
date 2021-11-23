function addUser() {
    player1_name = document.getElementById("player_1").value;
    player2_name = document.getElementById("player_2").value;
    localStorage.setItem("player_1",player1_name);
    localStorage.setItem("player_2",player2_name);

    window.location = "gamepage.html"; 
}