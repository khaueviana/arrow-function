function Counter() {
    this.num = 0;

    // this.timer = setInterval(function add() {
    //     console.log(this);
    // }, 1000);

    this.timer = setInterval(() => {
        this.num++;
        console.log(this.num);
    }, 1000);
}

var b = new Counter();