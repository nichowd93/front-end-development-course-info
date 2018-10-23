$(document).ready(function () {

    $('#btnAddNumbers').on('click', function () {
		debugger;
        /*
            Retrieve the numbers from the input fields
        */
        var firstNumber = $('txtFirstNumber').val(5);
        var secondNumber = $('txtSecondNumber').val();
        
        /*
            Add the two numbers together
        */
        var sum = firstNumber + secondNumber;

        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        if(sum => 10){
            $('txtThirdNumber').addClass('.blue');
            $('txtThirdNumber').RemoveClass('red');
        }else{
            $('txtThirdNumber').addClass('red');
            $('txtThirdNumber').RemoveClass('.blue');
        }

        /*
            Update the third input field with our value.
        */
        $('#txtThirNumber').val() = sum;
		
		/*
			Alert the user 
		*/
		console.alert("sum");
    });



});