let value = document.querySelector('.valeur')
let result = document.querySelector('.resultat')
let button = document.querySelector('.button')


button.addEventListener('click',()=>{

    let option =  document.querySelector('#monselect1');
    let option2 = document.querySelector('#monselect2');
    let response

    if(option.value==="km"){
        if (option2.value==="km"){
            response=value.value*1
            result.innerHTML=response + "km"
        }
        else if(option2.value==="m"){
            response=value.value*1000
            result.innerHTML=response + "m"
        }
        else if (option2.value==="cm"){
            response=value.value*100000
            result.innerHTML=response + "cm"
        }
        else {
            result.innerHTML="ERROR"
        }
    }
    if(option.value==="m"){
        if (option2.value==="km"){
            response=value.value/1000
            result.innerHTML=response+ "km"
        }
        else if(option2.value==="m"){
            response=value.value*1
            result.innerHTML=response+ "m"
        }
        else if (option2.value==="cm"){
            response=value.value*100
            result.innerHTML=response+ "cm"
        }
        else {
            result.innerHTML="ERROR"
        }
    }
    if(option.value==="cm"){
        if (option2.value==="km"){
            response=value.value/100000
            result.innerHTML=response+ "km"
        }
        else if(option2.value==="m"){
            response=value.value/100
            result.innerHTML=response+ "m"
        }
        else if (option2.value==="cm"){
            response=value.value*1
            result.innerHTML=response+ "cm"
        }
        else {
            result.innerHTML="ERROR"
        }
    }


})







