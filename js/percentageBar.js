/**
 * Created by Andy on 09/12/13.
 */


/**
 * Resets the Canvas just in case there is already an image on the canvas.
 * This function calculates the percentages of each category (E, S, R). It then adds them to the total.
 * The variables contained inside this function are assigned here so that each time the function is run they are reset to zero.
 * The function then draws the to the canvas based off of their totals, divided by the overall total and then multiplied by the canvas size.
 */
function calculatePercentage(){

    clear(context);
    var e = 0,
        s = 0,
        r = 0;
    var total = 0;

    for(var i = 0; i<hits.length; i++){
        var add = parseFloat(hits[i].duration);
        if(hits[i].category == "E"){
            e = e + add;
        }
        if(hits[i].category == "S"){
            s = s + add;
        }
        if(hits[i].category == "R"){
            r = r + add;
        }
    }

    total = e + r + s;
    var ePercent = (e/total) * 760,
        sPercent = (s/total) * 760,
        rPercent = (r/total) * 760;
    console.log(ePercent + " " + sPercent + " " + rPercent);
    draw(context, 0, ePercent, "#bdecb6");
    draw(context, ePercent, sPercent, "#87ceeb");
    draw(context, ePercent + sPercent, rPercent, "#ff7878");

}

/**
 * The Draw function used above to draw rectangles representing the percentages calculated above onto the canvas.
 * @param ctx - The context of the canvas.
 * @param x   - The X axis for the starting point for each of the bars. For the first this is 0 and for the others it's based on the ending point of the other rectangles.
 * @param w   - The width of each rectangle, this is taken for the Percentages calculated and saved above.
 * @param c   - The color of the Rectangle.
 */
function draw(ctx, x, w, c){
    ctx.beginPath();
    ctx.rect(x, 0, w, 50);
    ctx.fillStyle = c;
    ctx.fill();
    ctx.closePath();
}


/**
 * Clears the width and height of the canvas starting from 0 on the X and Y axis.
 * @param ctx - THe context of the canvas.
 */
function clear(ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}