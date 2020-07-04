class MyWorker {
    constructor(f, cb) {
        this.f = f;
        this.worker = null;
        this.onemessage = cb;
    }

    start() {
        const blob = new Blob([`${this.f.toString()} ${this.f.name}()`], { type: 'text/javascript'});
        const url = URL.createObjectURL(blob);
        this.worker = new Worker(url);
        this.worker.onmessage = (event) => this.onemessage(event.data)
    }

    end() {
        this.worker.terminate();
    }
}
