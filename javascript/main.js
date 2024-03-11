// Global Variable Declaration
var score = 0;
var scorePerSecond = 0;
var scorePerClick = 1;
var item = 0;
var balance = 0;

// Store items
var atoms = 0;
var molecules = 0;
var organelles = 0;
var cells = 0;
var tissue = 0;
var organ = 0;
var organSystem = 0;
var organism = 0;

// Intervals
setInterval(tick, 100);
setInterval(second, 1000);
setInterval(interest, 10000)
setInterval(save, 5000)

// game start
zech();
document.getElementById("zech").style.opacity = 0;
setTimeout(function(){
    load();
}, 100);
// end game start

// upload load
function load() {
    if (localStorage.getItem("version") == 1) {
      score = parseInt(localStorage.getItem("saveScore"));
      scorePerClick = parseInt(localStorage.getItem("saveScorePerClick"));
      scorePerSecond = parseInt(localStorage.getItem("saveScorePerSecond"));
      balance = parseInt(localStorage.getItem("saveBalance"));
  
      // items
      atoms = parseInt(localStorage.getItem("saveAtoms"));
      molecules = parseInt(localStorage.getItem("saveMolecules"));
      organelles = parseInt(localStorage.getItem("saveOrganelles")); // Assuming "saveOrganelles" is the correct key
      cells = parseInt(localStorage.getItem("saveCells"));
      tissue = parseInt(localStorage.getItem("saveTissue"));
      organ = parseInt(localStorage.getItem("saveOrgan"));
      organSystem = parseInt(localStorage.getItem("saveOrganSystem"));
      organism = parseInt(localStorage.getItem("saveOrganism"));
    }
  }

// Function Definition
function tick() {
    document.getElementById("score").innerHTML = score.toLocaleString();
    document.getElementById("balance").innerHTML = balance.toLocaleString();
    document.getElementById("scorePerSecond").innerHTML = scorePerSecond.toLocaleString();

    document.getElementById("noAtoms").innerHTML = atoms.toLocaleString();
    document.getElementById("noMolecules").innerHTML = molecules.toLocaleString();
    document.getElementById("noOrganelles").innerHTML = organelles.toLocaleString();
    document.getElementById("noCells").innerHTML = cells.toLocaleString();
    document.getElementById("noTissues").innerHTML = tissue.toLocaleString();
    document.getElementById("noOrgans").innerHTML = organ.toLocaleString();
    document.getElementById("noOrgansSystem").innerHTML = organSystem.toLocaleString();
    document.getElementById("noOrganism").innerHTML = organism.toLocaleString();
}

function clicked() {
    score = score + scorePerClick;
}

function interest(){
    // bank interest
    balance = balance * 1.005;
}

// Per second
function second(){
    score = score + scorePerSecond;
}

// Zech Event
function zech(){
    document.getElementById("zech").style.opacity = 100;
    score = 0;
    setTimeout(function(){
        document.getElementById("zech").style.opacity = 0;
    }, 2000);
    console.log("Zech Appeared");
    setTimeout(zech, Math.floor(Math.random() * (240000 - 63000 + 1)) + 63000);
}

// store function
function buy(item, quantity, cost, scorePer) {
    // Local variable declarations
    var totalCost = quantity * cost;
  
    // Tests
    // Check if the variable exists
    if (typeof window[item] === 'undefined') {
      console.error(`Variable '${item}' does not exist.`);
      return;
    }
  
    // Check if the variable is a number
    if (isNaN(window[item])) {
      console.error(`Variable '${item}' is not a number.`);
      return;
    }
  
    // Main 
    if (score >= totalCost) {
      score -= totalCost;
      window[item] += quantity;
  
      scorePerSecond = scorePerSecond + quantity * scorePer;
  
      console.log(`Purchased ${quantity} ${item}(s) for a total cost of ${totalCost}. Your remaining score is ${score}.`);
      console.log(`New points per second is ${scorePerSecond}`);
    } else {
      console.error(`Insufficient score to buy ${quantity} ${item}(s).`);
    }
}

// game saves
function save(){
    localStorage.setItem("saveScore", score);
    localStorage.setItem("version", 1);
    localStorage.setItem("saveScorePerSecond", scorePerSecond);
    localStorage.setItem("saveScorePerClick", scorePerClick);
    localStorage.setItem("saveBalance", balance);

    // Items
    localStorage.setItem("saveAtoms", atoms);
    localStorage.setItem("saveMolecules", molecules);
    localStorage.setItem("saveOrganelles", organelles);
    localStorage.setItem("saveCells", cells);
    localStorage.setItem("saveTissue", tissue);
    localStorage.setItem("saveOrgan", organ);
    localStorage.setItem("saveOrganSystem", organSystem);
    localStorage.setItem("saveOrganism", organism);
    console.log("Game Saved!")
}

// bank buttons
function depositAll(){
    balance = balance + score;
    score = 0;
}

function withdrawAll(){
    var taxedBalance = balance / 1.1;
    score = score + taxedBalance;
    balance = 0;
}

function depositHalf(){
    var half;
    half = score / 2;
    balance = balance + half;
    score = score - half;
}

function withdrawHalf(){
    var half;
    var taxedBalance;
    half = balance / 2;
    taxedBalance = half / 1.1;
    score = score + taxedBalance;
    balance = balance / 2;
}

// wallpaper
function wallpaperOne(){
    if(score >= 10000){
        console.log("Wallpaper One Bought");
        document.body.style.backgroundImage = "url('img/flying-blue-butterfly-aesthetic-z2q5gip0k47emb74.jpg')";
        score = score - 10000;
    }
}

function wallpaperTwo(){
    if(score >= 10000000){
        console.log("Wallpaper Two Bought");
        document.body.style.backgroundImage = "url('img/ethan.png')";
        score = score - 10000000;
    }
}

function wallpaperThree(){
    function wallpaperOne(){
        if(score >= 1000000000000){
            console.log("Wallpaper Three Bought");
            document.body.style.backgroundImage = "url('img/archie.JPG')";
            score = score - 1000000000000;
        }
    }
}

function resetBackground(){
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "white";
}

// test
function reset(){
    // Global Variable Declaration
 score = 0;
 scorePerSecond = 0;
 scorePerClick = 1;
 item = 0;
 balance = 0;

// Store items
 atoms = 0;
 molecules = 0;
 organelles = 0;
 cells = 0;
 tissue = 0;
 organ = 0;
 organSystem = 0;
 organism = 0;
}