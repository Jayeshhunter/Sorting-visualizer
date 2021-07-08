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
  mergerMega();
}
function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays

    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(bars) {
  const half = bars.length / 2;
  console.log(half);
  // Base case or terminating case
  if (bars.length < 2) {
    return bars;
  }

  const left = bars.splice(0, half);
  return merge(mergeSort(left), mergeSort(bars));
}
async function mergerMega() {
  let barOrig = document.querySelectorAll(".bar");
  var arr = [];
  for (var j = 0; j < 20; j++) {
    arr.push(Number(barOrig[j].childNodes[0].innerHTML));
  }
  var arr = mergeSort(arr);
  let bars = document.querySelectorAll(".bar");
  for (var k = 0; k < 20; k++) {
    bars[k].style.backgroundColor = "green";
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 300)
    );
    bars[k].style.height = `${arr[k] * 3}px`;
    bars[k].childNodes[0].innerText = arr[k];
    bars[k].style.backgroundColor = " rgb(0, 183, 255";
    await new Promise((resolve) =>
      setTimeout(function () {
        resolve();
      }, 300)
    );
  }
}
generateBar();
function generate() {
  window.location.reload();
}
