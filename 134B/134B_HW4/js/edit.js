function updateHabit() {
    var removedHabit = localStorage.getItem("habitList");
    var arrayHabit = JSON.parse(removedHabit);

    var j = 0;

    // If I have the index number in which it's in, it's easier (figure out more efficient way)
    // Inefficient way
    while (j < arrayHabit.length) {

        var individualHabit = JSON.parse(arrayHabit[j]);
        var updatedHabitID = localStorage.getItem("habitEditID");

        if (updatedHabitID === individualHabit.id) {
            console.log("Id matched");
            var titleValue = document.getElementById("title").value;
            var habitValue = document.getElementById("habits").value;

            console.log("update.js Icon Name: " + habitValue);

            var dayArray = document.getElementsByName("date[]");
            var dayLength = dayArray.length;
            var dayData = Array();
            for (k = 0; k < dayLength; k++)
            {
                dayData[k] = dayArray[k].checked;
            }
            var dayString = JSON.stringify(dayData);

            var freqArray = document.getElementsByName("day[]");
            var freqLength = freqArray.length;
            var freqData = Array();
            for (i = 0; i < freqLength; i++)
            {
                freqData[i] = freqArray[i].checked;
            }
            var freqString = JSON.stringify(freqData);
            var otherValue = document.getElementById("others").value;
            individualHabit.title = titleValue;
            individualHabit.icon = habitValue;
            individualHabit.day = dayString;
            individualHabit.freqOther = otherValue;
            individualHabit.freq = freqString;
            arrayHabit[j] = JSON.stringify(individualHabit);

            break;
        }

        j++;

    }
    localStorage.setItem("habitList", JSON.stringify(arrayHabit));
}


function editHabit(element) {
	//var output = document.getElementsByClassName("forms");
	var child = element.parentNode.parentNode;

	console.log("Edit Habit JS " + child.id);

	var habitToEdit = localStorage.getItem("habitList");
	var arrayHabit = JSON.parse(habitToEdit);

	var i = 0;

	while( i < arrayHabit.length ) {
                    
        var individualHabit = JSON.parse(arrayHabit[i]);

        if(child.id == ("habit-" + individualHabit.id) ) {
            console.log("Id matched");
            console.log(JSON.stringify(individualHabit));

            localStorage.setItem("editHabit", JSON.stringify(individualHabit));

            break;
        }

        i++;
    }
}

// JQuery, create listeners when the document is ready
$(document).ready(function() {
    // Handle checkbox for daily frequency, allow only one to be selected at a time,
    // or, only the custom input
    $("#freq1Btn").click(function() {
        $("#freq1Btn").toggle();
        $("#freq2Btn").prop("checked", false);
        $("#freq3Btn").prop("checked", false);
    });
    $("#freq2Btn").click(function() {
        $("#freq2Btn").toggle();
        $("#freq1Btn").prop("checked", false);
        $("#freq3Btn").prop("checked", false);
    });
    $("#freq3Btn").click(function() {   
        $("#freq3Btn").toggle();
        $("#freq1Btn").prop("checked", false);
        $("#freq2Btn").prop("checked", false);
    });
    $("#others").click(function() {
        console.log("other click");
        $("#freq1Btn").prop("checked", false);
        $("#freq2Btn").prop("checked", false);
        $("#freq3Btn").prop("checked", false);
    });
});