let counterValue = 0;
const decrBtn = document.querySelector(`[data-action = "decrement"]`);
const incrBtn = document.querySelector(`[data-action = "increment"]`);
const result = document.querySelector(`#value`)

decrBtn.addEventListener(`click`, ()=>{
    counterValue -=1;
    result.innerHTML = counterValue
})
incrBtn.addEventListener(`click`, ()=>{
    counterValue +=1;
    result.innerHTML = counterValue
})