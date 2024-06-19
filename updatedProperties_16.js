const propertiesString = `[
{"property_id":2963480,"address":"57 Bayberry Ave Woongarrah","property_post_code":2259,"area":700.3,"sold_date":"6/4/2024","purchase_price":1030000,"strata_lot_number":"","street_address":"57 Bayberry Ave Woongarrah","coordinates":{"lat":-33.2432589,"lon":151.4833309}},
{"property_id":3395552,"address":"42 Albany St Point Frederick","property_post_code":2250,"area":816.9,"sold_date":"5/4/2024","purchase_price":1790000,"strata_lot_number":"","street_address":"42 Albany St Point Frederick","coordinates":{"lat":-33.4429242,"lon":151.3431681}},
{"property_id":30122,"address":"20 Baronga Rd Avoca Beach","property_post_code":2251,"area":1870,"sold_date":"9/4/2024","purchase_price":1850000,"strata_lot_number":"","street_address":"20 Baronga Rd Avoca Beach","coordinates":{"lat":-33.4740695,"lon":151.4319764}},
{"property_id":26208,"address":"30 Albion St Umina Beach","property_post_code":2257,"area":499.5,"sold_date":"23/2/2024","purchase_price":970422,"strata_lot_number":"","street_address":"30 Albion St Umina Beach","coordinates":{"lat":-33.51665835,"lon":151.32340702803697}},
{"property_id":35664,"address":"28 Britannia St Umina Beach","property_post_code":2257,"area":499.5,"sold_date":"9/4/2024","purchase_price":885000,"strata_lot_number":"","street_address":"28 Britannia St Umina Beach","coordinates":{"lat":-33.51465985,"lon":151.32336784626744}},
{"property_id":38361,"address":"4 Carrol Ave East Gosford","property_post_code":2250,"area":499.5,"sold_date":"9/5/2024","purchase_price":800000,"strata_lot_number":"","street_address":"4 Carrol Ave East Gosford","coordinates":{"lat":-33.4337757,"lon":151.3498554}},
{"property_id":38647,"address":"13 Casuarina Cl Umina Beach","property_post_code":2257,"area":2012,"sold_date":"18/3/2024","purchase_price":1425000,"strata_lot_number":"","street_address":"13 Casuarina Cl Umina Beach","coordinates":{"lat":-33.5123283,"lon":151.30787915350143}},
{"property_id":33864,"address":"15 Booth St Wyoming","property_post_code":2250,"area":512.2,"sold_date":"24/4/2024","purchase_price":965000,"strata_lot_number":"","street_address":"15 Booth St Wyoming","coordinates":{"lat":-33.4014588,"lon":151.3512569}},
{"property_id":39221,"address":"9 Chico St Copacabana","property_post_code":2251,"area":575.4,"sold_date":"4/4/2024","purchase_price":1820000,"strata_lot_number":"","street_address":"9 Chico St Copacabana","coordinates":{"lat":-33.4840082,"lon":151.433546}},
{"property_id":31483,"address":"15 Belina Ave Wyoming","property_post_code":2250,"area":695.6,"sold_date":"23/4/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"15 Belina Ave Wyoming","coordinates":{"lat":-33.3964558,"lon":151.3628211}},
{"property_id":52065,"address":"7 Hammond Cl Kincumber","property_post_code":2251,"area":763,"sold_date":"13/3/2024","purchase_price":1235000,"strata_lot_number":"","street_address":"7 Hammond Cl Kincumber","coordinates":{"lat":-33.4686222,"lon":151.4047702}},
{"property_id":44543,"address":"88 Donnison St W Gosford","property_post_code":2250,"area":756,"sold_date":"14/5/2024","purchase_price":1050000,"strata_lot_number":"","street_address":"88 Donnison St W Gosford","coordinates":{"lat":-33.4255837,"lon":151.3324036}},
{"property_id":56966,"address":"10 Jindalee Ave Point Clare","property_post_code":2250,"area":543.8,"sold_date":"21/2/2024","purchase_price":910000,"strata_lot_number":"","street_address":"10 Jindalee Ave Point Clare","coordinates":{"lat":-33.4387898,"lon":151.3302259}},
{"property_id":60136,"address":"105 Koolang Rd Green Point","property_post_code":2251,"area":640,"sold_date":"14/3/2024","purchase_price":1190000,"strata_lot_number":"","street_address":"105 Koolang Rd Green Point","coordinates":{"lat":-33.4503982,"lon":151.3752268}},
{"property_id":57733,"address":"15 Judy Anne Cl Green Point","property_post_code":2251,"area":600,"sold_date":"20/3/2024","purchase_price":1165000,"strata_lot_number":"","street_address":"15 Judy Anne Cl Green Point","coordinates":{"lat":-33.4454333,"lon":151.3782937}},
{"property_id":58235,"address":"14 Kallaroo Rd Umina Beach","property_post_code":2257,"area":632.3,"sold_date":"10/4/2024","purchase_price":1325000,"strata_lot_number":"","street_address":"14 Kallaroo Rd Umina Beach","coordinates":{"lat":-33.5256753,"lon":151.3049442}},
{"property_id":58295,"address":"9 Kanimbla Cl Kincumber","property_post_code":2251,"area":607.1,"sold_date":"2/4/2024","purchase_price":206500,"strata_lot_number":"","street_address":"9 Kanimbla Cl Kincumber","coordinates":{"lat":-33.4696907,"lon":151.3881357}},
{"property_id":61946,"address":"23 Lentara Rd Umina Beach","property_post_code":2257,"area":669,"sold_date":"10/4/2024","purchase_price":1060000,"strata_lot_number":"","street_address":"23 Lentara Rd Umina Beach","coordinates":{"lat":-33.5062337,"lon":151.30340247001072}},
{"property_id":62204,"address":"4 Little Cl Kincumber","property_post_code":2251,"area":660,"sold_date":"25/3/2024","purchase_price":1380000,"strata_lot_number":"","street_address":"4 Little Cl Kincumber","coordinates":{"lat":-33.4691044,"lon":151.3758118}},
{"property_id":70736,"address":"61 Nowack Ave Umina Beach","property_post_code":2257,"area":486.9,"sold_date":"8/4/2024","purchase_price":895000,"strata_lot_number":"","street_address":"61 Nowack Ave Umina Beach","coordinates":{"lat":-33.519255,"lon":151.3123631}},
{"property_id":65933,"address":"7 Mccauley St Davistown","property_post_code":2251,"area":316.1,"sold_date":"30/1/2024","purchase_price":2700000,"strata_lot_number":"","street_address":"7 Mccauley St Davistown","coordinates":{"lat":-33.4859852,"lon":151.3604867}},
{"property_id":66095,"address":"28 Mcgee Ave Wamberal","property_post_code":2260,"area":522.5,"sold_date":"26/4/2024","purchase_price":3450000,"strata_lot_number":"","street_address":"28 Mcgee Ave Wamberal","coordinates":{"lat":-33.4282246,"lon":151.4434277}},
{"property_id":68905,"address":"62 Narara Valley Dr Narara","property_post_code":2250,"area":575.4,"sold_date":"5/4/2024","purchase_price":955555,"strata_lot_number":"","street_address":"62 Narara Valley Dr Narara","coordinates":{"lat":-33.3979423,"lon":151.3423352}},
{"property_id":67014,"address":"6 Miami Ave Woy Woy","property_post_code":2256,"area":543.8,"sold_date":"12/4/2024","purchase_price":845000,"strata_lot_number":"","street_address":"6 Miami Ave Woy Woy","coordinates":{"lat":-33.4998054,"lon":151.3124718}},
{"property_id":67410,"address":"34 Mitchell Dr Kariong","property_post_code":2250,"area":996.9,"sold_date":"6/4/2024","purchase_price":1212000,"strata_lot_number":"","street_address":"34 Mitchell Dr Kariong","coordinates":{"lat":-33.4357132,"lon":151.2907784}},
{"property_id":67513,"address":"51 Moana St Woy Woy","property_post_code":2256,"area":556.4,"sold_date":"5/4/2024","purchase_price":930000,"strata_lot_number":"","street_address":"51 Moana St Woy Woy","coordinates":{"lat":-33.4926948,"lon":151.318715}},
{"property_id":72919,"address":"26 Orana St Green Point","property_post_code":2251,"area":777.8,"sold_date":"28/3/2024","purchase_price":1570000,"strata_lot_number":"","street_address":"26 Orana St Green Point","coordinates":{"lat":-33.4515919,"lon":151.3581082}},
{"property_id":84062,"address":"5 Tall Timbers Rd Wamberal","property_post_code":2260,"area":607,"sold_date":"27/3/2024","purchase_price":1620000,"strata_lot_number":"","street_address":"5 Tall Timbers Rd Wamberal","coordinates":{"lat":-33.4190081,"lon":151.4456555}},
{"property_id":78724,"address":"36 Riviera Ave Terrigal","property_post_code":2260,"area":600.7,"sold_date":"10/4/2024","purchase_price":1300000,"strata_lot_number":"","street_address":"36 Riviera Ave Terrigal","coordinates":{"lat":-33.4486419,"lon":151.4365605}},
{"property_id":81590,"address":"8 Sinclair St Gosford","property_post_code":2250,"area":695.6,"sold_date":"11/4/2024","purchase_price":1005000,"strata_lot_number":"","street_address":"8 Sinclair St Gosford","coordinates":{"lat":-33.4213108,"lon":151.338146}},
{"property_id":79489,"address":"17 Russell Drysdale St East Gosford","property_post_code":2250,"area":578,"sold_date":"16/4/2024","purchase_price":1091000,"strata_lot_number":"","street_address":"17 Russell Drysdale St East Gosford","coordinates":{"lat":-33.4375928,"lon":151.3516696}},
{"property_id":75020,"address":"82 Patonga St Patonga","property_post_code":2256,"area":316.2,"sold_date":"16/2/2024","purchase_price":2700000,"strata_lot_number":"","street_address":"82 Patonga St Patonga","coordinates":{"lat":-33.5513648,"lon":151.2697092}},
{"property_id":78082,"address":"12 Rengbari Pl Avoca Beach","property_post_code":2251,"area":749.2,"sold_date":"11/4/2024","purchase_price":1082000,"strata_lot_number":"","street_address":"12 Rengbari Pl Avoca Beach","coordinates":{"lat":-33.4774843,"lon":151.4330794}},
{"property_id":83390,"address":"9 Sunbeam Pl Erina","property_post_code":2250,"area":590.4,"sold_date":"2/2/2024","purchase_price":895000,"strata_lot_number":"","street_address":"9 Sunbeam Pl Erina","coordinates":{"lat":-33.4437462,"lon":151.3909149}},
{"property_id":75535,"address":"20 Pemberton Bvd Lisarow","property_post_code":2250,"area":758.2,"sold_date":"19/4/2024","purchase_price":1050000,"strata_lot_number":"","street_address":"20 Pemberton Bvd Lisarow","coordinates":{"lat":-33.3893277,"lon":151.3669011}},
{"property_id":83624,"address":"85 Surf Rider Ave North Avoca","property_post_code":2260,"area":524.8,"sold_date":"23/1/2024","purchase_price":1550000,"strata_lot_number":"","street_address":"85 Surf Rider Ave North Avoca","coordinates":{"lat":-33.4540761,"lon":151.4373661}},
{"property_id":78334,"address":"97 Rickard Rd Empire Bay","property_post_code":2257,"area":784.1,"sold_date":"22/3/2024","purchase_price":1525000,"strata_lot_number":"","street_address":"97 Rickard Rd Empire Bay","coordinates":{"lat":-33.4935308,"lon":151.3574418}},
{"property_id":92170,"address":"6 Wells St East Gosford","property_post_code":2250,"area":505.9,"sold_date":"5/4/2024","purchase_price":850000,"strata_lot_number":"","street_address":"6 Wells St East Gosford","coordinates":{"lat":-33.4313344,"lon":151.3584132}},
{"property_id":94945,"address":"17 Kunala Lane Horsfield Bay","property_post_code":2256,"area":882,"sold_date":"18/4/2024","purchase_price":900000,"strata_lot_number":"","street_address":"17 Kunala Lane Horsfield Bay","coordinates":{"lat":-33.4909104,"lon":151.3004875}},
{"property_id":86937,"address":"6 Masson Lane Killcare","property_post_code":2257,"area":356.9,"sold_date":"5/4/2024","purchase_price":1535000,"strata_lot_number":"","street_address":"6 Masson Lane Killcare","coordinates":{"lat":-33.5263664,"lon":151.3626172}},
{"property_id":87191,"address":"767 The Scenic Rd Macmasters Beach","property_post_code":2251,"area":20000,"sold_date":"1/5/2024","purchase_price":2692000,"strata_lot_number":"","street_address":"767 The Scenic Rd Macmasters Beach","coordinates":{"lat":-33.4879051,"lon":151.40032672427637}},
{"property_id":90234,"address":"3 Wakefield Cl Kariong","property_post_code":2250,"area":632.3,"sold_date":"17/4/2024","purchase_price":1040000,"strata_lot_number":"","street_address":"3 Wakefield Cl Kariong","coordinates":{"lat":-33.4362443,"lon":151.2976067}},
{"property_id":93560,"address":"6747 Wisemans Ferry Rd Gunderman","property_post_code":2775,"area":2719,"sold_date":"10/4/2024","purchase_price":280000,"strata_lot_number":"","street_address":"6747 Wisemans Ferry Rd Gunderman","coordinates":{"lat":-33.3921034,"lon":150.9970506}},
{"property_id":93593,"address":"5970 Wisemans Ferry Rd Gunderman","property_post_code":2775,"area":651.3,"sold_date":"5/4/2024","purchase_price":900000,"strata_lot_number":"","street_address":"5970 Wisemans Ferry Rd Gunderman","coordinates":{"lat":-33.3921034,"lon":150.9970506}},
{"property_id":86058,"address":"80 The Esplanade Ettalong Beach","property_post_code":2257,"area":411,"sold_date":"19/1/2024","purchase_price":2500000,"strata_lot_number":"","street_address":"80 The Esplanade Ettalong Beach","coordinates":{"lat":-33.5211222,"lon":151.3315999}},
{"property_id":86205,"address":"151 The Esplanade Umina Beach","property_post_code":2257,"area":461.6,"sold_date":"19/4/2024","purchase_price":3065000,"strata_lot_number":"","street_address":"151 The Esplanade Umina Beach","coordinates":{"lat":-33.523643050000004,"lon":151.32464690245286}},
{"property_id":88852,"address":"86 Turpentine St Wyoming","property_post_code":2250,"area":499.5,"sold_date":"5/4/2024","purchase_price":850000,"strata_lot_number":"","street_address":"86 Turpentine St Wyoming","coordinates":{"lat":-33.4054765,"lon":151.3595778}},
{"property_id":91553,"address":"221 Wattle Tree Rd Holgate","property_post_code":2250,"area":5216,"sold_date":"14/3/2024","purchase_price":1970000,"strata_lot_number":"","street_address":"221 Wattle Tree Rd Holgate","coordinates":{"lat":-33.4032296,"lon":151.40634349194335}},
{"property_id":94431,"address":"19 Woodport Cl Green Point","property_post_code":2251,"area":550.3,"sold_date":"9/4/2024","purchase_price":1220000,"strata_lot_number":"","street_address":"19 Woodport Cl Green Point","coordinates":{"lat":-33.4407054,"lon":151.3776541}},
{"property_id":89085,"address":"15 Uralla Lane Blackwall","property_post_code":2256,"area":784.1,"sold_date":"1/3/2024","purchase_price":1875000,"strata_lot_number":"","street_address":"15 Uralla Lane Blackwall","coordinates":{"lat":-33.5034331,"lon":151.336346}},
{"property_id":2964682,"address":"11 Sohrabi Pl Lake Munmorah","property_post_code":2259,"area":442.2,"sold_date":"11/4/2024","purchase_price":685000,"strata_lot_number":"","street_address":"11 Sohrabi Pl Lake Munmorah","coordinates":{"lat":-33.1917747,"lon":151.5815644}},
{"property_id":3057957,"address":"42 Berrys Head Rd Wyoming","property_post_code":2250,"area":1883,"sold_date":"19/3/2024","purchase_price":1300000,"strata_lot_number":"","street_address":"42 Berrys Head Rd Wyoming","coordinates":{"lat":-33.395147,"lon":151.3524287}},
{"property_id":3112012,"address":"26 Fern Rd Ourimbah","property_post_code":2258,"area":10000,"sold_date":"10/2/2024","purchase_price":2065000,"strata_lot_number":"","street_address":"26 Fern Rd Ourimbah","coordinates":{"lat":-33.36614,"lon":151.3581835}},
{"property_id":4112194,"address":"1 B Parkview Pl Bateau Bay","property_post_code":2261,"area":430.2,"sold_date":"9/4/2024","purchase_price":850000,"strata_lot_number":"","street_address":"1 B Parkview Pl Bateau Bay","coordinates":{"lat":-33.380238,"lon":151.4629673}},
{"property_id":4119307,"address":"34 Creswell St Wadalba","property_post_code":2259,"area":638.6,"sold_date":"4/1/2024","purchase_price":1200000,"strata_lot_number":"","street_address":"34 Creswell St Wadalba","coordinates":{"lat":-33.2746243,"lon":151.4603136}},
{"property_id":4526918,"address":"93 Warnervale Rd Hamlyn Terrace","property_post_code":2259,"area":102500,"sold_date":"22/4/2024","purchase_price":5984140,"strata_lot_number":"","street_address":"93 Warnervale Rd Hamlyn Terrace","coordinates":{"lat":-33.2505141,"lon":151.4824689}},
{"property_id":3223907,"address":"35 Quarterhorse Pde Wadalba","property_post_code":2259,"area":779.5,"sold_date":"4/3/2024","purchase_price":1050000,"strata_lot_number":"","street_address":"35 Quarterhorse Pde Wadalba","coordinates":{"lat":-33.2688193,"lon":151.4561971}},
{"property_id":3218646,"address":"40 Championship Dr Wyong","property_post_code":2259,"area":433.7,"sold_date":"11/4/2024","purchase_price":1205000,"strata_lot_number":"","street_address":"40 Championship Dr Wyong","coordinates":{"lat":-33.2821746,"lon":151.4451496}},
{"property_id":3242824,"address":"14 Berry Ave Green Point","property_post_code":2251,"area":486.9,"sold_date":"22/2/2024","purchase_price":1680000,"strata_lot_number":"","street_address":"14 Berry Ave Green Point","coordinates":{"lat":-33.4525456,"lon":151.3592174}},
{"property_id":2771719,"address":"15/883 Pacific Hwy Lisarow","property_post_code":2250,"area":281.6,"sold_date":"9/4/2024","purchase_price":820000,"strata_lot_number":"","street_address":"883 Pacific Hwy Lisarow","coordinates":{"lat":-33.3851085,"lon":151.363304}},
{"property_id":3269185,"address":"669 Pacific Hwy Narara","property_post_code":2250,"area":619.3,"sold_date":"27/2/2024","purchase_price":780000,"strata_lot_number":"","street_address":"669 Pacific Hwy Narara","coordinates":{"lat":-33.3927965,"lon":151.3510577}},
{"property_id":3280991,"address":"50 A Goobarabah Ave Gorokan","property_post_code":2263,"area":465.8,"sold_date":"9/4/2024","purchase_price":750000,"strata_lot_number":"","street_address":"50 A Goobarabah Ave Gorokan","coordinates":{"lat":-33.2440127,"lon":151.5082155}},
{"property_id":3386703,"address":"25 Bradys Gully Rd North Gosford","property_post_code":2250,"area":742.8,"sold_date":"8/4/2024","purchase_price":905000,"strata_lot_number":"","street_address":"25 Bradys Gully Rd North Gosford","coordinates":{"lat":-33.419029,"lon":151.3629601}},
{"property_id":3982094,"address":"42 Norwood Ave Hamlyn Terrace","property_post_code":2259,"area":480,"sold_date":"23/4/2024","purchase_price":955000,"strata_lot_number":"","street_address":"42 Norwood Ave Hamlyn Terrace","coordinates":{"lat":-33.2576748,"lon":151.4735047}},
{"property_id":3930245,"address":"69 Nigella Cct Hamlyn Terrace","property_post_code":2259,"area":228.2,"sold_date":"3/5/2024","purchase_price":600000,"strata_lot_number":"","street_address":"69 Nigella Cct Hamlyn Terrace","coordinates":{"lat":-33.256589,"lon":151.4830153}},
{"property_id":3930254,"address":"51 Nigella Cct Hamlyn Terrace","property_post_code":2259,"area":279.3,"sold_date":"5/4/2024","purchase_price":610000,"strata_lot_number":"","street_address":"51 Nigella Cct Hamlyn Terrace","coordinates":{"lat":-33.256589,"lon":151.4830153}},
{"property_id":4310594,"address":"3 Wildberry Rd Woongarrah","property_post_code":2259,"area":465,"sold_date":"22/4/2024","purchase_price":1034000,"strata_lot_number":"","street_address":"3 Wildberry Rd Woongarrah","coordinates":{"lat":-33.2394251,"lon":151.4681728}},
{"property_id":4334466,"address":"140 Spring Gully Lane Cedar Brush Creek","property_post_code":2259,"area":161900,"sold_date":"9/4/2024","purchase_price":1350000,"strata_lot_number":"","street_address":"140 Spring Gully Lane Cedar Brush Creek","coordinates":{"lat":-33.1819833,"lon":151.2677526}},
{"property_id":4334519,"address":"6 Tuerong St Gwandalan","property_post_code":2259,"area":537.2,"sold_date":"9/2/2024","purchase_price":950000,"strata_lot_number":"","street_address":"6 Tuerong St Gwandalan","coordinates":{"lat":-33.1317686,"lon":151.5823027}},
{"property_id":804461,"address":"13 Alexander St Dundas Valley","property_post_code":2117,"area":613.4,"sold_date":"23/3/2024","purchase_price":1763000,"strata_lot_number":"","street_address":"13 Alexander St Dundas Valley","coordinates":{"lat":-33.792953,"lon":151.056301}},
{"property_id":818024,"address":"25 Deakin St Ermington","property_post_code":2115,"area":518.5,"sold_date":"1/3/2024","purchase_price":2600000,"strata_lot_number":"","street_address":"25 Deakin St Ermington","coordinates":{"lat":-33.809693,"lon":151.063023}},
{"property_id":830258,"address":"10 Jordan St Rosehill","property_post_code":2142,"area":459.94,"sold_date":"12/4/2024","purchase_price":1250000,"strata_lot_number":"","street_address":"10 Jordan St Rosehill","coordinates":{"lat":-33.826582,"lon":151.016447}},
{"property_id":821370,"address":"27 A Faulkner St Old Toongabbie","property_post_code":2146,"area":1094,"sold_date":"10/4/2024","purchase_price":1310000,"strata_lot_number":"","street_address":"27 A Faulkner St Old Toongabbie","coordinates":{"lat":-33.7852319,"lon":150.9778829}},
{"property_id":821429,"address":"23 Favell St Toongabbie","property_post_code":2146,"area":562.8,"sold_date":"9/4/2024","purchase_price":1198000,"strata_lot_number":"","street_address":"23 Favell St Toongabbie","coordinates":{"lat":-33.7919534,"lon":150.9622134}},
{"property_id":824293,"address":"9 Glenn Ave Northmead","property_post_code":2152,"area":733.5,"sold_date":"20/3/2024","purchase_price":1550000,"strata_lot_number":"","street_address":"9 Glenn Ave Northmead","coordinates":{"lat":-33.7904847,"lon":150.9889587}},
{"property_id":805652,"address":"74 Arthur St Rosehill","property_post_code":2142,"area":383.29,"sold_date":"31/1/2024","purchase_price":1530000,"strata_lot_number":"","street_address":"74 Arthur St Rosehill","coordinates":{"lat":-33.82633,"lon":151.017868}},
{"property_id":827452,"address":"46 Hemsworth Ave Northmead","property_post_code":2152,"area":607,"sold_date":"23/2/2024","purchase_price":2515000,"strata_lot_number":"","street_address":"46 Hemsworth Ave Northmead","coordinates":{"lat":-33.7918805,"lon":150.9911586}},
{"property_id":811392,"address":"26 Bryson St Toongabbie","property_post_code":2146,"area":588.1,"sold_date":"29/2/2024","purchase_price":1500000,"strata_lot_number":"","street_address":"26 Bryson St Toongabbie","coordinates":{"lat":-33.7884903,"lon":150.9615858}},
{"property_id":822924,"address":"1 Fullarton St Telopea","property_post_code":2117,"area":796.7,"sold_date":"15/3/2024","purchase_price":1850000,"strata_lot_number":"","street_address":"1 Fullarton St Telopea","coordinates":{"lat":-33.7919204,"lon":151.0468086}},
{"property_id":828291,"address":"24 Holway St Eastwood","property_post_code":2122,"area":651.3,"sold_date":"28/3/2024","purchase_price":2805000,"strata_lot_number":"","street_address":"24 Holway St Eastwood","coordinates":{"lat":-33.7881711,"lon":151.0733905}},
{"property_id":828300,"address":"6 Holway St Eastwood","property_post_code":2122,"area":696.77,"sold_date":"17/5/2024","purchase_price":2730000,"strata_lot_number":"","street_address":"6 Holway St Eastwood","coordinates":{"lat":-33.7879016,"lon":151.0748683}},
{"property_id":828346,"address":"15 Homelands Ave Carlingford","property_post_code":2118,"area":689,"sold_date":"25/3/2024","purchase_price":2150000,"strata_lot_number":"","street_address":"15 Homelands Ave Carlingford","coordinates":{"lat":-33.7874867,"lon":151.0404569}},
{"property_id":844803,"address":"12 Rawton Ave Northmead","property_post_code":2152,"area":682.9,"sold_date":"13/3/2024","purchase_price":2200000,"strata_lot_number":"","street_address":"12 Rawton Ave Northmead","coordinates":{"lat":-33.7910103,"lon":150.9905922}},
{"property_id":831291,"address":"68 Kirby St Rydalmere","property_post_code":2116,"area":1208,"sold_date":"18/12/2023","purchase_price":3230000,"strata_lot_number":"","street_address":"68 Kirby St Rydalmere","coordinates":{"lat":-33.808544,"lon":151.048258}},
{"property_id":839463,"address":"93 Oakes Rd Old Toongabbie","property_post_code":2146,"area":556.4,"sold_date":"6/4/2024","purchase_price":1100000,"strata_lot_number":"","street_address":"93 Oakes Rd Old Toongabbie","coordinates":{"lat":-33.7830885,"lon":150.9733954}},
{"property_id":839925,"address":"375 Old Windsor Rd Winston Hills","property_post_code":2153,"area":556.4,"sold_date":"24/4/2024","purchase_price":1680000,"strata_lot_number":"","street_address":"375 Old Windsor Rd Winston Hills","coordinates":{"lat":-33.7739381,"lon":150.9612647}},
{"property_id":834573,"address":"36 Mcewan Ave Winston Hills","property_post_code":2153,"area":708.2,"sold_date":"23/3/2024","purchase_price":1716000,"strata_lot_number":"","street_address":"36 Mcewan Ave Winston Hills","coordinates":{"lat":-33.7795861,"lon":150.9895293}},
{"property_id":3500651,"address":"7 Allura Cres Ermington","property_post_code":2115,"area":195.9,"sold_date":"13/4/2024","purchase_price":1640000,"strata_lot_number":"","street_address":"7 Allura Cres Ermington","coordinates":{"lat":-33.822348,"lon":151.057938}},
{"property_id":845837,"address":"37 Robert St Telopea","property_post_code":2117,"area":967.5,"sold_date":"27/3/2024","purchase_price":2300000,"strata_lot_number":"","street_address":"37 Robert St Telopea","coordinates":{"lat":-33.7925269,"lon":151.0348194}},
{"property_id":851250,"address":"13 Tintern Ave Carlingford","property_post_code":2118,"area":847.3,"sold_date":"9/3/2024","purchase_price":3301000,"strata_lot_number":"","street_address":"13 Tintern Ave Carlingford","coordinates":{"lat":-33.7881025,"lon":151.0376937}},
{"property_id":835620,"address":"314 Marsden Rd Carlingford","property_post_code":2118,"area":973.8,"sold_date":"6/4/2024","purchase_price":1475000,"strata_lot_number":"","street_address":"314 Marsden Rd Carlingford","coordinates":{"lat":-33.783896,"lon":151.0580297}},
{"property_id":841506,"address":"20 Parkland Ave Rydalmere","property_post_code":2116,"area":670.3,"sold_date":"21/2/2024","purchase_price":1780000,"strata_lot_number":"","street_address":"20 Parkland Ave Rydalmere","coordinates":{"lat":-33.808818,"lon":151.04557}},
{"property_id":852959,"address":"6 Victoria St Granville","property_post_code":2142,"area":228,"sold_date":"7/4/2024","purchase_price":945000,"strata_lot_number":"","street_address":"6 Victoria St Granville","coordinates":{"lat":-33.8297173,"lon":151.0122541}}
]`;
module.exports = propertiesString;