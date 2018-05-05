import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

  var chemicals = {
  "taxes" : [
    {
      'a' : 7.77,
    }
  ],
  "products" : [
    {
      "id": 1,
      "name": "Chlorinating Concentrate, 12 x 14oz btls/cs",
      "description": "SpaGuard's Chlorinating Concentrate provides spa owners with the sanitizing power of chlorine in a quick-dissolving granular form, making application quick and easy. Simply add to spa water while the pump is running, and they dissolve completely to start disinfecting your spa. Chlorinating Concentrate is also pH neutral to ensure no affect on your chemically-balanced spa water. This concentrate can be used in regular doses as a sanitizer, and in shock doses as an oxidizer.",
      "directions": "",
      "category": "pool",
      "suggestedqtyforyear": 2,
      "qty": 1,
      "weight": "Total NET Contents: 72 FL OZ(2.12L)",
      "activeingredients": [
        {"ingredient": "Sodium dichloro-s-triazinetrione dihydrate", "percentage":99.0},
        {"ingredient": "OTHER INGREDIENTS", "percentage":1.0}
      ],
      "unitprice": 10.99,
      "discount": 2.20,
      "manufacturer": "SpaGuard",
      "status": ""
    },
    {
      "id": 2,
      "name": "Burnout 73 (full strength Cal Hypo) 4 x 5lb btls/cs",
      "description": "BioGuard Burnout 73 is a superchlorinator for swimming pools. With the highest percentage of calcium hypochlorite of all the BioGuard shocks this one bag treats 16,500 gallons of water making it one of the strongest shocks on the market. Product Dosage 1 lb per 16,500 gallons of water.",
      "directions": "",
      "category": "pool",
      "suggestedqtyforyear": 1,
      "qty": 1,
      "weight": "NET WT 5lb(2.26kg)",
      "activeingredients": [
        {"ingredient": "Calcium Hypochlorite", "percentage":73},
        {"ingredient": "OTHER INGREDIENTS", "percentage":27}
      ],
      "unitprice": 21.99,
      "discount": 2.20,
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 3,
      "name": "25 LB Balance Pak 100",
      "description": "BioGuard Balance Pak 100 - 25lb Bag Part #24317BIO BioGuard Balance Pak 100 is used to raise total alkalinity. Maintaining proper total alkalinity prevents pH from bouncing due to rain, bather load, and other chemical applications. Low alkalinity may also cause pool water to be corrosive to the metal and plastic with which it comes in contact. This product is proven to help prevent pool staining, plaster etching or liner wrinkling. The contents of Balance Pak 100 dissolve quickly when added directly to water. Product Dosage 1.5 lb per 10,000 gallons of water will raise total alkalinity 10 ppm. Directions Add directly to the pool with the pump and filter running. *We recommend adding 1/2 of the bag in 15 minute intervals. Ingredients Sodium Hydrogen Carbonate: 100%",
      "directions": "",
      "category": "pool",
      "suggestedqtyforyear": 2,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 37.99,
      "discount": 7.60,
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 4,
      "name": "8 LB Lo N Slo",
      "description": "Lo 'N Slo is an easy-to-measure product for reducing pH and total alkalinity in pool water. It's safer to use and store than liquid muriatic acid. 93.2% sodium bisulfate Lowers pH Reduces total alkalinity Quick dissolving Safer to store, transport and handle than liquid acid Test and add For use in all pool types",
      "directions": "Directions for use: 1. When pool in not in use, broadcast Lo'n Slo into the deep end with the pump and filter running according to the dosing chart provided on the label 2. Allow the pool water to recirculate for 2 hours and retest the pH. Repeat treatments as necessary 3. Never add more than 1.5 pounds of Lo'n Slo per 10,000 gallons of water at any one time 4. Newly plastered pools may require frequent treatments for the first few weeks while pool is 'curing' 5. Do not add near metal fittings or allow pH to drop below 7.2 6. Break up undissolved clumps of product that may remain on the bottom of the pool 7. Pre-dissolve for application to colored plaster pools",
      "category": "pool",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 15.99,
      "discount": 1.60,
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 5,
      "name": "'2 in 1' Test Kit 3/4 oz. OTO & Pre-blended pH",
      "description": "",
      "directions": "",
      "category": "other",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 14.99,
      "discount": 1.50,
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 6,
      "name": "1 Qt. Kleen It Filter Cleaner",
      "description": "",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 15.99,
      "discount": 1.60,
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 7,
      "name": "BioGuard Silk Guard 1&quote; Tabs, 4.5lb bottle (4/cs)",
      "description": "BioGuard Silk Tabs are a revolutionary new product exclusive to BioGuard and the first sanitizer made with SilkGuard Technology. These products differ from traditional chlorine because their special additives actually soften the water by attaching to hard water components and metal surfaces, which protects your pool equipment from scale, corrosion and staining, all while killing bacteria. These slow dissolving sanitizers contain SunShield Technology so that chlorine is protected from sunlight for long-lasting sanitation of pool water. Product Dosage Routine Maintenance: 16 oz per 10,000 gallons of water per week, or as needed. Ingredients Trichloro-s-triazinetrione: 94.05%, Other Ingredients: 5.95%, Available Chlorine: 84.65%",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 30.99,
      "discount": 3.10,
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 8,
      "name": "22 Oz. Spa pH Decreaser",
      "description": "",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 2,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "Sodium bisulfate", "percentage":93.2},
        {"ingredient": "OTHER INGREDIENTS", "percentage":6.83}
      ],
      "unitprice": 7.99,
      "discount": 1.60,
      "manufacturer": "SpaGuard",
      "status": ""
    },
    {
      "id": 9,
      "name": "2 LB Spa Alkalinity Increaser",
      "description": "Increase the total alkalinity in your spa by using SpaGuard Spa Total Alkalinity Increaser. Depending on the chemical system used in the spa water total alkalinity should be within the range of 80-120ppm. Please verify your readings by getting your water professionally tested or use testing kits to determine how much of each chemical should be used in the water. This container contains 2 pounds of Total Alkalinity Increaser.",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 2,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "Sodium hydrogen carbonate", "percentage":100},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 9.99,
      "discount": 2.00,
      "manufacturer": "SpaGuard",
      "status": ""
    },
    {
      "id": 10,
      "name": "04131, Spa Perfect 1 Liter",
      "description": "Spa Perfect is a natural enzyme product that biodegrades organic contaminants to reduce maintenance, prevent scum lines, eliminate chemical odors and produce clear, soft-feeling water.",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 19.99,
      "discount": 2.00,
      "manufacturer": "Natural Chemistry",
      "status": ""
    },
    {
      "id": 11,
      "name": "04137, Spa Purge 1L, 12/case",
      "description": "Natural Chemistry Spa Purge attacks the root cause of most spa maintenance problems, the build-up of organic waste. Oils, lotions, cosmetics, hair products, sweat and other non-living organics build up in your spa water and plumbing and produce cloudiness, unpleasant odors and foaming. When using Spa Purge you are purging your spa or hot tub of this organic waste which will drastically reduce or even eliminate these symptoms. Spa Purge is perfect for use in large commercial spas or smaller residential backyard spas. Dosage: 1 liter per 1,000 gallons.",
      "directions": "",
      "category": "spa",
      "suggestedqtyforyear": 1,
      "qty": "",
      "weight": "",
      "activeingredients": [
        {"ingredient": "", "percentage":},
        {"ingredient": "OTHER INGREDIENTS", "percentage":}
      ],
      "unitprice": 19.99,
      "discount": "",
      "manufacturer": "Natural Chemistry",
      "status": ""
    },
    {
      "id": 12,
      "name": "BioGuard Algae Complete",
      "description":, "BioGuard Algae Complete - 72 fl oz Once a week dual action algaecideFor all swimming pool types Prevents and Kills green, mustard and black algae BioGuard Algae Complete is a highly effective fast acting swimming pool algae destroyer. Algae Complete kills all types of swimming pool algae including black, green and mustard algae. Algae Complete is formulated to complement most swimming pool sanitizers. Effective and non-staining when used as directed. When used as directed you will see results in 24 hours. Non-foaming and can be used in swimming pools with attached spas or jetting returns. Initial dose of 8 ounces per 10,000 gallons. Weekly add 1.5 ounces per 10,000 gallons. Active Ingredients: Poly (oxyethylene (dimethyliminio) ethylene (dimethyliminio) ethylene dichloride) 6.50% Copper sulfate pentahydrate** 13.07% Other Ingredients 80.43% **Metallic Copper 3.3%",
      "directions": "",
      "category": "pool",
      "suggestedqtyforyear": 1,
      "qty": 1,
      "weight": "",
      "activeingredients": [
        {"ingredient": "Poly [oxyethylene (dimethyliminio) ethylene (dimethyliminio) ethylene dichloride]", "percentage":6.50},
        {"ingredient": "Copper sulfate pentahydrate** (**Metalic Copper 3.3%)", "percentage":13.07},
        {"ingredient": "OTHER INGREDIENTS", "percentage":80.43}
      ],
      "unitprice": 49.99,
      "discount": "",
      "manufacturer": "BioGuard",
      "status": ""
    }
  ] 
};

$(chemicals.products).each(function(){
  console.log(this.name);
$('#chemicals').prepend('<option value="' + this.name + '">' + this.name + '</option>');
});

(function() {

  document.getElementById('chemicals').addEventListener('change', function(){
      var selectedValue = document.getElementById('chemicals').value;
    console.log('Really: ' + selectedValue);
  });
})();
  
