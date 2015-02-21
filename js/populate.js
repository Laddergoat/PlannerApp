/**
 * Created by Andy on 28/11/13.
 */


/**
 *
 * @type {HTMLElement} - Gets the sortable ul from the HTML page using the id.
 */
var sortable = document.getElementById("sortable");

/**
 *
 * @type {Array} - plans stores all of the Plan types that are created, hits temporarily stores Plan types after they are searched through.
 */
var plans = [],
    hits = [],
    date = new Date();
/**
 * Assignment of variables tha may be required globally.
 */
var pTitle, pNote, pTime, pDate, pDuration, pCategory, selectedDate, searchDate, context, canvas;

/**
 * Onload function that gets all of the required HTML elements and sets the page up.
 * Runs required startup functions.
 */
window.onload = function(){
    pTitle = document.getElementById("plantitle");
    pNote = document.getElementById("plannote");
    pDate = document.getElementById("plandate");
    pTime = document.getElementById("plantime");
    pDuration = document.getElementById("planduration");
    pCategory = document.getElementById("plancategory");
    selectedDate = document.getElementById("plandate").value;
    searchDate = new Date(selectedDate);
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    saveTest();
    checkDates();
};

/**
 * Adds a plan taking the values of each of the previously retrieved elements, assigning the value to a variable inside the function.
 *
 *assigns a variable to each function run to store the value returned. This will be a boolean from the validate functions.
 *
 * Checks each variable and if not true returns to stop the function.
 *
 * var p then calls the createPlan function .
 *
 * P is then pushed into plans.
 *
 * The check date function is then run to match dates and display on plans that are on the selected date.
 *
 * the plan is then saved using the save function and then clearPlan is run to set all the form values to null, reseting them for the next entry.
 */
function addPlan(){
    var title = pTitle.value;
    var note = pNote.value;
    var date = pDate.value;
    var time = pTime.value;
    var duration = pDuration.value;
    var category = pCategory.value;

    var titleCheck = checkTitle(title);
    var timeCheck =  checkTime(time);
    var durationCheck = checkDuration(duration);

    if(!titleCheck || !timeCheck || !durationCheck){
        return;
    }

    var p = createPlan(title, note, date, time, duration, category);
    plans.push(p);
    checkDates();
    savePlan();
    clearPlan();
}

/**
 *This function takes all the same parameters the plan type takes and returns them to create a new Plan.
 * @param title
 * @param note
 * @param date
 * @param time
 * @param duration
 * @param category
 * @returns {Plan}
 */
function createPlan(title, note, date, time, duration, category){
    return new Plan(title, note, date, time, duration, category);
}


/**
 * This function reattains the value of the plandate text box. This ensures that the date is updated to the currently selected date.
 */
function refreshDate(){
    selectedDate = document.getElementById("plandate").value;
    searchDate = new Date(selectedDate);
}
/**
 * Cycles through the plans array and if the date matches the date that is selected in the plandate field and pushes the matches into the hits array.
 *
 * This also sorts the date time into chronological order.
 */
function checkDates(){
    hits =[];
    for(var i = 0; i < plans.length; i++){
        var pd = plans[i].datetime.toDateString(),
            cd = searchDate.toDateString();

        if(pd === cd){
            hits.push(plans[i]);
            hits.sort(function(x, y){
                var a=new Date(x.datetime),
                    b=new Date(y.datetime);
                return a-b;
            });
        }
    }
    calculatePercentage();
    updatePlan();
}

/**
 * This function writes the plan to the page. It cycles through the hits array and adds it to the row variable.
 */
function updatePlan(){
    var row = "";
    for (var i=0; i < hits.length; i++){
        var plan = hits[i];
        row += plan.listPlan();
    }
    sortable.innerHTML = row;
}

/**
 * calls the refreshDate function.
 * Also sets the innerHTML to null clearing all content on the page.
 * It then empties the hits array.
 *Then it runs the checkDates in order to obtain any dates that match the current selected date.
 */
function clearPage(){
    refreshDate();
    sortable.innerHTML = "";
    hits = [];
    checkDates();
}

/**
 * This function takes the plan form and sets all of the values to null in order to leave them empty for the next plan being input.
 */
function clearPlan(){
    pTitle.value = "";
    pNote.value = "";
    pTime.value = "";
    pDuration.value = "";
    pCategory.value = "E";
    plantitle.style.background = "";
    plantime.style.background = "";
}
