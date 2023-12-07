
console.log("someone here that actually know codes")
var imInbigPain = document.createElement("div");

function Huh() {
window.close();
console.log("if you see this. idk")
}





function Money() {
  imInbigPain.innerHTML = "Hello, World!";
}
var foodCost = 15
var mulitpler = 1
var clicks = 0
var randomValue = Math.floor(Math.random() * (30000 - 6000 + 1)) + 6000;
console.log(randomValue);

function Return() {
setTimeout(() => {document.getElementById("needs").innerHTML = "I don't have any needs rights now.";}, 3000);

}

var foodCost = 15
function delayedLoop() {
  if (clicks>=1) {
  lessClicks = clicks - foodCost
  clicks = lessClicks
  document.getElementById("gamer").innerHTML = (clicks*0.01).toFixed(2);
  document.getElementById("needs").innerHTML = "I brought some food for $" + (foodCost*0.01);
  Return();}
  console.log("it worked")
  setTimeout(() => { delayedLoop() }, randomValue);
  setTimeout(() => { randomValue = Math.floor(Math.random() * (30000 - 6000 + 1)) + 6000; }, randomValue);
 }

setTimeout(() => { delayedLoop() }, 10000);

function Hit() {
  




  Money()
  var message = []
  var rank = ["Peasant", "Vagabond", "Squire", "Footman", "Page", "Fletcher", 
    "Minstrel", "Huntsman", "Apothecary", "Jester", "Sergeant", "Armorer", "Quartermaster", 
    "Mercenary", "Chaplain", "Cavalier", "Warder", "Scout", "Chancellor", "Herald", "Vintner",
     "Chamberlain", "Provost", "Steward", "Ambassador", "Knight Errant", "Inquisitor", "Seneschal",
      "Paladin", "Spymaster", "Master-at-Arms", "Almoner", "Swordmaster", "Exchequer", "Constable", "Justiciar", 
      "Baronet", "Marquis", "Lord Marshal", "High Inquisitor", "Grandmaster", "High Chancellor", "Archduke",
       "Lord Protector", "Viceroy", "Prince Regent", "Grand Inquisitor", "Duke", "Earl", "Viscount", "Count Palatine",
        "Baron", "Thane", "Margrave", "Landgrave", "Castellan", "Banneret", "Baronetess", "Marchioness", "Duchess",
         "Countess", "Viscountess", "Baroness", "Thanesse", "Margravine", "Landgravine", "Chatelaine", "Banneress",
          "Priory", "Prelate", "Abbess", "Canoness", "Prioress", "Preceptor", "Grand Prioress", "Prioress-General", 
          "Grand Preceptor", "Prince-Bishop", "Archbishop", "Metropolitan", "Primate", "Cardinal", "Patriarch", "Pontiff",
           "Legate", "Vicar-General", "Patriarchate", "Apostolic Nuncio", "Pontificate", "Legation", "Apostolic Delegation",
            "Apostolic Pro-Nuncio", "Papal Legate", "Apostolic Delegate", "Cardinal-Bishop", "Cardinal-Priest", 
    "Cardinal-Deacon", "Cardinal-Protodeacon", "Cardinal-Patron", "Pope"]
  var newClicks = clicks+mulitpler
  clicks = newClicks
  document.getElementById("gamer").innerHTML = (clicks*0.01).toFixed(2);
  if(clicks>1,clicks<10) {
  document.getElementById("ranktype").innerHTML = rank[0];
  foodCost = 2;
  } else if(clicks>9, clicks<200) {
  mulitpler =2
  document.getElementById("ranktype").innerHTML = rank[1];
  foodCost = 15;
  } else if(clicks>199, clicks<500) {
  document.getElementById("ranktype").innerHTML = rank[2];
  mulitpler =3
  foodCost = 30;
  } else if(clicks>499, clicks<1000) {
  document.getElementById("ranktype").innerHTML = rank[3];
  mulitpler =5
  foodCost = 60;
  }else if(clicks>999, clicks<5000) {
  document.getElementById("ranktype").innerHTML = rank[4];
  mulitpler =10
  foodCost = 120;
  }else if(clicks>4999, clicks<10000) {
  document.getElementById("ranktype").innerHTML = rank[5];
  mulitpler =15
  foodCost = 240;
  }else if(clicks>9999, clicks<50000) {
  document.getElementById("ranktype").innerHTML = rank[6];
  mulitpler =30
  foodCost = 500;
  }else if(clicks>49999, clicks<1000000) {
  document.getElementById("ranktype").innerHTML = rank[7];
  mulitpler =60
 foodCost = 1000;
  }else if(clicks>999999, clicks<5000000) {
  document.getElementById("ranktype").innerHTML = rank[8];
  mulitpler =100
  foodCost = 2000;
  }else if(clicks>4999999, clicks<10000000) {
  document.getElementById("ranktype").innerHTML = rank[9];
  mulitpler =500
 foodCost = 5000
  }else if(clicks>9999999, clicks<50000000) {
  document.getElementById("ranktype").innerHTML = rank[10];
  mulitpler =1000
  foodCost = 10000
  }else if(clicks>49999999, clicks<100000000) {
  document.getElementById("ranktype").innerHTML = rank[11];
  mulitpler =2000
  foodCost = 20000
  }else if(clicks>999999999, clicks<500000000) {
  document.getElementById("ranktype").innerHTML = rank[12];
  mulitpler =4000
  foodCost = 50000
  }else if(clicks>499999999, clicks<1000000000) {
  document.getElementById("ranktype").innerHTML = rank[13];
  mulitpler =8000
  foodCost = 100000
  }else if(clicks>999999999, clicks<5000000000) {
  document.getElementById("ranktype").innerHTML = rank[14];
  mulitpler =16000
  foodCost = 500000
  }else if(clicks>4999999999, clicks<10000000000) {
  document.getElementById("ranktype").innerHTML = rank[15];
  mulitpler =30000
  foodCost = 1000000
  }else if(clicks>9999999999, clicks<50000000000) {
  document.getElementById("ranktype").innerHTML = rank[16];
  mulitpler =60000
  foodCost = 5000000
  }else if(clicks>49999999999, clicks<100000000000) {
  document.getElementById("ranktype").innerHTML = rank[17];
  mulitpler =100000
  foodCost = 10000000
  }else if(clicks>99999999999, clicks<500000000000) {
  document.getElementById("ranktype").innerHTML = rank[18];
  mulitpler =200000
  foodCost = 50000000
  }else if(clicks>499999999999, clicks<1000000000000) {
  document.getElementById("ranktype").innerHTML = rank[19];
  mulitpler =500000
  foodCost = 100000000
  }else if(clicks>999999999999, clicks<5000000000000) {
  document.getElementById("ranktype").innerHTML = rank[20];
  mulitpler =1000000
  foodCost = 500000000
  }else if(clicks>4999999999999, clicks<10000000000000) {
  document.getElementById("ranktype").innerHTML = rank[21];
  mulitpler =2000000}

}


