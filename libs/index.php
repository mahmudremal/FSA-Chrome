<?php
header( 'Content-type: text/plain' );
if( isset( $_POST[ 'url' ] ) || isset( $_GET[ 'url' ] ) ) {
  $url = isset( $_POST[ 'url' ] ) ? $_POST[ 'url' ] : $_GET[ 'url' ];
  $curl = curl_init();
  // Set some options - we are passing in a useragent too here
  curl_setopt_array( $curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $url,
    CURLOPT_USERAGENT => 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13'
  ) );
  $output = curl_exec( $curl );
  curl_close( $curl );
  // $output = file_get_contents( $url );
  echo $output;
}
?>