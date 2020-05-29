//A script for printing the icons on the route display
var element = {};
var icon = {};


/*Route page start here */
//route item element
element.route = (route_key, html, travel_price, travel_time) => {
  var startPoint_input = $('#start_input').val();
  var endPoint_input = $('#end_input').val();

  return `
  <div class="route-item-parent-container">
  <a href="map.html?routeid=` + route_key + `&start=` + startPoint_input + `&end=` + endPoint_input + `"style="color: inherit; text-decoration: inherit;}">
  <div  id="` + route_key + `" pokeguide="route_item" class="route-item-container container">
      <div class="route-icon-container">
         ` + html + `
      </div>

      <div class="route-time-container">
          <snap>` + travel_time + `</snap>
          <br>
          <snap class="route-price-txt">` + travel_price + `</snap>
      </div>
  </div>
  <a>
  `;
}

//walk icon
icon.walk = (time) => {
  if (String(time).length == 1) {
    return `<div class="route-item-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 99.064 101.737">
<g id="Group_1" data-name="Group 1" transform="translate(-60 -256)">
  <path id="Path_1" data-name="Path 1" d="M60.684,49.14,56.79,44.947l-1.729-5.663a24.378,24.378,0,0,0-8.584-12.479,14.7,14.7,0,1,0-20.407-3.7,56.489,56.489,0,0,0-9,3.457l-1.709.755A21.664,21.664,0,0,0,4.451,38.29L2.106,43.854a10.485,10.485,0,0,0,9.478,14.764,9.577,9.577,0,0,0,6.537-2.563c.04.278.079.537.119.815L15.419,64.6,12.18,73.461,2.762,83.873a10.805,10.805,0,0,0,0,14.486,9.932,9.932,0,0,0,14.784,0l9.279-10.174A22.123,22.123,0,0,0,31.2,80.932l1.729-4.749,2.106,2.126a.739.739,0,0,1,.179.378l3.1,14.744a10.3,10.3,0,0,0,9.915,8.306,9.958,9.958,0,0,0,2.4-.3,10.5,10.5,0,0,0,7.551-12.5l-3.1-14.724a22.739,22.739,0,0,0-2.921-7.292,9.8,9.8,0,0,0,1.093.06,10.37,10.37,0,0,0,9.419-6.4A10.488,10.488,0,0,0,60.684,49.14ZM38.131,6.359A8.346,8.346,0,1,1,29.786,14.7,8.345,8.345,0,0,1,38.131,6.359ZM25.215,78.746a15.43,15.43,0,0,1-3.1,5.146L12.836,94.067a3.622,3.622,0,0,1-2.7,1.232,3.686,3.686,0,0,1-2.7-1.232,4.454,4.454,0,0,1,0-5.9l9.279-10.174a7.042,7.042,0,0,0,1.411-2.345l3.239-8.862.02.02.2.238,5.762,5.822-2.126,5.882Zm28.037-18.1a3.451,3.451,0,0,1-2.583-1.232L46,54.385a9.892,9.892,0,0,1-2.186-3.855c-2.265-7.451-2.285-7.928-3.477-9.637L36.184,59.115l8.544,8.624a15.621,15.621,0,0,1,4.133,7.809l3.1,14.724A4.188,4.188,0,0,1,49.1,95.279a3.376,3.376,0,0,1-.874.1,3.955,3.955,0,0,1-3.7-3.239L41.43,77.4a6.909,6.909,0,0,0-1.888-3.537L27,61.161a10.843,10.843,0,0,1-2.365-9.478l3.14-13.77c-1.788.636-3.6,1.451-7.034,2.981a7.172,7.172,0,0,0-3.636,3.656l-2.225,5.286a3.558,3.558,0,0,1-3.3,2.444,4.143,4.143,0,0,1-3.616-5.941l2.285-5.4a15.2,15.2,0,0,1,7.67-7.789c6.8-3,9.677-4.53,15.221-4.53,7.213,0,13.571,5.027,15.857,12.518l2.047,6.736a1.311,1.311,0,0,0,.318.556l4.65,5.027a4.27,4.27,0,0,1-2.762,7.193Z" transform="translate(60.025 256)" fill="#565656"/>
  <path id="Path_2" data-name="Path 2" d="M63.3,23.028,66.124,20.2a1.5,1.5,0,0,0,0-2.128L64,15.946a1.5,1.5,0,0,0-2.128,0l-2.591,2.588a25.852,25.852,0,0,0-14.243-6.357V6.007h3.5a1.5,1.5,0,0,0,1.5-1.5v-3A1.5,1.5,0,0,0,48.54,0H35.524a1.5,1.5,0,0,0-1.5,1.5v3a1.5,1.5,0,0,0,1.5,1.5h3.5v6.184A26.025,26.025,0,1,0,63.3,23.028ZM42.032,58.071A20.025,20.025,0,1,1,62.057,38.047,20.025,20.025,0,0,1,42.032,58.071Z" transform="translate(91 293.489)" fill="#b1b1b1"/>
  <text id="_1" data-name="1" transform="translate(124 341)" font-size="29" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">` + time + `</tspan></text>
</g>
</svg>
</div>`
  } else {
    //double digit with diffrent layout
    return `
    <div class="route-item-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 99.064 101.737">
        <g id="Group_1" data-name="Group 1" transform="translate(-60 -256)">
          <path id="Path_1" data-name="Path 1" d="M60.684,49.14,56.79,44.947l-1.729-5.663a24.378,24.378,0,0,0-8.584-12.479,14.7,14.7,0,1,0-20.407-3.7,56.489,56.489,0,0,0-9,3.457l-1.709.755A21.664,21.664,0,0,0,4.451,38.29L2.106,43.854a10.485,10.485,0,0,0,9.478,14.764,9.577,9.577,0,0,0,6.537-2.563c.04.278.079.537.119.815L15.419,64.6,12.18,73.461,2.762,83.873a10.805,10.805,0,0,0,0,14.486,9.932,9.932,0,0,0,14.784,0l9.279-10.174A22.123,22.123,0,0,0,31.2,80.932l1.729-4.749,2.106,2.126a.739.739,0,0,1,.179.378l3.1,14.744a10.3,10.3,0,0,0,9.915,8.306,9.958,9.958,0,0,0,2.4-.3,10.5,10.5,0,0,0,7.551-12.5l-3.1-14.724a22.739,22.739,0,0,0-2.921-7.292,9.8,9.8,0,0,0,1.093.06,10.37,10.37,0,0,0,9.419-6.4A10.488,10.488,0,0,0,60.684,49.14ZM38.131,6.359A8.346,8.346,0,1,1,29.786,14.7,8.345,8.345,0,0,1,38.131,6.359ZM25.215,78.746a15.43,15.43,0,0,1-3.1,5.146L12.836,94.067a3.622,3.622,0,0,1-2.7,1.232,3.686,3.686,0,0,1-2.7-1.232,4.454,4.454,0,0,1,0-5.9l9.279-10.174a7.042,7.042,0,0,0,1.411-2.345l3.239-8.862.02.02.2.238,5.762,5.822-2.126,5.882Zm28.037-18.1a3.451,3.451,0,0,1-2.583-1.232L46,54.385a9.892,9.892,0,0,1-2.186-3.855c-2.265-7.451-2.285-7.928-3.477-9.637L36.184,59.115l8.544,8.624a15.621,15.621,0,0,1,4.133,7.809l3.1,14.724A4.188,4.188,0,0,1,49.1,95.279a3.376,3.376,0,0,1-.874.1,3.955,3.955,0,0,1-3.7-3.239L41.43,77.4a6.909,6.909,0,0,0-1.888-3.537L27,61.161a10.843,10.843,0,0,1-2.365-9.478l3.14-13.77c-1.788.636-3.6,1.451-7.034,2.981a7.172,7.172,0,0,0-3.636,3.656l-2.225,5.286a3.558,3.558,0,0,1-3.3,2.444,4.143,4.143,0,0,1-3.616-5.941l2.285-5.4a15.2,15.2,0,0,1,7.67-7.789c6.8-3,9.677-4.53,15.221-4.53,7.213,0,13.571,5.027,15.857,12.518l2.047,6.736a1.311,1.311,0,0,0,.318.556l4.65,5.027a4.27,4.27,0,0,1-2.762,7.193Z" transform="translate(60.025 256)" fill="#565656"/>
          <path id="Path_2" data-name="Path 2" d="M63.3,23.028,66.124,20.2a1.5,1.5,0,0,0,0-2.128L64,15.946a1.5,1.5,0,0,0-2.128,0l-2.591,2.588a25.852,25.852,0,0,0-14.243-6.357V6.007h3.5a1.5,1.5,0,0,0,1.5-1.5v-3A1.5,1.5,0,0,0,48.54,0H35.524a1.5,1.5,0,0,0-1.5,1.5v3a1.5,1.5,0,0,0,1.5,1.5h3.5v6.184A26.025,26.025,0,1,0,63.3,23.028ZM42.032,58.071A20.025,20.025,0,1,1,62.057,38.047,20.025,20.025,0,0,1,42.032,58.071Z" transform="translate(91 293.489)" fill="#b1b1b1"/>
          <text id="_12" data-name="12" transform="translate(116 341)" font-size="29" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">` + time + `</tspan></text>
        </g>
        </svg>
        </div>
        `;
  }
}

//right arrow icon
icon.arrow = () => {
  return `<div class="route-item-arrow">
  <i class="fas fa-chevron-right"></i>
</div>`;
}

//bus icon
icon.bus = (txt, color) => {
  return `<div class="route-item-icon">
<snap class="badge bus-badge">
    <i class="fas fa-bus"  style="color:` + color + `;"></i>
    ` + txt + `</snap>
</div>`;
}
/*Route page end here */


/*Map page start here*/


//walk element for transport information
// default dot and line, mode : line-only
element.map_walk = (place_name, travel_time, travel_distance, mode) => {
  var route_line_html = "";
  var place_name_html = "";
 var place_name_end_html = ""; //place title at end slot
  //Mode
  if (mode == "line-only") {
    //display line only
    route_line_html = `<div class="route-line-dashed"></div>`;
  } 
  else if (mode == "bottom-dot") {
    //display dot at bottom
    route_line_html = `
    <div class="route-line-dashed"></div>
    <div class="route-circle-large"></div>
    `;
    place_name_end_html = `<div class="map-place-title">
    <snap>` + place_name + `</snap>
    </div>`;
  } 
  else {
    route_line_html = `
    <div class="route-circle-large"></div>
    <div class="route-line-dashed"></div>
    `;
    place_name_html = `<div class="map-place-title">
    <snap>` + place_name + `</snap>
    </div>`;

  }


  return `  
  <!--Map info row-->
<div class="map-panel-info-container row">

  <div class="map-route-line-conatiner col-1">
    ` + route_line_html + `
  </div>

  <div class="map-place-title-conatiner col-10">

    <div>
      <!--Start place name-->
 ` + place_name_html + `
      <!--END OF Start place name-->

      <!--Map transport info-->
      <div class="map-transport-info">


        <i class="fas fa-walking map-icon-walk"></i>

        <!--Transport info tag-->
        <div class="map-badge-container map-distance-badge">
          <i class="fas fa-map-marked-alt"></i>
          ` + travel_time + ` | ` + travel_distance + `
        </div>

        <!--AR tag-->
        <div class="map-badge-container map-ar-badge">
          AR<sup>.</sup>
        </div>
      </div>
      ` + place_name_end_html + `

    </div>
    <!--END OF Map transport info-->

  </div>

</div>
<!--END of Map info row-->`;
}


//transport badge for transport information 
element.map_transport_badge = (transport_label,company_name,company_color) => {
return `

<i class="fas fa-bus map-icon-bus" style="color:` + company_color + `;"></i>

<div class="map-transport-info-inner">
  <span class="transport-num-badge" style="border-color:` + company_color + `;"> ` + transport_label + ` </span> <br>
  <snap class="transport-type-txt">` + company_name + `</snap>
</div>
`;
}


//transport information for map
//html = transport badges html
element.map_trsnsport = (transport_badge_html, on_stop, off_stop, company_color) => {
  return `    <!--Map info row second-->

<div class="map-panel-info-container row">

  <div class="map-route-line-conatiner col-1">
    <div class="route-circle-large" style="border-color:` + company_color + `;"></div>
    <div class="route-line-solid" style="border-color:` + company_color + `;"></div>
    <div class="route-circle-large" style="border-color:` + company_color + `;"></div>
  </div>

  <div class="map-place-title-conatiner col-10">

    <div>
      <!--Start place name-->
      <div class="map-place-title">
        <snap>` + on_stop + `</snap>
      </div>

      <!--END OF Start place name-->

      <!--Map transport info-->
      <div class="map-transport-info">

      <!--Transport badges-->
      `+transport_badge_html+`
        <!--END OF Transport badges-->

        <!--Transport info - number and schedule-->
        <div>

        </div>

      </div>

      <div class="map-place-title">
        <snap>` + off_stop + `</snap>
      </div>
    </div>
    <!--END OF Map transport info-->

  </div>

</div>
<!--END of Map info row-->`
}

/*Map page end here*/