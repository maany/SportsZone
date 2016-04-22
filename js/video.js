/**
 * Created by devmaany on 22/4/16.
 */
alert("video.js_loaded");

$(document).ready(function() {
    var FEED_URL= "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBdmVf67MWq28e4kD6K6_XCll42CUXi6Q0&part=snippet&q=cricket";
    $.ajax({
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
        dataType: 'json',
        success : function(data){
            alert("Youtube data received");
            console.log(data);
            
        }
    })
});
/*$(document).ready(function(){
    alert("Ready for youtube");
    // set App Key
    var API_KEY = "AIzaSyBdmVf67MWq28e4kD6K6_XCll42CUXi6Q0"
    gapi.client.setApiKey(API_KEY);
    // Load YouTube API
    gapi.client.load('youtube', 'v3', function() {
        alert('************** Youtube loaded.');

    });
});*/

// Search for a specified string.
function search(q) {
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        key: 'AIzaSyBdmVf67MWq28e4kD6K6_XCll42CUXi6Q0'
    });

    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
    });
}





