/*====================================
=         ALL THE EMAIL CODE         =
====================================*/

var serverAddress = 'https://empanada-life.herokuapp.com';

function subscribeEmailToList() {
  // adds an email to the mailing list, denies duplicates
  var user_input = document.getElementById('email-input').value;
  console.log('Subscribe request: ' + user_input);
  var post_command = '/testRoute'; // '/subscribe-email';
  var post_url = serverAddress + post_command;

  let data = {
    email: user_input
  };
  console.log('Data: ' + data + '\n Stringified: '+ JSON.stringify(data));
  let fetchData = {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    email: user_input
  }

/*   var data = {
    method: "POST",
    headers: new Headers( {
      "Access-Control-Allow-Origin": "http://empanada.life"
    }),
    mode: 'no-cors',
    email: user_input
   };
 */


  fetch(post_url, fetchData)
  .then(function(response){
    status = response.status;
    console.log('recieved response! = ' + response);
    console.log('Stringified: ' + JSON.stringify(response));
    console.log('Subscribe for --'+user_input+'-- status: ' + status);
  })
  .catch(function(error){
    console.log(error);
  });

  return null;
}

function getSubscriberCount() {
  // prints the number of subscribers on the list
  console.log('Subscriber count request initiated.');
  var post_command = '/subscriber-count';
  var post_url = serverAddress + post_command;

  fetch(post_url)
  .then(function(response){
    count = response.count;
    console.log('Subscriber count: ' + count);
  })
  .catch(function(error){
    console.log(error);
  });

  return null;
}

function unsubscribeEmailFromList() {
  //removes an email from the mailing list
  var user_input = document.getElementById('email-input');
  console.log('Unsubscribe request: ' + user_input);
  var post_command = '/unsubscribe-email';
  var post_url = serverAddress + post_command;
  var data = { email: user_input };

  fetch(post_url, data)
  .then(function(response){
    status = response.status;
    console.log('Unsubscribe --'+user_input+'-- status: ' + status);
  })
  .catch(function(error){
    console.log(error);
  });

  return null;
}
