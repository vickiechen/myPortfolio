<?php
/* 
* file name getip.php 
* get visitor IP, locations when app is visited
* by Vickie Chen at 1/27/2016
*/

//set timezone in EST
date_default_timezone_set('America/New_York');

//get longitude and latitude passed by request
$long =($_REQUEST['long']!=""?$_REQUEST['long']:"");
$lat =($_REQUEST['lat']!=""?$_REQUEST['lat']:"");

//get visitor's ip
$user_ip = getUserIP();

//save the visitor's information on visitor.txt and return the total count of visitors
$count = saveUserIP($user_ip, $long, $lat);

//send response back to ajax 
print json_encode(array('ip' => $user_ip,'count' => $count));

/*
 * Function saveUserIP
 *
 * save visitor information into visitor file
 *
 * @param (string) ip
 * @param (string) long
 * @param (string) lat
 * @return (int) 
 */
function saveUserIP($ip, $long="", $lat=""){
	if($ip=="") return false;
	$filename = "../data/visitor.txt";
	$count = count( file( $filename));
	$contents = "IP ".$ip." (".$long.",".$lat.") at ".date('m/d/Y h:i:s a', time());
	file_put_contents($filename, $contents.PHP_EOL , FILE_APPEND);		
	return $count+1;
}

/*
 * Function getUserIP
 *
 * get visitor ip information
 *
 * @return (string) 
 */
function getUserIP(){
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP)) $ip = $client;
    elseif(filter_var($forward, FILTER_VALIDATE_IP)) $ip = $forward;
    else $ip = $remote;
    return $ip;
}
?>