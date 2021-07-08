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
  bubbleSort();
}
async function bubbleSort() {
  var i = 0;
  var j = 0;
  let bars = document.querySelectorAll(".bar");
  for (i = 0; i < 20; i++) {
    bars[i].style.backgroundColor = "darkblue";
    for (j = 0; j < 20; j++) {
      bars[j].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(function () {
          resolve();
        }, 300)
      );
      var val1 = Number(bars[i].childNodes[0].innerHTML);
      var val2 = Number(bars[j].childNodes[0].innerHTML);
      if (val2 > val1) {
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
        var temp3 = bars[j].style.height;
        var temp4 = bars[j].childNodes[0].innerText;
        bars[j].style.height = temp1;
        bars[j].childNodes[0].innerText = temp2;
        bars[i].style.height = temp3;
        bars[i].childNodes[0].innerText = temp4;
      }
      bars[j].style.backgroundColor = "rgb(0, 183, 255)";
    }
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 300)
    );
    bars[i].style.backgroundColor = "rgb(0, 183, 255)";
  }
}
generateBar();
function generate() {
  window.location.reload();
}
