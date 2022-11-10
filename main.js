class Timer {
    constructor(root,remainingSeconds) {
        root.innerHTML = Timer.getHTML()
        this.timerElements = {
            minutes: root.querySelector(".minutes"),
            seconds: root.querySelector(".seconds")
        }
        this.remainingSeconds = remainingSeconds
        this.start()
    }

    updateTimeInterface() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
    
        this.timerElements.minutes.textContent = minutes.toString().padStart(2, "0");
        this.timerElements.seconds.textContent = seconds.toString().padStart(2, "0");
    }

    start() {
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateTimeInterface()
            
            if (this.remainingSeconds == 0) {
                this.stop()
            }
        }, 1000)
    }

    stop() {
        clearInterval(this.interval)
    }

    static getHTML() {
        return `        
        <span class="minutes">00</span>
        :
        <span class="seconds">00</span>`
    }
}

const Time = new Timer(
    document.querySelector('.root-timer'),
    2
);