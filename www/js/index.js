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

$(document).ready(function () {

    // Klickt man auf die grosse Checkbox, wird sie grün (oder wieder weiss)
    $(".big-checkbox").click(function () {
        console.log("big-checkbox works");
        $(this).children().toggleClass("bg-light");
        $(this).children().toggleClass("bg-success");
    });

    // Klickt man auf die grosse Checkbox, bekommt die unsichtbare einen Haken
    $(".bg-box").click(function () {
        console.log("click this");
         var checkbox = $(this).children();
         checkbox.prop("checked", !checkbox.prop("checked"));
    });

    // Bis zu 16 Checkboxen werden abgespeichert
    $(".big-checkbox").click(function () {
        // Sammle alle Checkbox-Inputs
        var inputs = document.querySelectorAll('input[type="checkbox"]');
        var arrData = [];
        // Für jeden Input ...
        inputs.forEach(function (input) {
            // ... speichere die ID und den Status ab
            arrData.push({id: input.id, checked: input.checked});
        });
        // In localStorage abspeichern
        localStorage.setItem('inputs', JSON.stringify(arrData));
        // 16
        console.log(JSON.stringify(arrData));

    });
});


var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();