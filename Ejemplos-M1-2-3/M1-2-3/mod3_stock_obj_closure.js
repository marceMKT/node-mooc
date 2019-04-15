

function stock (title) {
    let    _title = title;  //  Title of stock manager
    const  _stock = {};     //  prods: { <code>: {c: code, desc: <description>,  n: <number>}
 
         // Returns access object to internal state (variables), uses ES6 object method syntax
    return {

        title  ()  {              // Returns title of stock manager
            return _title; 
        },

        new_p (code, desc) {      // Adds product to stock if not yet included 
            if (!_stock[code]) {  // if already included returns null, else product object
                _stock[code] = {code, desc, n:0};
                return _stock[code];
            };
            return null;
        },

        add (code, n) {           // if product exists add n and return product, else return null
            if (_stock[code]) {
                _stock[code].n += n;
                return _stock[code];
            }
            return null;
        },

       rem (code, n) { // if n prods in stock subtract n and return product object or return null
            if ( _stock[code] && _stock[code].n >= n ) {
                _stock[code].n -= n;
                return _stock[code];
            } 
            return null;
        },

        number () {             // return number of prods (length of array of prod objects)
            return Object.keys(_stock).length;
        },


       get_p (code) {           // return product obj if exists or null if it doesn’t
            // ....... add code here
        },

       del_p (code) {           // if code exists eliminate and return it, or return null
            // ....... add code here

            // .......
        },

       addJSON (json_prods) {   // Add n to prod if code exists, or create new prod
            // ....... add code here


            // .......
        },

       getJSON () {             // Returns content of _stock serialised as a JSON string
            return JSON.stringify( _stock );
        },

        reset () {              // Remove all products from _stock
            _stock = {}; 
        }
    }
}
