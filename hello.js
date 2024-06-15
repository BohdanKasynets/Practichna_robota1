class heloo {
    constructor() {
        this.items = [];
    }

    push_front(n) {
        this.items.unshift(n);
        console.log('ok');
    }

    push_back(n) {
        this.items.push(n);
        console.log('ok');
    }

    pop_front() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items.shift());
        }
    }

    pop_back() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items.pop());
        }
    }

    front() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items[0]);
        }
    }

    back() {
        if (this.items.length === 0) {
            console.log('error');
        } else {
            console.log(this.items[this.items.length - 1]);
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

const deque = new  heloo();
deque.front();
deque.back();
deque.pop_back();
deque.pop_front();
deque.exit();
deque.push_back(1);
deque.back();
deque.exit();