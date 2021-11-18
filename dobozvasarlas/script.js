function fullsumma() {
  let summa1 = document.getElementById("selectqty1");
  let summa1nr = Number(summa1.value);
  let summa2 = document.getElementById("selectqty2");
  let summa2nr = Number(summa2.value);
  let summa3 = document.getElementById("selectqty3");
  let summa3nr = Number(summa3.value);
  let summa4 = document.getElementById("selectqty4");
  let summa4nr = Number(summa4.value);
  let summa5 = document.getElementById("selectqty5");
  let summa5nr = Number(summa5.value);
  let summa6 = document.getElementById("selectqty6");
  let summa6nr = Number(summa6.value);

  console.log(summa1nr);

  fullifm.innerHTML =
    Math.floor(
      (summa1nr + summa2nr + summa3nr + summa4nr + summa5nr + summa6nr) * 100
    ) / 100;
}

function addElement() {
  document.getElementById("inputgroup2").style.display = "flex";
  document.getElementById("addbtn1").style.display = "none";
  document.getElementById("addbtn2").style.display = "flex";
}
function addElement2() {
  document.getElementById("inputgroup3").style.display = "flex";
  document.getElementById("addbtn2").style.display = "none";
  document.getElementById("addbtn3").style.display = "flex";
}
function addElement3() {
  document.getElementById("inputgroup4").style.display = "flex";
  document.getElementById("addbtn3").style.display = "none";
  document.getElementById("addbtn4").style.display = "flex";
}
function addElement4() {
  document.getElementById("inputgroup5").style.display = "flex";
  document.getElementById("addbtn4").style.display = "none";
  document.getElementById("addbtn5").style.display = "flex";
}
function addElement5() {
  document.getElementById("inputgroup6").style.display = "flex";
  document.getElementById("addbtn5").style.display = "none";
  document.getElementById("addbtn6").style.display = "flex";
}

const date = new Date();
document.getElementById("date").innerHTML = date.getFullYear();
