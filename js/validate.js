/**
 * Created by andy on 09/12/13.
 */
/**
 *
 * @param pTime - Takes the time from the and checks it against a regular expression to insure that it is a valid time.
 * @returns {boolean} - Returns true or false to tell the if statement within the function it is called in whether or not to allow the users input.
 */

function checkTime(pTime) {
    var isValid = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(pTime);

    if (isValid) {
        return true;
    } else {
        //plantime.style.backgroundColor = '#fba';
        return false;
    }
}

/**
 *
 * @param title - Takes the title and insures that it is not null by checking it against a null value.
 * @returns {boolean} - Returns true or false to tell the if statement within the function it is called in whether or not to allow the users input.
 */
function checkTitle(title){
    if(title == ""){
        //plantitle.style.backgroundColor = "#fba";
        return false;
    }
    return true;
}

/**
 *
 * @param duration - Takes the input duration to check that it is anything about 0 and anything bellow 24.
 * @returns {boolean} - Returns true or false to tell the if statement within the function it is called in whether or not to allow the users input.
 */
function checkDuration(duration){

    if(!duration > 0 && !duration < 24){
        //planduration.style.backgroundColor = "#fba";
        return false;
    }
    //planduration.style.backgroundColor = "#fff";
    return true;
}