// ==================== Create goUpButton ====================
const goUpButton = document.createElement('button');
document.body.appendChild(goUpButton);

goUpButton.classList.add('btn')
goUpButton.classList.add('btn-dark')
goUpButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

goUpButton.style.position = 'fixed';
goUpButton.style.bottom = '20px';
goUpButton.style.right = '20px';
goUpButton.style.display = 'none'; // Hide the button initially
goUpButton.style.zIndex = '1000'; 

// Add the scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        goUpButton.style.display = 'block';
    } else {
        goUpButton.style.display = 'none';
    }
});

// Add the click event listener to scroll to the top
goUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ==================== counter ====================
let counters = document.querySelectorAll('#home .counter')
let home = document.getElementById('home')
let started = false // Function not started

console.log(home.offsetTop)
window.onscroll = function (){
    if(window.scrollY >= home.offsetTop){
        if(!started){
            counters.forEach((num)=> startCount(num))
        }
        started = true
    }
}

function startCount(el){
    let goal = el.dataset.target;
    let count = setInterval(()=>{
        el.textContent ++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal)
}
