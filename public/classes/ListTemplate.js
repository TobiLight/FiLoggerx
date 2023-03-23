export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.textContent = heading;
        li.appendChild(h4);
        const p = document.createElement('p');
        p.textContent = item.format();
        li.appendChild(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.appendChild(li);
        }
    }
}
