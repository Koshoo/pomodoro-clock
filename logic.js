const timer_ele = document.querySelector("#timer");
const session_ele = document.querySelector("#session-time");
const break_ele = document.querySelector("#break-time");
const start_btn = document.querySelector("start-btn");

const reset = document.querySelector("reset-btn");
const pause = document.querySelector("pause-btn");
const stop = document.querySelector("stop-btn");

//Buttons array
const buttons = document.querySelectorAll(".btn");

let isOn = false;

let session_time = 25;
let break_time = 5;
session_ele.textContent = session_time + ":00";
break_ele.textContent = break_time + ":00";
timer.textContent = session_time + ":00";


buttons.forEach(function (button) {
	button.addEventListener("click", function () {
		buttonHandler(button.id)
	})
});

function buttonHandler(button) {
	console.log(button)

	switch (button) {

		case "left-inc-btn":
			if (session_time < 60) {
				session_time += 1;
			}
			break
		case "left-dec-btn":
			if (session_time > 1) {
				session_time -= 1;
			}
			break

		case "right-inc-btn":
			if (break_time < 20) {
				break_time += 1;
			}
			break
		case "right-dec-btn":
			if (break_time > 1) {
				break_time -= 1;
			}
			break

		case "start-btn":
			isOn = true;

			var current_session_time = session_time;
			break

		case "reset-btn":
			isOn = false;
			session_time = 25;
			break_time = 5;
			break

		case "stop-btn":
			isOn = false;
			current_session_time = current_session_time;
			break;

	}

	session_ele.textContent = session_time + ":00";
	break_ele.textContent = break_time + ":00";
	if (!isOn) {
		timer.textContent = session_time + ":00";
	} else {
		timer_ele.style.color = "blue";
		operateClock()
	}
}

function operateClock() {
	let time = timer.textContent.split(":")
	let minutes = parseInt(time[0]);
	let seconds = time[1]

	let intervalId = setInterval(function () {
			if (seconds == 0 && minutes > 0) {
				seconds = 59;
				minutes -= 1;
			} else if (seconds > 0 && minutes > 0) {
				seconds -= 1;
			}
		timer.textContent = minutes + ":" + seconds;
		console.log(isOn)
		if(!isOn){
			clearInterval(intervalId)
		}
	}, 1000);

	




}