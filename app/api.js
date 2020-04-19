$(document).ready(function() {
	function getTriviaData() {
		fetch('https://opentdb.com/api.php?amount=10000')
		.then((response) => {
		    return response.json()
		})
		.then((data) => {
		    return console.log(data)
		})
		.catch((error) => console.log(error))
	}

	$("#new_question").click(function() {
		getTriviaData();
	});
});

/*

$(document).ready(function() {
	$("#new_question").click(function() {
		getTriviaData();
	});

	function getTriviaData() {
		fetch('https://opentdb.com/api.php?amount=10000')
		.then((response) => {
		    return response.json()
		})
		.then((categories) => {
		    let output = '<h3>Categories</h3>';
		    output += '<ul>';
		    categories.forEach(function(data) {
		    	output += `
		    	<li>
		    		${data.category}
		    	</li>
		    `;
		});
		output += '</ul>'
		return output 
		$("#response").html(output);
	});
	}
});

*/
//Example object
//{
 //   "response_code": 0,
   //     "results":
    //[{
      //  "category": "History",
      //  "type": "multiple", "difficulty": "easy", 
      //"question": "What was William Frederick Cody better known as?", "correct_answer": "Buffalo Bill", 
      //"incorrect_answers": ["Billy the Kid", "Wild Bill Hickok", "Pawnee Bill"]
    //}, 
//
/*

$(document).ready(function() {
	fetch('https://opentdb.com/api.php?amount=10000')
	.then((response) => {
	    return response.json()
	})
	.then((data) => {
	    $("#categories").html(data.category);
	})
	.catch((error) => console.log(error))
});

$(document).ready(function() {
	$ajax({
		method: 'GET',
		url: 'https://opentdb.com/api.php?amount=10000',
		dataType: 'json',
		success: onSuccess,
		error: onError,
	})

	function onSuccess(jsonReturn){
		var data = jsonReturn.results.category;
		data.appendTo($("#categories"));
	}

	function onError() {
		console.log(error);
	}
});


$(document).ready(function() {
	function getTriviaData() {
		fetch('https://opentdb.com/api.php?amount=10000')
		.then((response) => {
		    return response.json()
		})
		.then((data) => {
		    var category_data = data.results.category;
		    category_data.append($("#categories"));
		})
		.catch((error) => console.log(error))
	}

	$("#new_question").click(function() {
		getTriviaData();
	});
});

*/