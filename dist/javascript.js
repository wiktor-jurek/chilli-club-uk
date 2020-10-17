membershipSelector = document.querySelector('#membership-selector')
costOfEntry = document.querySelectorAll(".cost-of-entry")
chilliKitOption = document.querySelector("#chilli-kit-option")


membershipSelector.addEventListener("change", function(){
    var opt;
    for ( var i = 0, len = this.options.length; i < len; i++ ) {
        opt = this.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    let value = opt.value.match(/\d+/)[0];
    
    costOfEntry.forEach(element => {
        element.innerHTML = "£" + value;
    });
    console.log(value)

    if (value == 2){
        chilliKitOption.classList.add('hidden')
    } else{
        chilliKitOption.classList.remove('hidden')

    }


    
    return opt.value;


});