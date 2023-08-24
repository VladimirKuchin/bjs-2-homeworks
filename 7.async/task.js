class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock (time, callback) {
		if (!time || !callback) {
			throw new Error ("Отсутствуют обязательные аргументы");
	}
	const existingAlarm = this.alarmCollection.some (element => element === element.time);
	if (existingAlarm === true) {
		console.warn ('Уже присутстыует звонок на это время');
	}
	this.alarmCollection.push ({callback: callback(), time: time, canCall: true});
	}

	removeClock (time) {
		this.alarmCollection = this.alarmCollection.filter (time => this.alarmCollection.time !== time);
	}

	getCurrentFormattedTime () {
		const now = new Date();
		const hours = String (now.getHours()).padStart(2, 0);
		const minutes = String (now.getMinutes()).padStart(2, 0);
		return hours + ':' + minutes;
	}

	start () {
		if (this.intervalId) {
			return;
		}else {
			const checkAlarms = () => {
				const currentTime = this.getCurrentFormattedTime ();
				this.alarmCollection.forEach (element => {
					if (element.time === currentTime && element.canCall) {
						alarm.canCall = false;
						alarm.callback();
					}
				});
				checkAlarms();
				this.intervalId = setInterval (checkAlarms, 1000);
			}
		}
	}

	stop () {
		clearInterval (this.intervalId);
		this.intervalId= null;
	}

	resetAllCalls () {
		this.alarmCollection.forEach (alarm => {
		alarm.canCall = true
		});
	}

	clearAlarms () {
		this.stop();
		this.alarmCollection = [];
	}
}