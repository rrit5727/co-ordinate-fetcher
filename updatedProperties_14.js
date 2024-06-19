const propertiesString = `[
{"property_id":2372645,"address":"23 Alinga St Cabramatta West","property_post_code":2166,"area":556.4,"sold_date":"11/4/2024","purchase_price":1075000,"strata_lot_number":"","street_address":"23 Alinga St Cabramatta West","coordinates":{"lat":-33.8955309,"lon":150.9209001}},
{"property_id":2380489,"address":"3 Cahill St Smithfield","property_post_code":2164,"area":562.8,"sold_date":"9/4/2024","purchase_price":760000,"strata_lot_number":"","street_address":"3 Cahill St Smithfield","coordinates":{"lat":-33.8554087,"lon":150.9302116}},
{"property_id":2379168,"address":"20 Brown St Smithfield","property_post_code":2164,"area":619.7,"sold_date":"6/4/2024","purchase_price":1295000,"strata_lot_number":"","street_address":"20 Brown St Smithfield","coordinates":{"lat":-33.8562264,"lon":150.9244588}},
{"property_id":2373297,"address":"4 Antill Pl Mount Pritchard","property_post_code":2170,"area":537.5,"sold_date":"29/4/2024","purchase_price":1115000,"strata_lot_number":"","street_address":"4 Antill Pl Mount Pritchard","coordinates":{"lat":-33.8985894,"lon":150.9092292}},
{"property_id":2419409,"address":"244 A St Johns Rd St Johns Park","property_post_code":2176,"area":568.1,"sold_date":"9/4/2024","purchase_price":1435000,"strata_lot_number":"","street_address":"244 A St Johns Rd St Johns Park","coordinates":{"lat":-33.8864026,"lon":150.9094406}},
{"property_id":2422862,"address":"47 Stevenson St Wetherill Park","property_post_code":2164,"area":557.5,"sold_date":"23/3/2024","purchase_price":1150500,"strata_lot_number":"","street_address":"47 Stevenson St Wetherill Park","coordinates":{"lat":-33.8516974,"lon":150.9078462}},
{"property_id":2382087,"address":"9 Cato Cl Edensor Park","property_post_code":2176,"area":555.5,"sold_date":"27/3/2024","purchase_price":965000,"strata_lot_number":"","street_address":"9 Cato Cl Edensor Park","coordinates":{"lat":-33.8847448,"lon":150.8743636}},
{"property_id":2406355,"address":"56 Macquarie St Fairfield","property_post_code":2165,"area":378.2,"sold_date":"17/2/2024","purchase_price":775000,"strata_lot_number":"","street_address":"56 Macquarie St Fairfield","coordinates":{"lat":-33.8712294,"lon":150.9464015}},
{"property_id":2417035,"address":"2 Ralph St Cabramatta","property_post_code":2166,"area":645,"sold_date":"22/3/2024","purchase_price":950000,"strata_lot_number":"","street_address":"2 Ralph St Cabramatta","coordinates":{"lat":-33.8935871,"lon":150.9516304314206}},
{"property_id":2419739,"address":"49 St Kilda St St Johns Park","property_post_code":2176,"area":577.6,"sold_date":"6/4/2024","purchase_price":1160000,"strata_lot_number":"","street_address":"49 St Kilda St St Johns Park","coordinates":{"lat":-33.8847423,"lon":150.9051517}},
{"property_id":2390236,"address":"62 Evans St Fairfield Heights","property_post_code":2165,"area":505.8,"sold_date":"12/2/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"62 Evans St Fairfield Heights","coordinates":{"lat":-33.8687647,"lon":150.9393892}},
{"property_id":2423976,"address":"30 Tarlington Pde Bonnyrigg","property_post_code":2177,"area":450,"sold_date":"2/5/2024","purchase_price":700000,"strata_lot_number":"","street_address":"30 Tarlington Pde Bonnyrigg","coordinates":{"lat":-33.8922072,"lon":150.892777}},
{"property_id":2398856,"address":"50 Humphries Rd Wakeley","property_post_code":2176,"area":569.2,"sold_date":"6/4/2024","purchase_price":1597000,"strata_lot_number":"","street_address":"50 Humphries Rd Wakeley","coordinates":{"lat":-33.8784638,"lon":150.9127104}},
{"property_id":2409594,"address":"29 Middlehope St Bonnyrigg Heights","property_post_code":2177,"area":565.7,"sold_date":"26/4/2024","purchase_price":1412000,"strata_lot_number":"","street_address":"29 Middlehope St Bonnyrigg Heights","coordinates":{"lat":-33.8932614,"lon":150.8607311}},
{"property_id":2423063,"address":"5 Strathfield Cl St Johns Park","property_post_code":2176,"area":555.8,"sold_date":"11/4/2024","purchase_price":880000,"strata_lot_number":"","street_address":"5 Strathfield Cl St Johns Park","coordinates":{"lat":-33.8888938,"lon":150.904491}},
{"property_id":2390927,"address":"17 Fernlea Pl Canley Heights","property_post_code":2166,"area":904.2,"sold_date":"10/4/2024","purchase_price":1185000,"strata_lot_number":"","street_address":"17 Fernlea Pl Canley Heights","coordinates":{"lat":-33.8787117,"lon":150.9238846}},
{"property_id":2399097,"address":"13 Huntingdale Ave Lansvale","property_post_code":2166,"area":594.4,"sold_date":"23/4/2024","purchase_price":1000000,"strata_lot_number":"","street_address":"13 Huntingdale Ave Lansvale","coordinates":{"lat":-33.8996152,"lon":150.9478521}},
{"property_id":2409811,"address":"75 Mimosa Rd Bossley Park","property_post_code":2176,"area":866.3,"sold_date":"7/4/2024","purchase_price":1582000,"strata_lot_number":"","street_address":"75 Mimosa Rd Bossley Park","coordinates":{"lat":-33.8605637,"lon":150.8909009}},
{"property_id":2402130,"address":"38 Kihilla St Fairfield Heights","property_post_code":2165,"area":758.7,"sold_date":"23/2/2024","purchase_price":1580000,"strata_lot_number":"","street_address":"38 Kihilla St Fairfield Heights","coordinates":{"lat":-33.8640458,"lon":150.93584}},
{"property_id":2418230,"address":"64 Roland St Bossley Park","property_post_code":2176,"area":550,"sold_date":"6/4/2024","purchase_price":1222000,"strata_lot_number":"","street_address":"64 Roland St Bossley Park","coordinates":{"lat":-33.8541473,"lon":150.8947952}},
{"property_id":2423398,"address":"54 Sussex St Cabramatta","property_post_code":2166,"area":657.6,"sold_date":"18/4/2024","purchase_price":380000,"strata_lot_number":"","street_address":"54 Sussex St Cabramatta","coordinates":{"lat":-33.9027418,"lon":150.9371887}},
{"property_id":2391461,"address":"14 Flynn Pl Bonnyrigg Heights","property_post_code":2177,"area":560,"sold_date":"23/3/2024","purchase_price":980000,"strata_lot_number":"","street_address":"14 Flynn Pl Bonnyrigg Heights","coordinates":{"lat":-33.8944844,"lon":150.8762444}},
{"property_id":3364350,"address":"45 A Vale St Cabramatta","property_post_code":2166,"area":450,"sold_date":"9/4/2024","purchase_price":790000,"strata_lot_number":"","street_address":"45 A Vale St Cabramatta","coordinates":{"lat":-33.8931644,"lon":150.9497005}},
{"property_id":2472230,"address":"329 Chifley Rd Dargan","property_post_code":2786,"area":8600,"sold_date":"9/4/2024","purchase_price":750000,"strata_lot_number":"","street_address":"329 Chifley Rd Dargan","coordinates":{"lat":-33.4730175,"lon":150.2399065}},
{"property_id":2480196,"address":"17 Brain Ave Lurnea","property_post_code":2170,"area":733.5,"sold_date":"6/4/2024","purchase_price":900000,"strata_lot_number":"","street_address":"17 Brain Ave Lurnea","coordinates":{"lat":-33.9385742,"lon":150.8945058}},
{"property_id":2486902,"address":"46 Currawong St Green Valley","property_post_code":2168,"area":631.6,"sold_date":"6/4/2024","purchase_price":1275000,"strata_lot_number":"","street_address":"46 Currawong St Green Valley","coordinates":{"lat":-33.9001949,"lon":150.8716307}},
{"property_id":2481179,"address":"45 Bungarra Cres Chipping Norton","property_post_code":2170,"area":663.9,"sold_date":"12/4/2024","purchase_price":1280000,"strata_lot_number":"","street_address":"45 Bungarra Cres Chipping Norton","coordinates":{"lat":-33.9240939,"lon":150.9588109}},
{"property_id":2487603,"address":"19 Deerwood Ave Liverpool","property_post_code":2170,"area":557.5,"sold_date":"8/4/2024","purchase_price":950000,"strata_lot_number":"","street_address":"19 Deerwood Ave Liverpool","coordinates":{"lat":-33.9370926,"lon":150.9171724}},
{"property_id":2484654,"address":"60 Clyde Ave Moorebank","property_post_code":2170,"area":663.9,"sold_date":"26/3/2024","purchase_price":1180000,"strata_lot_number":"","street_address":"60 Clyde Ave Moorebank","coordinates":{"lat":-33.943410150000005,"lon":150.9526686616034}},
{"property_id":2484695,"address":"29 Clyde Ave Moorebank","property_post_code":2170,"area":663.9,"sold_date":"5/4/2024","purchase_price":1400000,"strata_lot_number":"","street_address":"29 Clyde Ave Moorebank","coordinates":{"lat":-33.943410150000005,"lon":150.9526686616034}},
{"property_id":2482260,"address":"24 Carina Ave Hinchinbrook","property_post_code":2168,"area":585.2,"sold_date":"9/4/2024","purchase_price":1075000,"strata_lot_number":"","street_address":"24 Carina Ave Hinchinbrook","coordinates":{"lat":-33.920137,"lon":150.8684684}},
{"property_id":2479690,"address":"2 Bowden Cl Green Valley","property_post_code":2168,"area":525.5,"sold_date":"16/3/2024","purchase_price":1158000,"strata_lot_number":"","street_address":"2 Bowden Cl Green Valley","coordinates":{"lat":-33.9032262,"lon":150.8642031}},
{"property_id":2482407,"address":"32 Carnation Ave Casula","property_post_code":2170,"area":1024,"sold_date":"6/4/2024","purchase_price":1610000,"strata_lot_number":"","street_address":"32 Carnation Ave Casula","coordinates":{"lat":-33.9405441,"lon":150.9043679}},
{"property_id":2493600,"address":"15 Glen Innes Rd Hinchinbrook","property_post_code":2168,"area":291.1,"sold_date":"6/4/2024","purchase_price":750000,"strata_lot_number":"","street_address":"15 Glen Innes Rd Hinchinbrook","coordinates":{"lat":-33.9257832,"lon":150.853657}},
{"property_id":2499068,"address":"6 Inverell Ave Hinchinbrook","property_post_code":2168,"area":321.4,"sold_date":"9/4/2024","purchase_price":850000,"strata_lot_number":"","street_address":"6 Inverell Ave Hinchinbrook","coordinates":{"lat":-33.9232216,"lon":150.8554589}},
{"property_id":2509763,"address":"33 Narooma Dr Prestons","property_post_code":2170,"area":460.8,"sold_date":"23/3/2024","purchase_price":1105000,"strata_lot_number":"","street_address":"33 Narooma Dr Prestons","coordinates":{"lat":-33.9515209,"lon":150.8659237}},
{"property_id":2509919,"address":"282 Newbridge Rd Moorebank","property_post_code":2170,"area":638.6,"sold_date":"6/4/2024","purchase_price":1215000,"strata_lot_number":"","street_address":"282 Newbridge Rd Moorebank","coordinates":{"lat":-33.9274322,"lon":150.9294623}},
{"property_id":2496491,"address":"198 Heathcote Rd Hammondville","property_post_code":2170,"area":723.8,"sold_date":"8/4/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"198 Heathcote Rd Hammondville","coordinates":{"lat":-33.9453473,"lon":150.9468793}},
{"property_id":2496776,"address":"16 Henry St Cecil Hills","property_post_code":2171,"area":646.8,"sold_date":"8/4/2024","purchase_price":1630000,"strata_lot_number":"","street_address":"16 Henry St Cecil Hills","coordinates":{"lat":-33.8929906,"lon":150.8530532}},
{"property_id":2496831,"address":"22 Hereford St Busby","property_post_code":2168,"area":607,"sold_date":"6/4/2024","purchase_price":830000,"strata_lot_number":"","street_address":"22 Hereford St Busby","coordinates":{"lat":-33.9172407,"lon":150.8831021}},
{"property_id":2510296,"address":"19 A Rottnest Ave Hinchinbrook","property_post_code":2168,"area":325.4,"sold_date":"13/3/2024","purchase_price":510000,"strata_lot_number":"","street_address":"19 A Rottnest Ave Hinchinbrook","coordinates":{"lat":-33.9115775,"lon":150.8559018}},
{"property_id":2507891,"address":"14 Mogo Ct Prestons","property_post_code":2170,"area":350,"sold_date":"6/4/2024","purchase_price":885000,"strata_lot_number":"","street_address":"14 Mogo Ct Prestons","coordinates":{"lat":-33.9433664,"lon":150.8559862}},
{"property_id":2523810,"address":"20 Wattle Grove Dr Wattle Grove","property_post_code":2173,"area":666.7,"sold_date":"24/2/2024","purchase_price":1686000,"strata_lot_number":"","street_address":"20 Wattle Grove Dr Wattle Grove","coordinates":{"lat":-33.9625846,"lon":150.936247}},
{"property_id":2518642,"address":"120 South Liverpool Rd Busby","property_post_code":2168,"area":575.4,"sold_date":"5/4/2024","purchase_price":905000,"strata_lot_number":"","street_address":"120 South Liverpool Rd Busby","coordinates":{"lat":-33.9108102,"lon":150.8784028}},
{"property_id":2500323,"address":"1 Kathleen Ave Lurnea","property_post_code":2170,"area":632.3,"sold_date":"30/3/2024","purchase_price":1000000,"strata_lot_number":"","street_address":"1 Kathleen Ave Lurnea","coordinates":{"lat":-33.9369321,"lon":150.8941451}},
{"property_id":2505626,"address":"34 Martindale Ct Wattle Grove","property_post_code":2173,"area":639.9,"sold_date":"6/4/2024","purchase_price":1400000,"strata_lot_number":"","street_address":"34 Martindale Ct Wattle Grove","coordinates":{"lat":-33.9517835,"lon":150.9389512}},
{"property_id":2511030,"address":"40 Nuwarra Rd Chipping Norton","property_post_code":2170,"area":708.2,"sold_date":"5/4/2024","purchase_price":1455000,"strata_lot_number":"","street_address":"40 Nuwarra Rd Chipping Norton","coordinates":{"lat":-33.9288799,"lon":150.955707}},
{"property_id":2527052,"address":"36 Yalta St Sadleir","property_post_code":2168,"area":670.3,"sold_date":"22/4/2024","purchase_price":880000,"strata_lot_number":"","street_address":"36 Yalta St Sadleir","coordinates":{"lat":-33.914219,"lon":150.8929772}},
{"property_id":2513891,"address":"43 Reilly St Liverpool","property_post_code":2170,"area":689.2,"sold_date":"1/5/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"43 Reilly St Liverpool","coordinates":{"lat":-33.934547,"lon":150.9156674}},
{"property_id":2495194,"address":"12 Groote Ave Hinchinbrook","property_post_code":2168,"area":792,"sold_date":"17/2/2024","purchase_price":1600000,"strata_lot_number":"","street_address":"12 Groote Ave Hinchinbrook","coordinates":{"lat":-33.9111198,"lon":150.8621158}},
{"property_id":4185935,"address":"21 Pearson Rd Edmondson Park","property_post_code":2174,"area":450.1,"sold_date":"9/4/2024","purchase_price":1300000,"strata_lot_number":"","street_address":"21 Pearson Rd Edmondson Park","coordinates":{"lat":-33.9576029,"lon":150.8583174}},
{"property_id":4178522,"address":"67 Orion Rd Austral","property_post_code":2179,"area":362.5,"sold_date":"21/3/2024","purchase_price":1000000,"strata_lot_number":"","street_address":"67 Orion Rd Austral","coordinates":{"lat":-33.9423611,"lon":150.7941929}},
{"property_id":4143608,"address":"33 B Eaglehawk St Heckenberg","property_post_code":2168,"area":285.4,"sold_date":"7/4/2024","purchase_price":925000,"strata_lot_number":"","street_address":"33 B Eaglehawk St Heckenberg","coordinates":{"lat":-33.9094338,"lon":150.8862378}},
{"property_id":2508680,"address":"57 Morison Dr Lurnea","property_post_code":2170,"area":575.4,"sold_date":"26/3/2024","purchase_price":1000000,"strata_lot_number":"","street_address":"57 Morison Dr Lurnea","coordinates":{"lat":-33.9377881,"lon":150.8906326}},
{"property_id":2519414,"address":"114 Stanwell Cres Ashcroft","property_post_code":2168,"area":613.3,"sold_date":"15/3/2024","purchase_price":795000,"strata_lot_number":"","street_address":"114 Stanwell Cres Ashcroft","coordinates":{"lat":-33.9200663,"lon":150.9009195}},
{"property_id":2508929,"address":"41 Mubo Cres Holsworthy","property_post_code":2173,"area":600.7,"sold_date":"11/4/2024","purchase_price":1415000,"strata_lot_number":"","street_address":"41 Mubo Cres Holsworthy","coordinates":{"lat":-33.9560734,"lon":150.9466586}},
{"property_id":2519745,"address":"3 Stockton Ave Moorebank","property_post_code":2170,"area":663.9,"sold_date":"23/1/2024","purchase_price":1350000,"strata_lot_number":"","street_address":"3 Stockton Ave Moorebank","coordinates":{"lat":-33.9292204,"lon":150.9481449}},
{"property_id":2495913,"address":"15 A Harpur Pl Casula","property_post_code":2170,"area":393,"sold_date":"27/3/2024","purchase_price":1160000,"strata_lot_number":"","street_address":"15 A Harpur Pl Casula","coordinates":{"lat":-33.9599448,"lon":150.8975287}},
{"property_id":2501375,"address":"1 Kiora Ct Prestons","property_post_code":2170,"area":490,"sold_date":"8/4/2024","purchase_price":999000,"strata_lot_number":"","street_address":"1 Kiora Ct Prestons","coordinates":{"lat":-33.9440607,"lon":150.8523569}},
{"property_id":2517355,"address":"26 Selway Ave Moorebank","property_post_code":2170,"area":676.6,"sold_date":"27/2/2024","purchase_price":1420000,"strata_lot_number":"","street_address":"26 Selway Ave Moorebank","coordinates":{"lat":-33.9374872,"lon":150.9508653}},
{"property_id":2490684,"address":"42 Falcon Cct Green Valley","property_post_code":2168,"area":429.8,"sold_date":"6/4/2024","purchase_price":960000,"strata_lot_number":"","street_address":"42 Falcon Cct Green Valley","coordinates":{"lat":-33.9034518,"lon":150.8710072}},
{"property_id":3566779,"address":"47 Chapman St West Hoxton","property_post_code":2171,"area":391.1,"sold_date":"15/3/2024","purchase_price":1250000,"strata_lot_number":"","street_address":"47 Chapman St West Hoxton","coordinates":{"lat":-33.9402476,"lon":150.8387132}},
{"property_id":4087645,"address":"51 B Alderson Ave Liverpool","property_post_code":2170,"area":534.9,"sold_date":"6/4/2024","purchase_price":950000,"strata_lot_number":"","street_address":"51 B Alderson Ave Liverpool","coordinates":{"lat":-33.9349021,"lon":150.9105761}},
{"property_id":4110957,"address":"57 Mciver Ave Middleton Grange","property_post_code":2171,"area":325.1,"sold_date":"21/3/2024","purchase_price":1000000,"strata_lot_number":"","street_address":"57 Mciver Ave Middleton Grange","coordinates":{"lat":-33.9136907,"lon":150.8419248}},
{"property_id":4025223,"address":"12 Milling Rd Edmondson Park","property_post_code":2174,"area":364.2,"sold_date":"24/3/2024","purchase_price":1130000,"strata_lot_number":"","street_address":"12 Milling Rd Edmondson Park","coordinates":{"lat":-33.964331,"lon":150.869978}},
{"property_id":4508649,"address":"61 Ganugan Rd Austral","property_post_code":2179,"area":322.4,"sold_date":"8/4/2024","purchase_price":595000,"strata_lot_number":"","street_address":"61 Ganugan Rd Austral","coordinates":{"lat":-33.9423593,"lon":150.8151685}},
{"property_id":4510369,"address":"4 Pacer St Austral","property_post_code":2179,"area":256.1,"sold_date":"13/4/2024","purchase_price":1025000,"strata_lot_number":"","street_address":"4 Pacer St Austral","coordinates":{"lat":-33.9428753,"lon":150.8133105}},
{"property_id":4534670,"address":"23 Buljubasich St Austral","property_post_code":2179,"area":322.2,"sold_date":"4/3/2024","purchase_price":1129000,"strata_lot_number":"","street_address":"23 Buljubasich St Austral","coordinates":{"lat":-33.9317944,"lon":150.8137348}},
{"property_id":4534923,"address":"2 B Salamaua Cres Holsworthy","property_post_code":2173,"area":202.1,"sold_date":"8/4/2024","purchase_price":1185000,"strata_lot_number":"","street_address":"2 B Salamaua Cres Holsworthy","coordinates":{"lat":-33.9579627,"lon":150.9499491}},
{"property_id":4514662,"address":"Fourteenth Ave Austral","property_post_code":2179,"area":503.9,"sold_date":"2/4/2024","purchase_price":880000,"strata_lot_number":"","street_address":"Fourteenth Ave Austral","coordinates":{"lat":-33.9207703,"lon":150.808121}},
{"property_id":4546053,"address":"44 Warrawal Ave Austral","property_post_code":2179,"area":240,"sold_date":"8/4/2021","purchase_price":449000,"strata_lot_number":"","street_address":"44 Warrawal Ave Austral","coordinates":{"lat":-33.9450283,"lon":150.7966172}},
{"property_id":4534328,"address":"104 Mainstay St Moorebank","property_post_code":2170,"area":252,"sold_date":"4/4/2024","purchase_price":967750,"strata_lot_number":"","street_address":"104 Mainstay St Moorebank","coordinates":{"lat":-33.9314231,"lon":150.9648526}},
{"property_id":4534329,"address":"106 Mainstay St Moorebank","property_post_code":2170,"area":252,"sold_date":"4/5/2024","purchase_price":969150,"strata_lot_number":"","street_address":"106 Mainstay St Moorebank","coordinates":{"lat":-33.9314231,"lon":150.9648526}},
{"property_id":4534329,"address":"106 Mainstay St Moorebank","property_post_code":2170,"area":252,"sold_date":"29/4/2024","purchase_price":969150,"strata_lot_number":"","street_address":"106 Mainstay St Moorebank","coordinates":{"lat":-33.9314231,"lon":150.9648526}},
{"property_id":3748544,"address":"13 Charolais Ave Elizabeth Hills","property_post_code":2171,"area":377.5,"sold_date":"6/4/2024","purchase_price":1215000,"strata_lot_number":"","street_address":"13 Charolais Ave Elizabeth Hills","coordinates":{"lat":-33.896722,"lon":150.848915}},
{"property_id":2788548,"address":"60 Rosewood Ave Prestons","property_post_code":2170,"area":371.9,"sold_date":"6/5/2024","purchase_price":880000,"strata_lot_number":"","street_address":"60 Rosewood Ave Prestons","coordinates":{"lat":-33.945806,"lon":150.8839002}},
{"property_id":2788559,"address":"42 Chestnut Cres Prestons","property_post_code":2170,"area":540.7,"sold_date":"16/3/2024","purchase_price":1080000,"strata_lot_number":"","street_address":"42 Chestnut Cres Prestons","coordinates":{"lat":-33.946562,"lon":150.8833588}},
{"property_id":4392998,"address":"3 Regiment Ave Austral","property_post_code":2179,"area":337.2,"sold_date":"17/3/2024","purchase_price":1375000,"strata_lot_number":"","street_address":"3 Regiment Ave Austral","coordinates":{"lat":-33.9189994,"lon":150.8273617}},
{"property_id":4494418,"address":"25 Aurora St Austral","property_post_code":2179,"area":451.6,"sold_date":"22/3/2024","purchase_price":800000,"strata_lot_number":"","street_address":"25 Aurora St Austral","coordinates":{"lat":-33.9242315,"lon":150.8006278}},
{"property_id":4447547,"address":"113 Boyd St Austral","property_post_code":2179,"area":300,"sold_date":"19/4/2024","purchase_price":600000,"strata_lot_number":"","street_address":"113 Boyd St Austral","coordinates":{"lat":-33.933165,"lon":150.7912147}},
{"property_id":3851964,"address":"41 Holliday Ave Edmondson Park","property_post_code":2174,"area":375,"sold_date":"22/4/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"41 Holliday Ave Edmondson Park","coordinates":{"lat":-33.9646813,"lon":150.8481317}},
{"property_id":3804491,"address":"42 Mary Wade Pl Carnes Hill","property_post_code":2171,"area":450,"sold_date":"6/4/2024","purchase_price":1370000,"strata_lot_number":"","street_address":"42 Mary Wade Pl Carnes Hill","coordinates":{"lat":-33.9359646,"lon":150.8510434}},
{"property_id":4351640,"address":"59 Poziers Rd Edmondson Park","property_post_code":2174,"area":636.5,"sold_date":"27/3/2024","purchase_price":1910000,"strata_lot_number":"","street_address":"59 Poziers Rd Edmondson Park","coordinates":{"lat":-33.9623587,"lon":150.857792}},
{"property_id":3395855,"address":"45 A Vega St Revesby","property_post_code":2212,"area":307.9,"sold_date":"6/4/2024","purchase_price":1300000,"strata_lot_number":"","street_address":"45 A Vega St Revesby","coordinates":{"lat":-33.9597729,"lon":151.0183265}},
{"property_id":4204117,"address":"60 A Gallipoli St Condell Park","property_post_code":2200,"area":327.5,"sold_date":"16/3/2024","purchase_price":1360000,"strata_lot_number":"","street_address":"60 A Gallipoli St Condell Park","coordinates":{"lat":-33.9340078,"lon":151.019494}},
{"property_id":4190408,"address":"51 Wall Ave Panania","property_post_code":2213,"area":279.9,"sold_date":"11/3/2024","purchase_price":1360000,"strata_lot_number":"","street_address":"51 Wall Ave Panania","coordinates":{"lat":-33.9452393,"lon":151.0004779}},
{"property_id":1351281,"address":"35 Harcourt Ave East Hills","property_post_code":2213,"area":689.2,"sold_date":"5/4/2024","purchase_price":1236500,"strata_lot_number":"","street_address":"35 Harcourt Ave East Hills","coordinates":{"lat":-33.961133,"lon":150.988861}},
{"property_id":1343471,"address":"213 Davies Rd Padstow","property_post_code":2211,"area":626,"sold_date":"5/4/2024","purchase_price":1350000,"strata_lot_number":"","street_address":"213 Davies Rd Padstow","coordinates":{"lat":-33.957324,"lon":151.0378872}},
{"property_id":1341006,"address":"28 Churchill Rd Padstow Heights","property_post_code":2211,"area":556.4,"sold_date":"11/4/2024","purchase_price":1470000,"strata_lot_number":"","street_address":"28 Churchill Rd Padstow Heights","coordinates":{"lat":-33.9716515,"lon":151.0369206}},
{"property_id":1330567,"address":"98 A Ardath Ave Panania","property_post_code":2213,"area":598,"sold_date":"23/2/2024","purchase_price":1500000,"strata_lot_number":"","street_address":"98 A Ardath Ave Panania","coordinates":{"lat":-33.9615463,"lon":150.9969363}},
{"property_id":1335967,"address":"77 Brunker Rd Yagoona","property_post_code":2199,"area":531.3,"sold_date":"8/4/2024","purchase_price":1018500,"strata_lot_number":"","street_address":"77 Brunker Rd Yagoona","coordinates":{"lat":-33.8974081,"lon":151.0236946}},
{"property_id":1349424,"address":"74 Goondah St Villawood","property_post_code":2163,"area":562.8,"sold_date":"16/3/2024","purchase_price":950000,"strata_lot_number":"","street_address":"74 Goondah St Villawood","coordinates":{"lat":-33.8864009,"lon":150.9794544}},
{"property_id":1333915,"address":"131 Biloela St Villawood","property_post_code":2163,"area":518.5,"sold_date":"3/4/2024","purchase_price":528000,"strata_lot_number":"","street_address":"131 Biloela St Villawood","coordinates":{"lat":-33.887686,"lon":150.9899295}},
{"property_id":1341877,"address":"78 Columbine Ave Punchbowl","property_post_code":2196,"area":588.1,"sold_date":"1/3/2024","purchase_price":1350000,"strata_lot_number":"","street_address":"78 Columbine Ave Punchbowl","coordinates":{"lat":-33.9264031,"lon":151.0428859}},
{"property_id":1347200,"address":"56 Ferndale Rd Revesby","property_post_code":2212,"area":695.6,"sold_date":"5/4/2024","purchase_price":1350000,"strata_lot_number":"","street_address":"56 Ferndale Rd Revesby","coordinates":{"lat":-33.9623507,"lon":151.0127533}}
]`;
module.exports = propertiesString;