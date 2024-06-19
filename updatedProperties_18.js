const propertiesString = `[
{"property_id":1943977,"address":"6 Bishopgate St Camperdown","property_post_code":2050,"area":94.8,"sold_date":"18/4/2024","purchase_price":1700000,"strata_lot_number":"","street_address":"6 Bishopgate St Camperdown","coordinates":{"lat":-33.8937353,"lon":151.1755727}},
{"property_id":1944058,"address":"2 Bourne St Marrickville","property_post_code":2204,"area":284.5,"sold_date":"10/4/2024","purchase_price":2275000,"strata_lot_number":"","street_address":"2 Bourne St Marrickville","coordinates":{"lat":-33.9057126,"lon":151.170397}},
{"property_id":1920705,"address":"468 Darling St Balmain","property_post_code":2041,"area":284.5,"sold_date":"10/4/2024","purchase_price":3275000,"strata_lot_number":"","street_address":"468 Darling St Balmain","coordinates":{"lat":-33.8581525,"lon":151.1875557}},
{"property_id":1931089,"address":"119 Moore St Leichhardt","property_post_code":2040,"area":202.3,"sold_date":"6/4/2024","purchase_price":2330000,"strata_lot_number":"","street_address":"119 Moore St Leichhardt","coordinates":{"lat":-33.8793249,"lon":151.1643761}},
{"property_id":1944231,"address":"88 Brighton St Petersham","property_post_code":2049,"area":183.4,"sold_date":"20/4/2024","purchase_price":1925000,"strata_lot_number":"","street_address":"88 Brighton St Petersham","coordinates":{"lat":-33.8922529,"lon":151.1548603}},
{"property_id":1920950,"address":"64 A Darling St Balmain East","property_post_code":2041,"area":368.2,"sold_date":"21/12/2023","purchase_price":3555000,"strata_lot_number":"","street_address":"64 A Darling St Balmain East","coordinates":{"lat":-33.8572502,"lon":151.1943492}},
{"property_id":1931232,"address":"75 Mort St Balmain","property_post_code":2041,"area":247.1,"sold_date":"22/2/2024","purchase_price":3500000,"strata_lot_number":"","street_address":"75 Mort St Balmain","coordinates":{"lat":-33.8553706,"lon":151.1832384}},
{"property_id":1941679,"address":"80 Albany Rd Stanmore","property_post_code":2048,"area":221.3,"sold_date":"4/3/2024","purchase_price":2280000,"strata_lot_number":"","street_address":"80 Albany Rd Stanmore","coordinates":{"lat":-33.8903728,"lon":151.1707381}},
{"property_id":1931564,"address":"47 Myrtle St Leichhardt","property_post_code":2040,"area":221.3,"sold_date":"1/3/2024","purchase_price":1825000,"strata_lot_number":"","street_address":"47 Myrtle St Leichhardt","coordinates":{"lat":-33.8864494,"lon":151.1509561}},
{"property_id":1936743,"address":"34 Stanley St Leichhardt","property_post_code":2040,"area":252.9,"sold_date":"5/4/2024","purchase_price":2415000,"strata_lot_number":"","street_address":"34 Stanley St Leichhardt","coordinates":{"lat":-33.8817037,"lon":151.1609508}},
{"property_id":1952922,"address":"49 Harnett Ave Marrickville","property_post_code":2204,"area":360.4,"sold_date":"9/4/2024","purchase_price":2425000,"strata_lot_number":"","street_address":"49 Harnett Ave Marrickville","coordinates":{"lat":-33.9154959,"lon":151.1476774}},
{"property_id":1947731,"address":"154 Darley St Newtown","property_post_code":2042,"area":196,"sold_date":"11/4/2024","purchase_price":1866000,"strata_lot_number":"","street_address":"154 Darley St Newtown","coordinates":{"lat":-33.9075509,"lon":151.1756222}},
{"property_id":1921683,"address":"100 Edith St Leichhardt","property_post_code":2040,"area":145.4,"sold_date":"26/2/2024","purchase_price":1760000,"strata_lot_number":"","street_address":"100 Edith St Leichhardt","coordinates":{"lat":-33.8845198,"lon":151.1509739}},
{"property_id":1921861,"address":"4 Ellen St Rozelle","property_post_code":2039,"area":120.1,"sold_date":"4/4/2024","purchase_price":2050000,"strata_lot_number":"","street_address":"4 Ellen St Rozelle","coordinates":{"lat":-33.8655852,"lon":151.1707975}},
{"property_id":1926931,"address":"91 Hubert St Lilyfield","property_post_code":2040,"area":306.63,"sold_date":"9/3/2024","purchase_price":2550000,"strata_lot_number":"","street_address":"91 Hubert St Lilyfield","coordinates":{"lat":-33.8738752,"lon":151.1532578}},
{"property_id":1942649,"address":"55 Arthur St Marrickville","property_post_code":2204,"area":196,"sold_date":"10/4/2024","purchase_price":1860000,"strata_lot_number":"","street_address":"55 Arthur St Marrickville","coordinates":{"lat":-33.9124563,"lon":151.1508754}},
{"property_id":1950781,"address":"3 Fishers Reserve Petersham","property_post_code":2049,"area":132.8,"sold_date":"6/4/2024","purchase_price":1720000,"strata_lot_number":"","street_address":"3 Fishers Reserve Petersham","coordinates":{"lat":-33.892896,"lon":151.1555334}},
{"property_id":1950924,"address":"3 Foreman St Tempe","property_post_code":2044,"area":246.6,"sold_date":"5/4/2024","purchase_price":1600000,"strata_lot_number":"","street_address":"3 Foreman St Tempe","coordinates":{"lat":-33.9211054,"lon":151.1625635}},
{"property_id":1953519,"address":"5 Hercules St Dulwich Hill","property_post_code":2203,"area":306.63,"sold_date":"2/12/2023","purchase_price":1700000,"strata_lot_number":"","street_address":"5 Hercules St Dulwich Hill","coordinates":{"lat":-33.9043755,"lon":151.1417821}},
{"property_id":1935254,"address":"19 Roseberry St Balmain","property_post_code":2041,"area":182.7,"sold_date":"9/4/2024","purchase_price":2250000,"strata_lot_number":"","street_address":"19 Roseberry St Balmain","coordinates":{"lat":-33.8600786,"lon":151.1772107}},
{"property_id":1937841,"address":"4 Tobruk Ave Balmain","property_post_code":2041,"area":88.5,"sold_date":"14/3/2024","purchase_price":2285000,"strata_lot_number":"","street_address":"4 Tobruk Ave Balmain","coordinates":{"lat":-33.8609197,"lon":151.1775532}},
{"property_id":1919979,"address":"21 Daniel St Leichhardt","property_post_code":2040,"area":371.55,"sold_date":"19/12/2023","purchase_price":2440000,"strata_lot_number":"","street_address":"21 Daniel St Leichhardt","coordinates":{"lat":-33.8819034,"lon":151.1467932}},
{"property_id":1948516,"address":"43 Despointes St Marrickville","property_post_code":2204,"area":185.93,"sold_date":"10/4/2024","purchase_price":1911000,"strata_lot_number":"","street_address":"43 Despointes St Marrickville","coordinates":{"lat":-33.9093277,"lon":151.1563619}},
{"property_id":1953956,"address":"44 Holmesdale St Marrickville","property_post_code":2204,"area":196,"sold_date":"12/3/2024","purchase_price":2625000,"strata_lot_number":"","street_address":"44 Holmesdale St Marrickville","coordinates":{"lat":-33.9066588,"lon":151.1583771}},
{"property_id":1917777,"address":"55 Catherine St Leichhardt","property_post_code":2040,"area":145.4,"sold_date":"8/4/2024","purchase_price":1800000,"strata_lot_number":"","street_address":"55 Catherine St Leichhardt","coordinates":{"lat":-33.8875361,"lon":151.1614305}},
{"property_id":1970578,"address":"83 Wells St Newtown","property_post_code":2042,"area":142.8,"sold_date":"26/3/2024","purchase_price":2435000,"strata_lot_number":"","street_address":"83 Wells St Newtown","coordinates":{"lat":-33.9056897,"lon":151.1789093}},
{"property_id":1957641,"address":"40 Macarthur Pde Dulwich Hill","property_post_code":2203,"area":520.15,"sold_date":"6/4/2024","purchase_price":3110000,"strata_lot_number":"","street_address":"40 Macarthur Pde Dulwich Hill","coordinates":{"lat":-33.9072047,"lon":151.1420103}},
{"property_id":1957642,"address":"38 Macarthur Pde Dulwich Hill","property_post_code":2203,"area":518.5,"sold_date":"2/3/2024","purchase_price":2700000,"strata_lot_number":"","street_address":"38 Macarthur Pde Dulwich Hill","coordinates":{"lat":-33.9072047,"lon":151.1420103}},
{"property_id":1965871,"address":"73 Simmons St Enmore","property_post_code":2042,"area":120.1,"sold_date":"5/4/2024","purchase_price":1760000,"strata_lot_number":"","street_address":"73 Simmons St Enmore","coordinates":{"lat":-33.8989084,"lon":151.1735947}},
{"property_id":1960900,"address":"321 New Canterbury Rd Dulwich Hill","property_post_code":2203,"area":360.4,"sold_date":"17/4/2024","purchase_price":1850000,"strata_lot_number":"","street_address":"321 New Canterbury Rd Dulwich Hill","coordinates":{"lat":-33.9058368,"lon":151.1353686}},
{"property_id":1968989,"address":"334 Unwins Bridge Rd Tempe","property_post_code":2044,"area":271.9,"sold_date":"28/3/2024","purchase_price":2070000,"strata_lot_number":"","street_address":"334 Unwins Bridge Rd Tempe","coordinates":{"lat":-33.9195318,"lon":151.1621283}},
{"property_id":1969235,"address":"15 Vernon St Lewisham","property_post_code":2049,"area":480.6,"sold_date":"6/4/2024","purchase_price":2836000,"strata_lot_number":"","street_address":"15 Vernon St Lewisham","coordinates":{"lat":-33.8994429,"lon":151.1484309}},
{"property_id":1966564,"address":"81 Station St Petersham","property_post_code":2049,"area":290.9,"sold_date":"23/3/2024","purchase_price":2935000,"strata_lot_number":"","street_address":"81 Station St Petersham","coordinates":{"lat":-33.8908177,"lon":151.1514301}},
{"property_id":2782056,"address":"26 Gipps St Birchgrove","property_post_code":2041,"area":346.1,"sold_date":"11/3/2024","purchase_price":7500000,"strata_lot_number":"","street_address":"26 Gipps St Birchgrove","coordinates":{"lat":-33.8530629,"lon":151.1800682}},
{"property_id":3968294,"address":"14 Page Ave Ashfield","property_post_code":2131,"area":398,"sold_date":"13/4/2024","purchase_price":1825000,"strata_lot_number":"","street_address":"14 Page Ave Ashfield","coordinates":{"lat":-33.876130950000004,"lon":151.1273041444316}},
{"property_id":4011732,"address":"326 Stanmore Rd Petersham","property_post_code":2049,"area":603.5,"sold_date":"20/5/2024","purchase_price":822000,"strata_lot_number":"","street_address":"326 Stanmore Rd Petersham","coordinates":{"lat":-33.8963141,"lon":151.1589039}},
{"property_id":4312343,"address":"40 Wells St Newtown","property_post_code":2042,"area":187.1,"sold_date":"18/4/2024","purchase_price":1775000,"strata_lot_number":"","street_address":"40 Wells St Newtown","coordinates":{"lat":-33.9056897,"lon":151.1789093}},
{"property_id":741958,"address":"16 Macmillan St Seaforth","property_post_code":2092,"area":455.1,"sold_date":"11/4/2024","purchase_price":2910000,"strata_lot_number":"","street_address":"16 Macmillan St Seaforth","coordinates":{"lat":-33.7933232,"lon":151.2437803}},
{"property_id":747870,"address":"10 Prince Edward Rd Seaforth","property_post_code":2092,"area":520.1,"sold_date":"6/4/2024","purchase_price":2675000,"strata_lot_number":"","street_address":"10 Prince Edward Rd Seaforth","coordinates":{"lat":-33.78639115,"lon":151.24071205664455}},
{"property_id":753408,"address":"45 Woodland St Balgowlah Heights","property_post_code":2093,"area":431.5,"sold_date":"6/4/2024","purchase_price":3020000,"strata_lot_number":"","street_address":"45 Woodland St Balgowlah Heights","coordinates":{"lat":-33.8067087,"lon":151.2600451}},
{"property_id":749698,"address":"228 Sydney Rd Fairlight","property_post_code":2094,"area":392,"sold_date":"12/2/2024","purchase_price":2680000,"strata_lot_number":"","street_address":"228 Sydney Rd Fairlight","coordinates":{"lat":-33.7959677,"lon":151.2783713}},
{"property_id":903633,"address":"113 Campbell Pde Manly Vale","property_post_code":2093,"area":788.97,"sold_date":"9/4/2024","purchase_price":3400000,"strata_lot_number":"","street_address":"113 Campbell Pde Manly Vale","coordinates":{"lat":-33.7813976,"lon":151.2721261}},
{"property_id":930667,"address":"33 Oxford Falls Rd Beacon Hill","property_post_code":2100,"area":584.8,"sold_date":"18/4/2024","purchase_price":1775100,"strata_lot_number":"","street_address":"33 Oxford Falls Rd Beacon Hill","coordinates":{"lat":-33.7481417,"lon":151.2513878}},
{"property_id":912001,"address":"53 Essilia St Collaroy Plateau","property_post_code":2097,"area":422.8,"sold_date":"9/3/2024","purchase_price":3700000,"strata_lot_number":"","street_address":"53 Essilia St Collaroy Plateau","coordinates":{"lat":-33.7287169,"lon":151.2899889}},
{"property_id":917429,"address":"52 Hews Pde Belrose","property_post_code":2085,"area":695.6,"sold_date":"13/3/2024","purchase_price":2325000,"strata_lot_number":"","street_address":"52 Hews Pde Belrose","coordinates":{"lat":-33.7326962,"lon":151.2214695}},
{"property_id":928159,"address":"6 Newby Pl Wheeler Heights","property_post_code":2097,"area":891.6,"sold_date":"12/4/2024","purchase_price":2230000,"strata_lot_number":"","street_address":"6 Newby Pl Wheeler Heights","coordinates":{"lat":-33.7303014,"lon":151.2827046}},
{"property_id":917617,"address":"9 Hilma St Collaroy Plateau","property_post_code":2097,"area":638.6,"sold_date":"28/3/2024","purchase_price":3425000,"strata_lot_number":"","street_address":"9 Hilma St Collaroy Plateau","coordinates":{"lat":-33.7351501,"lon":151.2934185}},
{"property_id":925624,"address":"32 Maroa Cres Allambie Heights","property_post_code":2100,"area":613.4,"sold_date":"9/4/2024","purchase_price":3500000,"strata_lot_number":"","street_address":"32 Maroa Cres Allambie Heights","coordinates":{"lat":-33.7784219,"lon":151.2565951}},
{"property_id":906942,"address":"25 Cooper Cl Beacon Hill","property_post_code":2100,"area":809.4,"sold_date":"23/2/2024","purchase_price":2550000,"strata_lot_number":"","street_address":"25 Cooper Cl Beacon Hill","coordinates":{"lat":-33.7513348,"lon":151.2679738}},
{"property_id":926071,"address":"4 Mcbrien Pl Davidson","property_post_code":2085,"area":726.9,"sold_date":"19/3/2024","purchase_price":2620000,"strata_lot_number":"","street_address":"4 Mcbrien Pl Davidson","coordinates":{"lat":-33.7485814,"lon":151.1990403}},
{"property_id":899052,"address":"33 Hendy Ave Collaroy","property_post_code":2097,"area":531.1,"sold_date":"11/3/2024","purchase_price":2900000,"strata_lot_number":"","street_address":"33 Hendy Ave Collaroy","coordinates":{"lat":-33.7368537,"lon":151.2940601}},
{"property_id":912958,"address":"1 Finch Pl Davidson","property_post_code":2085,"area":952.3,"sold_date":"14/3/2024","purchase_price":2250000,"strata_lot_number":"","street_address":"1 Finch Pl Davidson","coordinates":{"lat":-33.7363134,"lon":151.1944249}},
{"property_id":929296,"address":"178 Ocean St Narrabeen","property_post_code":2101,"area":259.3,"sold_date":"9/4/2024","purchase_price":2700000,"strata_lot_number":"","street_address":"178 Ocean St Narrabeen","coordinates":{"lat":-33.708067,"lon":151.302313}},
{"property_id":936833,"address":"31 A Ralston Ave Belrose","property_post_code":2085,"area":330.3,"sold_date":"10/4/2024","purchase_price":1690000,"strata_lot_number":"","street_address":"31 A Ralston Ave Belrose","coordinates":{"lat":-33.7281444,"lon":151.2149182}},
{"property_id":913195,"address":"132 Fisher Rd N Cromer","property_post_code":2099,"area":252.9,"sold_date":"15/3/2024","purchase_price":2440000,"strata_lot_number":"","street_address":"132 Fisher Rd N Cromer","coordinates":{"lat":-33.7443395,"lon":151.2847587}},
{"property_id":915904,"address":"39 Greystoke St Wheeler Heights","property_post_code":2097,"area":556.4,"sold_date":"26/3/2024","purchase_price":2350000,"strata_lot_number":"","street_address":"39 Greystoke St Wheeler Heights","coordinates":{"lat":-33.72427825,"lon":151.27845004736722}},
{"property_id":926633,"address":"4 Milham Cres Forestville","property_post_code":2087,"area":727.2,"sold_date":"5/4/2024","purchase_price":2650000,"strata_lot_number":"","street_address":"4 Milham Cres Forestville","coordinates":{"lat":-33.7561635,"lon":151.1995658}},
{"property_id":926687,"address":"27 Milham Cres Forestville","property_post_code":2087,"area":701.7,"sold_date":"14/3/2024","purchase_price":2950000,"strata_lot_number":"","street_address":"27 Milham Cres Forestville","coordinates":{"lat":-33.7561635,"lon":151.1995658}},
{"property_id":913409,"address":"6 Fletcher Pl Davidson","property_post_code":2085,"area":788.9,"sold_date":"9/4/2024","purchase_price":2125000,"strata_lot_number":"","street_address":"6 Fletcher Pl Davidson","coordinates":{"lat":-33.7359427,"lon":151.1937271}},
{"property_id":918772,"address":"46 Ilford Rd Frenchs Forest","property_post_code":2086,"area":897.9,"sold_date":"8/3/2024","purchase_price":2105000,"strata_lot_number":"","street_address":"46 Ilford Rd Frenchs Forest","coordinates":{"lat":-33.7462123,"lon":151.23945}},
{"property_id":924250,"address":"6 Loftus St Narrabeen","property_post_code":2101,"area":371.6,"sold_date":"5/4/2024","purchase_price":3130000,"strata_lot_number":"","street_address":"6 Loftus St Narrabeen","coordinates":{"lat":-33.7101568,"lon":151.3009414}},
{"property_id":924386,"address":"3 Loretta Pl Belrose","property_post_code":2085,"area":695.6,"sold_date":"9/4/2024","purchase_price":2633000,"strata_lot_number":"","street_address":"3 Loretta Pl Belrose","coordinates":{"lat":-33.7355151,"lon":151.2128703}},
{"property_id":929910,"address":"14 O'Connors Rd Beacon Hill","property_post_code":2100,"area":461.6,"sold_date":"10/4/2024","purchase_price":2220000,"strata_lot_number":"","street_address":"14 O'Connors Rd Beacon Hill","coordinates":{"lat":-33.7542989,"lon":151.2547585}},
{"property_id":908511,"address":"2 Currong Cct Terrey Hills","property_post_code":2084,"area":701.9,"sold_date":"28/3/2024","purchase_price":2600000,"strata_lot_number":"","street_address":"2 Currong Cct Terrey Hills","coordinates":{"lat":-33.6844434,"lon":151.2259055}},
{"property_id":914253,"address":"132 Fuller St Narrabeen","property_post_code":2101,"area":696.77,"sold_date":"29/2/2024","purchase_price":4100000,"strata_lot_number":"","street_address":"132 Fuller St Narrabeen","coordinates":{"lat":-33.7231208,"lon":151.2882974}},
{"property_id":916966,"address":"4 Hay St Collaroy","property_post_code":2097,"area":461.6,"sold_date":"6/2/2024","purchase_price":5908000,"strata_lot_number":"","street_address":"4 Hay St Collaroy","coordinates":{"lat":-33.7428975,"lon":151.3031964}},
{"property_id":949246,"address":"29 Yallumba Cl Forestville","property_post_code":2087,"area":733.5,"sold_date":"13/3/2024","purchase_price":1950000,"strata_lot_number":"","street_address":"29 Yallumba Cl Forestville","coordinates":{"lat":-33.756732,"lon":151.2119963}},
{"property_id":941629,"address":"7 Sunlea Pl Allambie Heights","property_post_code":2100,"area":556.4,"sold_date":"24/2/2024","purchase_price":2540000,"strata_lot_number":"","street_address":"7 Sunlea Pl Allambie Heights","coordinates":{"lat":-33.7579308,"lon":151.245681}},
{"property_id":941766,"address":"25 Surfers Pde Freshwater","property_post_code":2096,"area":404.7,"sold_date":"13/3/2024","purchase_price":4250000,"strata_lot_number":"","street_address":"25 Surfers Pde Freshwater","coordinates":{"lat":-33.7759364,"lon":151.281579}},
{"property_id":944410,"address":"33 Undercliffe St Dee Why","property_post_code":2099,"area":404.7,"sold_date":"28/2/2024","purchase_price":5300000,"strata_lot_number":"","street_address":"33 Undercliffe St Dee Why","coordinates":{"lat":-33.7590592,"lon":151.2975565}},
{"property_id":2982459,"address":"186 Headland Rd North Curl Curl","property_post_code":2099,"area":613.4,"sold_date":"22/2/2024","purchase_price":5415000,"strata_lot_number":"","street_address":"186 Headland Rd North Curl Curl","coordinates":{"lat":-33.7605492,"lon":151.2956355}},
{"property_id":4019285,"address":"12 Hakea Dr Warriewood","property_post_code":2102,"area":133.4,"sold_date":"10/4/2024","purchase_price":1855000,"strata_lot_number":"","street_address":"12 Hakea Dr Warriewood","coordinates":{"lat":-33.6857664,"lon":151.289974}},
{"property_id":4508339,"address":"16 A Government Rd Beacon Hill","property_post_code":2100,"area":600,"sold_date":"15/5/2024","purchase_price":250000,"strata_lot_number":"","street_address":"16 A Government Rd Beacon Hill","coordinates":{"lat":-33.7526789,"lon":151.2528793}},
{"property_id":946145,"address":"741 Warringah Rd Forestville","property_post_code":2087,"area":511,"sold_date":"10/4/2024","purchase_price":1725000,"strata_lot_number":"","street_address":"741 Warringah Rd Forestville","coordinates":{"lat":-33.7611611,"lon":151.2080059}},
{"property_id":949130,"address":"36 Wyuna Ave Freshwater","property_post_code":2096,"area":553.67,"sold_date":"29/2/2024","purchase_price":3350000,"strata_lot_number":"","street_address":"36 Wyuna Ave Freshwater","coordinates":{"lat":-33.7735645,"lon":151.2824633}},
{"property_id":980986,"address":"4 Catalina Cres Avalon Beach","property_post_code":2107,"area":910.5,"sold_date":"12/4/2024","purchase_price":1750000,"strata_lot_number":"","street_address":"4 Catalina Cres Avalon Beach","coordinates":{"lat":-33.6276338,"lon":151.3344337}},
{"property_id":997024,"address":"10 Walworth Ave Newport","property_post_code":2106,"area":575.4,"sold_date":"5/3/2024","purchase_price":3855000,"strata_lot_number":"","street_address":"10 Walworth Ave Newport","coordinates":{"lat":-33.6608907,"lon":151.3184926}},
{"property_id":994480,"address":"48 Thompson St Scotland Island","property_post_code":2105,"area":1296,"sold_date":"12/4/2024","purchase_price":1175000,"strata_lot_number":"","street_address":"48 Thompson St Scotland Island","coordinates":{"lat":-33.6409782,"lon":151.2904867}},
{"property_id":981465,"address":"3 Cooinda Pl Bilgola Plateau","property_post_code":2107,"area":1056,"sold_date":"20/3/2024","purchase_price":2200000,"strata_lot_number":"","street_address":"3 Cooinda Pl Bilgola Plateau","coordinates":{"lat":-33.6449051,"lon":151.3113033}},
{"property_id":981526,"address":"37 Coolangatta Ave Elanora Heights","property_post_code":2101,"area":822,"sold_date":"6/4/2024","purchase_price":2580000,"strata_lot_number":"","street_address":"37 Coolangatta Ave Elanora Heights","coordinates":{"lat":-33.7048076,"lon":151.278487}},
{"property_id":976296,"address":"7 Alameda Way Warriewood","property_post_code":2102,"area":733.5,"sold_date":"15/4/2024","purchase_price":2660000,"strata_lot_number":"","street_address":"7 Alameda Way Warriewood","coordinates":{"lat":-33.6808501,"lon":151.2946766}},
{"property_id":978901,"address":"14 Bassett St Mona Vale","property_post_code":2103,"area":1283.8,"sold_date":"15/12/2023","purchase_price":8900000,"strata_lot_number":"","street_address":"14 Bassett St Mona Vale","coordinates":{"lat":-33.6716146,"lon":151.3069271}},
{"property_id":989848,"address":"16 Narrabeen Park Pde Warriewood","property_post_code":2102,"area":657.6,"sold_date":"12/3/2024","purchase_price":4235000,"strata_lot_number":"","street_address":"16 Narrabeen Park Pde Warriewood","coordinates":{"lat":-33.6996719,"lon":151.3070094}},
{"property_id":976962,"address":"9 Attunga Rd Newport","property_post_code":2106,"area":556.4,"sold_date":"13/10/2023","purchase_price":3950000,"strata_lot_number":"","street_address":"9 Attunga Rd Newport","coordinates":{"lat":-33.648329,"lon":151.3250774}},
{"property_id":982664,"address":"2 Edwin Ave Avalon Beach","property_post_code":2107,"area":600.7,"sold_date":"8/4/2024","purchase_price":2600000,"strata_lot_number":"","street_address":"2 Edwin Ave Avalon Beach","coordinates":{"lat":-33.6284304,"lon":151.3269139}},
{"property_id":977416,"address":"132 Avalon Pde Avalon Beach","property_post_code":2107,"area":885.2,"sold_date":"5/4/2024","purchase_price":3129000,"strata_lot_number":"","street_address":"132 Avalon Pde Avalon Beach","coordinates":{"lat":-33.6323469,"lon":151.3201362}},
{"property_id":988273,"address":"206 Mccarrs Creek Rd Church Point","property_post_code":2105,"area":1027,"sold_date":"31/1/2024","purchase_price":3200000,"strata_lot_number":"","street_address":"206 Mccarrs Creek Rd Church Point","coordinates":{"lat":-33.6453487,"lon":151.2832731}},
{"property_id":983100,"address":"56 Elvina Ave Avalon Beach","property_post_code":2107,"area":562.8,"sold_date":"22/4/2024","purchase_price":2200000,"strata_lot_number":"","street_address":"56 Elvina Ave Avalon Beach","coordinates":{"lat":-33.6304776,"lon":151.3270617}},
{"property_id":983205,"address":"31 Emma St Mona Vale","property_post_code":2103,"area":853.6,"sold_date":"13/4/2024","purchase_price":2760000,"strata_lot_number":"","street_address":"31 Emma St Mona Vale","coordinates":{"lat":-33.6770966,"lon":151.2992804}},
{"property_id":993880,"address":"27 Ross Smith Pde Great Mackerel Beach","property_post_code":2108,"area":746.1,"sold_date":"6/2/2024","purchase_price":1630000,"strata_lot_number":"","street_address":"27 Ross Smith Pde Great Mackerel Beach","coordinates":{"lat":-33.5927155,"lon":151.301685}},
{"property_id":996934,"address":"82 Wallumatta Rd Newport","property_post_code":2106,"area":556.4,"sold_date":"22/3/2024","purchase_price":2130000,"strata_lot_number":"","street_address":"82 Wallumatta Rd Newport","coordinates":{"lat":-33.6527272,"lon":151.3100835}},
{"property_id":3701461,"address":"13 Lee Rd Beacon Hill","property_post_code":2100,"area":562.8,"sold_date":"1/3/2024","purchase_price":3125000,"strata_lot_number":"","street_address":"13 Lee Rd Beacon Hill","coordinates":{"lat":-33.7522926,"lon":151.2614098}},
{"property_id":744948,"address":"49 Malvern Ave Manly","property_post_code":2095,"area":417.8,"sold_date":"12/4/2024","purchase_price":6050000,"strata_lot_number":"","street_address":"49 Malvern Ave Manly","coordinates":{"lat":-33.78833375,"lon":151.28566763593284}},
{"property_id":4462081,"address":"15 Alto Ave Seaforth","property_post_code":2092,"area":519.4,"sold_date":"11/4/2024","purchase_price":4550000,"strata_lot_number":"","street_address":"15 Alto Ave Seaforth","coordinates":{"lat":-33.784840200000005,"lon":151.2409635450138}},
{"property_id":4485725,"address":"28 Kitchener St Balgowlah","property_post_code":2093,"area":335.5,"sold_date":"8/3/2024","purchase_price":2660000,"strata_lot_number":"","street_address":"28 Kitchener St Balgowlah","coordinates":{"lat":-33.7894682,"lon":151.2572551}}
]`;
module.exports = propertiesString;