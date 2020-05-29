var stringified_api = JSON.stringify(api_result);
var result = JSON.parse(stringified_api); //api result
var result_routes = result.result; //grab routes
var display_obj = []; //store display object


display_info();



function display_info() {

    var temp_display_obj = []; //temp store display object
    var tmp_grouped_routes = []; //temp store grpuped routes

    if (result.success) {
        //loop trough all results
        for (var i = 0; i < result_routes.length; i++) {
            var route = result_routes[i];
            var legs_len = route.legs.length; //legs length
            var total_fare = "$" + route.total_fare; //total_fare
            var total_time = time_convert(route.total_time); //total_time in min
            var route_key = route.route_key; //route key

            //      console.log(route);
            //   console.log("total_fare: " + total_fare);
            //  console.log("total_time: " + total_time);

            //push in total time and fare in temp store
            temp_display_obj.push({
                "route_key": route_key,
                "total_fare": total_fare,
                "total_time": total_time
            });

            //loop trough all legs kmb,minibus...etc
            for (var j = 0; j < legs_len; j++) {
                //loop trough all tarnsport in legs
                var legs = route.legs[j]; //legs
                var legs_type = legs.type; //type of transport

                //convert time to min
                var walking_time_before = Math.round(parseFloat(legs.walking_time_before) / 60);
                var walking_time_after = Math.round(parseFloat(legs.walking_time_after) / 60);


                for (var k = 0; k < legs.grouped_routes.length; k++) {
                    //loop trough all grouped routes in legs
                    var grouped_routes = legs.grouped_routes[k];
                    var route_num = grouped_routes.route_name; //route number
                    var route_color = grouped_routes.company_color; //Company color
                    tmp_grouped_routes.push({
                        "number": route_num,
                        "color": route_color
                    }); //push into temp array 
                    // console.log(grouped_routes);
                }

                temp_display_obj.push({
                    "routes": tmp_grouped_routes,
                    "legs_type": legs_type,
                    "walk_before": walking_time_before,
                    "walk_after": walking_time_after
                });

                tmp_grouped_routes = []; //reset for next type of transport

            }
            //    console.log("Next");
            display_obj.push(temp_display_obj); //push in display information
            temp_display_obj = []; //reset the temp store for next transport
        }

    } else {
        alert("API Error");
    }
}

console.log(display_obj);


//jquery wait for document ready
$(document).ready(function () {

    //function for checking a num is even or not
    function isOdd(n) {
        return n && (n % 2 !== 0);
    }


    var tmp_html = ""; //Temp store route items html
    var tmp_html_icon = ""; //Tmp store icons html
    var route_count = 0; //route counter for determing the walking time
    var count_displayed_route = 0; // count how many transport icon being display

    display_route();
    
    function display_route() {

        if (display_obj.length > 0) {
            for (var i = 0; i < display_obj.length; i++) {
                var total_fare = display_obj[i][0].total_fare;
                var total_time = display_obj[i][0].total_time;
                var route_key = display_obj[i][0].route_key;

                //loop trough all legs inside an item 
                for (j = 1; j < display_obj[i].length; j++) {
                    //walking time
                    var walk_before = display_obj[i][j].walk_before; //walk before time
                    var walk_after = display_obj[i][j].walk_after; //walk after time
                    var routes = display_obj[i][j].routes; //routes
                    var routes_len = display_obj[i][j].routes.length; //routes length
                    var transport_info = display_obj[i][j];

                    //display the first walking time
                    if (route_count == 0 && walk_before != 0) {
                        tmp_html_icon = tmp_html_icon + icon.walk(walk_before) + icon.arrow();
                    }

                    route_count++;

                    for (var k = 0; k < routes.length; k++) {
                        count_displayed_route++;

                        var route_num = routes[k].number; //route number
                        var route_color = '#' + routes[k].color; //route number

                        //prevent an arrow being add in , if there are diffrent trensport between
                        if (count_displayed_route == routes.length) {
                            tmp_html_icon = tmp_html_icon + icon.bus(route_num, route_color);
                        } else {
                            tmp_html_icon = tmp_html_icon + icon.bus(route_num, route_color);
                        }


                        console.log(transport_info);
                    }

                    //display the walking time
                    if (routes_len == route_count) {
                        if (isOdd(route_count)) {
                            tmp_html_icon = tmp_html_icon + icon.arrow() + icon.walk(walk_before) + icon.arrow();
                        } else {
                            tmp_html_icon = tmp_html_icon + icon.arrow() + icon.walk(walk_after) + icon.arrow();
                        }
                    } 
                    else {
                        //for the last icon
                        //no need to display the arrow if it is the last item
                        if (isOdd(route_count)) {
                            tmp_html_icon =  tmp_html_icon + icon.arrow() + icon.walk(walk_before);
                        } else {
                            tmp_html_icon = tmp_html_icon + icon.arrow() + icon.walk(walk_after);
                        }
                    }


                }
                count_displayed_route = 0; //reset for next item
                route_transport_count = 0; //reset for next item
                route_count = 0; //reset route counter for next item
                console.log("next");
                tmp_html = tmp_html + element.route(route_key, tmp_html_icon, total_fare, total_time);
                tmp_html_icon = ""; //reset temp store icon for next element
            }
        }

    }

    //plugin all html init
    $("#route").html(tmp_html);

});