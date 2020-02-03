$.get( "http://csgobackpack.net/api/GetItemsList/v2/").done(function( data ) {
                if(data) {
                    var data_parsed = JSON.parse(data);
                    var name = data_parsed.items_list["3rd Commando Company | KSK"].name;
                    console.log(name);
                }
}, 'json');