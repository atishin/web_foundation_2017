const label = document.getElementById('label');
const type = document.getElementById('type');
const controls = document.getElementById('controls');

function getControl() {
    switch (type.selectedOptions.item(0).value) {
        case 'text': return `<span>${label.value}</span><input type="text">`;
        case 'password': return `<span>${label.value}</span><input type="password">`;
        case 'radio': return `<input type="radio"><span>${label.value}</span>`;
        case 'checkbox': return `<input type="checkbox"><span>${label.value}</span>`;
        case 'button': return `<button>${label.value}</button>`;
    }
}

function add() {
    const div = document.createElement('div');
    div.innerHTML = getControl();
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.onclick = () => {
        div.parentElement.removeChild(div);
    }
    div.appendChild(removeButton);
    controls.appendChild(div);

}