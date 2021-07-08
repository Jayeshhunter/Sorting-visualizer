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
  let bars = document.querySelectorAll(".bar");
  quickSortRecursive(bars, 0, 19);
  console.log(bars);
}
function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = Number(arr[end].childNodes[0].innerHTML);
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (Number(arr[i].childNodes[0].innerHTML) < pivotValue) {
      // Swapping elements
      //   [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      arr[i].style.backgroundColor = "darkblue";
      arr[pivotIndex].style.backgroundColor = "red";

      var temp1 = arr[i].style.height;
      var temp2 = arr[i].childNodes[0].innerText;
      var temp3 = arr[pivotIndex].style.height;
      var temp4 = arr[pivotIndex].childNodes[0].innerText;
      arr[i].style.height = temp3;
      arr[i].childNodes[0].innerText = temp4;
      arr[pivotIndex].style.height = temp1;
      arr[pivotIndex].childNodes[0].innerText = temp2;
      // Moving to next element
      arr[i].style.backgroundColor = "green";
      arr[pivotIndex].style.backgroundColor = "green";

      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  //   [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  arr[end].style.backgroundColor = "deepblue";
  arr[pivotIndex].style.backgroundColor = "red";

  var temp1 = arr[end].style.height;
  var temp2 = arr[end].childNodes[0].innerText;
  var temp3 = arr[pivotIndex].style.height;
  var temp4 = arr[pivotIndex].childNodes[0].innerText;
  arr[end].style.height = temp3;
  arr[end].childNodes[0].innerText = temp4;
  arr[pivotIndex].style.height = temp1;
  arr[pivotIndex].childNodes[0].innerText = temp2;
  arr[end].style.backgroundColor = "green";
  arr[pivotIndex].style.backgroundColor = "green";
  return pivotIndex;
}
async function quickSortRecursive(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }
  await new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, 500)
  );
  // Returns pivotIndex
  let index = partition(arr, start, end);
  await new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, 500)
  );
  // Recursively apply the same logic to the left and right subarrays
  quickSortRecursive(arr, start, index - 1);
  await new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, 500)
  );
  quickSortRecursive(arr, index + 1, end);
  await new Promise((resolve) =>
    setTimeout(function () {
      resolve();
    }, 500)
  );
}
generateBar();

// function to generate new random array
function generate() {
  window.location.reload();
}
