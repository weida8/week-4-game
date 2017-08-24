function character(nameIn, healthIn, attackIn, counterIn) {
  this.name = nameIn;
  this.health = healthIn;
  this.attack = attackIn;
  this.counter = counterIn;
}

function attack(char1, char2) {
  char2.health -= char1.attack;
  char1.health -= char2.counter;
  return(char1, char2);
}

function game() {
  jonSnow = new character("Jon Snow", 250, 10, 20);
  jaimeLannister = new character("Jaime Lannister", 120, 12, 15);
  robbStark = new character("Robb Stark", 300, 20, 5);
  brienneTarth = new character("Brienne Tarth", 500, 30, 10);
}

$(document).ready(function(){
  game();
  $("#jonHP").html(jonSnow.health);
  $("#jaimeHP").html(jaimeLannister.health);
  $("#robbHP").html(robbStark.health);
  $("#brienneHP").html(brienneTarth.health);
})
