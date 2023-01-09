// $("#login-form").submit(function (event) {
//     event.preventDefault();
//     let values = $(this).serialize();
//     console.log(values);
//     // alert(value);
//     let emailInput = $("#email");
//     let passwordInput = $("#pwd");
//     console.log("emailInput", emailInput.val());
//     console.log("passInput", passwordInput.val());
//     $.ajax({
//         type: "GET",
//         url: " https://api.jsonserver.io/login",
//         headers: {"X-Jsio-Token": "c71a1a052d7adea8da5b1e61617e47ad"},
//         data: values,
//         beforeSend: function () {
//             if ($("#checkbox").is(":checked")) {
//                 console.log("checked");
//             } else {
//                 $("#login-form").get(0).reset();
//             }
//         },
//         success: function (res) {
//             console.log(res);
//             if (res && res.message) {
//                 alert(res.message);
//             }
//             // alert("done");
//         },
//         error: function () {
//             alert("ng")
//         },
//     })
// })

$("#contact-form").submit(function (event) {
    event.preventDefault();
    alert("Done!")
})