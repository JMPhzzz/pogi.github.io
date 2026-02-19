function openTab(tabName) {
    const content = document.querySelectorAll('.tab-content');
    content.forEach(content => content.classList.remove('active'));
    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}