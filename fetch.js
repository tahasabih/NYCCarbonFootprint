
        var addresses = [];
        var raw = [];
        googlekey = "AIzaSyCvVJM08cjWeRBjJIz8CEvP6TkvxFA3ff8";

        $.ajax({
            dataType: "json",
            url: "places.json",
            success: function(data) {
                raw = data.data;
                fetchlocs(raw);
            }
        });

var arraycount = 0;

        function fetchlocs(addressarray) {
                $.ajax({ 
                   type: "GET",
                   dataType: "json",
                   url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + addressarray[arraycount][14] + ", NYC&key=" + googlekey,
                   success: function(loc){     
                     if (loc.results[0] !=undefined && loc.results[0].geometry!=undefined) {  
                         addresses.push({
                            loc: loc.results[0].geometry == undefined ? null: loc.results[0].geometry.location,
                            co2: addressarray[arraycount][16],
                         })
                     }  
                    arraycount++;
                    console.log(arraycount);
                    if (arraycount<580){
                        setTimeout(function(){
                            fetchlocs(raw);
                        }, 110);
                    }
                    else {
                        var jsonaddresses = JSON.stringify(addresses);
                        var url = 'data:text/json;charset=utf8,' + encodeURIComponent(jsonaddresses);
                        window.open(url, '_blank');
                        window.focus();
                    }

                   }
                });
        }