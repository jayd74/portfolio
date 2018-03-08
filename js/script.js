const myWork = {};

// myWork.getWakaTime = (wakaTime) => {
//     return $.ajax({
//         type: 'GET',
//         url: 'https://wakatime.com/share/@jayd74/71d994ec-2f76-4774-afe8-3478cb28eb0a.json',
//         dataType: 'jsonp',
//         success: function (response) {
//             console.log(response.data);
//         },
//     });
// }

myWork.init = function (){
    // myWork.getWakaTime();
}

$(function () {
    myWork.init();
})
