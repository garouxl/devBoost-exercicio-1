function addTask() {
  var inputTask = document.querySelector("#newTask input");

  if (!inputTask.value.trim()) return;

  insertTask(inputTask.value);
  inputTask.value = "";
}

function formatTime(value) {
  return value.toString().length == 1 ? "0" + value : value;
}

function startCounter(inputRef) {
  var inputHour = inputRef.parentNode.querySelector("input[name=task-hour");

  var timerId = setInterval(
    function () {
      var btn = inputRef.parentNode.querySelector("button");
      var hour = inputHour.value.split(":");
      var d = new Date();
      d.setHours(hour[0], hour[1], hour[2], 0);

      btn.textContent = "Stop";
      var newDate = new Date(d.getTime() + 1000);

      btn.onclick = function () {
        stopCounter(timerId, btn, inputHour);
      };

      inputHour.value =
        formatTime(newDate.getHours()) +
        ":" +
        formatTime(newDate.getMinutes()) +
        ":" +
        formatTime(newDate.getSeconds());
    }.bind(this),
    1000
  );

  inputHour.setAttribute('data-interval', timerId);

}

function stopCounter(timerRef, btnRef, inputRef) {
  clearInterval(timerRef);
  btnRef.textContent = "Start";
  btnRef.onclick = function () {
    startCounter(inputRef);
  };
}

function insertTask(description) {
  var listTask = document.querySelector(".list-task");
  var listTaskItems = document.querySelector(
    ".list-task:not(.result) .list-task-item"
  );
  var result = document.querySelector(".list-task.result");
  var child = document.createElement("div");
  var taskItemHtml = "";
  child.classList.add("list-task-item");

  taskItemHtml += '	<input type="text" value="' + description + '" disabled />';
  taskItemHtml +=
    ' <input type="text" name="task-hour" value="00:00:00"  disabled />';
  taskItemHtml += ' <button onclick="startCounter(this)">Start</button>';

  child.innerHTML = taskItemHtml;

  listTask.appendChild(child);

  if (!listTaskItems) {
    result.style.display = "block";
  }
}

function calculate() {
  var inputTime = document.querySelectorAll(
    ".list-task:not(.result) .list-task-item input[name=task-hour"
  );

  var sum = "";

  for (var i = 0; i < inputTime.length; i++) {
    var timerRef = parseInt(inputTime[i].getAttribute("data-interval"));
    var btn = inputTime[i].parentNode.querySelector("button");

    //para todos os cronometros.
    stopCounter(timerRef, btn, inputTime[i]);

    if (i != 0) {
      var hourA = sum;
      var hourB = inputTime[i].value;

      sum = sumHour(hourA, hourB);

    } else {
      sum = inputTime[i].value;
    }
    document.getElementById("valueCalculate").value = sum;
  }
}

function sumHour(hourA, hourB) {
  hourA = hourA.split(':');
  hourB = hourB.split(':');
  hourTotal = parseInt(hourA[0], 10) + parseInt(hourB[0], 10);
  minTotal = parseInt(hourA[1], 10) + parseInt(hourB[1], 10);
  segTotal = parseInt(hourA[2], 10) + parseInt(hourB[2], 10);

  if (segTotal >= 60) {
    segTotal -= 60; minTotal += 1;
  }

  if (minTotal >= 60) {
    minTotal -= 60; hourTotal += 1;
  }

  hourTotal = ("00" + hourTotal).slice(-2);
  minTotal = ("00" + minTotal).slice(-2);
  segTotal = ("00" + segTotal).slice(-2);

  result = hourTotal + ":" + minTotal + ":" + segTotal;
  return result;
}

window.addEventListener("load", function () {
  var btnAddTask = document.getElementById("btnAddTask");
  var btnCalculate = document.getElementById("btnCalculate");

  btnAddTask.addEventListener("click", addTask);
  btnCalculate.addEventListener("click", calculate);
});
