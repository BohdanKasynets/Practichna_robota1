class Queue {
    constructor() {
        this.items = [];
    }

    push(n) {
        this.items.push(n);
        console.log('ok');
    }

    pop() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items.shift());
        }
    }

    front() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items[0]);
        }
    }

    size() {
        console.log(this.items.length);
    }

    clear() {
        this.items = [];
        console.log('ok');
    }

    exit() {
        console.log('bye');
    }
}

const queue = new Queue();
queue.push(1);  
queue.front();
queue.exit();
queue.size();
queue.push(1);
queue.size();
queue.push(2);
queue.size();
queue.push(3);
queue.size();
queue.exit();