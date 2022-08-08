
export const  scrollTo = (props)=>{
    const element = document.getElementById(`#${props}`)
    element.scrollIntoView({
        behavior:"smooth",
        block:'start'
    })
}

   
console.log(scrollTo('contact'))