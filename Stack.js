class Stack {
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
            console.log(this.items.pop());
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

const stack = new Stack();
stack.push(2);
stack.back();
stack.pop();
stack.size();
stack.pop();
stack.push(1);
stack.size();
stack.exit();