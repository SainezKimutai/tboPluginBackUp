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


<!--Main rap-->
<article class="main-body-article ">




<section class="title-section" >
    <div class="title-div text-center" >
        <h4>Hotel Booking</h4>
    </div>

    <!-- <div id='testResponse' class="testResponse"></div> -->


</section>


<!--Hotel Search-->
<section id="hotel_search_section" class="hotel-search-section">

    <div class="title-div">
     Search for Hotel
    </div>

    <div class="body-div">
        <form id="hotelSearchForm"  method="post" class="form">

            <div class="form-wrap-location">
                <div class="form-group">
                    <div class="input-field autocomplete" >
                        <input id="countryInput" type='text' class="" required/>
                        <label for="countryInput">Country</label>
                    </div>
                </div>

                <div class="form-group">
                    <div class="input-field autocomplete">
                        <input id="cityInput" type='text' class="" required/>
                        <label for="cityInput">City</label>
                    </div>
                </div>
            </div><!-- form-wrap-location -->

            <div  class="form-wrap-time" >
                <div class="form-group">
                    <div class='input-field'>
                        <input id="checkInInput" type="text" 
                        data-language='en'
                        data-date-format="yyyy-mm-dd"
                        class="datepicker-here" required/>
                        <label for="checkInInput">Check In Date</label>                
                    </div>

                    <div id="nights" class="nights"></div>
                 
                </div>


                <div class="form-group">
                    <div class='input-field'>
               
                        <input id="checkOutInput" type='text' class="datepicker-here validate" 
                        data-language='en'
                        data-date-format="yyyy-mm-dd"
                        required
                        />
                        <label for="checkOutInput">Check Out Date</label>            
                    </div>
                </div>

            </div><!-- form-wrap-time -->

            <div  class="form-wrap-room" >

              <div class="form-group">
                    <div class="input-field" >
                       
                        <select id="nationalityInput" type='text' class="" required> </select>
                        <label for="nationalityInput">Nationality</label> 
                    </div>
                </div>
            
                <div class="form-group">
                    <div class='input-field'>
                        
                        <select id="roomInput" type="text"  class="" required>
                          <option value=''>---</option>
                          <option value="1" >1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                          <option value="4">4 Rooms</option>
                          <option value="5">5 Rooms</option>
                          <option value="6">6 Rooms</option>
                        </select>
                        <label for="roomInput">Rooms</label> 
                        
                    </div>
                </div>
            
            
            </div> <!-- form-wrap-room -->


            <div  class="form-wrap-guest" >

            
            </div><!-- form-wrap-guest -->

            


            <div class="btn-wrap">

              <div id="form_search_error" class=""></div>

                <button type="button" id="hotelSearchBtn" onClick="searchFormValidation()" class="btn">Search</button>
            </div>
           

        </form>
    </div>

</section> <!-- end of hotel-search-section -->









<section id="hotel_list_section" class="hotel-list-section">

    <div id="hotel_list_head_wrap">
        <button class="btn" onClick="toSearchPage()">Search</button>
        <h4>Available Hotels</h4>
    </div>

    <div id="hotel_list_card_group" class="card-group">
    

    
    </div>

</section> 



<section id="hotel_detail_section" class="hotel-detail-section">

    <div id="hotel_detail_head_wrap">
        <button class="btn" onClick="toSearchPage()">Search</button>
        <button class="btn" onClick="toHotelListPage()">Hotels List</button>
        <h4>Hotels Details</h4>
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
        <button id="hotelSearchButton" class="btn" onClick="toSearchPage()">Search</button>
        <button id="hotelListButton" class="btn" onClick="toHotelListPage()">Hotels List</button>
        <h4>Booking Preview</h4>
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

