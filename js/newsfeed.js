/**
 * Created by devmaany on 22/4/16.
 */

$(document).ready(function () {
    try {
        var FEED_URL = "http://www.espncricinfo.com/rss/content/story/feeds/968923.xml";
        var feed_element = document.getElementById("sidebar")
        // LOOP ITERATIONS
        var i = 0;
        $.ajax({
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(FEED_URL),
            dataType: 'json',
            success: function (data) {
                if (data.responseData.feed && data.responseData.feed.entries) {
                    $.each(data.responseData.feed.entries, function (i, e) {
                        i++;
                        if(i>6) {
                            return false;
                        }
                        console.log("------------------------");
                        console.log("title      : " + e.title);
                        console.log("author     : " + e.author);
                        console.log("description: " + e.contentSnippet);
                        console.log(e);
                        var content = '<li><a href="' + e.link + '"><span class="tab">' + e.title + '</span></a><p>' + e.contentSnippet + '</p></li>'
                        $("#sidebar ul").append(content);
                    });
                }
            }
        });
    } catch(ex){

    }
});