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
  insertionSort();
}
async function insertionSort() {
  let bars = document.querySelectorAll(".bar");

  for (let i = 1; i < 20; i++) {
    // Choosing the first element in our unsorted subarray
    let current = Number(bars[i].childNodes[0].innerHTML);
    var temp5 = bars[i].style.height;
    var temp6 = bars[i].childNodes[0].innerText;
    var temp7 = bars[i].style.height;
    var temp8 = bars[i].childNodes[0].innerText;
    bars[i].style.backgroundColor = "darkblue";
    // The last element of our sorted subarray
    let j = i - 1;
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 200)
    );
    while (j > -1 && current < Number(bars[j].childNodes[0].innerHTML)) {
      // inputArr[j+1] = inputArr[j];
      bars[j].style.backgroundColor = "red";
      var temp1 = bars[j].style.height;
      var temp2 = bars[j].childNodes[0].innerText;
      var temp3 = bars[j].style.height;
      var temp4 = bars[j].childNodes[0].innerText;
      bars[j + 1].style.height = temp1;
      bars[j + 1].childNodes[0].innerText = temp2;
      bars[j + 1].style.height = temp3;
      bars[j + 1].childNodes[0].innerText = temp4;
      bars[j].style.backgroundColor = "green";
      j--;
    }
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 200)
    );
    bars[j + 1].style.height = temp5;
    bars[j + 1].childNodes[0].innerText = temp6;
    bars[j + 1].style.height = temp7;
    bars[j + 1].childNodes[0].innerText = temp8;
    bars[j + 1].style.backgroundColor = "green";
    // inputArr[j+1] = current;
  }
}
generateBar();
function generate() {
  window.location.reload();
}
