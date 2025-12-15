import outsideClick from "./outside.js"


export default function initDropMenu(){
    const dropdownmenus = document.querySelectorAll('[data-dropdown]')


    dropdownmenus.forEach(menu =>{
        ['touchstart','click'].forEach(Userevent=>{
            menu.addEventListener(Userevent,handleClick)
        })
        
    })

    function handleClick(event){
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this,['touchstart','click'],() => {
            this.classList.remove('active')
        })


    }


}



