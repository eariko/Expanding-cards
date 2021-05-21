const panels = document.querySelectorAll('.panel-cards');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeAllActiveClasses();
        panel.classList.add('active');
    })
})

function removeAllActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}