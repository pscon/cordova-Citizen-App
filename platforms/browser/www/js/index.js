/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', goToForm);
    });

 function goToForm() {
     console.log('here')
  window.location= 'form.html';
}
function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');

    //call wordpress 
    $.ajax({
        url: "https://public-api.wordpress.com/rest/v1.1/sites/pscon721275043.wordpress.com/posts/",
        success: displayPost
    });

    function displayPost(result){

    	var content = "";

        console.log(result.posts);
        result.posts.forEach((post) => {

        	var categories = "";

        	for (var key in post.categories) {
			    if (post.categories.hasOwnProperty(key)) {
			        categories += post.categories[key].name+'';
			    }
			}
        	
        	console.log(post.ID)
        	content += '<li class="cards_item"><div class="card"><div class="card_content">'+
        				'<h2 class="card_title">'+post.author.first_name+' '+post.author.last_name+'</h2>'+
		                 '<h2 class="card_email">'+post.author.nice_name+'</h2>'+
		                    '<h2 class="card_date">'+post.date+'</h2>'+
		                        '<h2 class="card_category of incidence">'+categories+'</h2>'+
		                        '<h2><p class="card_text">'+post.content+'</p></h2>'+
		               '</div></div></li>';
		    ;
		});


		$("#post-results").html(content);
    }
}

