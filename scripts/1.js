
$(document).ready(function () {
                                $('#checking').hide();
                                $('#b1').click(function () {
                                var userName = $('#UserName').val();
                                $('#checking').show();
                                $.getJSON("/Account/checkUser?UserName=" + userName, function (data) {
                                    $('#checking').hide();
                                    if (data == false) {
                                                            $('#question').text("User Doesn't Exist");
                                                           }
                                    else {
                                                $('#question').text(data);
                                         }
        });

    });

});