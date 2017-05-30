function Counter() {
    var that = this;
    this.timer = setInterval(() => {
        console.log(this === that);
    }, 1000);
}

var b = new Counter();