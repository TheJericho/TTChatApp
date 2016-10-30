$(document).ready(function () {
    setInterval(function () {
        //code goes here that will be run every 1 seconds.   
        $("#messages").load('/messages');
    }, 1000);
});
sendMessage = function () {
    var messageToSend = $("#thismessage").val()
    $.ajax({
        url: '/messages/send/',
        type: 'POST',
        data: {message: messageToSend}
        success: function (data) {
            //something here if anything happens
        }
    });
    $("#thismessage").val('');
}
sendThroughEnter = function () {
    $("#thismessage").keyup(function (e) {
        /*
         * Delay the enter key form submit till after the hidden
         * input is updated.
         */

        if (e.which !== 13) {
            return;
        } else {

            // Prevent form submit
            e.preventDefault();

            sendMessage();


        }
    });

}
