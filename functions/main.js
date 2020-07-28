jQuery(document).ready()
{


  // ============ Global ==================================================================================
    const requestURL = 'http://localhost:88/func/test.php';
    // const requestURL = 'https://api.crystaltourskenya.com/index.php';

  // ============ HOTEL SEARCH sECTION =====================================================================
  
    const country_codes=["AL","AD","AG","AR","AW","AU","AT","AZ","BS","BH","BB","BY","BE","BO","BA","BW","BR","BN","BG","KH","CM","CA","CL","CN","CO","CK","CR","HR","CY","CZ","DK","DO","EC","EG","EE","ET","FJ","FI","FR","PF","DE","GI","GR","GD","GP","GU","GT","HK","HU","IS","IN","ID","IE","IL","IT","JM","JP","JO","KE","KW","LA","LV","LB","LY","LI","LT","LU","MO","MY","MT","MU","MX","MC","MN","MA","MM","NA","NP","NL","AN","NC","NZ","NG","MP","NO","OM","PW","PA","PY","PE","PH","PL","PT","PR","QA","RO","RU","RU","WS","SM","SA","SN","RS","SC","SG","SK","SI","ZA","KR","ES","LK","KN","LC","VC","SZ","SE","CH","TW","TZ","TH","TO","TT","TN","TR","TC","UA","AE","GB","US","UY","VU","VE","VN","VI","YE","ZM","ZW","UG","RW", "BI",
                        "DZ","MW","GH"];
    const countries=["Albania", "Andorra", "Antigua", "Argentina", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Barbados", "Belarus", "Belgium", "Bolivia", "Bosnia Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Cambodia", "Cameroon", "Canada", "Chile", "China", "Colombia", "Cook Islands", "Costa Rica", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Dominican Republic", "Ecuador", "Egypt", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Polynesia", "Germany", "Gibraltar", "Greece", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Ireland(Republic of)", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kenya", "Kuwait", "Laos", "Latvia", "Lebanon", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Malaysia", "Malta", "Mauritius", "Mexico", "Monaco", "Mongolia", "Morocco", "Myanmar", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nigeria", "Northern Mariana Isl", "Norway", "Oman", "Palau", "Panama", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Russian Federation", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent &amp; Grenadi", "Swaziland", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turks &amp; Caicos Islan", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (USA)", "Yemen Republic", "Zambia", "Zimbabwe", "Uganda", "Rwanda", "Burundi",
                        "Algeria","Malawi","Ghana"]
    let cities = [];
    let city_codes = [];
    let NationalityCities = [];
    let NationalityCityCodes = [];
    let SessionID;
    let Hotels = [];
    let HotelsToDisplay = [];
    let HotelDetail = [];
    let Rooms = [];
    let CancellationPolicy = [];
    let adultArrToBeSent = [];
    let childArrToBeSent = [];
    let AgeForChildren = [];
    let SelectedRooms = [];
    let mySelecteRoomsIds = [];
    let OurGuests = [];
    let BookingResultIndex;
    let BookingHotelCode;
    let BookingHotelName;
    let myNight;
    let RoomCombination = [];
    let IndexesForA_and_Pricing = [];
    let BookClientReferenceNumber;
    let TotalAmountToBePaid;

    let sessionMonitor;



    // Variables
    const hotelSearchButton = document.querySelector('#hotelSearchBtn');
    const countryInput = document.querySelector('#countryInput');
    const cityInput = document.querySelector('#cityInput');
    const checkInInput = document.querySelector('#checkInInput');
    const checkOutInput = document.querySelector('#checkOutInput');
    const roomInput = document.querySelector('#roomInput');
    const nationalityInput = document.querySelector('#nationalityInput');


    const formRoomGuestDropDown = document.querySelector('#guest_dropdown');
    const formRoomGuest = document.querySelector('#form_wrap_guest');

    // Hotel search Form
    const form_search_error = document.querySelector('#form_search_error');
    const nights = document.querySelector('#nights');

    // Hotel list
    const hotelListCardGroup = document.querySelector('#hotel_list_card_group');

    // HotelDetail
    const hotelDetailMainWrap = document.querySelector('#hotel_detail_main_wrap');


    // Booking
    
    const bookingInputLeadAdress1 = document.querySelector('#bookingInputLeadAdress1');
    const bookingInputLeadAdress2 = document.querySelector('#bookingInputLeadAdress2');
    const bookingPhoneCode = document.querySelector('#bookingLeadPhoneCode');
    const bookingPhoneNumber = document.querySelector('#bookingLeadPhoneNumber');

    const bookingInputLeadEmail = document.querySelector('#bookingInputLeadEmail');
    const bookingInputLeadCity = document.querySelector('#bookingInputLeadCity');

    const bookingResults = document.querySelector('#booking_results');

        
    // Aoutocomplete Countries
    autocomplete(countryInput, countries);
    autocomplete(nationalityInput, countries);


    // Onload
    onPageLoad();


function onPageLoad(){
  // location.reload(true);
  jQuery('#hotel_search_section').show();
  jQuery('#hotel_list_section').hide();
  jQuery('#hotel_detail_section').hide();
  jQuery('#booking_section').hide();
  countryInput.focus();
  clearTimeout(sessionMonitor);
}

function toSearchPage(){
  // location.reload(true);
  jQuery('#hotel_search_section').show();
  jQuery('#hotel_list_section').show();
  jQuery('#hotel_detail_section').hide();
  jQuery('#booking_section').hide();
  countryInput.focus();
  clearTimeout(sessionMonitor);
}

function toHotelListPage(){
  jQuery('#hotel_search_section').show();
  jQuery('#hotel_list_section').show();
  jQuery('#hotel_detail_section').hide();
  jQuery('#booking_section').hide();
  window.scrollTo(0,1100);
}

function toDetailsPage(){
  window.scrollTo(0,0);
  jQuery('#hotel_search_section').hide();
  jQuery('#hotel_list_section').hide();
  jQuery('#hotel_detail_section').show();
  jQuery('#booking_section').hide();
}

function toBookingPage(){
  jQuery('#hotel_search_section').hide();
  jQuery('#hotel_list_section').hide();

  jQuery('#hotel_detail_section').slideUp(3000, function(){
    window.scrollTo(0,0);
    jQuery('#booking_section').slideDown(2000);
    getNationalityCities();
    jQuery('#payment_div_wrap').hide();
    jQuery('#book_detail_section').hide();
    jQuery('#successfull_wrap ').hide();

  });
 
}





function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}








// get cities
cityInput.addEventListener('keydown', ()=>{

  let code = country_codes[countries.indexOf(titleCase(countryInput.value))];
      jQuery.ajax({
          url: requestURL,
          type: 'post',
          data: { "callDestinationCity": code},
          success : function (data) {
            // alert(data)
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data,"text/xml");
            let cityTag = xmlDoc.getElementsByTagName("City");
            cities = [];
            city_codes = [];
            let i;
            for (i = 0; i < cityTag.length; i++){
              cities.push(cityTag[i].getAttribute('CityName'));
              
              city_codes.push(cityTag[i].getAttribute('CityCode'));
            };                  
            // Auto complete Cities
            autocomplete(document.getElementById("cityInput"), cities);          
          },
          error: function (err) {
            alert(err)
              // alert('Failed!!');
              alert(err)
          }
      });
});



// get nationality cyties and city codes
function getNationalityCities(){
  let code = nationalityInput.value;
      jQuery.ajax({
          url: requestURL,
          type: 'post',
          data: { "callDestinationCity": code},
          success : function (data) {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data,"text/xml");
            let cityTag = xmlDoc.getElementsByTagName("City");
            NationalityCities = [];
            NationalityCityCodes = [];
            let i;
            for (i = 0; i < cityTag.length; i++){
              NationalityCities.push(cityTag[i].getAttribute('CityName'));
              
              NationalityCityCodes.push(cityTag[i].getAttribute('CityCode'));
            };                  
            // Auto complete Cities
            autocomplete(document.getElementById("bookingInputLeadCity"), NationalityCities); 

            let dropdown = document.getElementById('bookingInputLeadCity');
            dropdown.length = 0;

            let defaultOption = document.createElement('option');
            defaultOption.text = '--Select--';

            dropdown.add(defaultOption);
            dropdown.selectedIndex = 0;
            
            NationalityCities.forEach((cc)=>{
              option = document.createElement('option');
              option.text = cc;
              option.value = cc; 
              dropdown.add(option);
          })
            

          },
          error: function (err) {
              alert('Failed!!');
          }
      });
};




jQuery('#checkInInput').datepicker({
  minDate: new Date(),
  onSelect: function(){
    checkOutInput.focus();
  }
});
checkOutInput.addEventListener('focus',()=>{
  let myMinDateForCheckOut = new Date(`${checkInInput.value}`);
  myMinDateForCheckOut.setDate(myMinDateForCheckOut.getDate() + 1);
  jQuery('#checkOutInput').datepicker({ 
    minDate: myMinDateForCheckOut
  });  
});



function openGuestDropdown() {
  if (roomInput.value > 0) {
    formRoomGuestDropDown.className = 'dropleft open'
  }
}

function closeGuestDropdown() {
  formRoomGuestDropDown.className = 'dropleft collapse'
}

function openFormRoomGuest() {
    formRoomGuest.innerHTML = '';
    formRoomGuestDropDown.className = 'dropleft open'
    let i;
    for(i = 1; i <= roomInput.value; i++ ){
       let wrapOne = document.createElement('div');
       wrapOne.classList = 'wrap';

       let formGroupRoom = document.createElement('div');
       formGroupRoom.className = 'form-group';
       let displayRoom = document.createElement('div');
       displayRoom.innerHTML = `Room ${i}`;
       displayRoom.className = 'displayRoom';

       formGroupRoom.appendChild(displayRoom);


       let formGroupAdult = document.createElement('div');
       formGroupAdult.className = 'form-group';
       let inputGroupAdult = document.createElement('div');
       inputGroupAdult.className = 'input-field';


       let selectInputAdult = document.createElement('select');
       selectInputAdult.setAttribute('id', `adultInput${i}`);
       let oPT;
       for ( oPT = 0; oPT < 6; oPT++  ) {
         let selectAdultOption = document.createElement('option');
         selectAdultOption.setAttribute('value', oPT+1);
         selectAdultOption.innerHTML = oPT+1;
         selectInputAdult.appendChild(selectAdultOption);
       }


       let labelAdult = document.createElement('label');
       labelAdult.setAttribute('for', `adultInput${i}`);
       labelAdult.innerHTML = "Adult No";
      
       // inputGroupAdult.appendChild(inputAdult);
       inputGroupAdult.appendChild(selectInputAdult);
       inputGroupAdult.appendChild(labelAdult);
       formGroupAdult.appendChild(inputGroupAdult);
       
       let formGroupChild = document.createElement('div');
       formGroupChild.className = 'form-group';
       let inputGroupChild  = document.createElement('div');
       inputGroupChild.className = 'input-field';
      

       let selectInputChild = document.createElement('select');
       selectInputChild.setAttribute('id', `childInput${i}`);
       selectInputChild.setAttribute('onchange', `childNumberChanged(${i})`);
       let cPT;
       for ( cPT = 0; cPT < 5; cPT++  ) {
         let selectChildOption = document.createElement('option');
         selectChildOption.setAttribute('value', cPT);
         selectChildOption.innerHTML = cPT;
         selectInputChild.appendChild(selectChildOption);
       }

       let labelChild  = document.createElement('label');
       labelChild.setAttribute('for', `childInput${i}`);
       labelChild.innerHTML = "Child No";

       let labelChildAge  = document.createElement('label');
       labelChildAge.setAttribute('for', `childInput${i}`);
       labelChildAge.setAttribute('id', `childAgeLableR${i}`);
       labelChildAge.innerHTML = "Child Age";
       labelChildAge.style.width = '50%';
       labelChildAge.style.margin = '1em 0 0 0em';
       labelChildAge.style.display = 'none';

    
       // inputGroupChild.appendChild(inputChild);

       let totalChildNum;
       for (totalChildNum = 1; totalChildNum < 5; totalChildNum++){
         let selectAge = document.createElement('select');
         selectAge.setAttribute('id', `childAgeR${i}C${totalChildNum}`);
         selectAge.setAttribute('required', 'true');
         selectAge.className = 'mr-3';

         let childAgeArr;
         for (childAgeArr = 0; childAgeArr < 18; childAgeArr++) {
           let optionChildAge = document.createElement('option');
           optionChildAge.setAttribute('value', `${childAgeArr}`);
           optionChildAge.innerHTML = `${childAgeArr}`;
           selectAge.appendChild(optionChildAge);
         }

         selectAge.style.width = '50%';
         selectAge.style.margin = '1em 0 0 0em';
         selectAge.style.display = 'none';
         inputGroupChild.appendChild(selectAge);
       }

       inputGroupChild.appendChild(labelChildAge);
       inputGroupChild.appendChild(selectInputChild);
       inputGroupChild.appendChild(labelChild);

       formGroupChild.appendChild(inputGroupChild);

       wrapOne.appendChild(formGroupRoom);
       wrapOne.appendChild(formGroupAdult);
       wrapOne.appendChild(formGroupChild);

       formRoomGuest.appendChild(wrapOne);

    }
}












function childNumberChanged(R_id) {

  let childInputElement = document.querySelector(`#childInput${R_id}`);
  let childInputValue = childInputElement.value;

  if ( Number(childInputValue) === 0) {
    let myAgeLabel = document.querySelector(`#childAgeLableR${R_id}`);
    myAgeLabel.style.display = 'none';
  }
  if (Number(childInputValue) !== 0) {
    let myAgeLabel = document.querySelector(`#childAgeLableR${R_id}`);
    myAgeLabel.style.display = 'block';
  }


  let childNum;

  for (childNum = 1; childNum <= 4; childNum++) {

    if (childNum <= childInputValue) {
      let myAgeElement = document.querySelector(`#childAgeR${R_id}C${childNum}`);
      myAgeElement.style.display = 'block';
    } else {
      let myAgeElement = document.querySelector(`#childAgeR${R_id}C${childNum}`);
      myAgeElement.style.display = 'none';
    }

  }


}








// Form Validation Section

// countryInput.addEventListener('focusout', ()=>{
//   cityInput.focus();
// });

// cityInput.addEventListener('focusout', ()=>{
//   checkInInput.focus();
// });


// checkOutInput.addEventListener('focusout', ()=>{
//   nationalityInput.focus();
// });


// nationalityInput.addEventListener('focusout', ()=>{
//   roomInput.focus();
// });



// setInterval(()=>{

//   let myIn = new Date(`${checkInInput.value}`);
//   let myOut = new Date(`${checkOutInput.value}`);
//   let one_day=1000*60*60*24

//   myNight = Math.ceil((myOut.getTime()-myIn.getTime())/(one_day));
//   if ( Number(myNight) >= 1 ){
//     nights.innerHTML = `${myNight} <i class="fas fa-moon"></i>`;
//   }

//   if ( roomInput.value === '') {
//     roomInput.className = 'selectEmpty'
//   }
//   if ( roomInput.value !== '') {
//     roomInput.className = 'select'
//   }

//   if ( nationalityInput.value === '---') {
//     nationalityInput.className = 'selectEmpty'
//   }
//   if ( nationalityInput.value !== '---') {
//     nationalityInput.className = 'select'
//   }

// }, 700)





function searchFormValidation() {
  
  if ( countryInput.value === '') {
    form_search_error.innerHTML = 'Please Input Country';
    form_search_error.className = 'form-search-error';
    countryInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = ''; countryInput.focus();  countryInput.parentElement.className = 'input-field'}, 2000);
  }
  else if ( cityInput.value === '') {
    form_search_error.innerHTML = 'Please Input City';
    form_search_error.className = 'form-search-error'
    cityInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = ''; cityInput.focus(); cityInput.parentElement.className = 'input-field'}, 2000);
  }
  else if ( checkInInput.value === '') {
    form_search_error.innerHTML = 'Please Input Check In Date';
    form_search_error.className = 'form-search-error';
    checkInInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = ''; checkInInput.focus(); checkInInput.parentElement.className = 'input-field';}, 2000);
  }
  else if ( checkOutInput.value === '') {
    form_search_error.innerHTML = 'Please Input Check Out Date';
    form_search_error.className = 'form-search-error';
    checkOutInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = ''; checkOutInput.focus(); checkOutInput.parentElement.className = 'input-field';}, 2000);
  }
  else if ( nationalityInput.value === '---') {
    form_search_error.innerHTML = 'Please Input Nationality';
    form_search_error.className = 'form-search-error';
    nationalityInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = '';  nationalityInput.focus(); nationalityInput.parentElement.className = 'input-field';}, 2000);
  }
  else if ( roomInput.value === '') {
    form_search_error.innerHTML = 'Please Input Number of Room';
    form_search_error.className = 'form-search-error';
    roomInput.parentElement.className = 'input-field error';
    setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = ''; roomInput.focus(); roomInput.parentElement.className = 'input-field';}, 2000);
  }else {

    searchFormFunction();
  }




}

















function searchFormFunction(){
  let myCityCode = city_codes[cities.indexOf(titleCase(cityInput.value))];
  let myNationality = nationalityInput.value;
  adultArrToBeSent = [];
  childArrToBeSent = [];

  let i;
  for(i=1; i>0; i++){
    if( document.querySelector(`#adultInput${i}`) !== null ){
      let adultInputObj = document.querySelector(`#adultInput${i}`);
      let adultadultInputObjVal = adultInputObj.value;

      adultArrToBeSent.push(Number(adultadultInputObjVal));

      let childInputObj = document.querySelector(`#childInput${i}`);
      let childadultInputObjVal = childInputObj.value;
      childArrToBeSent.push(Number(childadultInputObjVal));
    }

    if( document.querySelector(`#adultInput${i}`) === null ){
      break;
    }
  }





  let NumberOfRm;

  for(NumberOfRm=1; NumberOfRm<= roomInput.value; NumberOfRm++){

    let childInputElement = document.querySelector(`#childInput${NumberOfRm}`);
    let childInputValue = childInputElement.value;

  
    let childNum;
  
    for (childNum = 1; childNum <= Number(childInputValue); childNum++) {
  
        let myAgeElement = document.querySelector(`#childAgeR${NumberOfRm}C${childNum}`);
        AgeForChildren.push(Number(myAgeElement.value))

  
    }

  }


  if (AgeForChildren.length === 0) {
    AgeForChildren.push(0)
  }

  getSearchHotels(checkInInput.value, checkOutInput.value, myCityCode, roomInput.value, myNationality, 'All', adultArrToBeSent, childArrToBeSent, AgeForChildren);
  hotelSearchButton.innerHTML = "Loading...";
  hotelSearchButton.style.color = "white";
  hotelSearchButton.style.backgroundColor = "orange";
  hotelSearchButton.style.border = "none";
  jQuery('#hotel_list_section').hide();


}


















    // get hotels
  function getSearchHotels (paramCheckInDate,paramCheckOutDate, paramCityId, paramRooms, paramNationality, paramRating, paramAdult, paramChild, paramChildAge) {
    
      jQuery.ajax({
      url: requestURL,
      type: 'post',
      data: { "searchHotelParamCheckInDate": paramCheckInDate,
              "searchHotelParamCheckOutDate": paramCheckOutDate,
              "searchHotelParamCheckCityId": paramCityId,
              "searchHotelParamRooms": paramRooms,
              "searchHotelParamNationality": paramNationality,
              "searchHotelParamRating": paramRating,
              "searchHotelParamAdult": paramAdult,
              "searchHotelParamChild": paramChild,
              "searchHotelParamChildAge": paramChildAge,
       },
      success : function (data) {
        Hotels = [];
        HotelsToDisplay = [];
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data,"text/xml");

        let sessionIdTag = xmlDoc.getElementsByTagName("SessionId");
        let StatusCodeElement = xmlDoc.getElementsByTagName("StatusCode");
        // alert(data)
        let StatusCode = StatusCodeElement[0].innerHTML;
        // let StatusCode = 01

        if(sessionIdTag[0] && Number(StatusCode) === 01){

        SessionID = sessionIdTag[0].innerHTML;

        let HotelResult = xmlDoc.getElementsByTagName("HotelResult");  

          let i;
          for (i = 0; i < HotelResult.length; i++){
            let dataToBePushed;

            let children = HotelResult[i].childNodes;
            let resultIndex = children[0].innerHTML;

            dataToBePushed = {...dataToBePushed, HotelIndex: resultIndex};

            let HotelInfo = children[1].childNodes;
            
        
           
            HotelInfo.forEach((el)=>{
              if(el.tagName === "HotelCode" ){let HotelCode = el.innerHTML;  dataToBePushed = {...dataToBePushed, HotelCode: HotelCode}}
              if(el.tagName === "HotelName" ){let HotelName = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelName: HotelName}}
              if(el.tagName === "HotelPicture" ){let HotelPicture = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelPicture: HotelPicture}}
              if(el.tagName === "HotelDescription" ){let HotelDescription = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelDescription: HotelDescription}}
              if(el.tagName === "Latitude" ){let Latitude = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelLatitude: Latitude}}
              if(el.tagName === "Longitude" ){let Longitude = el.innerHTML;  dataToBePushed = {...dataToBePushed, HotelLongitude: Longitude}}
              if(el.tagName === "HotelAddress" ){let HotelAddress = el.innerHTML;  dataToBePushed = {...dataToBePushed, HotelAddress: HotelAddress}}
              if(el.tagName === "Rating" ){let Rating = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelRating: Rating}}
              if(el.tagName === "TripAdvisorRating" ){let TripAdvisorRating = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelTripAdvisorRating: TripAdvisorRating}}
              if(el.tagName === "TripAdvisorReviewURL" ){let TripAdvisorReviewURL = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelTripAdvisorReviewURL: TripAdvisorReviewURL}}
              if(el.tagName === "TagIds" ){let TagIds = el.innerHTML; dataToBePushed = {...dataToBePushed, HotelTagIds: TagIds}; }

             

            });// Hotel Info
            children.forEach((el)=>{
              if(el.tagName === 'MinHotelPrice'){
                let PrefPrice = el.getAttribute('TotalPrice');
                dataToBePushed = {...dataToBePushed, PrefPrice: PrefPrice};
                let PrefCurrency = el.getAttribute('Currency');
                dataToBePushed = {...dataToBePushed, PrefCurrency: PrefCurrency};
              }
            });


            Hotels.push(dataToBePushed);
            HotelsToDisplay.push(dataToBePushed);
           };// for loop 


            // Display Hotels
          
          displayHotels();

          } // if hotels
          if( Number(StatusCode) !== 01){
            alert(Number(StatusCode))
            form_search_error.innerHTML = 'Sorry, No Search found';
            form_search_error.className = 'form-search-error'
            setTimeout(()=>{form_search_error.innerHTML = ''; form_search_error.className = '';}, 5000);
          
            hotelSearchButton.innerHTML = "Search";
            hotelSearchButton.style.color = "white";
            hotelSearchButton.style.backgroundColor = "teal";
          }
      
          
      },
      error: function (err) {
          alert('Failed!!');
      }
    });// end of Ajax request


  }// end of getSearchHotels






function checkRatingStar(rateInputDigit) {
  return new Promise((resolve, reject) => {
      if(rateInputDigit === 0) { resolve('')}
      if(rateInputDigit === 1) { resolve('OneStar')}
      if(rateInputDigit === 2) { resolve('TwoStar')}
      if(rateInputDigit === 3) { resolve('ThreeStar')}
      if(rateInputDigit === 4) { resolve('FourStar')}
      if(rateInputDigit === 5) { resolve('FiveStar')}
  })
}


function applyHotelFilter() {
  HotelsToDisplay = []
  nameInputElement = document.querySelector('#filterHotelNameInput')
  rateInputElement = document.querySelector('#filterRatingInput');
  let nameInput = nameInputElement.value
  
  if (nameInput === '') {
    HotelsToDisplay = HotelsToDisplay = Hotels;
    checkRatingStar(Number(rateInputElement.value)).then((rateInput) => {
      if (rateInput === '') { displayHotels(); }
      if (rateInput !== '') {
        HotelsToDisplay = HotelsToDisplay.filter((h) => String(h.HotelRating) === String(rateInput)).map(e => e);
        displayHotels();
      }
    })
  } else {
    HotelsToDisplay = Hotels.filter(h => h.HotelName.toLowerCase().indexOf(nameInput.toLowerCase()) > -1).map(e => e);
    checkRatingStar(Number(rateInputElement.value)).then((rateInput) => {
      if (rateInput === '') { displayHotels(); }
      if (rateInput !== '') {
        HotelsToDisplay = HotelsToDisplay.filter((h) => String(h.HotelRating) === String(rateInput)).map(e => e);
        displayHotels();
      }
    })
  }
}



  function displayHotels(){

    sessionMonitor = setTimeout(()=>{ location.reload(true); }, 1800000) // session expires in 30 minutes, refresh page

    if (HotelsToDisplay.length === 0){
      hotelListCardGroup.innerHTML = '';

      let noHotelDiv = document.createElement('div');
      noHotelDiv.className = 'no-result-div';
      noHotelDiv.innerHTML = 'No Results for your search, please check your search options and try again.'

      hotelListCardGroup.appendChild(noHotelDiv);

      hotelSearchButton.innerHTML = "Search";
      hotelSearchButton.style.color = "white";
      hotelSearchButton.style.backgroundColor = "teal";

      toHotelListPage();
    } else {

    hotelListCardGroup.innerHTML = '';

    HotelsToDisplay.forEach((hotel)=>{  

        let card = document.createElement('div');
        card.className = 'card';

        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        let cardImg = document.createElement('img');
        cardImg.className = 'hotel-pic';
        cardImg.setAttribute('src', hotel.HotelPicture);
        cardImg.setAttribute('alt', hotel.HotelName);

        let hotelInfo = document.createElement('div');
        hotelInfo.className = 'hotel-info';

        let hotelName = document.createElement('div');
        hotelName.className = 'hotel-name';
        hotelName.innerHTML = hotel.HotelName;

        let hotelAdress = document.createElement('div');
        hotelAdress.className = 'hotel-address';
        hotelAdress.innerHTML = hotel.HotelAddress;

        let hotelMinPrice = document.createElement('div');
        hotelMinPrice.className = 'hotel-address';
        hotelMinPrice.innerHTML = `Minimum Hotel Price:  ${hotel.PrefPrice} ${hotel.PrefCurrency}`;

        let hotelRating = document.createElement('div');
        hotelRating.className = 'hotel-rating';

        if(hotel.HotelRating === 'OneStar'){
          let star1 = document.createElement('i');
          star1.className = "fa fa-star active";
          let star2 = document.createElement('i');
          star2.className = "fa fa-star passive";
          let star3 = document.createElement('i');
          star3.className = "fa fa-star passive";
          let star4 = document.createElement('i');
          star4.className = "fa fa-star passive";
          let star5 = document.createElement('i');
          star5.className = "fa fa-star passive";
          hotelRating.appendChild(star1);
          hotelRating.appendChild(star2);
          hotelRating.appendChild(star3);
          hotelRating.appendChild(star4);
          hotelRating.appendChild(star5);

        }
        if(hotel.HotelRating === 'TwoStar'){
          let star1 = document.createElement('i');
          star1.className = "fa fa-star active";
          let star2 = document.createElement('i');
          star2.className = "fa fa-star active";
          let star3 = document.createElement('i');
          star3.className = "fa fa-star passive";
          let star4 = document.createElement('i');
          star4.className = "fa fa-star passive";
          let star5 = document.createElement('i');
          star5.className = "fa fa-star passive";
          hotelRating.appendChild(star1);
          hotelRating.appendChild(star2);
          hotelRating.appendChild(star3);
          hotelRating.appendChild(star4);
          hotelRating.appendChild(star5);

        }
        if(hotel.HotelRating === 'ThreeStar'){
          let star1 = document.createElement('i');
          star1.className = "fa fa-star active";
          let star2 = document.createElement('i');
          star2.className = "fa fa-star active";
          let star3 = document.createElement('i');
          star3.className = "fa fa-star active";
          let star4 = document.createElement('i');
          star4.className = "fa fa-star passive";
          let star5 = document.createElement('i');
          star5.className = "fa fa-star passive";
          hotelRating.appendChild(star1);
          hotelRating.appendChild(star2);
          hotelRating.appendChild(star3);
          hotelRating.appendChild(star4);
          hotelRating.appendChild(star5);

        }
        if(hotel.HotelRating === 'FourStar'){
          let star1 = document.createElement('i');
          star1.className = "fa fa-star active";
          let star2 = document.createElement('i');
          star2.className = "fa fa-star active";
          let star3 = document.createElement('i');
          star3.className = "fa fa-star active";
          let star4 = document.createElement('i');
          star4.className = "fa fa-star active";
          let star5 = document.createElement('i');
          star5.className = "fa fa-star passive";
          hotelRating.appendChild(star1);
          hotelRating.appendChild(star2);
          hotelRating.appendChild(star3);
          hotelRating.appendChild(star4);
          hotelRating.appendChild(star5);

        }
        if(hotel.HotelRating === 'FiveStar'){
          let star1 = document.createElement('i');
          star1.className = "fa fa-star active";
          let star2 = document.createElement('i');
          star2.className = "fa fa-star active";
          let star3 = document.createElement('i');
          star3.className = "fa fa-star active";
          let star4 = document.createElement('i');
          star4.className = "fa fa-star active";
          let star5 = document.createElement('i');
          star5.className = "fa fa-star active";
          hotelRating.appendChild(star1);
          hotelRating.appendChild(star2);
          hotelRating.appendChild(star3);
          hotelRating.appendChild(star4);
          hotelRating.appendChild(star5);
        }

        let hotelDescription = document.createElement('p');
        hotelDescription.className = 'hotel-description';
        hotelDescription.innerHTML = hotel.HotelDescription;

        
        let btnWrap = document.createElement('div');
        btnWrap.className = 'btnwrap';

        let hotelReview = document.createElement('a');
        hotelReview.className = 'btn review-btn hotel-review';
        hotelReview.setAttribute('href', hotel.TripAdvisorReviewURL);
        hotelReview.innerHTML = 'Review';

        let hotelDetailButton = document.createElement('button');
        hotelDetailButton.className = 'btn detail-btn hotel-detail';
        hotelDetailButton.setAttribute('id', hotel.HotelCode);
        hotelDetailButton.setAttribute('onClick', `getHotelDetails(${hotel.HotelIndex},${hotel.HotelCode}, event)`);
        hotelDetailButton.setAttribute('style', '');
        hotelDetailButton.innerHTML = 'Details';

        let hotelRoomsButton = document.createElement('button');
        hotelRoomsButton.className = 'btn room-btn hotel-room';
        hotelRoomsButton.setAttribute('id', hotel.HotelCode);
        hotelRoomsButton.innerHTML = 'Rooms';

        hotelInfo.appendChild(hotelName);
        hotelInfo.appendChild(hotelRating);            
        hotelInfo.appendChild(hotelAdress);
        hotelInfo.appendChild(hotelDescription);
        hotelInfo.appendChild(hotelMinPrice);


        // btnWrap.appendChild(hotelReview);
        btnWrap.appendChild(hotelDetailButton);
        // btnWrap.appendChild(hotelRoomsButton);
        hotelInfo.appendChild(btnWrap);

        cardBody.appendChild(cardImg);
        cardBody.appendChild(hotelInfo);

        card.appendChild(cardBody);

        hotelListCardGroup.appendChild(card);


    });


    hotelSearchButton.innerHTML = "Search";
    hotelSearchButton.style.color = "white";
    hotelSearchButton.style.backgroundColor = "teal";
    
    toHotelListPage();
    }

  }











    // Aoto complete function
    function autocomplete(inp, arr) {
      let currentFocus;
      inp.addEventListener("input", function(e) {
          let a, b, i, val = this.value;
          closeAllLists();
          if (!val) { return false;}
          currentFocus = -1;
          a = document.createElement("DIV");
          a.setAttribute("id", this.id + "autocomplete-list");
          a.setAttribute("class", "autocomplete-items");
          this.parentNode.appendChild(a);
          for (i = 0; i < arr.length; i++) {
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                  b = document.createElement("DIV");
                  b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                  b.innerHTML += arr[i].substr(val.length);
                  b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                  b.addEventListener("click", function(e) {
                      inp.value = this.getElementsByTagName("input")[0].value;
                      closeAllLists();
                  });
                  a.appendChild(b);
              }
          }
      });
      inp.addEventListener("keydown", function(e) {
          let x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
              currentFocus++;
              addActive(x);
          } else if (e.keyCode == 38) {
              currentFocus--;
              addActive(x);
          } else if (e.keyCode == 13) {
              e.preventDefault();
              if (currentFocus > -1) {
                  if (x) x[currentFocus].click();
              }
          }
      });
      function addActive(x) {
          if (!x) return false;
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          x[currentFocus].classList.add("autocomplete-active");
      }
      function removeActive(x) {
          for (let i = 0; i < x.length; i++) {
              x[i].classList.remove("autocomplete-active");
          }
      }
      function closeAllLists(elmnt) {
          let x = document.getElementsByClassName("autocomplete-items");
          for (let i = 0; i < x.length; i++) {
              if (elmnt != x[i] && elmnt != inp) {
                  x[i].parentNode.removeChild(x[i]);
              }
          }
      }
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
  }// end autocomplete function








function getHotelDetails(paramIndex,paramCode, event){

  document.getElementById(event.currentTarget.id).innerHTML = "Loading...";
  document.getElementById(event.currentTarget.id).style.color = "white";
  document.getElementById(event.currentTarget.id).style.backgroundColor = "orange";

  jQuery.ajax({
    url: requestURL,
    type: 'post',
    data: {'hotelDetailsParamSessionId': SessionID, 'hotelDetailsParamIndex': paramIndex, 'hotelDetailsParamCode': paramCode },
    success : function (data) {
      HotelDetail = [];
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data,"text/xml");
      let hotelDetails = xmlDoc.getElementsByTagName("HotelDetails")[0];  

      let detailsToBeSaved;

      let hotelCode = hotelDetails.getAttribute('HotelCode');

      BookingHotelCode = hotelCode;
    
      let hotelName = hotelDetails.getAttribute('HotelName');

      if (hotelName.indexOf('&') > -1) {
        let newWord = hotelName.replace(/&/g, "and");
        BookingHotelName = newWord;
      }else {
        BookingHotelName = hotelName;
      }

      
      let hotelRating = hotelDetails.getAttribute('HotelRating');
      detailsToBeSaved = { ...detailsToBeSaved, HotelCode: hotelCode, HotelName: hotelName, HotelRating: hotelRating}

      let hotelDetailsElements = hotelDetails.childNodes;
      hotelDetailsElements.forEach((el)=>{
        if(el.tagName === 'Address'){ let HotelAddress = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelAddress: HotelAddress }};
        if(el.tagName === 'CountryName'){ let HotelCountry = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelCountry: HotelCountry }};
        if(el.tagName === 'Description'){ let HotelDescription = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelDescription: HotelDescription }};
        if(el.tagName === 'FaxNumber'){ let HotelFaxNumber = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelFaxNumber: HotelFaxNumber }};
        if(el.tagName === 'Map'){ let HotelMap = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelMap: HotelMap }};
        if(el.tagName === 'PhoneNumber'){ let HotelPhoneNumber = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelPhoneNumber: HotelPhoneNumber }};
        if(el.tagName === 'TripAdvisorRating'){ let HotelTripAdvisorRating = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelTripAdvisorRating: HotelTripAdvisorRating }};
        if(el.tagName === 'TripAdvisorReviewURL'){ let HotelTripAdvisorReviewURL = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelTripAdvisorReviewURL: HotelTripAdvisorReviewURL }};
        if(el.tagName === 'CityName'){ let HotelCity = el.innerHTML;  detailsToBeSaved = { ...detailsToBeSaved, HotelCity: HotelCity }};

        if(el.tagName === 'ImageUrls'){ 
          let images = [];
          let imgArray = el.childNodes;
          imgArray.forEach((img)=>{
              images.push(img.innerHTML);
              
          });      
          detailsToBeSaved = { ...detailsToBeSaved, HotelImages: images }          
        };

        if(el.tagName === 'HotelFacilities'){ 
          let facilities = [];
          let facArray = el.childNodes;
          facArray.forEach((fac)=>{
              facilities.push(fac.innerHTML);
          });       
          detailsToBeSaved = { ...detailsToBeSaved, HotelFacilities: facilities }          
        };


      });// hotelDetailsElements for each

      HotelDetail.push(detailsToBeSaved);

      getHotelsRooms(paramIndex,paramCode,event);

    },// success
    error: function (err) {
      alert('Failed!!');
    }// error

  });// ajax request

}//getHotelDetails



function getHotelsRooms(paramIndex,paramCode,event){
  jQuery.ajax({
    url: requestURL,
    type: 'post',
    data: { 'hotelRoomParamSessionId': SessionID, 'hotelRoomParamIndex': paramIndex, 'hotelRoomParamCode': paramCode },
    success : function (data) {
      Rooms = [];
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data,"text/xml");
      let resultsIndexElement = xmlDoc.getElementsByTagName("ResultIndex"); 

      let resultIndex = resultsIndexElement[0].innerHTML;

      BookingResultIndex = resultIndex;

      let hotelRooms = xmlDoc.getElementsByTagName("HotelRoom"); 

      // HotelRooms = {...HotelRooms, resultIndex: resultIndex};

      
     let i;

     for(i = 0; i< hotelRooms.length; i++){

        let room;
        room = {...room, ResultIndex: resultIndex}
        let hotelChildNodes = hotelRooms[i].childNodes;
        hotelChildNodes.forEach((el)=>{
          if(el.tagName === "RoomIndex" ){let RoomIndex = el.innerHTML;  room = {...room, RoomIndex: RoomIndex}};
          if(el.tagName === "RoomTypeName" ){let RoomType = el.innerHTML;  room = {...room, RoomType: RoomType};};
          if(el.tagName === "Inclusion" ){let RoomInclusion = el.innerHTML;  room = {...room, RoomInclusion: RoomInclusion}};
          if(el.tagName === "RoomTypeCode" ){let RoomTypeCode = el.innerHTML;  room = {...room, RoomTypeCode: RoomTypeCode}};
          if(el.tagName === "RatePlanCode" ){let RoomRatePlanCode = el.innerHTML;  room = {...room, RoomRatePlanCode: RoomRatePlanCode}};
          if(el.tagName === "RoomRate" ){
              let RoomAgentMarkUp = el.getAttribute('AgentMarkUp');  room = {...room, RoomAgentMarkUp: RoomAgentMarkUp};
              let RoomCurrency = el.getAttribute('Currency');  room = {...room, RoomCurrency: RoomCurrency};
              let RoomFare = el.getAttribute('RoomFare');  room = {...room, RoomFare: RoomFare};
              let RoomTax = el.getAttribute('RoomTax');  room = {...room, RoomTax: RoomTax};
              let RoomTotalFare = el.getAttribute('TotalFare');  room = {...room, RoomTotalFare: RoomTotalFare};  
              let RoomAddedAgentMarkUp = (Number(RoomTotalFare)* 0.2).toFixed(2); room = {...room, RoomAddedAgentMarkUp: RoomAddedAgentMarkUp};   
              let RoomAddedTotalFare = (Number(RoomTotalFare)+Number(RoomAddedAgentMarkUp)).toFixed(2); room = {...room, RoomAddedTotalFare: RoomAddedTotalFare};   
            };  
          if(el.tagName === "Supplements") {
            let supplementInfo = el.childNodes;
            let SuppID = supplementInfo[0].getAttribute('SuppID');  room = {...room, SuppID: SuppID};
            let SuppChargeType = supplementInfo[0].getAttribute('SuppChargeType');  room = {...room, SuppChargeType: SuppChargeType};
            let Price = supplementInfo[0].getAttribute('Price');  room = {...room, Price: Price };
            let SuppCurrency =  supplementInfo[0].getAttribute('CurrencyCode'); room = {...room, SuppCurrency: SuppCurrency };
          }   
          if(el.tagName === "RoomPromtion") {let RoomPromotion = el.innerHTML;  room = {...room, RoomPromotion: RoomPromotion}} 
        });

        Rooms.push(room);

      };


      // Room Combination Section
      RoomCombination = []

      let roomCombinations = xmlDoc.getElementsByTagName("RoomCombination");
      let y;
      for (y=0; y<roomCombinations.length; y++) {
        let combinedGroup = [];
        let rommCombChildNodes = roomCombinations[y].childNodes;

        rommCombChildNodes.forEach((el)=>{ combinedGroup.push(Number(el.innerHTML)); });
        RoomCombination.push(combinedGroup);

      }
      

      displayDetails(event);

     
    

    },// success
    error: function (err) {
      alert('Failed!!');
    }// error

  });// ajax request

}// getHotelsRooms





function displayDetails(event){

  hotelDetailMainWrap.innerHTML = '';

  let myCarousel = document.createElement('div');
  myCarousel.className = 'carousel slide';
  myCarousel.setAttribute('data-ride', 'carousel');
  myCarousel.setAttribute('id', 'myCarousel');

  let innerCarousel = document.createElement('div');
  innerCarousel.className = 'carousel-inner';

  let i;
  for(i=0; i<HotelDetail[0].HotelImages.length; i++){

    let item = document.createElement('div');
    if(i === 0){item.className = 'item active';};
    if(i > 0){item.className = 'item';};

    let image = document.createElement('img'); 
    image.setAttribute('src', HotelDetail[0].HotelImages[i]);

    let carouselCaption = document.createElement('div');
    carouselCaption.className = 'carousel-caption';

    let hotelName = document.createElement('h1');
    hotelName.className = 'hotel-name text-success';
    hotelName.innerHTML = HotelDetail[0].HotelName;

    let hotelRating = document.createElement('div');
    hotelRating.className = 'hotel-rating';

    if(HotelDetail[0].HotelRating === 'OneStar'){
      let star1 = document.createElement('i');
      star1.className = "fa fa-star active";
      let star2 = document.createElement('i');
      star2.className = "fa fa-star passive";
      let star3 = document.createElement('i');
      star3.className = "fa fa-star passive";
      let star4 = document.createElement('i');
      star4.className = "fa fa-star passive";
      let star5 = document.createElement('i');
      star5.className = "fa fa-star passive";
      hotelRating.appendChild(star1);
      hotelRating.appendChild(star2);
      hotelRating.appendChild(star3);
      hotelRating.appendChild(star4);
      hotelRating.appendChild(star5);

    }
    if(HotelDetail[0].HotelRating  === 'TwoStar'){
      let star1 = document.createElement('i');
      star1.className = "fa fa-star active";
      let star2 = document.createElement('i');
      star2.className = "fa fa-star active";
      let star3 = document.createElement('i');
      star3.className = "fa fa-star passive";
      let star4 = document.createElement('i');
      star4.className = "fa fa-star passive";
      let star5 = document.createElement('i');
      star5.className = "fa fa-star passive";
      hotelRating.appendChild(star1);
      hotelRating.appendChild(star2);
      hotelRating.appendChild(star3);
      hotelRating.appendChild(star4);
      hotelRating.appendChild(star5);

    }
    if(HotelDetail[0].HotelRating === 'ThreeStar'){
      let star1 = document.createElement('i');
      star1.className = "fa fa-star active";
      let star2 = document.createElement('i');
      star2.className = "fa fa-star active";
      let star3 = document.createElement('i');
      star3.className = "fa fa-star active";
      let star4 = document.createElement('i');
      star4.className = "fa fa-star passive";
      let star5 = document.createElement('i');
      star5.className = "fa fa-star passive";
      hotelRating.appendChild(star1);
      hotelRating.appendChild(star2);
      hotelRating.appendChild(star3);
      hotelRating.appendChild(star4);
      hotelRating.appendChild(star5);

    }
    if(HotelDetail[0].HotelRating === 'FourStar'){
      let star1 = document.createElement('i');
      star1.className = "fa fa-star active";
      let star2 = document.createElement('i');
      star2.className = "fa fa-star active";
      let star3 = document.createElement('i');
      star3.className = "fa fa-star active";
      let star4 = document.createElement('i');
      star4.className = "fa fa-star active";
      let star5 = document.createElement('i');
      star5.className = "fa fa-star passive";
      hotelRating.appendChild(star1);
      hotelRating.appendChild(star2);
      hotelRating.appendChild(star3);
      hotelRating.appendChild(star4);
      hotelRating.appendChild(star5);

    }
    if(HotelDetail[0].HotelRating  === 'FiveStar'){
      let star1 = document.createElement('i');
      star1.className = "fa fa-star active";
      let star2 = document.createElement('i');
      star2.className = "fa fa-star active";
      let star3 = document.createElement('i');
      star3.className = "fa fa-star active";
      let star4 = document.createElement('i');
      star4.className = "fa fa-star active";
      let star5 = document.createElement('i');
      star5.className = "fa fa-star active";
      hotelRating.appendChild(star1);
      hotelRating.appendChild(star2);
      hotelRating.appendChild(star3);
      hotelRating.appendChild(star4);
      hotelRating.appendChild(star5);
    }

    carouselCaption.appendChild(hotelName);
    carouselCaption.appendChild(hotelRating);

    item.appendChild(image);
    item.appendChild(carouselCaption);

    innerCarousel.appendChild(item);

  }; // HotelDetail.HotelImages
  

  let curouselPrev = document.createElement('a');
  curouselPrev.className = 'left carousel-control';
  curouselPrev.setAttribute('data-slide', 'prev');
  curouselPrev.setAttribute('href', '#myCarousel');

  let curouselNext = document.createElement('a');
  curouselNext.className = 'right carousel-control';
  curouselNext.setAttribute('data-slide', 'next');
  curouselNext.setAttribute('href', '#myCarousel');

  myCarousel.appendChild(innerCarousel);
  myCarousel.appendChild(curouselPrev);
  myCarousel.appendChild(curouselNext);


  let infoWrap = document.createElement('div');
  infoWrap.className = 'info-wrap';

  let head = document.createElement('div');
  head.className = 'head';

  let headHotelName = document.createElement('div');
  headHotelName.className = 'hotel-name';
  let hotelNameH4 = document.createElement('h4');
  hotelNameH4.innerHTML = 'Hotel:';
  let hotelNameH5 = document.createElement('h5');
  hotelNameH5.innerHTML = HotelDetail[0].HotelName;

  headHotelName.appendChild(hotelNameH4);
  headHotelName.appendChild(hotelNameH5);
  head.appendChild(headHotelName);

  let hotelCountry = document.createElement('div');
  hotelCountry.className = 'hotel-country';
  let hotelCountryH4 = document.createElement('h4');
  hotelCountryH4.innerHTML = 'Country:';
  let hotelCountryH5 = document.createElement('h5');
  hotelCountryH5.innerHTML = HotelDetail[0].HotelCountry;

  hotelCountry.appendChild(hotelCountryH4);
  hotelCountry.appendChild(hotelCountryH5);
  head.appendChild(hotelCountry);

  let hotelCity = document.createElement('div');
  hotelCity.className = 'hotel-city';
  let hotelCityH4 = document.createElement('h4');
  hotelCityH4.innerHTML = 'City:';
  let hotelCityH5 = document.createElement('h5');
  hotelCityH5.innerHTML = HotelDetail[0].HotelCity;

  hotelCity.appendChild(hotelCityH4);
  hotelCity.appendChild(hotelCityH5);
  head.appendChild(hotelCity);

  let hotelAdress = document.createElement('div');
  hotelAdress.className = 'hotel-address';
  let hotelAddressH4 = document.createElement('h4');
  hotelAddressH4.innerHTML = 'Address:';
  let hotelAddressH5 = document.createElement('h5');
  hotelAddressH5.innerHTML = HotelDetail[0].HotelAddress;

  hotelAdress.appendChild(hotelAddressH4);
  hotelAdress.appendChild(hotelAddressH5);
  head.appendChild(hotelAdress);

  
  let hotelPNumber = document.createElement('div');
  hotelPNumber.className = 'hotel-phone-number';
  let hotelPNumberH4 = document.createElement('h4');
  hotelPNumberH4.innerHTML = 'Tel:';
  let hotelPNumberH5 = document.createElement('h5');
  hotelPNumberH5.innerHTML = HotelDetail[0].HotelPhoneNumber;
  
  hotelPNumber.appendChild(hotelPNumberH4);
  hotelPNumber.appendChild(hotelPNumberH5);
  head.appendChild(hotelPNumber);

  infoWrap.appendChild(head);



  let hotelFacilities = document.createElement('div');
  hotelFacilities.className = 'hotel-facilities';

  let hotelFacilitiesHead = document.createElement('h4');
  hotelFacilitiesHead.innerHTML = 'Our Facilities';
  hotelFacilities.appendChild(hotelFacilitiesHead);

  let x;
  for(x=0; x<HotelDetail[0].HotelFacilities.length; x++){
    let facilityItem = document.createElement('li');
    facilityItem.innerHTML = HotelDetail[0].HotelFacilities[x];
    hotelFacilities.appendChild(facilityItem);
  };

  infoWrap.appendChild(hotelFacilities);

  let hotelOther = document.createElement('div');
  hotelOther.className = 'hotel-other';


  let hotelAdvisorRating = document.createElement('div');
  hotelAdvisorRating.className = 'hotel-advisor-rating';
  let hotelAdvisorRatingH4 = document.createElement('h4');
  hotelAdvisorRatingH4.innerHTML = 'Pin Code:';
  let hotelAdvisorRatingH5 = document.createElement('h5');
  hotelAdvisorRatingH5.innerHTML = HotelDetail[0].HotelTripAdvisorRating;

  hotelAdvisorRating.appendChild(hotelAdvisorRatingH4);
  hotelAdvisorRating.appendChild(hotelAdvisorRatingH5);
  hotelOther.appendChild(hotelAdvisorRating);

  let hotelReview = document.createElement('a');
  hotelReview.className = 'hotel-review';
  hotelReview.setAttribute('href', HotelDetail[0].HotelTripAdvisorReviewURL);
  hotelReview.innerHTML = 'Review';

  hotelOther.appendChild(hotelReview);

  infoWrap.appendChild(hotelOther);



  let moreWrap = document.createElement('div');
  moreWrap.className = 'more-wrap';

  let hotelDescription = document.createElement('div');
  hotelDescription.className = 'hotel-description';
  let hotelDescriptionH4 = document.createElement('h4');
  hotelDescriptionH4.innerHTML = 'Description:';
  let hotelDescriptionParph = document.createElement('div');
  hotelDescriptionParph.innerHTML = `${HotelDetail[0].HotelDescription}`;

    
  hotelDescription.appendChild(hotelDescriptionH4);
  hotelDescription.appendChild(hotelDescriptionParph);
  moreWrap.appendChild(hotelDescription);


  hotelDetailMainWrap.appendChild(myCarousel);
  hotelDetailMainWrap.appendChild(infoWrap);
  hotelDetailMainWrap.appendChild(moreWrap);

  displayRooms(event);

}


function displayRooms(event){


  let roomsWrap = document.createElement('div');
  roomsWrap.className = 'rooms-wrap';


  
  if (Rooms.length === 0){
    let noRoomDiv = document.createElement('div');
    noRoomDiv.className = 'no-result-div';
    noRoomDiv.innerHTML = 'No rooms Available. Please check another hotel'

    roomsWrap.appendChild(noRoomDiv);
    hotelDetailMainWrap.appendChild(roomsWrap);
  
    document.getElementById(event.target.id).innerHTML = "Details";
    document.getElementById(event.target.id).className = 'btn detail-btn hotel-detail';
    document.getElementById(event.target.id).setAttribute('style', '');
  
    SelectedRooms = [];
    OurGuests = [];
     
    toDetailsPage();
  
  } else {

  let roomTitle = document.createElement('div');
  roomTitle.className = 'room-title';
  let roomTitleH4 = document.createElement('h4');
  roomTitleH4.innerHTML = 'Available Rooms';

  roomTitle.appendChild(roomTitleH4);



  let numberOfRoomsWrap = document.createElement('div');
  numberOfRoomsWrap.className = 'number-of-rooms-wrap';
  numberOfRoomsWrap.setAttribute('id', 'number_of_rooms_wrap');

  let nR;
  for (nR=0; nR<roomInput.value; nR++) {
    let roomShow = document.createElement('h4');
    roomShow.className = 'show-number-of-romm';
    roomShow.innerHTML = `Room ${nR+1}`;
    roomShow.setAttribute('style', '');

    numberOfRoomsWrap.appendChild(roomShow);
  }

  let proceedBtnWrap = document.createElement('div');
  proceedBtnWrap.className = 'proceed-btn';
  proceedBtnWrap.setAttribute('id', 'proceed_btn_wrap');


  let roomListCardGroup = document.createElement('div');
  roomListCardGroup.className = 'card-group';
  roomListCardGroup.setAttribute('id', 'room_list_card_group');

  Rooms.forEach((room)=>{
    let card = document.createElement('div');
    card.className = 'card';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let roomType = document.createElement('div');
    roomType.className = 'room-type';
    roomType.innerHTML = `${room.RoomType}`;

    let roomInclusive= document.createElement('div');
    roomInclusive.className = 'room-inclusive';
    roomInclusive.innerHTML = `Inclusion: ${room.RoomInclusion}`;

    let roomTotalFare = document.createElement('div');
    roomTotalFare.className = 'room-totalFare';
    roomTotalFare.innerHTML = `$: ${room.RoomTotalFare}`;

    let roomPromotion = document.createElement('div');
    roomPromotion.className = 'room-totalFare';
    roomPromotion.innerHTML = `${room.RoomPromotion}`;



    let btn = document.createElement('button');
    btn.setAttribute('id', `Room${room.RoomIndex}`);
    btn.className = 'btn';
    btn.setAttribute('onClick', `compileSelectedRooms(${room.ResultIndex},${room.RoomIndex},'${room.RoomRatePlanCode}', event)`);
    btn.innerHTML = 'Select';
    btn.setAttribute('style', '');

    cardBody.appendChild(roomType);
    cardBody.appendChild(roomInclusive);
    if (room.SuppID) {
      let Supplemets = document.createElement('div');
      Supplemets.className = 'room-totalFare';
      Supplemets.innerHTML = `Supplement Type:  ${room.SuppChargeType}`;
      cardBody.appendChild(Supplemets);

      let SuppType = document.createElement('div');
      SuppType.className = 'room-totalFare';
      SuppType.innerHTML = `Supplement Price: ${room.Price} ${room.SuppCurrency}`;
      cardBody.appendChild(SuppType);
    }
    cardBody.appendChild(roomPromotion);
    cardBody.appendChild(roomTotalFare);
    cardBody.appendChild(btn);

    card.appendChild(cardBody);

    roomListCardGroup.appendChild(card);

  });

  roomsWrap.appendChild(roomTitle);
  roomsWrap.appendChild(roomListCardGroup);
  roomsWrap.appendChild(numberOfRoomsWrap);
  roomsWrap.appendChild(proceedBtnWrap);

  hotelDetailMainWrap.appendChild(roomsWrap);

  document.getElementById(event.target.id).innerHTML = "Details";
  document.getElementById(event.target.id).className = 'btn detail-btn hotel-detail';
  document.getElementById(event.target.id).setAttribute('style', '');


  SelectedRooms = [];
  OurGuests = [];

  
  toDetailsPage();

  }// else

}







function compileSelectedRooms(resultIndex, myroomIndex, roomRatePlanCode, event) {
  SelectedRooms = [];
  mySelecteRoomsIds = [];
  let count = 0;

  RoomCombination.forEach((roomGroup)=>{

    if (roomGroup.includes(myroomIndex)) {

      IndexesForA_and_Pricing = roomGroup;

      roomGroup.forEach((combIndex)=>{

                
          Rooms.forEach((room)=>{
            if( Number(room.RoomIndex) === Number(combIndex)){

                if (count<roomInput.value) {
                  
                      if (room.SuppID){
                        let myArr = [room.RoomIndex, room.RoomType, room.RoomTypeCode, room.RoomRatePlanCode, room.RoomFare, room.RoomCurrency, room.RoomAgentMarkUp,
                          room.RoomTax, room.RoomTotalFare, room.SuppID, room.SuppChargeType, room.Price];
    
                          SelectedRooms.push(myArr);
    
                          
    
                          let amSelected = room.RoomIndex;
                          mySelecteRoomsIds.push(amSelected);
    
    
    
                          count++;


                          let myButton =  document.getElementById(`Room${room.RoomIndex}`);
                          myButton.innerHTML = "Selected";
                          myButton.style.color = "white";
                          myButton.style.backgroundColor = "lime";
                          myButton.setAttribute('disabled', 'true');
    

                      }
                      if (!room.SuppID){
                        let myArr = [room.RoomIndex, room.RoomType, room.RoomTypeCode, room.RoomRatePlanCode, room.RoomFare, room.RoomCurrency, room.RoomAgentMarkUp,
                          room.RoomTax, room.RoomTotalFare];
    
                          SelectedRooms.push(myArr);
    
                          
    
                          let amSelected = room.RoomIndex;
                          mySelecteRoomsIds.push(amSelected);
    
    
    
                          count++;

                          let myButton =  document.getElementById(`Room${room.RoomIndex}`);
                          myButton.innerHTML = "Selected";
                          myButton.style.color = "white";
                          myButton.style.backgroundColor = "lime";
                          myButton.setAttribute('disabled', 'true');

    

                      }
                } //  if (count<roomInput.value)

                else {
                  if (!mySelecteRoomsIds.includes(room.RoomIndex)) {
                    let amSelected = room.RoomIndex;
                    mySelecteRoomsIds.push(amSelected);
                    let myButton =  document.getElementById(`Room${room.RoomIndex}`);
                    myButton.innerHTML = "Alternative";
                    myButton.style.color = "white";
                    myButton.style.backgroundColor = "#fc7703";
                    myButton.removeAttribute('disabled');

                  }
                }

            }; // if( Number(room.RoomIndex) === Number(combIndex))

            
            if (mySelecteRoomsIds.includes(room.RoomIndex)){
                          
              // let myButton =  document.getElementById(`Room${room.RoomIndex}`);
              // myButton.innerHTML = "Selected";
              // myButton.style.color = "white";
              // myButton.style.backgroundColor = "lime";
              // myButton.setAttribute('disabled', 'true');

            }else{
              let myButton =  document.getElementById(`Room${room.RoomIndex}`);
              myButton.innerHTML = "Select";
              myButton.setAttribute('style', '');
              myButton.className = 'btn';
              myButton.removeAttribute('disabled');
            }

          });// Roomms ForEach


      }); //roomGroup.forEach

    };// if Ispresent

  }); //  RoomCombination.forEach


  let x;

  for (x=0; x<roomInput.value; x++) {
    let myShowRomm = document.getElementById('number_of_rooms_wrap').childNodes[x];
    myShowRomm.style.color = "lime";
    myShowRomm.style.border = "solid 1px lime"

  }

  let proceed_btn_wrap = document.querySelector('#proceed_btn_wrap');

  proceed_btn_wrap.innerHTML = '';

  let myProceedBtn = document.createElement('button');
  myProceedBtn.className = 'btn';
  myProceedBtn.setAttribute('onClick',`availabilityAndPricing(${resultIndex}, ${HotelDetail[0].HotelCode})`);
  myProceedBtn.setAttribute('type','button');
  myProceedBtn.setAttribute('style','');
  myProceedBtn.innerHTML = 'Proceed';
  myProceedBtn.setAttribute('id','proceedToBooking');

  proceed_btn_wrap.appendChild(myProceedBtn);


}; // compileSelectedRooms function












function availabilityAndPricing(paramResultIndex, paramHotelCode) {

  
let proceedToBookingBtn = document.querySelector('#proceedToBooking');


  proceedToBookingBtn.style.color = 'white';
  proceedToBookingBtn.style.backgroundColor = 'orange';
  proceedToBookingBtn.innerHTML = 'Loading...';
  proceedToBookingBtn.style.border = 'none';


  jQuery.ajax({
    url: requestURL,
    type: 'post',
    data: { 'A_P_sessionId': SessionID, 'A_P_result_index': paramResultIndex, 'A_P_hotel_code': paramHotelCode, 'A_P_room_indexes': IndexesForA_and_Pricing },
    success : function (data) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data,"text/xml");
      let AvailableForBook = xmlDoc.getElementsByTagName("AvailableForBook");  
      let Availabilitymessage = AvailableForBook[0].innerHTML;
      let PriceVerification = xmlDoc.getElementsByTagName("PriceVerification");
      let AvailabilityOnNewPrice = PriceVerification[0].getAttribute('AvailableOnNewPrice');
      
      // alert(`Available For Book ${Availabilitymessage}, Availability On New Price ${Availabilitymessage} `)

      
      if (Availabilitymessage === 'true' && AvailabilityOnNewPrice === 'false'){
              
            let myCancelPolicy;

            let LastCancellationDeadline = xmlDoc.getElementsByTagName("LastCancellationDeadline"); 

            let lastCancelationDate = LastCancellationDeadline[0].innerHTML;

            myCancelPolicy = {...myCancelPolicy, LastCancelationDate: lastCancelationDate};


            let CancelPolicy = xmlDoc.getElementsByTagName("CancelPolicy");
            let cnclPol = [];
            let c;
            for (c=0; c<CancelPolicy.length; c++){   
              let FromDate = CancelPolicy[c].getAttribute('FromDate');
              let ToDate = CancelPolicy[c].getAttribute('ToDate');
              let ChargeType = CancelPolicy[c].getAttribute('ChargeType');
              let CancellationCharge = CancelPolicy[c].getAttribute('CancellationCharge');
              let Currency = CancelPolicy[c].getAttribute('Currency');
              cnclPol.push({FromDate: FromDate, ToDate: ToDate, ChargeType: ChargeType, CancellationCharge: CancellationCharge, Currency: Currency});
            }

            myCancelPolicy = {...myCancelPolicy, CancelPolicy: cnclPol};

            
            let DefaultPolicy = xmlDoc.getElementsByTagName("DefaultPolicy");
            let defaultPolicy = DefaultPolicy[0].innerHTML;

            myCancelPolicy = {...myCancelPolicy, DefaultPolicy: defaultPolicy};
            
            let AutoCancellationText = xmlDoc.getElementsByTagName("AutoCancellationText");
            let autoCancellationText = AutoCancellationText[0].innerHTML;

            myCancelPolicy = {...myCancelPolicy, AutoCancellationText: autoCancellationText};

            let string = xmlDoc.getElementsByTagName("string");
            let myNorm = [];
            let n;
            for (n=0; n<string.length; n++){
              let norm = string[n].innerHTML;
              myNorm.push(norm);
            }

            myCancelPolicy = {...myCancelPolicy, Norms: myNorm};

            CancellationPolicy.push(myCancelPolicy);

            displayCancelationPolicy();
              proceedToBookingBtn.setAttribute('style','');
              proceedToBookingBtn.innerHTML = 'Proceed'

            proceedToBooking();

      }else{
        
        proceedToBookingBtn.style.color = 'white';
        proceedToBookingBtn.style.backgroundColor = 'red';
        proceedToBookingBtn.innerHTML = 'Room not available at the moment, please select another room';
        proceedToBookingBtn.style.border = 'none';

      }

    },
    error : function (err) {
      alert(Failed)
    }
  });



}











function proceedToBooking() {
    selectedRoomsReview();
    toRoomBooking();

}





const bookingRoomWrap = document.querySelector('#booking_room_wrap');


function toRoomBooking(){

      bookingRoomWrap.innerHTML = '';
      let myChildAgeNum = 0;
      let r;
      for (r=0; r<roomInput.value; r++){
        let roomWrap = document.createElement('div');
        roomWrap.className = 'room-wrap';

        let myroom= document.createElement('div');
        myroom.className = 'room';
        myroom.innerHTML = `Room ${r+1}`;

        let myGuestWrap = document.createElement('div');
        myGuestWrap.className = 'my-guest-wrap-div';


        let guestTitle = document.createElement('div');
        guestTitle.className = 'guestTitle';
        guestTitle.innerHTML = 'Guest';

        let nameTitle = document.createElement('div');
        nameTitle.className = 'nameTitle';
        nameTitle.innerHTML = 'Title';

        let firstNameTitle = document.createElement('div');
        firstNameTitle.className = 'firstNameTitle';
        firstNameTitle.innerHTML = 'First Name';

        let lastNameTitle = document.createElement('div');
        lastNameTitle.className = 'lastNameTitle';
        lastNameTitle.innerHTML = 'Last Name';

        let ageTitle = document.createElement('div');
        ageTitle.className = 'ageTitle';
        ageTitle.innerHTML = 'Age';

        let guestWrap = document.createElement('div');
        guestWrap.className = 'guest-wrap';

        guestWrap.appendChild(guestTitle)
        guestWrap.appendChild(nameTitle)
        guestWrap.appendChild(firstNameTitle)
        guestWrap.appendChild(lastNameTitle)
        guestWrap.appendChild(ageTitle)
        myGuestWrap.appendChild(guestWrap)






        let valA = adultArrToBeSent[r];
          let a;
          for (a=0; a<valA; a++){
            let guestWrap = document.createElement('div');
            guestWrap.className = 'guest-wrap';

            let guest = document.createElement('div');
            guest.className = 'guest';
            guest.innerHTML = `Guest ${a+1} (Adult)`;

            let select = document.createElement('select');
            select.setAttribute('id', `bookingInputTitleR${r+1}A${a+1}`);
            select.setAttribute('required', 'true');
            select.className = 'mr-3';

            let option1 = document.createElement('option');
            option1.setAttribute('value', 'Mr');
            option1.innerHTML = 'Mr';

            let option2 = document.createElement('option');
            option2.setAttribute('value', 'Ms');
            option2.innerHTML = 'Ms';

            let option3 = document.createElement('option');
            option3.setAttribute('value', 'Mrs');
            option3.innerHTML = 'Mrs';

            let firstNameInput = document.createElement('input');
            firstNameInput.setAttribute('type', 'text');
            firstNameInput.setAttribute('id', `bookingInputFirstNameR${r+1}A${a+1}`);
            firstNameInput.setAttribute('placeholder', 'FirstName');
            firstNameInput.setAttribute('style', '');
            firstNameInput.className = 'mr-3';
            firstNameInput.setAttribute('required', 'true');

            let lastNameInput = document.createElement('input');
            lastNameInput.setAttribute('type', 'text');
            lastNameInput.setAttribute('id', `bookingInputLastNameR${r+1}A${a+1}`);
            lastNameInput.setAttribute('placeholder', 'LastName');
            lastNameInput.setAttribute('style', '');
            lastNameInput.className = '';
            lastNameInput.setAttribute('required', 'true');

            select.appendChild(option1);
            select.appendChild(option2);
            select.appendChild(option3);

            let selectAge = document.createElement('select');
            selectAge.setAttribute('id', `bookingInputAgeR${r+1}A${a+1}`);
            selectAge.setAttribute('required', 'true');
            selectAge.className = 'mr-3';

            let adultAgeArr;
            for (adultAgeArr = 18; adultAgeArr < 120; adultAgeArr++) {
              let optionAdultAge = document.createElement('option');
              optionAdultAge.setAttribute('value', `${adultAgeArr}`);
              optionAdultAge.innerHTML = `${adultAgeArr}`;
              selectAge.appendChild(optionAdultAge);
            }


            guestWrap.appendChild(guest);
            guestWrap.appendChild(select);
            guestWrap.appendChild(firstNameInput);
            guestWrap.appendChild(lastNameInput);
            guestWrap.appendChild(selectAge);

            myGuestWrap.appendChild(guestWrap);
          }

          let valC = childArrToBeSent[r];
            let c;
            for (c=0; c<valC; c++){
              let guestWrap = document.createElement('div');
              guestWrap.className = 'guest-wrap';
  
              let guest = document.createElement('div');
              guest.className = 'guest';
              guest.innerHTML = `Guest ${c+1} (Child)`;
  
              let select = document.createElement('select');
              select.setAttribute('id', `bookingInputTitleR${r+1}C${c+1}`);
              select.setAttribute('required', 'true');
              select.className = 'mr-3';
  
              let option1 = document.createElement('option');
              option1.setAttribute('value', 'Mr');
              option1.innerHTML = 'Mr';
  
              let option2 = document.createElement('option');
              option2.setAttribute('value', 'Ms');
              option2.innerHTML = 'Ms';   
  
              let firstNameInput = document.createElement('input');
              firstNameInput.setAttribute('type', 'text');
              firstNameInput.setAttribute('id', `bookingInputFirstNameR${r+1}C${c+1}`);
              firstNameInput.setAttribute('placeholder', 'FirstName');
              firstNameInput.setAttribute('style', '');
              firstNameInput.className = 'mr-3';
              firstNameInput.setAttribute('required', 'true');;
  
              let lastNameInput = document.createElement('input');
              lastNameInput.setAttribute('type', 'text');
              lastNameInput.setAttribute('id', `bookingInputLastNameR${r+1}C${c+1}`);
              lastNameInput.setAttribute('placeholder', 'LastName');
              lastNameInput.setAttribute('style', '');
              lastNameInput.className = 'mr-3';
              lastNameInput.setAttribute('required', 'true');
  
              select.appendChild(option1);
              select.appendChild(option2);



              let selectChildAge = document.createElement('select');
              selectChildAge.style.width = '200px'

              let optionChildAge = document.createElement('option');
              optionChildAge.setAttribute('value', `${AgeForChildren[myChildAgeNum]}`);
              optionChildAge.innerHTML = `${AgeForChildren[myChildAgeNum]}`;
              myChildAgeNum++;
              selectChildAge.appendChild(optionChildAge);
              

              guestWrap.appendChild(guest);
              guestWrap.appendChild(select);
              guestWrap.appendChild(firstNameInput);
              guestWrap.appendChild(lastNameInput);
              guestWrap.appendChild(selectChildAge);
  
              myGuestWrap.appendChild(guestWrap);
            }

            roomWrap.appendChild(myroom);
            roomWrap.appendChild(myGuestWrap);

           
            bookingRoomWrap.appendChild(roomWrap);        
    
      }


      toBookingPage();
      bookingResults.innerHTML = '';

}// toRoomBooking




const cancellationWrap = document.querySelector('#cancellation_wrap');

function displayCancelationPolicy(){

  let lastCancellation = document.createElement('div');
  lastCancellation.className = 'last-cancellation';
  let myLdate = new Date(CancellationPolicy[0].LastCancelationDate);
  let formatMyLastCancDate = `${myLdate.getUTCFullYear()}/${myLdate.getUTCMonth()+2}/${myLdate.getUTCDay()-2}`
  lastCancellation.innerHTML = `Last cancellation deadline ${CancellationPolicy[0].LastCancelationDate}`;

  cancellationWrap.appendChild(lastCancellation);

  let cancelationTitleDiv = document.createElement('div');
  cancelationTitleDiv.className = 'cancelation-title-div';

  let head1 = document.createElement('h4');
  head1.innerHTML = 'Cancelation on or After';
  cancelationTitleDiv.appendChild(head1);
  let head2 = document.createElement('h4');
  head2.innerHTML = 'Cancelation on or Before';
  cancelationTitleDiv.appendChild(head2);
  let head3 = document.createElement('h4');
  head3.innerHTML = 'Cancelation Charge (USD)';
  cancelationTitleDiv.appendChild(head3);

  cancellationWrap.appendChild(cancelationTitleDiv);

  CancellationPolicy[0].CancelPolicy.forEach((canclPol)=>{
    let cancelationPolicy = document.createElement('div');
    cancelationPolicy.className = 'cancelation-policy';

    let h41 = document.createElement('h4');
    h41.innerHTML = canclPol.FromDate;
    let h42 = document.createElement('h4');
    h42.innerHTML = canclPol.ToDate;
    let h43 = document.createElement('h4');
    cancelationPolicy.appendChild(h41);
    cancelationPolicy.appendChild(h42);
    if (canclPol.ChargeType === 'Fixed'){
      h43.innerHTML = `$ ${canclPol.CancellationCharge}`;
      cancelationPolicy.appendChild(h43);
    }
    if (canclPol.ChargeType === 'Percentage'){
      h43.innerHTML = `${canclPol.CancellationCharge} %`;
      cancelationPolicy.appendChild(h43);
    }
    
    cancellationWrap.appendChild(cancelationPolicy);
  });

  let hotelNorms = document.createElement('div');
  hotelNorms.className = 'hotel-norms';

  let normHead = document.createElement('h4');
  normHead.innerHTML= 'Hotel Norms';
  hotelNorms.appendChild(normHead);


  let li_1 = document.createElement('div');
  li_1.innerHTML = CancellationPolicy[0].DefaultPolicy;
  hotelNorms.appendChild(li_1);

  let li_2 = document.createElement('div');
  li_2.innerHTML = CancellationPolicy[0].AutoCancellationText;
  hotelNorms.appendChild(li_2);

  CancellationPolicy[0].Norms.forEach((nrm)=>{
    let li_3 = document.createElement('div');
    li_3.innerHTML = nrm;
    hotelNorms.appendChild(li_3);
  });

  cancellationWrap.appendChild(hotelNorms);



}// displayCancelationPolicy






const preview_hotel = document.querySelector('#preview_hotel');
const preview_total_amount = document.querySelector('#preview_total_amount');
const preview_rooms_wrap = document.querySelector('#preview_rooms_wrap');



function selectedRoomsReview() {

  preview_hotel.innerHTML = HotelDetail[0].HotelName;

  
  TotalAmountToBePaid = SelectedRooms.reduce( (previous, current) => (Number(previous) + Number(current[8])).toFixed(2), 0);
  localStorage.setItem('TotalAmountToBePaid', TotalAmountToBePaid);
  preview_total_amount.innerHTML = `<span>$ ${TotalAmountToBePaid}</span> for <span>${myNight}</span> night(s), from <span>${checkInInput.value}</span> to <span>${checkOutInput.value}</span>`;

  preview_rooms_wrap.innerHTML = '';

  let p

  for (p=0; p<SelectedRooms.length; p++) {
    
    let previewCard = document.createElement('div');
    previewCard.className = 'preview-card';

    let h4Room = document.createElement('h4');
    h4Room.innerHTML = `Room ${p+1}`;
    h4Room.className = 'preview-room';

    let h4RoomType = document.createElement('h4');
    h4RoomType.innerHTML = `${SelectedRooms[p][1]}`;

    let h4RoomAddedTotalFare = document.createElement('h4');
    h4RoomAddedTotalFare.innerHTML = `$ ${SelectedRooms[p][8]}`;

    let h4RoomClients =  document.createElement('h4');
    h4RoomClients.innerHTML = ` ${adultArrToBeSent[p]} Adult(s)  ${childArrToBeSent[p]} Child(ren)`;

    previewCard.appendChild(h4Room);
    previewCard.appendChild(h4RoomType);
    previewCard.appendChild(h4RoomAddedTotalFare);
    previewCard.appendChild(h4RoomClients);

    preview_rooms_wrap.appendChild(previewCard);



  }
}





let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


function bookingFormValidation(){
  let bookingNames = [];
  let bookingNameField = [];
  let thereIsError = false;
  let myErrorElement;


  let r;
  for (r=0; r<roomInput.value; r++){

    let valA = adultArrToBeSent[r];
    let a;
    for (a=0; a<valA; a++){

      let myTitle = document.querySelector(`#bookingInputTitleR${r+1}A${a+1}`);
      let myFirstName = document.querySelector(`#bookingInputFirstNameR${r+1}A${a+1}`);
      let myLastName = document.querySelector(`#bookingInputLastNameR${r+1}A${a+1}`);

      if (myFirstName.value === '' || myFirstName.value.length < 3 || format.test(myFirstName.value)){
        thereIsError = true;
        myErrorElement = myFirstName;
      }
      if (myLastName.value === '' || myLastName.value.length < 3 || format.test(myLastName.value)){
        thereIsError = true;
        myErrorElement = myLastName;
      }

      let myFullName = myFirstName.value + myLastName.value;

      bookingNames.push(myFullName);
      bookingNameField.push(myFirstName);
      
    }




    
    let valC = childArrToBeSent[r];
    let c;
    for (c=0; c<valC; c++){

      let myTitle = document.querySelector(`#bookingInputTitleR${r+1}C${c+1}`);
      let myFirstName = document.querySelector(`#bookingInputFirstNameR${r+1}C${c+1}`);
      let myLastName = document.querySelector(`#bookingInputLastNameR${r+1}C${c+1}`);
     
      if (myFirstName.value === '' || myFirstName.value.length < 3 || format.test(myFirstName.value)){
        thereIsError = true;
        myErrorElement = myFirstName;
      }
      if (myLastName.value === '' || myLastName.value.length < 3 || format.test(myLastName.value)){
        thereIsError = true;
        myErrorElement = myLastName;
      }

      let myFullName = myFirstName.value + myLastName.value;

      bookingNames.push(myFullName);
      bookingNameField.push(myFirstName);
      
    }

    // find if there are duplicate names
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index).map((item, index) => bookingNames.indexOf(item))
    let duplicateNames = findDuplicates(bookingNames)
    if (duplicateNames.length > 0) {
      thereIsError = true;
      myErrorElement = bookingNameField[duplicateNames[0]];
    }

  }//   for (r=0; r<roomInput.value; r++)




  if (bookingInputLeadEmail.value === ''){ thereIsError = true; myErrorElement = bookingInputLeadEmail;};
  if (bookingPhoneCode.value === 'Code'){ thereIsError = true; myErrorElement = bookingPhoneCode;};
  if (bookingPhoneNumber.value === ''){ thereIsError = true; myErrorElement = bookingPhoneNumber;};
  if (bookingInputLeadAdress1.value === ''){ thereIsError = true; myErrorElement = bookingInputLeadAdress1;};
  if (bookingInputLeadAdress2.value ===''){ thereIsError = true; myErrorElement = bookingInputLeadAdress2;};
  if (bookingInputLeadCity.value === ''){ thereIsError = true; myErrorElement = bookingInputLeadCity;};




  if (thereIsError) {
    myErrorElement.focus();
    myErrorElement.style.borderBottom = 'solid 1px red';

    setTimeout(()=>{
      myErrorElement.setAttribute('style', '');
    },4000)

  };

  if(!thereIsError){ bookRoom();}



}// bookingFormValidation()










bookingInputLeadEmail.addEventListener('focusout', ()=>{
  bookingPhoneCode.focus();
});
bookingPhoneCode.addEventListener('focusout', ()=>{
  bookingPhoneNumber.focus();
});
bookingPhoneNumber.addEventListener('focusout', ()=>{
  bookingInputLeadAdress1.focus();
});
bookingInputLeadAdress1.addEventListener('focusout', ()=>{
  bookingInputLeadAdress2.focus();
});
bookingInputLeadAdress2.addEventListener('focusout', ()=>{
  bookingInputLeadCity.focus();
});




function formatDate(date) {
  let d = new Date(date),
      month = '' +(d.getMonth() + 1),
      day = '' + d.getDate(),
      year = '' + d.getFullYear().toString().substr(-2);
      hour = '' + d.getHours();
      min = '' +d.getMinutes();
      sec = '' + d.getSeconds();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;
  if (hour.length < 2) 
      hour = '0' + hour;
  if (min.length < 2) 
      min = '0' + min;
  if (sec.length < 2) 
      sec = '0' + sec;

  return [day, month, year, hour, min, sec].join('');
}









// Booking Variable. Dont Touch
let guest_details_param;
let hotel_room_details_param;
let client_reference_number_param;
let guest_nationality_param
let address_line_1_param
let address_line_2_param 
let country_code_param
let country_param
let area_code_param
let phone_number_param
let email_param
let city_param
let state_param
let zip_code_param 
let number_of_rooms_param
let result_index_param
let hotel_code_param
let hotel_name_param

















function bookRoom(){
  OurGuests = [];

  let r;
  for (r=0; r<roomInput.value; r++){

    let valA = adultArrToBeSent[r];
    let a;
    for (a=0; a<valA; a++){
      let myArrayGuest = []

      let myTitle = document.querySelector(`#bookingInputTitleR${r+1}A${a+1}`);
      let myFirstName = document.querySelector(`#bookingInputFirstNameR${r+1}A${a+1}`);
      let myLastName = document.querySelector(`#bookingInputLastNameR${r+1}A${a+1}`);
      let myRoom = r+1;
      let myGuestType = 'Adult'
      let myAge = document.querySelector(`#bookingInputAgeR${r+1}A${a+1}`);
      if (r===0 && a===0){ 
        let myLeadGuest = 'true';
        myArrayGuest = [myLeadGuest, myGuestType, myRoom, myTitle.value, myFirstName.value, myLastName.value, myAge.value];
        OurGuests.push(myArrayGuest);

      }else{
        let myLeadGuest = 'false';
        myArrayGuest = [myLeadGuest, myGuestType, myRoom, myTitle.value, myFirstName.value, myLastName.value, myAge.value];
        OurGuests.push(myArrayGuest);
      }
      
    }


    
    let valC = childArrToBeSent[r];
    let c;
    for (c=0; c<valC; c++){

      let myArrayGuest = []

      let myTitle = document.querySelector(`#bookingInputTitleR${r+1}C${c+1}`);
      let myFirstName = document.querySelector(`#bookingInputFirstNameR${r+1}C${c+1}`);
      let myLastName = document.querySelector(`#bookingInputLastNameR${r+1}C${c+1}`);
      let myRoom = r+1;
      let myGuestType = 'Child';
      let myAge = AgeForChildren[c];
      let myLeadGuest = 'false';
      myArrayGuest = [myLeadGuest, myGuestType, myRoom, myTitle.value, myFirstName.value, myLastName.value, myAge];
      OurGuests.push(myArrayGuest);

    }


  }

  let rund = Math.random() * (999 - 100) + 100;
  let myVal = '' + rund.toFixed(0);
  
  let myDate = '' + formatDate(new Date());
  
  let myBluePrint = '#CRST';
  
  BookClientReferenceNumber = myDate + myVal + myBluePrint;

guest_details_param = OurGuests;
hotel_room_details_param = SelectedRooms;
client_reference_number_param = BookClientReferenceNumber
guest_nationality_param = nationalityInput.value;
address_line_1_param = bookingInputLeadAdress1.value;
address_line_2_param = bookingInputLeadAdress2.value;
country_code_param = nationalityInput.value;
country_param = countries[country_codes.indexOf(nationalityInput.value)];
area_code_param = bookingPhoneCode.value;
phone_number_param = bookingPhoneNumber.value;
email_param = bookingInputLeadEmail.value;
city_param = titleCase(bookingInputLeadCity.value);
state_param = city_param;
zip_code_param = NationalityCityCodes[NationalityCities.indexOf(city_param)];
number_of_rooms_param = roomInput.value;
result_index_param = BookingResultIndex;
hotel_code_param = BookingHotelCode;
hotel_name_param = BookingHotelName;

document.querySelector('#booking_submit_btn').innerHTML = "Proccessing...";
document.querySelector('#booking_submit_btn').style.color = "white";
document.querySelector('#booking_submit_btn').style.backgroundColor = "orange";





toPayment();

   
} // bookRoom














function bookRoomRequest( guest_details_param, hotel_room_details_param, client_reference_number_param, guest_nationality_param, address_line_1_param, address_line_2_param, country_code_param, 
  country_param, area_code_param, phone_number_param, email_param, city_param, state_param, zip_code_param, number_of_rooms_param, result_index_param, 
  hotel_code_param, hotel_name_param ){



  let getBookDetailInDelayCase = setTimeout(function(){ HotelBookingDetails(); }, 120000);

  jQuery.ajax({
    url: requestURL,
    type: 'post',
    data: { 'session_id': SessionID,
            'guest_details': guest_details_param,
            'hotel_room_details': hotel_room_details_param,
            'client_reference_number': client_reference_number_param,
            'guest_nationality': guest_nationality_param,
            'address_line_1': address_line_1_param,
            'address_line_2': address_line_2_param,
            'country_code': country_code_param,
            'country': country_param,
            'area_code': area_code_param,
            'phone_number': phone_number_param,
            'email': email_param,
            'city': city_param,
            'state': state_param,
            'zip_code': zip_code_param,
            'number_of_rooms': number_of_rooms_param, 
            'result_index': result_index_param, 
            'hotel_code': hotel_code_param, 
            'hotel_name': hotel_name_param
    },
    success : function (data) {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data,"text/xml");

      let StatusCodeElement = xmlDoc.getElementsByTagName("StatusCode");
      let StatusCode = StatusCodeElement[0].innerHTML;

      if( Number(StatusCode) === 01 ){
        clearTimeout(getBookDetailInDelayCase);
        onSuccessBooking();
      } else {
        bookingResults.innerHTML = 'Sorry, booking failed...'; 
        bookingResults.className = 'booking-failed';
        clearTimeout(getBookDetailInDelayCase);
      }

      document.querySelector('#booking_submit_btn').innerHTML = "Continue";
      document.querySelector('#booking_submit_btn').className = 'btn';
      document.querySelector('#booking_submit_btn').setAttribute('style', '');
        
    },
    error: function (err) {
        alert('Failed!!');
    }
  });


}









// Call this function when there is no booking response

function HotelBookingDetails() {

  
  jQuery.ajax({
    url: requestURL,
    type: 'post',
    data: {'H_B_D_clientReferenceNumber': BookClientReferenceNumber},
    success : function (data) {

      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data,"text/xml");

      let Description = xmlDoc.getElementsByTagName("Description"); 
      let StatusCodeElement = xmlDoc.getElementsByTagName("StatusCode");
      let message = Description[0].innerHTML;
      let StatusCode = StatusCodeElement[0].innerHTML;

      if( Number(StatusCode) === 01 ){
        displayHotelBookDetail(xmlDoc)
      } else {
        bookingResults.innerHTML = 'Sorry, Booking Failed'; 
        bookingResults.className = 'booking-failed';
        clearTimeout(getBookDetailInDelayCase);
      }


    },
    error: function (err) {
      alert('Failed!!');
    }
  }); 


}






function displayHotelBookDetail(xmlDoc) {

let B_D_hotel_name = xmlDoc.getElementsByTagName('HotelName');
let book_detail_hotel_name = document.querySelector('#book_detail_hotel_name');
book_detail_hotel_name.innerHTML = B_D_hotel_name[0].innerHTML;

let B_D_hotel_address = xmlDoc.getElementsByTagName('AddressLine1');
let book_detail_hotel_address = document.querySelector('#book_detail_hotel_address');
book_detail_hotel_address.innerHTML = B_D_hotel_address[0].innerHTML;

let B_D_city = xmlDoc.getElementsByTagName('City');
let book_detail_city = document.querySelector('#book_detail_city');
book_detail_city.innerHTML = B_D_city[0].innerHTML;

let B_D_CheckInDate = xmlDoc.getElementsByTagName('CheckInDate');
let book_detail_check_in_date = document.querySelector('#book_detail_check_in_date');
book_detail_check_in_date.innerHTML = B_D_CheckInDate[0].innerHTML;

let B_D_CheckOutDate = xmlDoc.getElementsByTagName('CheckOutDate');
let book_detail_check_out_date = document.querySelector('#book_detail_check_out_date');
book_detail_check_out_date.innerHTML = B_D_CheckOutDate[0].innerHTML;

let B_D_BookingDate = xmlDoc.getElementsByTagName('BookingDate');
let book_detail_booking_date = document.querySelector('#book_detail_booking_date');
book_detail_booking_date.innerHTML = B_D_BookingDate[0].innerHTML;

let B_D_BookingDetail = xmlDoc.getElementsByTagName('BookingDetail');

let book_detail_booking_id = document.querySelector('#book_detail_booking_id');
book_detail_booking_id.innerHTML = B_D_BookingDetail[0].getAttribute('BookingId');

let book_detail_book_status = document.querySelector('#book_detail_book_status');
book_detail_book_status.innerHTML = B_D_BookingDetail[0].getAttribute('BookingStatus');

let book_detail_voucher_status = document.querySelector('#book_detail_voucher_status');
book_detail_voucher_status.innerHTML = B_D_BookingDetail[0].getAttribute('VoucherStatus');

let book_detail_invoice_number = document.querySelector('#book_detail_invoice_number');
book_detail_invoice_number.innerHTML = B_D_BookingDetail[0].getAttribute('InvoiceNumber');

let book_detail_confirmation_number = document.querySelector('#book_detail_confirmation_number');
book_detail_confirmation_number.innerHTML = B_D_BookingDetail[0].getAttribute('ConfirmationNo');

let B_D_RoomDetails = xmlDoc.getElementsByTagName('RoomDetails');

let rd;
for(rd=0; rd < B_D_RoomDetails.length; rd++) {

  let B_D_room = document.createElement('div');
  B_D_room.className = 'room';

  let B_D_roomNum = document.createElement('h2');
  B_D_roomNum.innerHTML = `Room ${rd + 1}`;
  B_D_room.appendChild(B_D_roomNum);
  

  let roomDetailChildren = B_D_RoomDetails[rd].childNodes;
  roomDetailChildren.forEach(el => {
    if(el.tagName === 'RoomName'){
      let B_D_roomType = document.createElement('h4');
      B_D_roomType.innerHTML = el.innerHTML;
      B_D_room.appendChild(B_D_roomType);
    }
    if(el.tagName === 'Ameneties'){
      let B_D_amenities = document.createElement('h4');
      B_D_amenities.innerHTML = el.innerHTML;
      B_D_room.appendChild(B_D_amenities);
    }
    if(el.tagName === 'RoomRate'){
      let B_D_roomTotalFare = document.createElement('h4');
      let myTT = el.getAttribute('TotalFare');    
      B_D_roomTotalFare.innerHTML = `$ ${(Number(myTT)* 1.2).toFixed(2)}`;
      B_D_room.appendChild(B_D_roomTotalFare);
    }
    if(el.tagName === 'GuestInfo'){

      let B_D_guestTitle = document.createElement('h3');
      B_D_guestTitle.innerHTML = 'Guests';
      B_D_room.appendChild(B_D_guestTitle);
      guestInfoChildren = el.childNodes;

      guestInfoChildren.forEach(guestTag =>{
        guestTagChildren = guestTag.childNodes;
        let guestName = '';
        guestTagChildren.forEach(guestEl=>{
          if(guestEl.tagName === 'Title') {guestName = guestName + ' ' + guestEl.innerHTML;}
          if(guestEl.tagName === 'FirstName') {guestName = guestName + ' ' + guestEl.innerHTML;}
          if(guestEl.tagName === 'LastName') {guestName = guestName + ' ' + guestEl.innerHTML;}
          // if(guestEl.tagName === 'Age') {guestName = guestName + ' age ' + guestEl.innerHTML;}
          
        })

        let B_D_guestName = document.createElement('h4');
        B_D_guestName.innerHTML = guestName;
        B_D_room.appendChild(B_D_guestName)
      });
    }
  });


  let rooms_guest_wrap = document.querySelector('#rooms_guest_wrap');

  rooms_guest_wrap.appendChild(B_D_room);

}

let B_D_agency_detail = xmlDoc.getElementsByTagName('AgencyDetails');
let agency_children = B_D_agency_detail[0].childNodes;
agency_children.forEach(agencyEl =>{
  if(agencyEl.tagName === 'Name') {
    let book_detail_agency_name = document.querySelector('#book_detail_agency_name');
    book_detail_agency_name.innerHTML = agencyEl.innerHTML;
  }
  if(agencyEl.tagName === 'AddressLine1') {
    let book_detail_agency_address = document.querySelector('#book_detail_agency_address');
    book_detail_agency_address.innerHTML = agencyEl.innerHTML;
  }
  if(agencyEl.tagName === 'Phone') {
    let book_detail_agency_phone = document.querySelector('#book_detail_agency_phone');
    book_detail_agency_phone.innerHTML = agencyEl.innerHTML;
  }
  if(agencyEl.tagName === 'City') {
    let book_detail_agency_city = document.querySelector('#book_detail_agency_city');
    book_detail_agency_city.innerHTML = agencyEl.innerHTML;
  }
  if(agencyEl.tagName === 'BookingMemberName') {
    let book_detail_agency_member = document.querySelector('#book_detail_agency_member');
    book_detail_agency_member.innerHTML = agencyEl.innerHTML;
  }
});

let book_detail_total_payment = document.querySelector('#book_detail_total_payment');
book_detail_total_payment.innerHTML = `$ ${TotalAmountToBePaid}`;

let B_D_TripName = xmlDoc.getElementsByTagName('TripName');
let book_detail_trip_name = document.querySelector('#book_detail_trip_name');
book_detail_trip_name.innerHTML = B_D_TripName[0].innerHTML;

let B_D_CityId = xmlDoc.getElementsByTagName('CityId');
let book_detail_city_id = document.querySelector('#book_detail_city_id');
book_detail_city_id.innerHTML = B_D_CityId[0].innerHTML;

let B_D_TBOHotelCode = xmlDoc.getElementsByTagName('TBOHotelCode');
let book_detail_hotel_code = document.querySelector('#book_detail_hotel_code');
book_detail_hotel_code.innerHTML = B_D_TBOHotelCode[0].innerHTML;

let CurrentCancellationCharges = xmlDoc.getElementsByTagName('CurrentCancellationCharges');
let book_detail_cancel_charges = document.querySelector('#book_detail_cancel_charges');
let cancelMoney = CurrentCancellationCharges[0].innerHTML
book_detail_cancel_charges.innerHTML = `$ ${(Number(cancelMoney)* 1.2).toFixed(2)}`;


onSuccessBooking()

}







// Call this function on success booking
function onSuccessBooking() {
  jQuery('#booking_success').show();
  jQuery('#successfull_wrap ').show();
  jQuery('#booking_loading').hide();
  jQuery('#preview_div_wrap').show();
  jQuery('#hotelSearchButton').hide();
  jQuery('#hotelListButton').hide();
  jQuery('#cancel_booking_wrap').show();
  jQuery('#booking_form_div').hide();
  window.scrollTo(0,0);
  

}













function toPayment() {

  jQuery('#cancel_booking_wrap').slideUp(1000, function(){
    jQuery('#payment_div_wrap').show();
    jQuery('#preview_div_wrap').hide();
    jQuery('#cancel_booking_wrap').hide();
    jQuery('#hotelSearchButton').hide();
    jQuery('#hotelListButton').hide();
    window.scrollTo(0,0);
  
  });


}



paypal.Buttons({
  createOrder: function(data, actions) {
      let amountPayable = localStorage.getItem('TotalAmountToBePaid');
      return actions.order.create({
          purchase_units: [{
              amount: {
                  //enter the total amount here
                  value: amountPayable
              }
          }]
      });
  },
  onApprove: function(data, actions) {
      //already successful

      //payment code
    bookRoomRequest(guest_details_param, hotel_room_details_param, client_reference_number_param, guest_nationality_param, address_line_1_param, address_line_2_param, country_code_param, 
      country_param, area_code_param, phone_number_param, email_param, city_param, state_param, zip_code_param, number_of_rooms_param, result_index_param, 
      hotel_code_param, hotel_name_param )




      return actions.order.capture().then(function(details) {


          //capture transaction success here
          jQuery('#payment_div_wrap').hide();
          jQuery('#successfull_wrap').show();
          jQuery('#booking_loading').show();
          jQuery('#booking_success').hide();
          let SuccessPaymentInfo = document.querySelector('#payment_success');
          jQuery('#payment_success').show();

          SuccessPaymentInfo.innerHTML = `Dear ${details.payer.name.given_name}, thank you for using Crystal Tours. Your Payment has been received`;


          // Call your server to save the transaction
          return fetch('/paypal-transaction-complete', {
              method: 'post',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify({
                  orderID: data.orderID
              })
          });
      });
  }
}).render('#paypal-button-container');




































}// End of jQuery(document).ready()