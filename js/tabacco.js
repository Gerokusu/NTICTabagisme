$(document).ready(function()
{
    var SELECTOR_COUNTER = "#tabacco-death-counter";
    var SELECTOR_COUNTER_PASSIVE = "#tabacco-death-counter-passive";

    /* Store the articles positions to an array */
    var counterDiv = $(SELECTOR_COUNTER).first();
    var counter = 5;
    setInterval(function()
    {
        counterDiv.text(++counter);
    }, 6000);

    var counterPassiveDiv = $(SELECTOR_COUNTER).first();
    var counterPassive = 2;
    setInterval(function()
    {
        counterPassiveDiv.text(++counterPassive);
    }, 47000);
});
