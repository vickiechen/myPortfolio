<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Vickie Chen, portfolio, project, web developer">
    <meta name="author" content="Vickie Chen">
    <link rel="icon" href="../../favicon.ico">

    <title>Vickie Chen's Portfolio</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    <!-- Custom styles for this template -->
    <link href="css/carousel.css" rel="stylesheet">
  </head>
<!-- NAVBAR
================================================== -->
  <body ng-app="myApp" id="myApp" data-spy="scroll" data-target=".navbar" data-offset="60" oncontextmenu="return false">
 
    <div class="navbar-wrapper">
      <div class="container">

        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#home">Vickie Chen's Portfolio</a>
            </div>
			
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
			   	<li><a href="#portfolio" data-toggle="tab">Portfolio</a></li>				
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Me <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><a href="#aboutme" data-toggle="tab">Me</a></li>
                    <li><a href="#work" data-toggle="tab">Employment History</a></li>
                    <li><a href="#education" data-toggle="tab">Education</a></li>
                    <li role="separator" class="divider"></li>
                    <li class="dropdown-header">Other Sources</li>
                    <li><a href="mailto:vickie_tree@hotmail.com">Email</a></li>
					<li><a href="https://www.linkedin.com/in/vickie-chen-5a3200b7" target="_blank">Linkedin</a></li>
					<li><a href="https://github.com/VickieChenAtGithub/myPortfolio/" target="_blank">Source Code</a></li>
					<li><a href="data/WanchiChen_Resume_2016.doc" download="WanchiChen_Resume" >Download My Resume</a></li> 
					<li><a href="#maps" data-toggle="tab">Location</a></li>					
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>

	<div ng-controller="homeController">