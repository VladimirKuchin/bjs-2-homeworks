class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.intervalId = null;
	}
	addClock (time, callback) {
		if (!time || !callback) {
			throw new Error ("Отсутствуют обязательные аргументы");
	}else if (this.alarmCollection.some (element => element === element.time) === true) {
		console.warn ('Уже присутствует звонок на это время');
	}
	this.alarmCollection.push ({callback, time, canCall: true});
	}

	removeClock (time) {
		this.alarmCollection = this.alarmCollection.filter (element => element.time !== time);
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
			}
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((element) => {
					if(element.time === this.getCurrentFormattedTime() && element.canCall) {
							element.canCall = false;
							element.callback();
						}
					})
			}, 1000)
		}

	stop () {
		clearInterval (this.intervalId);
		this.intervalId= null;
	}

	resetAllCalls () {
		this.alarmCollection.forEach (element => {
		element.canCall = true
		});
	}

	clearAlarms () {
		this.stop();
		this.alarmCollection = [];
	}
}