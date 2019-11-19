class currentDate {
    fullDate;
    date;
    day;
    month;
    year;
    hours;
    minutes;

    constructor() {
    	this.fullDate = new Date();
    	this.day = this.checkValue(this.fullDate.getDate());
    	this.month = this.checkValue(this.fullDate.getMonth());
    	this.year = this.fullDate.getFullYear();
    	this.hours = this.checkValue(this.fullDate.getHours());
    	this.minutes = this.checkValue(this.fullDate.getMinutes());
    	this.date = `${this.day}.${this.month}.${this.year} ${this.hours}:${this.minutes}`;
    }

    checkValue(value) {
    	if (value.toString().length === 1) {
    		return `0${value}`;
    	} else {
    		return value;
    	}
    }

    getDate() {
    	return this.date;
    }

}

export default currentDate;