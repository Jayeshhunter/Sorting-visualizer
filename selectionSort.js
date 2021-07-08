const container = document.querySelector(".data-container");
function generateBar() {
  for (var i = 0; i < 20; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const label = document.createElement("label");
    label.classList.add("bar_id");
    label.innerHTML = value;
    bar.appendChild(label);
    container.appendChild(bar);
  }
  selectionSort();
}
async function selectionSort() {
  let bars = document.querySelectorAll(".bar");
  var i = 0;
  var j = 0;
  var min;
  for (i = 0; i < 20; i++) {
    min = i;
    bars[i].style.backgroundColor = "darkblue";
    for (j = i + 1; j < 20; j++) {
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(function () {
          resolve();
        }, 300)
      );

      var val1 = Number(bars[j].childNodes[0].innerHTML);
      var val2 = Number(bars[min].childNodes[0].innerHTML);

      if (val1 < val2) {
        if (min !== i) {
          bars[j].style.backgroundColor = "rgb(24, 190, 255)";
        }
        min = j;
      } else {
        bars[j].style.backgroundColor = "rgb(24, 190, 255)";
      }
    }
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 300)
    );
    //setting the style to the new mnimum ie i array;
    var temp1 = bars[min].style.height;
    var temp2 = bars[min].childNodes[0].innerText;
    var temp3 = bars[i].style.height;
    var temp4 = bars[i].childNodes[0].innerText;
    bars[i].style.height = temp1;
    bars[i].childNodes[0].innerText = temp2;
    bars[min].style.height = temp3;
    bars[min].childNodes[0].innerText = temp4;

    bars[min].style.backgroundColor = "rgb(24, 190, 255)";
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}

generateBar();

// function to generate new random array
function generate() {
  window.location.reload();
}
