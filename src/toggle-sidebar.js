const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

const togglesidebar = function () {
    hamburger.addEventListener('click',function() {
        sidebar.classList.toggle('hidden');
    })    
};

export {togglesidebar};