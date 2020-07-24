
// paypal.Buttons({
//     createOrder: function(data, actions) {
//         let amountPayable = localStorage.getItem('TotalAmountToBePaid');
//         return actions.order.create({
//             purchase_units: [{
//                 amount: {
//                     //enter the total amount here
//                     value: amountPayable
//                 }
//             }]
//         });
//     },
//     onApprove: function(data, actions) {

//         return actions.order.capture().then(function(details) {
//             //capture transaction success here
//             alert('Dear '+ details.payer.name.given_name+', thank you for using Crystal Tours. Your Payment has been received');
//             // Call your server to save the transaction
//             return fetch('/paypal-transaction-complete', {
//                 method: 'post',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     orderID: data.orderID
//                 })
//             });
//         });
//     }
// }).render('#paypal-button-container');
