//phase 0: choose your character
//phase 1: choose enemy character
var phase = 0;
var userCharName = "";
var userChar;
var enemyCharName = "";
var enemyChar;
var baseAttack = 0;
function character(nameIn, nameTextIn, healthIn, attackIn, counterIn) {
  this.name = nameIn;
  this.nameText = nameTextIn;
  this.health = healthIn;
  this.attack = attackIn;
  this.counter = counterIn;
}

function attack(char1, char2) {
  char2.health -= char1.attack;
  char1.health -= char2.counter;
  char1.attack += baseAttack;
  return(char1, char2);
}

function game() {
  jonSnow = new character("jonSnow", "Jon Snow", 250, 10, 20);
  jaimeLannister = new character("jaimeLannister", "Jaime Lannister", 120, 12, 15);
  robbStark = new character("robbStark", "Robb Stark", 300, 20, 5);
  brienneTarth = new character("brienneTarth", "Brienne Tarth",500, 30, 10);
  charList = [jonSnow, jaimeLannister, robbStark, brienneTarth];
}

function attackBtn() {
  attack(userChar, enemyChar);
  $("#jonHP").html(jonSnow.health);
  $("#jaimeHP").html(jaimeLannister.health);
  $("#robbHP").html(robbStark.health);
  $("#brienneHP").html(brienneTarth.health);
  $(".result1").html("You attacked "+enemyChar.nameText+" for "+ userChar.attack+ " damage.");
  $(".result2").html(enemyChar.nameText+" attacked you back for "+enemyChar.attack+" damage.");
  if(enemyChar.health <= 0) {
    $("#"+enemyChar.name).remove();
  } else if(userChar.health <= 0) {

  }
}

$(document).ready(function(){
  game();
  $("#jonHP").html(jonSnow.health);
  $("#jaimeHP").html(jaimeLannister.health);
  $("#robbHP").html(robbStark.health);
  $("#brienneHP").html(brienneTarth.health);
  var cardDim = document.getElementById("jonSnow").getBoundingClientRect();
  var jaimeLannisterDim = document.getElementById("jaimeLannister").getBoundingClientRect();
  var leftPosition = jaimeLannisterDim.left-cardDim.left;
  var cardToCardPosition = jaimeLannisterDim.left-cardDim.right;
//Phase 0***********************************************************************
  //user picks jon snow
  $("#jonSnow").one("click", function(){
    if(phase === 0) {
      userCharName = jonSnow.name;
      userChar = jonSnow;
      baseAttack = jonSnow.attack;
      phase += 1;
      $("#jaimeLannister").animate({
        top: 300,
        right: leftPosition
      });
      $("#robbStark").animate({
        top: 300,
        right: leftPosition
      });
      $("#brienneTarth").animate({
        top: 300,
        right: leftPosition
      });
      //user picks jon snow as enemy
    } else if(phase === 1 && userCharName != jonSnow.name){
        enemyCharName = jonSnow.name;
        enemyChar = jonSnow;
        phase += 1;
        $("#jonSnow").animate({top: 700});
        if(userCharName === jaimeLannister.name && enemyCharName === jonSnow.name){
          $("#robbStark").animate({
            right: leftPosition*2
          });
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        } else if(userCharName === robbStark.name && enemyCharName === jonSnow.name){
          $("#jaimeLannister").animate({
            right: leftPosition
          });
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        } else if(userCharName === brienneTarth.name && enemyCharName === jonSnow.name){
          $("#jaimeLannister").animate({
            right: leftPosition
          });
          $("#robbStark").animate({
            right: leftPosition
          });
        }
    }
  });
  //user picks jaime lannister
  $("#jaimeLannister").one("click", function(){
    if(phase === 0){
      userCharName = jaimeLannister.name;
      userChar = jaimeLannister;
      baseAttack = jaimeLannister.attack;
      phase += 1;
      var cardDim = document.getElementById("jonSnow").getBoundingClientRect();
      var jaimeLannisterDim = document.getElementById("jaimeLannister").getBoundingClientRect();
      leftPosition = jaimeLannisterDim.left-cardDim.left;
      cardToCardPosition = jaimeLannisterDim.left-cardDim.right;
      $("#jonSnow").animate({
        top: 300
      });
      $("#jaimeLannister").animate({
        right: leftPosition
      });
      $("#robbStark").animate({
        top: 300,
        right: leftPosition
      });
      $("#brienneTarth").animate({
        top: 300,
        right: leftPosition
      });
    //user picks jaime as enemy
  } else if(phase === 1 && userCharName != jaimeLannister.name){
        enemyCharName = jaimeLannister.name;
        enemyChar = jaimeLannister;
        phase += 1;
        $("#jaimeLannister").animate({
          right: leftPosition,
          top: 700
        });
        if(userCharName === jonSnow.name && enemyCharName === jaimeLannister.name){
          $("#robbStark").animate({
            right: leftPosition*2
          });
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        } else if(userCharName === robbStark.name && enemyCharName === jaimeLannister.name){
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        } else if(userCharName === brienneTarth.name && enemyCharName === jaimeLannister.name){
          $("#robbStark").animate({
            right: leftPosition
          });
        }
      }
  });
  //user picks robb stark
  $("#robbStark").one("click", function(){
    if(phase === 0){
      userCharName = robbStark.name;
      userChar = robbStark;
      baseAttack = robbStark.attack;
      phase += 1;
      var cardDim = document.getElementById("jonSnow").getBoundingClientRect();
      var jaimeLannisterDim = document.getElementById("jaimeLannister").getBoundingClientRect();
      leftPosition = jaimeLannisterDim.left-cardDim.left;
      cardToCardPosition = jaimeLannisterDim.left-cardDim.right;
      $("#jonSnow").animate({
        top: 300
      });
      $("#jaimeLannister").animate({
        top: 300
      });
      $("#robbStark").animate({
        right: leftPosition*2
      });
      $("#brienneTarth").animate({
        top: 300,
        right: leftPosition
      });
    //user picks robb as enemy
  } else if(phase === 1 && userCharName != robbStark.name){
        enemyCharName = robbStark.name;
        enemyChar = robbStark;
        phase += 1;
        $("#robbStark").animate({
          right: leftPosition*2,
          top: 700
        });
        if(userCharName === jonSnow.name && enemyCharName === robbStark.name){
          $("#robbStark").animate({
            right: leftPosition*2
          });
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        } else if(userCharName === jaimeLannister.name && enemyCharName === robbStark.name){
          $("#robbStark").animate({
            right: leftPosition*2
          });
          $("#brienneTarth").animate({
            right: leftPosition*2
          });
        }
      }
  });
  //user picks brienne tarth
  $("#brienneTarth").one("click", function(){
    if(phase === 0){
      userCharName = brienneTarth.name;
      userChar = brienneTarth;
      baseAttack = brienneTarth.attack;
      phase += 1;
      var cardDim = document.getElementById("jonSnow").getBoundingClientRect();
      var jaimeLannisterDim = document.getElementById("jaimeLannister").getBoundingClientRect();
      leftPosition = jaimeLannisterDim.left-cardDim.left;
      cardToCardPosition = jaimeLannisterDim.left-cardDim.right;
      $("#jonSnow").animate({
        top: 300
      });
      $("#jaimeLannister").animate({
        top: 300
      });
      $("#robbStark").animate({
        top: 300
      });
      $("#brienneTarth").animate({
        right: leftPosition*3
      });
      //user picks brienne as enemy
    } else if(phase === 1 && userCharName != brienneTarth.name){
        enemyCharName = brienneTarth.name;
        enemyChar = brienneTarth;
        phase += 1;
        $("#brienneTarth").animate({
          right: leftPosition*3,
          top: 700
        });
        if(userCharName === jonSnow.name && enemyCharName === brienneTarth.name){
          $("#jaimeLannister").animate({
            right: leftPosition
          });
          $("#robbStark").animate({
            right: leftPosition
          });
        }
      }
  });
});
