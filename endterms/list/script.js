const tree = document.getElementById('tree');
const path = document.getElementById('path');

class Link {
    constructor(link = {}) {
        Object.assign(this, link);
    }
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genLinks(link, level, label) {
    if (level > 3) return [];

    const _links = [];
    for (let i = 1; i < rand(2, 4); i++) {
        const _link = new Link({
            label: link.label + `.${i}`,
            parent: link
        });
        _link.links = genLinks(_link, level + 1);
        _links.push(_link);
    }
    return _links;
}

function getPath(link) {
    if (link == null) return [];
    return [...getPath(link.parent), link.label];
}

function renderPath(_path) {
    path.innerHTML = '';
    _path.forEach((part, index) => {
        if (index > 0) {
            sep = document.createElement('li');
            sep.innerHTML = '/';
            path.appendChild(sep);
        }
        li = document.createElement('li');
        li.innerHTML = part;
        path.appendChild(li);

    })
}

function renderLink(link) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    const span = document.createElement('span');
    span.innerHTML = link.label;
    const input = document.createElement('input');
    li.appendChild(span);
    li.appendChild(input);
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    li.appendChild(removeButton);
    removeButton.onclick = () => {
        if (link.parent == null) {
            alert('Could not remove root element');
            return;
        }
        li.parentElement.removeChild(li);
    }

    const addButton = document.createElement('button');
    addButton.innerHTML = 'Add';
    li.appendChild(addButton);

    addButton.onclick = () => {
        const newLi = renderLink(new Link({ parent: link, label: input.value, links: [] }));
        ul.appendChild(newLi);
    }


    link.links.forEach(subLink => {
        ul.appendChild(renderLink(subLink))
    });
    li.appendChild(ul);

    return li;

}



const root = new Link({ label: 'root', parent: null });
root.links = genLinks(root, 1)

tree.appendChild(renderLink(root));

