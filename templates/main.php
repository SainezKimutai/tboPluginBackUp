<?php

$is_one = false;
?>

<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    

</head>
<body> 
<script
        src="https://www.paypal.com/sdk/js?client-id=AWPTcLCG_QPUELOxUC2ec7roVEilWfH09Te_jaWo2H7lqlrvPJfOCr3qt6HMzKrANxDmanb2kticgRs7">
</script>



<article class="main-body-article ">




<section class="title-section" >
    <div class="title-div text-center" >
        <h4>Hotel Booking</h4>
    </div>
</section>




<!--Hotel Search-->
<section id="hotel_search_section" class="hotel-search-section-2">

    <!-- <div class="title-div">
     Search for Hotel
    </div> -->

    <div class="body-div">
        <form id="hotelSearchForm"  method="post" class="form">

            <div class="form-wrapper">

            <div class="form-wrap-location">
                <div class="form-group">
                    <div class="input-field autocomplete" >
                        <i class="fa fa-globe-africa"></i>
                        <input id="countryInput" type='text' class=""  placeholder="Country"  required/>
                  
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-field autocomplete">
                        <i class="fa fa-city"></i>
                        <input id="cityInput" type='text' class="" placeholder="City"  required/>       
                    </div>
                </div>
            </div>

            <div  class="form-wrap-time" >
                <div class="form-group">
                    <div class='input-field'>
                        <i class="fa fa-clock"></i>
                        <input id="checkInInput" type="text" placeholder="Check In Date" 
                        data-language='en'
                        data-date-format="yyyy-mm-dd"
                        class="datepicker-here" required/>     
                    </div>  
                </div>
           

                <div class="form-group">
                    <div class='input-field'>
                        <i class="fa fa-clock"></i>
                        <input id="checkOutInput" type='text' class="datepicker-here validate" 
                        data-language='en' placeholder="Check Out Date" 
                        data-date-format="yyyy-mm-dd"
                        required
                        />        
                    </div>
                </div>

            </div>
            <div  class="form-wrap-room" >
                <div class="form-wrap-room-wrapper border border-danger">
                    <div class="form-group">
                        <div class="input-field" >
                            <i class="fa fa-flag"></i>
                            <select id="nationalityInput" type='text' class="" placeholder="Nationality" required> </select>
                        </div>
                    </div>
                
                    <div class="form-group">
                        <div class='input-field'>
                            <i class="fa fa-bed"></i>
                            <select id="roomInput" type="text" onClick="openGuestDropdown()" onChange="openFormRoomGuest()"  class="" required>
                            <option value='' selected hidden disabled>Rooms</option>
                            <option value="1">1 Room</option>
                            <option value="2">2 Rooms</option>
                            <option value="3">3 Rooms</option>
                            <option value="4">4 Rooms</option>
                            <option value="5">5 Rooms</option>
                            <option value="6">6 Rooms</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="dropdown-wrapper">
            <div id="guest_dropdown" class="dropdown collapse">
                <div class="close">
                    <span onClick="closeGuestDropdown()">  
                        <i class="fa fa-times"></i>
                    </span>
                </div>
                <div id="form_wrap_guest" class="form-wrap-guest" style="margin: 0!important"></div>
            </div>
            </div>
        </form>

        <div class="btn-wrap">
                <button type="button" id="hotelSearchBtn" onClick="searchFormValidation()" class="btn">Search</button>
        </div>

    </div>

    <div id="form_search_error" class=""></div>

</section> <!-- end of hotel-search-section -->























<section id="hotel_list_section" class="hotel-list-section">

    <div id="hotel_list_head_wrap">
      
        <h4>Available Hotels</h4>
    </div>

    <div class="filter-search">
        <h4 class="title">Filter Search</h4>
        <div class="filter-modify-wrap">
        <div class="filter-search-wrap mr-auto">
            <div class="name-wrap d-flex">
                <div class="name">
                    Hotel Name 
                </div>
                <input id="filterHotelNameInput" type="text">
            </div>
            <div class="rate-wrap d-flex">
                <div class="name">
                    Rating 
                </div>
                <div class="rate-inner-wrap">
                    <input name="filterRatingInput" class="slider-bar" id="filterRatingInput" type="range" min="0" value="0" max="5" step="1" list="ticks" oninput="ratingOutput.value = filterRatingInput.value" /><br />
                    <output id="ratingOutput" class="output">0</output>
                </div>
            </div>
            <div class="btn-wrap">
                <button class="btn btn-sm" onClick="applyHotelFilter()">Apply</button>
            </div>
        </div>
        <button class="btn ml-auto" onClick="toSearchPage()">Modify Search</buttons>
        </div>
    </div>

    <div id="hotel_list_card_group" class="card-group">
    

    
    </div>

</section> 



<section id="hotel_detail_section" class="hotel-detail-section">

    <div id="hotel_detail_head_wrap">
        <h4>Hotels Details</h4>
    </div>

    <div class="navigation">
        <button class="btn"  onClick="toHotelListPage()"> <i class="fa fa-arrow-left"></i> Back</button>
        <div class="nav-list">
            Hotel Search / Hotel list / Hotel Details
        </div>
    </div>

    <div id="hotel_detail_main_wrap" class="hotel-detail-main-wrap"></div>



</section><!-- Detail Sections-->










<section id="booking_section" class="booking-section">



    <div id="successfull_wrap" class="successfull-wrap">

        <div class="successfull-inner-wrap">

            <div class="heading"> Booking Status </div>

            <div id="payment_success" class="payment-success"></div>

            <div id="booking_success" class="booking-success">Success, you have successfully made the booking</div>
            <div id="booking_loading" class="booking-loading">Making the booking...</div>

        </div>

    
    </div>


    <!-- payment Div -->
    <div id="payment_div_wrap" class="payment-div-wrap">

    <div class="title">Choose Payment Method</div>

    <div class="body">
      <div id="paypal-button-container"></div>
    </div>

    </div>

  <div id="preview_div_wrap" class="preview-div-wrap">

    <div class="preview-head">

        <h4>Booking Preview</h4>
    </div>
    <div class="navigation">
        <button class="btn"  onClick="toDetailsPage()"> <i class="fa fa-arrow-left"></i> Back</button>
        <div class="nav-list">
            Hotel Search / Hotel list / Hotel Details / Hotel Booking
        </div>
    </div>

    <div class="preview-body">
    <div class="preview-body-head">
      <div id="preview_hotel" class="preview-hotel"></div>
      <div id="preview_total_amount" class="preview-total-amount"></div>
    </div>


    <div id="preview_rooms_wrap" class="preview-rooms-wrap"></div>
    </div> 


  </div>










  
<div id="book_detail_section" class="book-detail-section">
    <div class="book-detail-head">Booking Details</div>

    <div class="booking-success">Success, you have successfully made the booking</div>

    <div class="booking-detail-top">

            <div class="item-wrap">
                <div class="d-flex">
                    <h5>Hotel Name</h5>
                    <h4 id="book_detail_hotel_name"></h4>
                </div>
                <div class="d-flex">
                    <h5>Address</h5>
                    <h4 id="book_detail_hotel_address"></h4>
                </div>
                <div class="d-flex">
                    <h5>City</h5>
                    <h4 id="book_detail_city"></h4>
                </div>
                <div class="d-flex">
                    <h5>Check In Date</h5>
                    <h4 id="book_detail_check_in_date"></h4>
                </div>
                <div class="d-flex">
                <h5>Check Out Date</h5>
                    <h4 id="book_detail_check_out_date"></h4>
                </div>
                <div class="d-flex">
                <h5>Booking Date</h5>
                    <h4 id="book_detail_booking_date"></h4>
                </div>

            </div>
            <div class="item-wrap">
                <div class="d-flex">
                    <h5>Booking Id</h5>
                    <h4 id="book_detail_booking_id"></h4>
                </div>
                <div class="d-flex">
                    <h5>Booking Status</h5>
                    <h4 id="book_detail_book_status"></h4>
                </div>
                <div class="d-flex">
                    <h5>Voucher Status</h5>
                    <h4 id="book_detail_voucher_status"></h4>
                </div>
                <div class="d-flex">
                    <h5>Invoice Number</h5>
                    <h4 id="book_detail_invoice_number"></h4>
                </div>
                <div class="d-flex">
                <h5>Total Payment</h5>
                    <h4 id="book_detail_total_payment"></h4>
                </div>

                <div class="d-flex">
                <h5>Confirmation number</h5>
                    <h4 id="book_detail_confirmation_number"></h4>
                </div>
                
            </div>

    </div>


    <div id="rooms_guest_wrap" class="rooms-guest-wrap"></div>

    <div class="book-detail-bottom">
            <div class="title">Agency Details</div>
            <div class="info">
                <div class="d-flex">
                <h5>Name</h5>
                <h4 id="book_detail_agency_name"></h4>
                </div>

                <div class="d-flex">
                <h5>Address</h5>
                <h4 id="book_detail_agency_address"></h4>
                </div>

                <div class="d-flex">
                <h5>Phone</h5>
                <h4 id="book_detail_agency_phone"></h4>
                </div>

                <div class="d-flex">
                <h5>City</h5>
                <h4 id="book_detail_agency_city"></h4>
                </div>

                <div class="d-flex">
                <h5>Booking Member Name</h5>
                <h4 id="book_detail_agency_member"></h4>
                </div>

            </div>

            <div class="d-flex">
                <h5>Trip Name</h5>
                <h4 id="book_detail_trip_name"></h4>

            </div>
            <div class="d-flex">
                <h5>City Id</h5>
                <h4 id="book_detail_city_id"></h4>           
            </div>
            <div class="d-flex">
                <h5>Hotel Code</h5>
                <h4 id="book_detail_hotel_code"></h4>           
            </div>
            <div class="d-flex">
                <h5>Cancellation Charges</h5>
                <h4 id="book_detail_cancel_charges"></h4>    
            </div>
    </div>

    <div class="payment-btn-div">
        <button type="button" class="btn"  onClick="toPayment()">Pay Now</button>
    </div>

</div> 






  <div id="cancel_booking_wrap" class="cancel-booking-wrap">


    <div class="hotel-cancellation-policy">
        <div class="heading">Cancellation policy</div>
        <div id="cancellation_wrap" class="cancellation-wrap">     
        </div>
    </div>

    <div id="booking_form_div" class="booking-form-div">
        <div class="heading">
            Booking Form
        </div>
        <form action="">
        <div id="booking_room_wrap">
        </div>
        <div class="contact-wrap">

           
            <div class="lead-guest-contact">Lead Guest Contacts</div>
           
            <div class="input-field">
                <input id="bookingInputLeadEmail" type="email" class="" required>
                <label for="bookingLeadPhoneNumber">Email</label>
            </div>

            <div class="input-field">
            <div class="phone-number-wrap">      
                <select id="bookingLeadPhoneCode" type="number" class="" style="" name="phone-code" required></select>
                <input id="bookingLeadPhoneNumber" type="tel" class="" style="" required>
            </div>
            <label for="bookingLeadPhoneNumber">Phone Number</label>
            </div>


            <div class="input-field">
                <input id="bookingInputLeadAdress1" type="text" class="" style="" required>
                <label for="bookingInputLeadAdress1">Adress Code</label>
            </div>
            
            
            <div class="input-field">
                <input id="bookingInputLeadAdress2" type="text" class="" style="" required>
                <label for="bookingInputLeadAdress2">Adress Name</label>
            </div>
           

            <div class="input-field autocomplete">
            
              <select id="bookingInputLeadCity" type="text"  class="" style=""  required> </select>
              <label for="bookingInputLeadCity">City</label>
            </div>

        </div>


        <div id="booking_btn_wrap" class="btn-wrap">
          <button id="booking_submit_btn" type="button" class="btn"  onClick="bookingFormValidation()">Submit</button>
        </div>

        <div id="booking_results" class="booking-results"></div>

        <!-- <div id="payment_btn_div" class="payment-btn-div">
            <button id="payment_btn" type="button" class="btn"  onClick="toPayment()">Pay Now</button>
        </div> -->

        </form>

    </div>
  </div>





</section><!-- Booking Section -->







</article> <!-- end of main-body-article -->


</body>
</html>

