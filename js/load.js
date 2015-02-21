/**
 * Created by andy on 09/12/13.
 */

/**
 * This is the main function that is run in the onload event in the populate script, it checks to see if the item "Plan", held inside local storage exists,
 * before loading. This avoids any errors due to the the loop trying to initiate whilst the loadedPlan array is empty.
 * @returns {boolean}
 */
function saveTest(){
    if(localStorage.getItem('Plan').length > 0){
        load()
    }
}


/**
 * Saves the plan and converts the objects into a JSON string allowing them to be saved.
 */
function savePlan(){
    localStorage.setItem('Plan', JSON.stringify(plans));
}

/**
 * Loads the Plan and saves it to the variable loadedPlan, this variable is an array which the following for loop loops through taking away junk that has been added to the time string,
 * this allows it to be converted back into a date object.
 *
 * It then labels each of them a prototype of the Plan type, allowing them to access the Methods of the class.
 *
 * Afterwards it pushes them into the plans array which is one of the main arrays for presenting information onto the users screen.
 */
function load(){
    var loadedPlan = JSON.parse(localStorage.getItem('Plan'));
    for(var i = 0; i < loadedPlan.length; i++){
        console.log(loadedPlan[i].datetime);
        var rT = loadedPlan[i].datetime.replace('T', ' ');
        var rZ = rT.replace('0Z', '');
        loadedPlan[i].datetime = new Date(rZ);
        console.log(loadedPlan[i].datetime);
        loadedPlan[i].__proto__ = Plan.prototype;
        plans.push(loadedPlan[i]);
    }
}



