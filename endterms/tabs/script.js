let tabNumber = 0;
const tabs = [];

function selectTab(tab, content) {
    const selected = document.getElementById('selected');
    if (selected) {
        selected.removeAttribute('id');
    }

    tab.setAttribute('id', 'selected');
    document.getElementById('tab-content').innerHTML = content;
}

function addTab() {
    tabNumber++;
    const content = `Tab #${tabNumber}`;
    const newTabButton = document.createElement('button');
    newTabButton.innerHTML = tabNumber;
    newTabButton.onclick = () => {
        selectTab(newTabButton, content);
    }
    selectTab(newTabButton, content);
    document.getElementById('tabs').appendChild(newTabButton);
}


addTab();
addTab();
addTab();