btn.onclick = function handler() {
    textarea.innerHTML = '«You clicked First button»,';
    console.log('capturing', this.handler);

};


btn1.onclick = function handler() {
    textarea.innerHTML = '«You clicked Second button»';
    console.log('capturing', this.handler);
};


btn2.onclick = function handler() {
    textarea.innerHTML = '«You clicked Third button»';
    console.log('capturing', this.handler);
};
