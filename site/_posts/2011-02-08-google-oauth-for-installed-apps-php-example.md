---
layout: archive
status: publish
published: true
title: Google OAuth for Installed Apps PHP Example
#author:
  #display_name: carson
  #login: admin
  #email: mcdonaec@yahoo.com
  #url: http://ioncannon.net
#author_login: admin
#author_email: mcdonaec@yahoo.com
#author_url: http://ioncannon.net
wordpress_id: 1443
wordpress_url: http://www.ioncannon.net/?p=1443
date: '2011-02-08 11:53:20 -0500'
date_gmt: '2011-02-08 16:53:20 -0500'
categories:
- programming
tags:
- php
- oauth
- google
comments:
- id: 197738
  author: Irineu Martins Junio
  author_email: irineu@mixd.com.br
  author_url: http://www.mixd.com.br/
  date: '2011-02-09 15:03:20 -0500'
  date_gmt: '2011-02-09 20:03:20 -0500'
  content: "Great post man.. helps a lot.\r\nOn my curl connection... i had to insert
    \"curl_setopt($c, CURLOPT_SSL_VERIFYPEER, false);\" because of https urls.\r\nThanks
    from Brazil"
---

I have been working on a long needed update to the <a href="http://www.ioncannon.net/projects/google-analytics-dashboard-wordpress-widget/">Google analytics dashboard plugin for Wordpress</a> and one of the items I had on my TODO list was using Google's OAuth login instead of the old ClientLogin. Setting OAuth up for a Wordpress plugin is complicated because it isn't a hosted application and as such I can't register it to get OAuth keys. That is where a special way of doing OAuth comes in called <a href="http://code.google.com/apis/accounts/docs/OAuthForInstalledApps.html">OAuth for installed apps</a>.


There seems to be a lot of general documentation on how to implement OAuth, but specific guidance for using it in installed apps was hard to find. As I researched solutions, I came across a developer forum discussing unique application setups, including some that required secure authentication for <a href="https://www.employersforwork-lifebalance.org.uk/non-gamstop-casinos/">slots not on gamstop</a> platforms, which often need robust systems to protect user accounts without traditional restrictions. Inspired by this, I experimented with a PHP-based approach tailored for installed apps, which ultimately formed the foundation of the plugin update. The added security layer made it both functional and resilient, addressing the unique requirements I was aiming to meet.


It helps to first know the basic steps that will make this work. From the documentation those steps are:

<ol>
<li>Your application gets an unauthorized request token from Google's authorization server.</li>
<li>Google asks the user to grant you access to the required data.</li>
<li>Your application gets an authorized request token from the authorization server.</li>
<li>You exchange the authorized request token for an access token.</li>
<li>You use the access token to request data from Google's service access servers.</li>
</ol>

I will reference these steps in the code that follows.


Before trying this example out grab the <a href="http://oauth.googlecode.com/svn/code/php/">OAuth PHP library</a>. The only file that is needed to execute the examples is OAuth.php. 


I have split the code into two files that I named phase1.php and phase2.php. In phase1.php the resulting URL would be used to grant access to the given scope (note that I've marked parts of the code that would need to be customized with a "Customize this" comment):


```
require_once("OAuth.php");
// This is the setup for step 1
// 1. Your application gets an unauthorized request token from Google's authorization server.
$signature_method = new OAuthSignatureMethod_HMAC_SHA1();
$params = array();
// The callback is where the user comes back after authentication
$params['oauth_callback'] = 'http://example.com/phase2.php'; // Customize this
// The scope is what you are asking for access to
$params['scope'] = 'https://www.google.com/analytics/feeds/'; // Customize this
// Setting xoauth_displayname will show the given name on the authentication screen
$params['xoauth_displayname'] = 'My Test App'; // Customize this
// Set up an anonymous oauth consumer
$consumer = new OAuthConsumer('anonymous', 'anonymous', NULL);
// Set up the request for a request token
$req_req = OAuthRequest::from_consumer_and_token($consumer, NULL, 'GET', 'https://www.google.com/accounts/OAuthGetRequestToken', $params);
// Sign the request
$req_req->sign_request($signature_method, $consumer, NULL);
// Set up curl and have it get the token to use for the authenication call
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $req_req->to_url());
// This tells curl to return the response as one string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
// Run curl and grab the output and the return code
// This is the execution of step 1
$return = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if($http_code == 200)
{
  // If the call was good parse out the response parameters into an array
  $access_params = array();
  $param_pairs = explode('&', $return);
  foreach($param_pairs as $param_pair)
  {
    if (trim($param_pair) == '') { continue; }
    list($key, $value) = explode('=', $param_pair);
    $access_params[$key] = urldecode($value);
  }
  // Print out the authentication URL that needs to be opened in a browser
  echo "Open this link: https://www.google.com/accounts/OAuthAuthorizeToken?oauth_token=" . urlencode($access_params['oauth_token']) . "\n";
  // This is the oauth token secret that is needed for the second part
  echo "\nRemember the folowing value: " . $access_params['oauth_token_secret'] . "\n";
  // This is where the user would perform step 2
  // 2. Google asks the user to grant you access to the required data.
}
else
{
  echo "Error: $http_code and $return\n";
}
```

The above code performs steps 1 and 2. There are a few notes that are good to know:

<ul>
<li>The OAuth consumer is set to "anonymous" here because this is an installed app, that is used again in the second phase.</li>
<li>There can be multiple scope values, just seperate them with a space.</li>
<li>Make sure to save the oauth_token_secret value, it is required for the second phase.</li>
</ul>

At this point the user goes off to authorize the application on Google's system. When they are done they are redirected back to your callback URL specified in phase 1 as oauth_callback. I put the following code in a file named phase2.php (again I've noted places that would need to be customized):


```
require_once("OAuth.php");
// This is where step 3 comes in, this would be in the callback and would be called
// after the user authenticates.
// 3. Your application gets an authorized request token from the authorization server.
$oauth_verifier = urldecode($_REQUEST['oauth_verifier']);
$oauth_token = urldecode($_REQUEST['oauth_token']);
// The token secret would need to be looked up from the previous step
$ouath_token_secret = ''; // Customize this
// This is where setup for step 4 starts
// 4. You exchange the authorized request token for an access token.
$signature_method = new OAuthSignatureMethod_HMAC_SHA1();
$params = array();
$params['oauth_verifier'] = $oauth_verifier;
// Set up the anonymous consumer again
$consumer = new OAuthConsumer('anonymous', 'anonymous', NULL);
// Use the oauth token and token secret to set up the consumer for the access token
$final_consumer = new OAuthConsumer($oauth_token, $ouath_token_secret);
// Set up the call to get the access token
$acc_req = OAuthRequest::from_consumer_and_token($consumer, $final_consumer, 'GET', 'https://www.google.com/accounts/OAuthGetAccessToken', $params);
$acc_req->sign_request($signature_method, $consumer, $final_consumer);
// Set up curl and have it get the final token and secret
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $acc_req->to_url());
// This tells curl to return the response as one string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
// Run curl and grab the output and the return code
// This is the execution of step 4
$return = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if($http_code == 200)
{
  // If the call was good parse out the response parameters into an array
  $access_params = array();
  $param_pairs = explode('&', $return);
  foreach($param_pairs as $param_pair)
  {
    if (trim($param_pair) == '') { continue; }
    list($key, $value) = explode('=', $param_pair);
    $access_params[$key] = urldecode($value);
  }
  // Print out the final information needed for access to the service that was in "scope"
  echo "Access info: " . $access_params['oauth_token'] . " and " . $access_params['oauth_token_secret'] . "\n";
}
else
{
  echo "Error: $http_code and $return\n";
}
```

At this point you have a good oauth_token and oauth_token_secret that would need to be stored securely. These two bits of information allow you to make calls later to services provided under the given scope listed in the initial token request. Here is an example of making a request:


```
require_once("OAuth.php");
// This is step 5
// 5. You use the access token to request data from Google's service access servers.
$url = 'https://www.google.com/analytics/feeds/accounts/default';
$signature_method = new OAuthSignatureMethod_HMAC_SHA1();
$params = array();
$consumer = new OAuthConsumer('anonymous', 'anonymous', NULL);
// Here the saved oauth_token and oauth_token_secret are used
$token = new OAuthConsumer($saved_oauth_token, $saved_oauth_token_secret);
$oauth_req = OAuthRequest::from_consumer_and_token($consumer, $token, 'GET', $url, $params);
$oauth_req->sign_request($signature_method, $consumer, $token);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
// Use the oauth request to create the authenication header
curl_setopt($ch, CURLOPT_HTTPHEADER, array($oauth_req->to_header())));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$return = curl_exec($ch);
$this->http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if($this->http_code == 200)
{
  echo $return;
}
else
{
  echo $return;
}
```

For a lot more detail check out <a href="http://code.google.com/apis/gdata/articles/oauth.html">Google's OAuth documentation</a>. I also found it helpful to use the <a href="http://googlecodesamples.com/oauth_playground/">Google's OAuth playground</a> to test things out.


I also found a handy list of <a href="http://code.google.com/apis/gdata/faq.html#AuthScopes">all the define Google OAuth scopes</a>.

