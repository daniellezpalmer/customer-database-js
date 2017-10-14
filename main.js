let DOMcontainer = document.getElementById('cont1');

for (let i = 0; i < customers.results.length; i++) {

  let div = document.createElement('div');
  DOMcontainer.appendChild(div);
  div.setAttribute('class', 'personInfo')
  let lastName = customers.results[i].name.first;
  let firstName = customers.results[i].name.last;
  let fullName = `${firstName} ${lastName}`;
  let email = customers.results[i].email;
  let street = customers.results[i].location.street;
  let city = customers.results[i].location.city;
  let state = customers.results[i].location.state;
  let zip = customers.results[i].location.postcode;
  let cityStZip = `${city}, ${state} ${zip}`
  let phone = customers.results[i].cell;
  let ssn = customers.results[i].id.value;
  let pic = customers.results[i].picture.large;

  let subcontainer = `
      <img src="${pic}" alt="">
      <div class="text" id="text1">
      <p class="fullName" >${fullName}</p>
      <p class="email" >${email}</p>
      <p class="address" >${street}</p>
      <p class="cityStZip" >${cityStZip}</p>
      <p class="phone" >${phone}</p>
      <p class="ssn" >${ssn}</p>
    </div>
  `
  
div.innerHTML = subcontainer;

}
