function set(){
    let elements = document.getElementsByName('cssProperty');
    //returns an array because of getElementsByName method

    console.log(elements);
    //check if data is fetched

    for(let index=0; index < elements.length; index++){

        // console.log(elements[index].getAttribute('id'))
        
        // console.log(elements[index].value);

        let cssProperty = elements[index].getAttribute('id');

        let cssValue= elements[index].value;

        console.log(cssProperty,cssValue);

        let div = document.getElementById('modify');

        div.style[cssProperty] = cssValue;
    }
}


document.getElementById('set').addEventListener('click',set)