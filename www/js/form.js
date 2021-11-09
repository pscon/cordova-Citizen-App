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
      document.querySelector('button').addEventListener('click', submitForm);
    });

 function submitForm() {
     
     var title = $("#title").val();
    var content = $("#description").val();
    var category = $("#category").val();

     var formData = {
        title : title,
        content : content,
        categories : category
     };

    $.ajax({
        url: "https://public-api.wordpress.com/rest/v1.1/sites/pscon721275043.wordpress.com/posts/new",
        type: 'POST',
        headers: {"authorization": "Bearer ko3TS#P$ozVI*XRgaE7t0lq0HpIm1i#R5Vb1O^vrWvsVw6$gOU4ho%dJf@%i)zH@"},
        data: formData,
        success: savePost
    });

    function savePost(result){
        console.log(result);
        window.location= 'index.html';
    }
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
}
