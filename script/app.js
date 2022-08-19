function getPin(){
    const pin=generatePin();
    const pinString=pin+''
    if(pinString.length===4){
        return pin
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random=Math.round (Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin =getPin()
    const displayField=document.getElementById('display-field')
    displayField.value=pin;
})

document.getElementById('calculator').addEventListener('click' , function(event){
    const number=event.target.innerText
    const typedNumberField=document.getElementById('typed-number')
    const previousTypedNumber=typedNumberField.value
    if(isNaN(number)){
      if(number==='C'){
        typedNumberField.value=''
      }
      else if(number==='<'){
        const digit=previousTypedNumber.split('')
        digit.pop()
        const remainingDigit=digit.join('')
        typedNumberField.value= remainingDigit
      }
    }
    else{
        const newTypedNumber= previousTypedNumber + number
        typedNumberField.value=newTypedNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function(){
    const displayPinField=document.getElementById('display-field')
    const currentPin=displayPinField.value

    const typedNumberField = document.getElementById('typed-number')
    const typedNumber=typedNumberField.value
    const pinSuccess=document.getElementById('pin-success')
    const pinError=document.getElementById('pin-error')
    if(typedNumber===currentPin){

        pinSuccess.style.display='block'
        pinError.style.display='none'
    }
    else{

        pinError.style.display='block'
        pinSuccess.style.display='none'
    }
})