const timer_ele = document.querySelector("#timer");
const session_ele = document.querySelector("#session-time");
const break_ele = document.querySelector("#break-time");

const start_btn = document.querySelector("#start-btn");
const reset_btn = document.querySelector("#reset-btn");
const pause_btn = document.querySelector("#pause-btn");
const stop_btn = document.querySelector("#stop-btn");

//Buttons array
const buttons = document.querySelectorAll(".btn");

let isOn = false;
let session_time = String(25);
let break_time = 5;
updateAll();

buttons.forEach((btn) => btn.addEventListener("click", () => buttonHandler(btn.id)));

function buttonHandler(id) {
	session_time = Number(session_time);
	if (id == "left-inc-btn") {
		if (session_time < 60) {
			session_time += 1;
		}
		updateAll();

	} else if (id == "left-dec-btn") {
		if (session_time > 1) {
			session_time -= 1;
		}
		updateAll();

	} else if (id == "right-inc-btn") {
		if (break_time < 20) {
			break_time += 1;
		}
		updateAll();

	} else if (id == "right-dec-btn") {
		if (break_time > 1) {
			break_time -= 1;
		}
		updateAll();
	} else if (id == "start-btn") {
		if (!isOn) {
			startClock()
		}
	} else if (id == "reset-btn") {
		isOn = false;
		session_time = String(25);
		break_time = 5;
		updateAll();
	}

}

function updateAll() {
	session_ele.textContent = session_time
	break_ele.textContent = break_time
	if (!isOn) {
		timer_ele.textContent = session_time + ":00";
	}
}

function startClock() {
	isOn = true;
	session_time = String(session_time);
	let minutes = Number(session_time.substring(0, 2)) - 1;
	let seconds = 59;

	reset_btn.addEventListener("click", () => clearInterval(intervalId));

	let intervalId = setInterval(function () {
		if (seconds < 10) {
			timer_ele.textContent = minutes + ":" + "0" + seconds;
		} else {
			timer_ele.textContent = minutes + ":" + seconds;
		}
		if (seconds > 0) {
			seconds -= 1;
		} else {
			minutes -= 1;
			seconds = 59;
		}

		if(minutes == 0 && seconds == 0){
			alert("Times up");
			clearInterval(intervalId);
		}

	}, 1000);
}