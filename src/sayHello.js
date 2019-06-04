exports.greet = (name) => { 
    let returnVal = '';
    if(name == null)
    {
        returnVal = 'warning, no name entered';
    }
    else{
        returnVal = 'Hello, ' + name; 
    }

    return returnVal;
};