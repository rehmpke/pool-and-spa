import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

  var chemicals = {
  "products" : [
    {
      "id": 1,
      "name": "Chlorinating Concentrate, 12 x 14oz btls/cs",
      "description": "",
      "category": "pool",
      "qty": "2",
      "unitprice": "10.99",
      "discount": "2.20",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 2,
      "name": "Burnout 73 (full strength Cal Hypo) 4 x 5lb btls/cs",
      "description": "",
      "category": "pool",
      "qty": "1",
      "unitprice": "21.99",
      "discount": "2.20",
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 3,
      "name": "Bannish, QT",
      "description": "BioGuard Banish Algaecide 1 Quart Banish is a fast-acting, highly effective, patented, non-foaming algicide that produces results in 24 hours! It kills all types of algae in swimming pools. Thanks to a patented chelant, Banish also prevents staining that commonly occurs with other copper-based algicides. Highly effective pool algae destroyer and prevetative Fast-acting formula produces results in 24 hours Patented non-staining, non-foaming formula Kills and prevents green, mustard and black algae Works in chlorine and bromine pools Does not affect pH so pH adjustments are unnecessary after treatment You can shock while using Banish so there are fewer steps than when using other copper-based algicides. 3.3% Copper pH 2.4",
      "category": "pool",
      "qty": "1",
      "unitprice": "34.99",
      "discount": "3.50",
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 4,
      "name": "25 LB Balance Pak 100",
      "description": "",
      "category": "pool",
      "qty": "2",
      "unitprice": "37.99",
      "discount": "7.60",
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 5,
      "name": "8 LB Lo N Slo",
      "description": "",
      "category": "pool",
      "qty": "1",
      "unitprice": "15.99",
      "discount": "1.60",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 6,
      "name": "'2 in 1' Test Kit 3/4 oz. OTO & Pre-blended pH",
      "description": "",
      "category": "other",
      "qty": "1",
      "unitprice": "14.99",
      "discount": "1.50",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 7,
      "name": "1 Qt. Kleen It Filter Cleaner",
      "description": "",
      "category": "spa",
      "qty": "1",
      "unitprice": "15.99",
      "discount": "1.60",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 8,
      "name": "BioGuard Silk Guard 1&quote; Tabs, 4.5lb bottle (4/cs)",
      "description": "BioGuard Silk Tabs are a revolutionary new product exclusive to BioGuard and the first sanitizer made with SilkGuard Technology. These products differ from traditional chlorine because their special additives actually soften the water by attaching to hard water components and metal surfaces, which protects your pool equipment from scale, corrosion and staining, all while killing bacteria. These slow dissolving sanitizers contain SunShield Technology so that chlorine is protected from sunlight for long-lasting sanitation of pool water. Product Dosage Routine Maintenance: 16 oz per 10,000 gallons of water per week, or as needed. Ingredients Trichloro-s-triazinetrione: 94.05%, Other Ingredients: 5.95%, Available Chlorine: 84.65%",
      "category": "spa",
      "qty": "1",
      "unitprice": "30.99",
      "discount": "3.10",
      "manufacturer": "BioGuard",
      "status": ""
    },
    {
      "id": 9,
      "name": "22 Oz. Spa pH Decreaser",
      "description": "",
      "category": "spa",
      "qty": "2",
      "unitprice": "7.99",
      "discount": "1.60",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 10,
      "name": "2 LB Spa Alkalinity Increaser",
      "description": "",
      "category": "spa",
      "qty": "2",
      "unitprice": "9.99",
      "discount": "2.00",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 11,
      "name": "04131, Spa Perfect 1 Liter",
      "description": "Spa Perfect is a natural enzyme product that biodegrades organic contaminants to reduce maintenance, prevent scum lines, eliminate chemical odors and produce clear, soft-feeling water.",
      "category": "spa",
      "qty": "1",
      "unitprice": "19.99",
      "discount": "2.00",
      "manufacturer": "Natural Chemistry",
      "status": ""
    },
    {
      "id": 12,
      "name": "BioGuard Back Up 2, 1qt x 12/case",
      "description": "BioGuard Back Up 2 (1 qt) (2 Pack) One of BioGuard's most popular algae preventatives. Works well in chlorinated and brominated pools. A powerful surfactant/wetting agent makes Back Up able to work in tiny cracks and crevices where algae start. 40% quaternary ammonium based algicide pH 5.7 Highly effective algae preventative and algae killer Keeps pool water clear and free of visible algae Activity increases as water temperature rises (and you need protection the most) Will not affect pH levels Non-staining Suitable for all pool surfaces Use once a week Directions for use: 1. Adjust pH to between 7.2 and 7.6 2. Adjust chlorine residual to 1-4 ppm 3. For initial application, pour 32 fluid ounces directly into pool per 25,000 gallons of water (4ppm) 4. For weekly application intervals, pour 1 fluid ounce directly into pool per 5,000 gallons (0.5ppm) of water weekly. For two week application intervals, pour 2 fluid ounces directly into pool per 5,000 gallons of water (1ppm) every other week. 5. Following heavy rain showers, add an additional 1 fluid ounce per 5,000 gallons of water Vacation Treatment (when away for one week or more) 1. Add 4 fluid ounces of Back Up per 5,000 gallons (2ppm) for every week the pool will be unattended 2. Pour product around the edges of the shallow end if shock is also being applied in the deep end",
      "category": "spa",
      "qty": "2",
      "unitprice": "25.99",
      "discount": "5.20",
      "manufacturer": "",
      "status": ""
    },
    {
      "id": 13,
      "name": "04137, Spa Purge 1L, 12/case",
      "description": "",
      "category": "spa",
      "qty": "1",
      "unitprice": "19.99",
      "discount": "",
      "manufacturer": "Natural Chemistry",
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
  
