const buttons = document.querySelectorAll('.shift-btn');
const tabs = document.querySelectorAll('.tabs');


buttons.forEach((button,index,) => {
    button.addEventListener('click',()=>{
        de_highlight();
        button.classList.add('highlight');
        tabs[index].classList.remove('hide');
    });
});

const de_highlight = ()=>{
    buttons.forEach((button)=>{
        button.classList.remove('highlight');
    });
    tabs.forEach((tab) =>{
        tab.classList.add('hide');
    });
};