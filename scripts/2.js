$(document).ready(function () {
				$('#checking').hide();
				$('#b1').click(function () {
								var UserName = $('#UserName').val();
                						$('#checking').show();
                						$.getJSON("/Account/checkUserName?UserName=" + UserName, function (data)
                						{
                    							$('#checking').hide();
                    							if (data) {
                    							    $('#result').text("User already exists in database");
                    							}
                    							else {
                    							    $('#result').text("User Name is available");
                    							      }
               							 });

           						   });

        			});
             