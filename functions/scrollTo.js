export function scrollTo(props){
    const element = document.querySelector(`#${props}`) 
    element.scrollIntoView({behavior: 'smooth', block:'start'})  
}
