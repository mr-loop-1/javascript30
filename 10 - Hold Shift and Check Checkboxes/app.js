const allItem = document.querySelectorAll('input');
const inbox = document.querySelector('.inbox');

let lastChecked = 0;

const shiftHandler = (ev) => {
    console.log(ev);
    if(ev.target.tagName === "INPUT") {
        // console.log(ev);
        // console.log(allItem);   
        // lastChecked = allItem.findIndex((item) => {
        //     return (item === ev.target);
        // }
        let currChecked;
        allItem.forEach((item, idx) => {
            if(item === ev.target) currChecked = idx;
        })

        console.log(ev.which);
        if(ev.shiftKey) {
            console.log("here");
            for(let i=lastChecked; i!=currChecked; i++) {
                console.log(allItem[i]);
                allItem[i].checked = "checked";
            }
        }

        lastChecked = currChecked;
        console.log(lastChecked);
    }
    
}

inbox.addEventListener('click', shiftHandler);