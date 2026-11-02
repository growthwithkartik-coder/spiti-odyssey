// =====================================================================
// IMAGE LIBRARY — every photograph used on the site.
// All are real photographs from Wikimedia Commons, used under the
// licence listed. Each id is used on ONE page/section only (the build
// fails if an id is placed twice — see tools/build.mjs).
//
// file  = Commons file name (spaces as underscores)
// hash  = Commons storage path (first two hash chars)
// w,h   = original pixel size
// place = what the photo actually shows
// note  = honest context shown in the caption when the photo is NOT
//         a stop on the confirmed itinerary
//
// Remote by default (served from upload.wikimedia.org thumbnails).
// Run `node tools/fetch-images.mjs` to download every size into
// public/assets/img/ and then `IMAGE_MODE=local node tools/build.mjs`.
// =====================================================================

export const IMAGES = {
  /* ---------- Delhi ---------- */
  'delhi-night-traffic':      { file: "Delhi's_Night_Traffic_-_panoramio.jpg", hash: 'c/ca', w: 3072, h: 2304, lic: 'CC BY 3.0', by: 'Gabriele Giuseppini', place: 'Night traffic, Delhi' },
  'delhi-dusk-traffic':       { file: 'New_Delhi_Traffic_Congestion_.jpg', hash: '9/91', w: 4032, h: 3024, lic: 'CC BY-SA 4.0', by: 'Mbhushan21', place: 'Dusk over New Delhi traffic' },
  'delhi-india-gate-night':   { file: 'India_Gate_night_view.JPG', hash: 'a/ae', w: 2592, h: 1944, lic: 'CC BY-SA 3.0', by: 'AmitBeniwal', place: 'India Gate at night, New Delhi' },

  /* ---------- Shimla hills / Kufri ---------- */
  'kufri-snow-hills':         { file: 'Snow-Kufri_hills.jpg', hash: '2/2f', w: 4608, h: 3456, lic: 'CC BY-SA 4.0', by: 'Jeyasree S.B', place: 'Snow on the hills at Kufri' },
  'kufri-peaks-peeking':      { file: 'Peeking_Himalyas_Kufri.jpg', hash: '5/5f', w: 4608, h: 3456, lic: 'CC BY-SA 4.0', by: 'Courteous mafia', place: 'Himalayan peaks seen from Kufri' },
  'kufri-himalayan-range':    { file: 'Himalayan_mountains%2C_Kufri%2C_Himachal_Pradesh%2C_India_%282017%29.jpg', hash: 'a/a2', w: 5472, h: 2849, lic: 'CC BY-SA 4.0', by: 'Sirshendu Biswas', place: 'The snow range from Kufri' },
  'kufri-temple-snow':        { file: 'Temple_at_Kufri.jpg', hash: 'd/d9', w: 1800, h: 1200, lic: 'CC BY-SA 4.0', by: 'Jayasree Sengupta', place: 'Hilltop temple at Kufri in snow' },
  'kufri-road':               { file: 'Road_to_Kufri%2C_Shimla.jpg', hash: '3/35', w: 4898, h: 3265, lic: 'CC BY-SA 4.0', by: 'Rajudbg', place: 'The road to Kufri, Shimla district' },
  'shimla-night-lights':      { file: 'Simla_night_lights_%282558230817%29.jpg', hash: '2/23', w: 2048, h: 1536, lic: 'CC BY-SA 2.0', by: 'Dinesh Valke', place: 'Shimla’s lights after dark', note: 'Shimla sits on the hill road between Delhi and Kufri.' },

  /* ---------- Kinnaur / Kalpa ---------- */
  'kalpa-kailash-golden':     { file: 'Kinnaur_Kailash_from_Kalpa_on_june_2015.jpg', hash: '5/58', w: 3000, h: 1290, lic: 'CC BY-SA 4.0', by: 'Goutam1962', place: 'First light on the Kinnaur Kailash range, seen from Kalpa' },
  'kalpa-village-peaks':      { file: 'Kalpa_Village.jpg', hash: 'e/ee', w: 4608, h: 3456, lic: 'CC BY-SA 4.0', by: 'Sapna Sony', place: 'Kalpa village beneath the snow peaks' },
  'kalpa-kailash-jorkanden':  { file: 'Kinnaur_kailash%286050m%29_and_Jorkanden_%286473_m%29_from_Kalpa_photographed_By_Sumita_Roy.jpg', hash: '6/66', w: 3600, h: 2400, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Kinnaur Kailash and Jorkanden from Kalpa' },
  'kalpa-morning-kailash':    { file: 'Morning_View_of_Mount_Kinner_Kailash.jpg', hash: 'b/b5', w: 3264, h: 1836, lic: 'CC BY-SA 4.0', by: 'Narender Sharma, Blue Particle Solutions', place: 'Morning on Kinner Kailash' },
  'kalpa-range-ridge':        { file: 'Kinnar_Kailash_range_at_Kalpa.jpg', hash: 'a/ac', w: 4160, h: 2340, lic: 'CC BY-SA 4.0', by: 'Rahulraees', place: 'The Kinnaur Kailash range at Kalpa' },
  'kalpa-chini-kila':         { file: 'Chini_village_and_Kila_%28Kalpa%29%2C_Kinnaur%2C_Himachal_Pradesh_01.jpg', hash: 'c/c0', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Amanpanta1990', place: 'Chini village and its tower, Kalpa' },
  'kalpa-light':              { file: 'Kalpa-49a-Licht-2016-gje.jpg', hash: 'c/cf', w: 5184, h: 3456, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'Light moving across the range, Kalpa' },
  'kalpa-waking':             { file: 'Kalpa-49b-Morgenerwachen-2016-gje.jpg', hash: '2/24', w: 5184, h: 3456, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'Kalpa waking up' },
  'kalpa-roghi':              { file: 'Roghi_village_kalpa.jpg', hash: '5/50', w: 4160, h: 2340, lic: 'CC BY-SA 4.0', by: 'Rahulraees', place: 'Roghi village, above Kalpa' },
  'kalpa-eternal-hills':      { file: 'Eternal_hills.jpg', hash: '4/41', w: 4320, h: 3240, lic: 'CC BY-SA 4.0', by: 'Tiyasha Purohit', place: 'Kinnaur ridgelines near Kalpa' },
  'kalpa-orchard':            { file: 'Kalpa_Himachal.jpg', hash: 'b/b7', w: 2048, h: 1536, lic: 'CC BY-SA 2.0', by: 'Gili Chupak', place: 'Orchards and peaks, Kalpa' },
  'kalpa-town':               { file: 'Kalpa_%286082342708%29.jpg', hash: '2/2a', w: 4752, h: 3168, lic: 'CC BY 2.0', by: 'Ashok Neelakanta', place: 'Kalpa on its shelf above the valley' },
  'peo-kailash-peak':         { file: 'Recong_Peo-22-Kinnaur_Kailash_Peak-Jorkanden-2016-gje.jpg', hash: '0/08', w: 5184, h: 3128, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'Kinnaur Kailash peak and Jorkanden from Reckong Peo' },
  'peo-pink-hour':            { file: 'Pink_hour_%40_Peo_-_panoramio.jpg', hash: '7/7f', w: 3129, h: 1984, lic: 'CC BY 3.0', by: 'Pavan Lulla', place: 'Pink hour at Reckong Peo, just below Kalpa' },
  'peo-sunset-alpenglow':     { file: 'Sunset_at_Reckong_Peo.jpg', hash: 'd/d6', w: 2048, h: 1536, lic: 'CC BY 2.0', by: 'Eshank Sehgal', place: 'Last light on the peaks above Reckong Peo' },
  'sangla-snowy-morning':     { file: 'Snowy_morning_in_Sangla%2C_Himachal_Pradesh%2C_India.jpg', hash: 'c/c3', w: 7936, h: 3968, lic: 'CC BY-SA 4.0', by: 'UnpetitproleX', place: 'A snowy morning in Sangla, Kinnaur', note: 'Sangla is a neighbouring Kinnaur valley, not a stop on this route — shown for winter character.' },
  'baspa-under-snow':         { file: 'Baspa_Valley_under_snow%2C_Kinnaur%2C_Himachal_Pradesh%2C_India.jpg', hash: '3/33', w: 7987, h: 5741, lic: 'CC BY-SA 4.0', by: 'UnpetitproleX', place: 'The Baspa valley under snow, Kinnaur', note: 'The Baspa valley joins the Sutlej below Kalpa; not a stop on this route.' },

  /* ---------- The road: Sutlej and Hindustan–Tibet road ---------- */
  'road-satluj-nh':           { file: 'NH-22%2C_NATIONAL_HIGHWAY_22%2C_HINDUSTAN-TIBET_ROAD%2C_ALONG_RIVER_SATLUJ%2C_KINNAUR_DISTRICT%2C_HIMACHAL_PRADESH%2C_INDIA.JPG', hash: 'e/ea', w: 2560, h: 1920, lic: 'CC BY-SA 4.0', by: 'Manojkhurana', place: 'The Hindustan–Tibet road along the Sutlej, Kinnaur' },
  'road-kinnaur-cliff':       { file: 'Kinnaur_way.JPG', hash: '5/5f', w: 4000, h: 3000, lic: 'CC BY-SA 3.0', by: 'Anusharma', place: 'The road cut into the Kinnaur cliffs' },
  'road-karcham':             { file: 'Karcham_-_DSC_0769.jpg', hash: '7/72', w: 6016, h: 4000, lic: 'CC BY-SA 4.0', by: 'Supriya Joon', place: 'The Sutlej at Karcham, Kinnaur' },
  'road-khab-confluence':     { file: 'Khab-22-Satluj-gje.jpg', hash: '2/24', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'The Sutlej at Khab, where the Spiti river joins it' },
  'road-khab-spiti-road':     { file: 'Khab-38-Spiti_river_road-gje.jpg', hash: '9/9c', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'The road above the Spiti river near Khab' },
  'road-sutlej-baspa':        { file: 'Shatadru_river_meets_Baspa.jpg', hash: 'd/d3', w: 4160, h: 2340, lic: 'CC BY-SA 4.0', by: 'Rahulraees', place: 'Where the Baspa meets the Sutlej, Kinnaur' },
  'road-sutlej-gorge':        { file: 'SDHP-3510_Sutlej_river_gorge_and_rapids_near_Tattapani.jpg', hash: 'a/ab', w: 3888, h: 2592, lic: 'CC BY 4.0', by: 'VasuVR', place: 'Sutlej gorge and rapids, lower valley' },
  'road-to-spiti':            { file: 'Camino_a_Spiti_valley%2C_Himachal_Pradesh_%288512880323%29.jpg', hash: '7/7c', w: 2160, h: 1440, lic: 'CC BY-SA 2.0', by: 'Carlos Adampol Galindo', place: 'On the road into Spiti' },
  'road-spiti-open':          { file: 'SPITI_ROAD.jpg', hash: 'c/c2', w: 4496, h: 3000, lic: 'CC BY-SA 4.0', by: 'FOCUSUPAKHIL', place: 'Open road through the Spiti valley' },

  /* ---------- Nako & Tabo (Day 4) ---------- */
  'nako-lake-village':        { file: 'Nako_Lake_and_Nako_Village%2C_Himachal_Pradesh.jpg', hash: 'c/c7', w: 7387, h: 4900, lic: 'CC BY 2.0', by: 'Snotch', place: 'Nako lake and village' },
  'nako-reflection':          { file: 'Reflection_of_Indian_Himalayan_Peaks_on_Nako_Lake_Himachal_Pradesh_India.jpg', hash: '2/2b', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Peaks reflected in Nako lake' },
  'nako-lake-wide':           { file: 'Nako_Lake_Kinnaur_Himachal_Jun18_D72_6798.jpg', hash: '4/42', w: 5730, h: 3941, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Nako lake, upper Kinnaur' },
  'nako-village':             { file: 'Nako_Village.jpg', hash: '6/60', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Stone houses of Nako village' },
  'nako-morning':             { file: 'Nako_mroning.jpg', hash: '6/6d', w: 4032, h: 3024, lic: 'CC BY-SA 4.0', by: 'Rakesh Kumar', place: 'Morning above Nako' },
  'tabo-monastery':           { file: 'Tabo_Monastery.jpg', hash: '4/47', w: 3456, h: 2304, lic: 'CC BY-SA 3.0', by: 'Narender9', place: 'Tabo Monastery' },
  'tabo-surroundings':        { file: 'Tabo_monastery_and_surroundings_2.jpg', hash: 'd/d9', w: 2896, h: 1944, lic: 'CC BY-SA 3.0', by: 'Parth.rkt', place: 'Tabo Monastery and the valley around it' },
  'tabo-stupas':              { file: 'Stupas_at_Tabo_Monastery.JPG', hash: 'd/d5', w: 4608, h: 3456, lic: 'CC BY-SA 3.0', by: 'Aimy Dhankar', place: 'Stupas at Tabo Monastery' },
  'tabo-aerial':              { file: 'Arial_View_of_Tabo_Monastery%2C_World_Heritage_Site.jpg', hash: '7/73', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Trina Singha Roy', place: 'Tabo village and monastery from above' },
  'tabo-from-top':            { file: 'Tabo_monastery_from_top.jpg', hash: 'd/d4', w: 3920, h: 2204, lic: 'CC BY-SA 4.0', by: 'Manish Pathak', place: 'Tabo Monastery from the hillside' },
  'tabo-mud-walls':           { file: 'Tabo_mud_monastery.jpg', hash: 'f/fc', w: 4928, h: 2788, lic: 'CC BY-SA 4.0', by: 'Mdipa', place: 'The mud-walled halls of Tabo' },
  'tabo-inside':              { file: 'Inside_Tabo_monastery_1.jpg', hash: '1/1d', w: 3920, h: 2204, lic: 'CC BY-SA 4.0', by: 'Manish Pathak', place: 'Inside the Tabo Monastery complex' },
  'dhankar-panorama':         { file: 'Dhankar_Gompa-06-Flusstal-Panorama-gje.jpg', hash: '9/9f', w: 8601, h: 3461, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'The Spiti valley from Dhankar', note: 'Dhankar sits above the valley road between Tabo and Kaza; a stop there is not confirmed.' },
  'dhankar-fort':             { file: 'Dhankar_Gompa-20-Klosterburg-gje.jpg', hash: '2/20', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'Dhankar monastery-fort on its ridge', note: 'A stop at Dhankar is not part of the confirmed itinerary.' },
  'lingti-bridge':            { file: 'Lingti_River_suspension_bridge%2C_near_Rama%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India_02.jpg', hash: '8/8e', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'Suspension bridge over the Lingti river, Spiti' },
  'mane-kogma':               { file: 'Mane_Kogma_Spiti_Himachal_Jun18_D72_6922.jpg', hash: 'c/c1', w: 5790, h: 3860, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Mane village, Spiti valley' },

  /* ---------- Kaza & the high villages (Days 5–6) ---------- */
  'kaza-valley':              { file: 'Kaza-20-Spiti-gje.jpg', hash: 'a/ad', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'The Spiti river below Kaza' },
  'kaza-nh505':               { file: 'NH505_Spiti_Kaza_Losar_Jun18_D72_7800.jpg', hash: 'd/dc', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'The braided Spiti river and the valley road beyond Kaza' },
  'kaza-river':               { file: 'Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg', hash: '3/3f', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'The Spiti river at Kaza' },
  'kaza-gorge':               { file: 'Spiti_Gorge_Kaza_Losar_Jun18_D72_7818.jpg', hash: 'e/ed', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Eroded pillars above the Spiti gorge' },
  'kaza-floodplain':          { file: 'Kaza-21-Flusstal-2016-gje.jpg', hash: '2/29', w: 5184, h: 3456, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'The wide floodplain at Kaza' },
  'kaza-sakya-monastery':     { file: 'Sakya_Kaza_Monastery.jpg', hash: '9/92', w: 2592, h: 1944, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'The Sakya monastery in Kaza' },
  'kaza-shrines':             { file: 'Kaza-12-Bergheiligtuemer-gje.jpg', hash: 'e/e0', w: 4955, h: 3178, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'Hillside shrines and prayer flags, Kaza' },
  'kaza-mani-stones':         { file: 'Kaza-36-Unterstadt-Manisteine-2016-gje.jpg', hash: '3/3e', w: 5184, h: 3456, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'Carved mani stones in old Kaza' },
  'kaza-approach':            { file: 'Kaza-02-Flusstal-gje.jpg', hash: '6/68', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'Approaching Kaza along the river' },
  'key-hill':                 { file: 'Key_Monastery%2C_Spiti_Valley.JPG', hash: 'e/eb', w: 2816, h: 2112, lic: 'CC BY-SA 3.0', by: 'SilverBirch', place: 'Key Monastery on its hill' },
  'key-panorama':             { file: 'Key_Monastery.jpg', hash: '4/4c', w: 7565, h: 2569, lic: 'CC BY-SA 3.0', by: 'TheWanderer7562', place: 'Key Monastery and the Spiti valley, panorama' },
  'key-snow':                 { file: 'Kee_monastery_Spiti_Valley.JPG', hash: '7/7d', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Ksuryawanshi', place: 'Key Monastery in winter snow' },
  'key-may':                  { file: 'Key_Monastery%2C_Spiti_Valley_May_2016.jpg', hash: 'd/d4', w: 3189, h: 2463, lic: 'CC BY-SA 4.0', by: 'Rohit Sharma', place: 'Key Monastery’s stacked buildings' },
  'key-gompa-valley':         { file: 'Kye_Gompa_and_Spiti_Valley.jpg', hash: '1/19', w: 3456, h: 1816, lic: 'CC BY-SA 4.0', by: 'Arup1981', place: 'Key Monastery above the Spiti valley' },
  'key-riverbed':             { file: 'Kye_Gompa-22-Flusstal-gje.jpg', hash: 'e/ec', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Gerd Eichmann', place: 'The river valley seen from Key Monastery' },
  'key-wide':                 { file: 'Key_Monastery_Spiti.jpg', hash: 'e/e5', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Shivendujha', place: 'Key Monastery beneath the cliffs' },
  'key-view-2004':            { file: 'View_of_Spiti_Valley_from_Key_Monastery%2C_2004.jpg', hash: '4/49', w: 2304, h: 1728, lic: 'CC BY-SA 4.0', by: 'John Hill', place: 'Rooftop view from Key Monastery' },
  'key-steps':                { file: 'Steps_in_Key_Gompa_monastery%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India.jpg', hash: 'd/d9', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'Steps inside Key Monastery' },
  'chicham-bridge-east':      { file: 'Chicham_Bridge_East_Spiti_Jun18_D72_7453.jpg', hash: '2/2b', w: 5892, h: 3928, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Chicham Bridge across its gorge' },
  'chicham-bridge-se':        { file: 'Chicham_Bridge_SE_Spiti_Jun18_D72_7401.jpg', hash: 'c/c7', w: 5433, h: 3622, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Chicham Bridge from the south-east' },
  'kibber-snow':              { file: 'Kibber_village%2C_Spiti_valley%2C_Himachal_Pradesh.JPG', hash: '1/1a', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Ksuryawanshi', place: 'Kibber village in winter', note: 'Kibber is on the Chicham road; a village stop there is not confirmed.' },
  'kibber-houses':            { file: 'Kibber-19c-traditionelle_Haeuser-2016-gje.jpg', hash: '7/73', w: 5184, h: 3456, lic: 'CC BY 4.0', by: 'Gerd Eichmann', place: 'Traditional whitewashed houses, Kibber', note: 'Kibber is close to Kaza; a stop there is not confirmed.' },
  'kibber-kanamo':            { file: 'Kanamo_Peaks_South_Kibber_Spiti_Jun18_D72_7523.jpg', hash: 'd/d2', w: 5018, h: 2823, lic: 'CC BY-SA 4.0', by: 'Timothy A. Gonsalves', place: 'Peaks south of Kibber, upper Spiti' },
  'langza-buddha':            { file: 'Langza_village_and_Buddha_statue.jpg', hash: 'a/ab', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Langza village and its Buddha statue' },
  'langza-monastery-cckn':    { file: 'Langza_Monastery_with_Chau_Chau_Kang_Nilda_in_the_back_drop.jpg', hash: '2/28', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Langza monastery with Chau Chau Kang Nilda behind' },
  'langza-cckn-peak':         { file: 'Chau_Chau_Kang_Nilda_Peak_from_Langza%2C_Spiti_Valley.jpg', hash: '8/83', w: 6000, h: 4000, lic: 'CC BY-SA 4.0', by: 'Avantikac98', place: 'Chau Chau Kang Nilda from Langza' },
  'langza-star-trail':        { file: 'Star_trail_with_Buddha_Statue_from_Langza_%2848314765602%29.jpg', hash: '0/0d', w: 5804, h: 3762, lic: 'CC BY 2.0', by: 'Rajarshi Mitra', place: 'Star trails over the Langza Buddha' },
  'langza-valley-view':       { file: 'View_towards_Spiti_Valley_from_Langza%2C_Himachal_Pradesh%2C_India.jpg', hash: '0/0f', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'Looking down towards the Spiti valley from Langza' },
  'langza-shepherd':          { file: 'Shepherd_returning_home_in_Langza_village.jpg', hash: '1/16', w: 5040, h: 2952, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'A shepherd walking home, Langza' },
  'langza-meadow':            { file: 'Meadow%2C_Langza%2C_Spiti.jpg', hash: 'f/fa', w: 4032, h: 3024, lic: 'CC BY-SA 4.0', by: 'Drawtheline', place: 'High meadow at Langza' },
  'hikkim-village':           { file: 'Hikkim_Village.jpg', hash: 'f/fd', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Hikkim village' },
  'hikkim-to-komic':          { file: 'Hikkim_village_on_the_way_to_Komic_village.jpg', hash: 'f/fc', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Hikkim, on the road to Komik' },
  'hikkim-post-office':       { file: 'Hikkim_Post_Office.jpg', hash: '4/4f', w: 4496, h: 3000, lic: 'CC BY-SA 4.0', by: 'Nrr1729', place: 'The Hikkim post office' },
  'komic-tangyud':            { file: 'Tangyud_Monastery%2C_Komic%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India_02.jpg', hash: '9/90', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'Tangyud monastery, Komik' },
  'komic-prayer-flags':       { file: 'Prayer_flags_overlooking_Tangyud_Monastery%2C_Komic%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India.jpg', hash: 'c/ce', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'Prayer flags above Tangyud monastery, Komik' },
  'komic-cckn-road':          { file: 'Chau_Chau_Kang_Nilda%28CCKN%29_peak_of_Spiti_Himachal_Pradesh_from_Komic_village_to_Demul_Vllage.jpg', hash: 'd/d2', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Sumita Roy Dutta', place: 'Chau Chau Kang Nilda from the road out of Komik' },
  'komic-window':             { file: 'Window_in_Tangyud_Monastery%2C_Komic%2C_Spiti_Valley%2C_Himachal_Pradesh%2C_India_04.jpg', hash: '4/4e', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Mike Shaw', place: 'A window in Tangyud monastery, Komik' },
  'spiti-khurik-snow':        { file: '20161226_Khurik_India.jpg', hash: 'd/d2', w: 3000, h: 1500, lic: 'CC BY-SA 3.0', by: 'Ksuryawanshi', place: 'Khurik, Spiti, on 26 December', note: 'Khurik is a Spiti village near Kaza, photographed in late December.' },
  'spiti-river-valley':       { file: 'Spiti_river-valley.jpg', hash: 'd/d3', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Theo10011', place: 'The Spiti river valley' },
  'spiti-river-view':         { file: 'View_of_Spiti_river_and_valley.jpg', hash: 'd/dc', w: 3888, h: 2592, lic: 'CC BY-SA 4.0', by: 'Rupak Sarkar', place: 'The Spiti river and valley' },
  'spiti-mountains-pano':     { file: 'Spiti_Valley_Mountains.jpg', hash: 'f/fe', w: 4928, h: 2247, lic: 'CC BY-SA 4.0', by: 'Sudhanshu Gupta', place: 'Spiti valley mountains' },
  'spiti-desert-mountains':   { file: 'Desert_mountains_of_India.jpg', hash: '1/10', w: 4608, h: 3456, lic: 'CC BY-SA 4.0', by: 'Rollinghopes', place: 'Cold-desert mountains, Spiti' },
  'spiti-prayer-flags':       { file: 'Prayer_flags_%2851874557725%29.jpg', hash: 'a/ac', w: 6000, h: 3375, lic: 'CC BY 2.0', by: 'Kandukuru Nagarjun', place: 'Prayer flags against the Spiti sky' },
  'spiti-yak-herders':        { file: 'Herders_with_Yaks_Chota_Baldar_Spiti_Valley_Himachal_Pradesh_Schwiki.jpg', hash: 'a/a5', w: 4809, h: 2706, lic: 'CC BY-SA 4.0', by: 'Schwiki', place: 'Herders with yaks in the Spiti high country', note: 'Photographed in the wider Lahaul–Spiti high country, away from the road.' },
  'spiti-yak':                { file: 'Domestic_Yak_at_Pin_Valley.jpg', hash: 'a/a7', w: 4377, h: 2918, lic: 'CC BY-SA 4.0', by: 'Marsmux', place: 'A domestic yak, Pin valley', note: 'The Pin valley branches off near Kaza; not a confirmed stop.' },

  /* ---------- Rampur ---------- */
  'rampur-padam-palace':      { file: 'Padam_Palace_Rampur_Bushahr.jpg', hash: '2/29', w: 4032, h: 3024, lic: 'CC BY-SA 4.0', by: 'Vishvakk94', place: 'Padam Palace, Rampur Bushahr' },
  'rampur-town-river':        { file: 'Rampur_Bushahr_City_Satluj_River.jpg', hash: '4/46', w: 4032, h: 3024, lic: 'CC BY 4.0', by: 'Harpreetsinghmohali', place: 'Rampur Bushahr on the Sutlej' },
  'rampur-town-angle':        { file: 'Rampur_Bushahr_City_Satluj_River_Angle3.jpg', hash: '2/21', w: 4032, h: 3024, lic: 'CC BY 4.0', by: 'Harpreetsinghmohali', place: 'Rampur’s terraces above the Sutlej' },
  'rampur-shraikoti':         { file: 'View_of_Shraikoti_Temple%2C_Rampur_Bushahr%2C_Himachal_Pradesh.jpg', hash: '1/18', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Shimla Deities', place: 'Shraikoti temple, Rampur Bushahr area' },
  'rampur-lalsa':             { file: 'View_of_Village_Lalsa%2C_Rampur_Bushahr%2C_Himachal_Pradesh.jpg', hash: '7/70', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Shimla Deities', place: 'Lalsa village, near Rampur Bushahr' },

  /* ---------- Chandigarh ---------- */
  'chandigarh-sukhna-sunrise':{ file: 'Sunrise_over_Sukhna.jpg', hash: 'e/e7', w: 2987, h: 2221, lic: 'CC BY-SA 4.0', by: 'UnpetitproleX', place: 'Sunrise over Sukhna Lake, Chandigarh' },
  'chandigarh-shivalik':      { file: 'Shivalik_hills_from_Sukhna_Lake_in_Chandigarh%2C_India.jpg', hash: '3/3e', w: 19735, h: 3000, lic: 'CC BY-SA 4.0', by: 'UnpetitproleX', place: 'The Shivalik hills from Sukhna Lake, Chandigarh' },

  /* ---------- NEW YEAR MOUNTAIN PARTY & TREK — added in the 2026 enhancement ----------
     Mood photographs for the party, bonfire, DJ, transport and gallery sections.
     None of these shows the actual event, venue, DJ, vehicle or guests: each
     carries a `note`, which the caption prints, saying so. */
  'snow-solang-valley':       { file: 'Solang_valley_under_snow,_2015.jpg', hash: '2/2c', w: 6016, h: 4000, lic: 'CC BY-SA 4.0', by: 'Bleezebub', place: 'Solang valley under deep winter snow, Kullu, Himachal Pradesh', note: 'Solang is near Manali, not on this route; shown for the winter Himalayan setting.' },
  'party-dance-lights':       { file: 'People_dancing_at_night_with_lights,_Gili_Trawangan_(island),_Indonesia.jpg', hash: 'c/cc', w: 4032, h: 2688, lic: 'CC BY 4.0', by: 'Vyacheslav Argenberg', place: 'People dancing under party lights at night', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'party-apres-ski':          { file: 'Après_ski_in_Gerlos,_Tyrol.jpg', hash: '6/6b', w: 1280, h: 960, lic: 'CC BY 2.0', by: 'Everjean', place: 'Friends celebrating in the snow, Gerlos, Austria', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'party-light-igloos':       { file: 'Light_igloos.JPG', hash: '2/29', w: 5184, h: 3456, lic: 'CC BY-SA 4.0', by: 'Fjermann', place: 'Glowing light domes against the night (long exposure)', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'party-trance-dance':       { file: 'Psychedelic_trance_party,_Dancing,_Ashwem,_Goa,_India.jpg', hash: '9/9e', w: 6728, h: 4640, lic: 'CC BY 4.0', by: 'Vyacheslav Argenberg', place: 'Dancing under coloured lights at a night party', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'bonfire-snow-firepit':     { file: 'Campfire_time_(33448740970).jpg', hash: '2/22', w: 6000, h: 4000, lic: 'CC BY 2.0', by: 'Thank you for visiting my page (Flickr)', place: 'A fire pit burning in the snow', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'bonfire-snow-candle':      { file: 'Jätkänkynttilä_(5332127663).jpg', hash: '4/4d', w: 1600, h: 1200, lic: 'CC BY-SA 2.0', by: 'Timo Newton-Syms', place: 'A log fire burning in the snow at dusk', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'bonfire-sparks':           { file: 'Campfire_and_sparks_in_Anttoora_1.jpg', hash: '5/5c', w: 3700, h: 2690, lic: 'CC BY-SA 3.0', by: 'kallerna', place: 'Sparks rising from a night fire', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'bonfire-lohri':            { file: 'A_bonfire_celebrating_Lohri_Makar_Sankranti_eve_Hindu_and_Sikh_festivals.jpg', hash: '6/63', w: 3210, h: 2227, lic: 'CC BY 2.0', by: 'Satish Krishnamurthy', place: 'A winter bonfire night in north India (Lohri)', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'bonfire-circle-night':     { file: 'People_sitting_around_a_camp_fire.jpg', hash: '5/51', w: 3024, h: 4032, lic: 'CC0', by: 'Hynek Janáč', place: 'Friends gathered around a fire after dark', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'lodge-lamps-snow':         { file: 'Three_lamps_on_a_veranda_in_Brastad_1.jpg', hash: 'a/ac', w: 4873, h: 3307, lic: 'CC BY-SA 4.0', by: 'W.carter', place: 'Warm lamps glowing in a cabin window on a snowy night', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'lodge-fireplace':          { file: 'Snjezna_kuca_Rujiste_-_interior_with_fireplace_-_Bosnia_and_Herzegovina_(2026)-bs.jpg', hash: 'f/f6', w: 1350, h: 1800, lic: 'CC BY-SA 4.0', by: 'Minja Klarić', place: 'A warm mountain-lodge interior with a central fireplace', note: 'Not one of the trip’s stays; shown for the warm-lodge atmosphere only.' },
  'dj-mixer-hands':           { file: 'DFC_5183_Hands-on_mixing_a_DJ_tweaks_levels_and_cues_glowing_controls_on_a_Pioneer_DJ_mixer_under_red_club_lights.jpg', hash: 'c/c4', w: 5568, h: 3712, lic: 'CC BY-SA 4.0', by: 'PattayaPatrol', place: 'Hands on a DJ mixer under red lights', note: 'Not the DJ travelling with the group; their identity will be announced by the organiser.' },
  'dj-decks-blue':            { file: 'Pioneer_DJM900_Nexus_DJ_Mixer_tweaked_(2015-04-25_by_Aurélien)_pixabay.jpg', hash: '3/3f', w: 6000, h: 4000, lic: 'CC0', by: 'Aurélien (Designatic)', place: 'A DJ mixer glowing blue', note: 'Not the DJ’s actual equipment; shown for the music theme.' },
  'trek-sar-pass':            { file: 'Sar_Pass-_Struggling_trekkers_I_IMG_7200.jpg', hash: 'c/c3', w: 1000, h: 667, lic: 'CC BY-SA 3.0', by: 'J.M.Garg', place: 'Trekkers crossing snow on the Sar Pass trek, Kullu, Himachal Pradesh', note: 'A different Himachal trek, not part of this itinerary.' },
  'trek-snow-group':          { file: 'India_Snow_Tourism.jpg', hash: '3/30', w: 2960, h: 2048, lic: 'CC BY-SA 2.0', by: 'Chandramohan B V', place: 'A group walking across a snow-clad Himalayan slope', note: 'Not on this itinerary; shown for the experience of walking on snow.' },
  'trek-kedarkantha-camps':   { file: 'Kedarkantha_camps_in_heaven.jpg', hash: '8/8d', w: 2595, h: 1212, lic: 'CC BY-SA 4.0', by: 'AmxxmA', place: 'Trek camps at dusk below the Kedarkantha peak', note: 'Uttarakhand, not on this route; camping is not a confirmed part of this trip.' },
  'trek-kedarkantha-ridges':  { file: 'Kedarkantha_3.jpg', hash: '8/8a', w: 4608, h: 3280, lic: 'CC BY-SA 4.0', by: 'Ghodki', place: 'Layered blue Himalayan ridges from the Kedarkantha trail, 30 December', note: 'Uttarakhand, not on this route.' },
  'snow-auli-slope':          { file: 'Snow_at_Auli.jpg', hash: '2/2d', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'ArmouredCyborg', place: 'Fresh snow on a Himalayan slope in early January', note: 'Auli, Uttarakhand — not on this route.' },
  'snow-manali-ice':          { file: 'Ice_covered_Hill_station-Manali.jpg', hash: '2/25', w: 3264, h: 2448, lic: 'CC BY-SA 4.0', by: 'Praveenbansal10', place: 'Snowbound slopes near the Rohtang bypass above Manali', note: 'Near Manali, not on this route.' },
  'sunset-keylong':           { file: 'Himayala_from_the_village_Keylong.jpg', hash: '0/08', w: 5472, h: 3648, lic: 'CC BY-SA 4.0', by: 'Kiran Kulkarni', place: 'Evening light on the peaks above Keylong, Lahaul', note: 'Lahaul, the valley beside Spiti; not a stop on this route.' },
  'night-star-trail-snow':    { file: 'Under_stars_and_snows.jpg', hash: '4/4c', w: 8256, h: 5504, lic: 'CC BY-SA 4.0', by: 'Ummidnp', place: 'Star trails over snow peaks (Nepal Himalaya)', note: 'Nepal, not on this route; shown for the winter night sky.' },
  'night-tents-peak':         { file: 'Lit_Tents_of_Seven_Summit_Treks_seen_at_Everest_Basecamp,_background_Pumori_mountain.jpg', hash: '1/1b', w: 1280, h: 854, lic: 'CC BY-SA 4.0', by: 'Iamthanes', place: 'Tents glowing beneath a snow peak at night (Pumori, Nepal)', note: 'Not on this route; tented camps are not a confirmed part of this trip.' },
  'nye-fireworks-village':    { file: 'Fireworks_on_New_Year\'s_Eve_in_a_small_Swabian_village_(1),_brightened.jpg', hash: 'b/b4', w: 6366, h: 3581, lic: 'CC BY-SA 4.0', by: 'Andreas Weith', place: 'Fireworks over a village on New Year’s Eve', note: 'Germany. Fireworks are not a confirmed part of this event.' },
  'snow-night-lamps':         { file: 'Night_winter_lights_-_panoramio.jpg', hash: '5/50', w: 4752, h: 3168, lic: 'CC BY 3.0', by: 'James Ryen', place: 'Snow lit by warm lamps on a winter night', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'snow-tree-lights':         { file: 'Glowing_Christmas_Tree_Lights_in_the_Winter_Night.jpg', hash: '7/76', w: 4592, h: 2576, lic: 'CC BY 2.0', by: 'epSos.de', place: 'Warm string lights on a snow-covered tree at night', note: 'Illustrative of the mood, not a photograph of this event, its venue or its guests.' },
  'hilux-invincible':         { file: 'Toyota_Hilux_Invincible_X_-_geograph.org.uk_-_8282173.jpg', hash: '9/95', w: 5184, h: 3888, lic: 'CC BY-SA 2.0', by: 'Oscar Taylor', place: 'A Toyota Hilux pickup', note: 'A representative Hilux photographed in the UK — not the vehicle confirmed for this trip.' },
  'road-lahaul-winter':       { file: 'Aerail_view_of_Lahaul_valley_in_winter.JPG', hash: '1/13', w: 1544, h: 1024, lic: 'CC BY-SA 3.0', by: 'Nvvchar', place: 'Aerial view of the Lahaul valley in winter', note: 'Lahaul, beside Spiti; not a stop on this route.' },
  /* =================================================================
     SUPPLIED IMAGES (October 2026) — from `updated_travel_images_v2 2.zip`.
     Each file was named by the organiser after the section it belongs to;
     `section` records that placement and `source` the original filename.
     Files live in public/assets/img/supplied/<id>-800|1600.(jpg|webp).
     ================================================================= */
  'starts-on-a-river-road':      { supplied: true, source: 'Starts on a river road.jpeg', w: 1200, h: 960, section: 'Home · Leave the familiar behind — “This one starts on a river road.”', place: 'A river road at first thaw', alt: 'A half-frozen river catching low sun, banks of snow and bare trees on either side' },
  'cut-into-the-cliff-pointed-at-the-sky': { supplied: true, source: 'Cut into the Cliff, Painted at the Sky.jpeg', w: 1920, h: 1080, section: 'Home · Leave the familiar behind — “Cut into the cliff. Pointed at the sky.”', place: 'A hill town beneath a wall of snow peaks', alt: 'Colourful houses spread across a forested ridge beneath a long line of snow-covered Himalayan peaks' },
  'the-first-light-arises-before-the-sun-does': { supplied: true, source: 'The first light arises before the sun does.jpeg', w: 1080, h: 721, section: 'Home · The first light arrives before the sun does', place: 'Alpenglow over a snowbound valley', alt: 'Pink and copper light on snow peaks at dawn above a frozen river valley' },
  'snow-outside-party-mode-1':   { supplied: true, source: 'Snow Outside Party Mode 1.jpeg', w: 1200, h: 1600, section: 'Home · Snow outside. Party mode on. (1 of 3)', place: 'Party mode — a crowd under festoon lights in the snow', alt: 'A crowd in winter jackets celebrating under strings of warm bulbs, snowy slopes and pines behind', mood: true },
  'snow-outside-party-mode-2':   { supplied: true, source: 'Snow Outside Party Mode 2.jpeg', w: 1000, h: 1500, section: 'Home · Snow outside. Party mode on. (2 of 3)', place: 'Party mode — fire pits and string lights at dusk', alt: 'Friends in faux-fur seats around fire pits on a snowy terrace at sunset, string lights overhead', mood: true },
  'snow-outside-party-mode-3':   { supplied: true, source: 'Snow Outside Party Mode 3.jpeg', w: 1200, h: 1800, section: 'Home · Snow outside. Party mode on. (3 of 3)', place: 'Party mode — fireworks over a snowbound mountain town', alt: 'Fireworks bursting over a lit-up mountain village in a snowy valley at night', mood: true },
  'your-journey-your-way-toyota-hilux': { supplied: true, source: 'Your Journey, Your Way - A Toyota Hilux.jpeg', w: 1200, h: 2133, section: 'Home · Transport — Your journey, your way', place: 'A Toyota Hilux on a Himalayan valley road', alt: 'A red Toyota Hilux pickup parked on a stony mountain track, prayer flags and snow peaks behind' },
  'what-you-do-between-the-views': { supplied: true, source: 'What You Do Between the Views.jpeg', w: 1200, h: 2133, section: 'Home · Beyond the landscape — What you do between the views', place: 'Prayer flags beneath snow peaks', alt: 'Prayer flags on a juniper tree beneath storm clouds and a wall of snow peaks', note: null },
  'monasteries':                 { supplied: true, source: 'Monasteries.jpeg', w: 768, h: 1344, section: 'Home · What you do between the views — Monasteries', place: 'A monastery on a rock spur, prayer flags in the wind', alt: 'A pagoda-roofed monastery perched on a rocky spur, prayer flags in the foreground, snow peaks behind' },
  'high-villages':               { supplied: true, source: 'High Villages.jpeg', w: 1200, h: 1800, section: 'Home · What you do between the views — High villages', place: 'Village houses stacked on a hillside', alt: 'Colourful village houses stacked down a steep green hillside under a dramatic sky' },
  'photography':                 { supplied: true, source: 'Photography.jpeg', w: 1200, h: 1600, section: 'Home · What you do between the views — Photography', place: 'Arms open on a snow ridge', alt: 'A traveller with arms outstretched on a snowy rock summit facing a sea of white peaks' },
  'the-road-itself':             { supplied: true, source: 'The Road Itself.jpeg', w: 736, h: 1104, section: 'Home · What you do between the views — The road itself', place: 'An empty road into the mountains', alt: 'A straight empty road with a yellow centre line running towards sunlit rocky peaks' },
  'delhi':                       { supplied: true, source: 'Delhi.jpeg', w: 1005, h: 1799, section: 'Destination · Delhi (start and finish)', place: 'Humayun’s Tomb, Delhi', alt: 'The red sandstone and marble dome of Humayun’s Tomb in Delhi framed by trees' },
  'kufri':                       { supplied: true, source: 'Kufri.jpeg', w: 572, h: 1024, section: 'Destination · Kufri', place: 'Kufri under snow', alt: 'Walkers on a snow-covered lane between deodar trees and cabins at Kufri' },
  'kalpa':                       { supplied: true, source: 'Kalpa.jpeg', w: 1200, h: 2133, section: 'Destination · Kalpa', place: 'Kalpa — temple eaves and the Kinnaur range', alt: 'Carved and painted temple eaves in front of a snow-dusted mountain wall at Kalpa' },
  'kaza':                        { supplied: true, source: 'Kaza.jpeg', w: 1200, h: 1500, section: 'Destination · Kaza', place: 'Prayer flags over Key Monastery in winter, near Kaza', alt: 'Prayer flags in the foreground and Key Monastery stacked on its snowy hill near Kaza' },
  'rampur':                      { supplied: true, source: 'rampur.jpeg', w: 1200, h: 1600, section: 'Destination · Rampur', place: 'Rampur', alt: 'Monks seated in rows inside a richly painted monastery prayer hall before a golden Buddha statue' },
  'hyatt-centric':               { supplied: true, source: 'Hyatt Centric.jpeg', w: 1000, h: 1500, section: 'Stays · Delhi — Hyatt Centric', place: 'Hyatt Centric', alt: 'A modern Hyatt Centric hotel building at blue hour', stay: true },
  'fortune':                     { supplied: true, source: 'Fortune.jpeg', w: 1000, h: 1500, section: 'Stays · Kufri — Fortune', place: 'Fortune', alt: 'A hillside hotel with warmly lit balconies against a forested slope at dusk', stay: true },
  'kinner-villa':                { supplied: true, source: 'Warm Rooms After Cold Roads 03 Kinner Villa.jpeg', w: 900, h: 500, section: 'Stays · Kalpa — Kinner Villa (Warm rooms after cold roads, 03)', place: 'Kinner Villa', alt: 'A pink-roofed hill house with a terrace, snow peaks rising behind', stay: true },
  'sakya-abode':                 { supplied: true, source: 'Warm Rooms After Cold Roads 04 Sakya Abode.jpeg', w: 900, h: 500, section: 'Stays · Kaza — Sakya Abode (Warm rooms after cold roads, 04)', place: 'Sakya Abode', alt: 'A lit-up guesthouse courtyard at dusk with guests seated on the lawn beneath dark mountains', stay: true },
  'dev-dhara':                   { supplied: true, source: 'Warm Rooms After Cold Roads 05 Devdhara.jpeg', w: 1536, h: 1026, section: 'Stays · Rampur — Dev Dhara (Warm rooms after cold roads, 05)', place: 'Dev Dhara', alt: 'A glass-fronted restaurant and terrace seating glowing at dusk beneath a mountain slope', stay: true },
  'jw-marriott':                 { supplied: true, source: 'Warm Rooms After Cold Roads 06 JW Marriott.jpeg', w: 2040, h: 1535, section: 'Stays · Chandigarh — JW Marriott (Warm rooms after cold roads, 06)', place: 'JW Marriott', alt: 'The illuminated facade of the JW Marriott hotel at blue hour', stay: true },
  /* Supplied October 2026 (mountain_images_same_names_3.zip) — named by the organiser for
     “Eight days, in order” (home day cards) and “Cold mountains. Warm fires. Wild memories.” (bonfire stack). */
  'eight-days-01-delhi':           { supplied: true, source: 'Eight Days in Order 01 Delhi.jpeg', w: 1152, h: 2048, section: 'Home · Eight days, in order — 01 Delhi', place: 'Qutub Minar, Delhi', alt: 'The Qutub Minar lit up at night, framed by a stone arch' },
  'eight-days-03-kufri-to-kalpa':  { supplied: true, source: 'eight. days in order kupri to kalpa jpeg.jpeg', w: 1152, h: 2048, section: 'Home · Eight days, in order — 03 Kufri → Kalpa', place: 'Kufri to Kalpa — temple courtyard', alt: 'A carved wooden temple with a red tiered roof around a stone courtyard under a blue sky' },
  'eight-days-04-kalpa-to-kaza':   { supplied: true, source: 'Eight Days in Order 04 Kalpa to Kaza.jpeg', w: 1200, h: 1600, section: 'Home · Eight days, in order — 04 Kalpa → Kaza', place: 'Key Monastery in snow', alt: 'Key Monastery stacked on its snow-covered hill under a grey winter sky' },
  'eight-days-06-kaza':            { supplied: true, source: 'Eight Days in Order 06 Kaza.jpeg', w: 1080, h: 1920, section: 'Home · Eight days, in order — 06 Kaza', place: 'A snowfield below the peaks', alt: 'Crowds of small figures on a wide snowfield beneath steep snow-covered mountains' },
  'eight-days-07-kaza-to-rampur':  { supplied: true, source: 'Eight Days in Order 07 Kaza to Rampur.jpeg', w: 736, h: 1104, section: 'Home · Eight days, in order — 07 Kaza → Rampur', place: 'Key Monastery at dusk', alt: 'Key Monastery at sunset seen past a whitewashed stupa and prayer flags' },
  'eight-days-08-rampur-to-delhi': { supplied: true, source: 'Eight Days in Order 08 Rampur to Delhi.jpeg', w: 1080, h: 1920, section: 'Home · Eight days, in order — 08 Rampur → Delhi', place: 'Lotus Temple, Delhi', alt: 'The Lotus Temple in Delhi glowing under a pink and violet dusk sky' },
  'cold-mountains-warm-fires-wild-memories-1': { supplied: true, source: 'Cold Mountains, Warm Fires, Wild Memories 1.jpeg', w: 900, h: 1200, section: 'Home · Cold mountains. Warm fires. Wild memories. (1 of 4)', place: 'A fire pit in the snow', alt: 'A log fire burning in a stone ring in the snow between wooden benches', mood: true },
  'cold-mountains-warm-fires-wild-memories-2': { supplied: true, source: 'Cold Mountains, Warm Fires, Wild Memories 2.jpeg', w: 1200, h: 1600, section: 'Home · Cold mountains. Warm fires. Wild memories. (2 of 4)', place: 'Warming hands at the fire', alt: 'A gloved hand held up to a blazing log fire in the snow at night', mood: true },
  'cold-mountains-warm-fires-wild-memories-3': { supplied: true, source: 'Cold Mountains, Warm Fires, Wild Memories 3.jpeg', w: 1200, h: 1600, section: 'Home · Cold mountains. Warm fires. Wild memories. (3 of 4)', place: 'A circle around the fire', alt: 'Friends gathered around a fire pit in the snow at night, string lights and snowy pines behind', mood: true },
  'cold-mountains-warm-fires-wild-memories-4': { supplied: true, source: 'Cold_mountains__Warm_fires__Wild_memories__4.JPG', w: 736, h: 920, section: 'Home · Cold mountains. Warm fires. Wild memories. (4 of 4)', place: 'Snowfall around the bonfire', alt: 'A crowd gathered around a bonfire at night as sparks and snowflakes fill the dark sky, lanterns glowing on snowy log stools', mood: true },
};

// Filenames above are stored URL-encoded where Commons needs it.
export const commonsPage = (id) => 'https://commons.wikimedia.org/wiki/File:' + IMAGES[id].file;
