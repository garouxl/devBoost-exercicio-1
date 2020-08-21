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
  var timerId = setInterval(
    function () {
      var inputHour = inputRef.parentNode.querySelector("input[name=task-hour");
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
  var listTaskItems = document.querySelectorAll(
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

  if (listTaskItems.length === 0) {
    result.style.display = "block";
  }
}

window.addEventListener("load", function () {
  var btnAddTask = document.getElementById("btnAddTask");
  btnAddTask.addEventListener("click", addTask);
});
