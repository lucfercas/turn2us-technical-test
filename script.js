
const dobInput = document.getElementById('ClientDob');
dobInput.addEventListener('input', function(e) {
    let input = e.target.value;
    
    // Remove any characters that are not digits
    input = input.replace(/[^0-9]/g, '');

    // Format the input with slashes, checking length each step
    let newInput = "";
    if (input.length > 0) {
        newInput += input.substring(0, Math.min(2, input.length));
    }
    if (input.length > 2) {
        newInput += '/' + input.substring(2, Math.min(4, input.length));
    }
    if (input.length > 4) {
        newInput += '/' + input.substring(4, 8); // Adjust the max length if needed
    }

    // Update the input field's value
    e.target.value = newInput;
});



