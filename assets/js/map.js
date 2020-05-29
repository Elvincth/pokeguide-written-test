var stringified_api = JSON.stringify(api_result);
var result = JSON.parse(stringified_api); //api result
var result_routes = result.result; //grab routes

//get route id / route_key from url parameters
const get_route_key = () => getParams(window.location.href).routeid;
//get user start point and end point
const get_startPoint = () => decodeURI(getParams(window.location.href).start);
const get_endPoint = () => decodeURI(getParams(window.location.href).end);

console.log(get_route_key(), get_startPoint(), get_endPoint());



//jquery wait for document ready
$(document).ready(function () {

    //panel bar click
    var isPanelScrolled = false;

    //check scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height()) {
            // End of Page 
            isPanelScrolled = false;
        }
    });



    $("#map-panel-bar").click(function () {
        if (!isPanelScrolled) {
            $('html,body').animate({
                scrollTop: 9999
            }, 'slow');
            isPanelScrolled = true;
        } else {
            $('html,body').animate({
                scrollTop: 0
            }, 'slow');
            isPanelScrolled = false;
        }

    });

    //Display part start here

    var tmp_html = ""; //temp store html
    var tmp_html_badge = ""; //temp transport badges html
    displayMapPanel();

    //display info in map panel
    function displayMapPanel() {
        if (result.success) {
            //loop trough all results
            for (var i = 0; i < result_routes.length; i++) {

                var route = result_routes[i];
                var route_key = route.route_key;
                var legs_len = route.legs.length; //legs length

                //get the selected route only
                if (route_key == get_route_key()) {
                    console.log(route);

                    //loop trough all legs kmb,minibus...etc
                    for (var j = 0; j < legs_len; j++) {

                        //loop trough all tarnsport in legs
                        var legs = route.legs[j]; //legs
                        var legs_type = legs.type; //type of transport
                        //convert time to min
                        var walking_time_before = time_convert(Math.round(parseFloat(legs.walking_time_before) / 60));
                        var walking_time_after = time_convert(Math.round(parseFloat(legs.walking_time_after) / 60));
                        //get walk distance
                        var walking_distance_after = legs.walking_distance_after + " m";
                        var walking_distance_before = legs.walking_distance_before + " m";

                        //legs on stops name
                        var legs_on_stop_name = legs.on_stop_name;
                        var legs_off_stop_name = legs.off_stop_name;

                        // pringting the walking time element 

                        //for the first element
                        if (walking_time_before !== 0 && j == 0) {
                            tmp_html = tmp_html + element.map_walk(get_startPoint(), walking_time_before, walking_distance_before);
                        } else if (walking_time_before !== 0) {
                            tmp_html = tmp_html + element.map_walk(get_startPoint(), walking_time_before, walking_distance_before, "line-only");
                        }



                        //loop trough all grouped routes in legs
                        for (var k = 0; k < legs.grouped_routes.length; k++) {

                            var grouped_routes = legs.grouped_routes[k];
                            var route_num = grouped_routes.route_name; //route number
                            var company_color = "#" + grouped_routes.company_color; //Company color
                            var company_secondary_color = grouped_routes.company_secondary_color; //company secondary color
                            var to_direction = grouped_routes.to_direction;
                            var on_stop_name = grouped_routes.on_stop_name; //on stop station name
                            var company_name = grouped_routes.company_name; //companyname

                            //transport label for display purpose
                            var transport_label = route_num + ' ' + to_direction;
                            tmp_html_badge = tmp_html_badge + element.map_transport_badge(transport_label,company_name,company_color)
                            console.log(grouped_routes);

                        }
                        //draw the line
                        tmp_html = tmp_html + element.map_trsnsport(tmp_html_badge, legs_on_stop_name, legs_off_stop_name, company_color);
                        tmp_html_badge= ""; //reset tmp store for next line

                        console.log(legs);

                        //printing the last walkig time 
                        if (walking_time_before !== 0 && j == legs_len - 1) {
                            tmp_html = tmp_html + element.map_walk(get_endPoint(), walking_time_after, walking_distance_after, "bottom-dot");
                        }


                    }


                }

            }

        } else {
            alert("API Error");
        }

    }

    //plugin all html in it
    $("#map-panel").html(tmp_html);



});




//Map section here
/*
function initializeGoogleMaps() {
    var request = {
        placeId: 'ChIJzXBGLkQFdkgRoyT2MIxgWGw'
    };

    function callback(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            map.setCenter(marker.getPosition());
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10
    });

    service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);
}
google.maps.event.addDomListener(window, 'load', initializeGoogleMaps);

*/