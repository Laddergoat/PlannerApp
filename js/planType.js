/**
 * Created by andy on 09/12/13.
 */
/**
 *
 * @param title - The title of the plan a required field for submitting and writing to page. - User Input
 * @param note  - The note of a plan is optional, a small text field that allows the user to add a short description. - User Input
 * @param date  - Takes the date currently selected on the DatePicker.
 * @param time  - The time of the plan is added by the user and is required in order to organise each plan in chronological order.
 * @param duration  - The duration is a rough estimation of time for the amount of time each plan will consume, it is used to calculate the percentages on the progress bar, for this reason it is a mandatory field
 * @param category - The Category reflects the type of activity the user has undertake, this is used again on the progress bar.
 * @constructor
 */
function Plan(title, note, date, time, duration, category){
    this.title = title;
    this.note = note;
    this.datetime = new Date(date + " " + time);
    this.duration = duration;
    this.category = category;
}

/**
 * Builds the html output for each Plan.
 * @returns {string}
 */
Plan.prototype.listPlan = function(){
    return "<li><div class = 'plan'><div class = 'plantitle'>" +
        this.title + "</div><div class = 'plannote'>" +
        this.note + "</div><div class = 'plantime'>" +
        this.displayHours() + ":" + this.displayMinutes() + "</div><div class = 'planduration'>" +
        this.duration + "</div><div class = 'plancategory'>" +
        this.category + "</div><div class = '" + this.category + "'></div></div></li>"
};

/**
 * Formats the hours field from the datetime attribute to make it more readable, then returns it for displaying to screen.
 * @returns {string}
 */

Plan.prototype.displayHours = function(){
    var h = this.datetime.getHours();
    if(h < 10){
        return ("0" + h.toString());
    }
    else{
        return h.toString();
    }
};
/**
 * Formats the minutes field from the datetime attribute to make it more readable, then returns it for displaying to the screen.
 * @returns {string}
 */
Plan.prototype.displayMinutes = function(){
    var m = this.datetime.getMinutes();
    if(m < 10){
        return ("0" + m.toString());
    }
    else{
        return m.toString();
    }
};