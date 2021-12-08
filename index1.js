


$(document).ready(function () {
    $("#button12").click(function () {
        let city = document.getElementById("searching").value;
        console.log(city);
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fefd521010a45d0d5f47544b5c8df475`, success: function (result) {
               // $(".important").html(result);
                console.log(result['main']);
                document.querySelector('.important').innerHTML='Location: <b>'+result['name']+'</b> &emsp; Temperature: <b>'+result['main']['temp']+'&#8451;</b>';
            }
        });
    });
});

