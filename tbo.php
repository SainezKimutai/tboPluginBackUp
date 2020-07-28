<?php
/**
 * Plugin Name: Tbo Plugin
 * Plugin URI:  ""
 * Description: Allow Hottel booking through TBO Api.
 * Version:     1.0.0
 * Author:      Sam & Kim
 * Author URI:  ''
 * License:     GPL2+
 * Text Domain: meta-box
 * Domain Path: /languages/
 *
 * @package TboPlugin
 */


defined( 'ABSPATH') or die( 'Hey, you cannot access this file, you silly human !!');

class TBOPlugin
{
        function __construct()
        {
    //     add_action('init', array($this, 'custom_post_type'));

        }

        function register()
        {
          add_shortcode('tbo_template', array($this, 'enqueue'));

        }

        function activate()
        {
            flush_rewrite_rules();
        }

        function deactivate()
        {

        }

        function custom_post_type()
        {
            register_post_type('hotelBooking', ['public' => true, 'label' => 'HotelBooking']);
        }

        function enqueue()
        {


            include_once(dirname(__FILE__) . '/templates/main.php');

            /* STYLE SHEETS */
            wp_enqueue_style('myAirDatePickerCss', 'https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/css/datepicker.css');
            wp_enqueue_style('myFontAwesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/fontawesome.css');
            wp_enqueue_style('myFontAll', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css');
            
            wp_enqueue_style('myStylecss', plugins_url('/styles/style.css', __FILE__));

            /* SCRIPTS */
            wp_enqueue_script('myAirDatePickerJs', 'https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/js/datepicker.js');
            wp_enqueue_script('myAirDatePickerLangJs', 'https://cdnjs.cloudflare.com/ajax/libs/air-datepicker/2.2.3/js/i18n/datepicker.en.js');         
            wp_enqueue_script('myMainScript', plugins_url('/functions/main.js', __FILE__));

            wp_enqueue_script('myPaymentScript', plugins_url('/functions/payment.js', __FILE__));
            wp_enqueue_script('myNationalityScript', plugins_url('/functions/nationality.js', __FILE__));
            wp_enqueue_script('myPhoneCodesScript', plugins_url('/functions/phoneCodes.js', __FILE__));



        }


}

if ( class_exists( 'TBOPlugin')) {
    $tboPlugin = new TBOPlugin();
    $tboPlugin->register();
}

// Activation
register_activation_hook( __FILE__, array( $tboPlugin, 'activate'));

// Deactivation
register_activation_hook( __FILE__, array( $tboPlugin, 'deactivate'));
