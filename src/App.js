import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiaTI5dGFyZXNoIiwiYSI6ImNsaDFtcTVhZzBhMTIzb29hYWsycHQyY3QifQ.9puy6GfNXVpfObCbUhStgA';

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(76.7794);
  const [lat, setLat] = useState(30.7333);
  const [zoom, setZoom] = useState(7);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Smoky Mountains Charging Station (Khandala/Lonavala)",
          "contact": "Mr Allaudin Shaikh",
          "address": "Khandala Motor Garage, H. No. 213, Mumbai Pune Road, Near Khandala Police Station, Khandala, Maharashtra 410301",
          "notes": "The charging station is available 7 days a week between 9 AM and 9 PM. There are 4 - 15 amp sockets that can charge 4 vehicles in parallel.  This is a covered charging station, which is very useful during monsoon season.  Mr Allaudin is very cheerful and fun guy to hang out with. He will guide you on any local requests.  Also he can take care of small repairs.  There is Hotel Kamat, Dukes Retreat for great lunch options nearby. Breathtaking viewpoints are just 5 minutes away. Don't miss Rajmachi Point!",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.37059,
            18.75906
          ],
          "type": "Point"
        },
        "id": 0
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Solar Powered Community Charging Station (Bhugaon Hills)",
          "contact": "Mr Sagar Kulkarni",
          "address": "4 Seasons Farmhouse Society, Near Songbirds township, Bhugaon, Plot Number 32, phase 3, near Club House, Paud Road, Pune, Maharashtra 411023, India",
          "notes": "The charging station is available 7 days a week between 9 AM and 4 PM on winter and from 9 AM to 5 PM in summers. There are 2 - 15 amp sockets that can charge 2 vehicles in parallel. This is a covered charging station, which is very useful during monsoon season. Mr Sagar's family are extremely fun to hang out with. You can learn a lot about electric cars, Solar power systems and sustainable living. This station is ideal to top up charge when coming from Lavasa or Temghar Dam back to Pune.  From the main road, look for the sign of - Songbirds township and the station is located 3 km on a hill. Breathtaking viewpoints are just 5 minutes away. Don't miss spectacular view of NDA!",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.74853,
            18.48804
          ],
          "type": "Point"
        },
        "id": 1
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Royal Orange County near Pimple Saudagar",
          "contact": "Mr. Raj Alure",
          "address": "Behind Fountain Inn Hotel, Aundh Annexe, Rahatani, Pune, Maharashtra 411017, India",
          "notes": "The charging station is available between 9 AM and 9 PM. There are 3, charge points (15 Amp) for electric vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.78262,
            18.6009
          ],
          "type": "Point"
        },
        "id": 2
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Chhajed Petrol Pump, Bopodi",
          "contact": "Mr. Ravi Pille",
          "address": "Bhau Patil Rd, Bapodi Gaothan, Bopodi, Pune, Maharashtra 411003, India ",
          "notes": "The charging station is available between 9 AM and 9 PM. There is 1, charge points (15 Amp) for Mahindra Reva electric cars ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.8338809,
            18.5727487
          ],
          "type": "Point"
        },
        "id": 3
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Godambe Washing Center,  Talegaon Chakan Road",
          "contact": "Mr. Prashant Godambe",
          "address": "Talegaon – Chakan Road (3 k.m. away from Pune Mumbai highway), Pune, Maharashtra, India",
          "notes": "The charging station is available between 9 AM and 9 PM. There is 1, charge points (15 Amp) for Mahindra Reva electric cars",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.69682,
            18.73519
          ],
          "type": "Point"
        },
        "id": 4
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Gaokari Restaurant near Lekha Farm on NH4",
          "contact": "Mr. Vishal/Nimesh",
          "address": "Dehu-Katraj Bypass Road, Pune-Mumbai Highway, Nr. Lekha Farm, NH-4, Kiwale, Pune, Maharashtra, India",
          "notes": "The charging station is available between 9 AM and 9 PM. There is 1, charge points (15 Amp) for Mahindra Reva electric cars",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.72627,
            18.66725
          ],
          "type": "Point"
        },
        "id": 5
      },
      {
        "type": "Feature",
        "properties": {
          "name": "G3 Motors, Navi Mumbai",
          "contact": "Subhankar",
          "address": "MIDC Industrial Area, Shiravane, Nerul, Navi Mumbai, Maharashtra",
          "notes": "The charging station is available 7 days a week between 9:30 AM and 8 PM. There are 2 - 15 amp sockets that can charge 2 vehicles in parallel",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.030307,
            19.03433
          ],
          "type": "Point"
        },
        "id": 6
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SantaCruz East Charging Station",
          "contact": "Raphae Halim",
          "address": "Moiz Apartments, 12th Road, Santacruz (East), Mumbai 400055, Maharashtra, India. Landmark: Above Upadhyaya Nursing Home",
          "notes": "The charging station is available 7 days a week for 24 hours. There is a 15 amp socket that can charge an EV.  Lots of Food options, nearby.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.84527,
            19.0823
          ],
          "type": "Point"
        },
        "id": 7
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Okhla Charging Station",
          "contact": "Mr Ranjan",
          "address": "F 32/2, Okhla Industrial Estate - Phase 2, New Delhi - 110020",
          "notes": "The phone will be answered between 9 AM and 6 PM Monday to Friday. At any other time, there is a 24 hour guard who will allow emergency charging",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.27077,
            28.53764
          ],
          "type": "Point"
        },
        "id": 8
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Greater Noida Charging Station",
          "contact": "",
          "address": "India Expo Mart Cir, Knowledge Park II, Greater Noida, Uttar Pradesh 201310, India",
          "notes": "The phone will be answered between 9 AM and 6 PM Monday to Friday. The station will also be available during office hours.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.49946,
            28.45904
          ],
          "type": "Point"
        },
        "id": 9
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Station near Lodhi Garden",
          "contact": "",
          "address": "97 C, Block C2, BK Dutt Colony, New Delhi, Delhi 110003, India",
          "notes": "At all reasonable times , late evening the owners charge their electric car. During the day it is accessible",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.21536,
            28.58139
          ],
          "type": "Point"
        },
        "id": 10
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Narendra Motors, Dharuhera",
          "contact": "Mr Om Singh Chauhan",
          "address": "N.H 8 (Delhi to Jaipur) near Jungle Babbler Resort, Dharuhera, Haryana",
          "notes": "The station will be available between 9 AM and 9 PM, all days a week. At any other time, there is a 24 hour guard who will allow emergency charging. The Jungle Babbler is a very good option for lunch and dinner. Just 5 minute walk away.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.78367,
            28.20577
          ],
          "type": "Point"
        },
        "id": 11
      },
      {
        "type": "Feature",
        "properties": {
          "name": "JS FourWheel Motors, Alwar, Rajasthan",
          "contact": "Mr Rajiv or Mr Hemanth Kumar",
          "address": "Mahindra Showroom, Delhi Road, Alwar, Rajasthan - 301001",
          "notes": "The station will be available between 9 AM and 9 PM, all days a week. At any other time, there is a 24 hour guard who will allow emergency charging. Prem Pavitra Bhojnalaya is a very good option for lunch/dinner near the Bus Stand. Take a share auto to get there.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.64584,
            27.55237
          ],
          "type": "Point"
        },
        "id": 12
      },
      {
        "type": "Feature",
        "properties": {
          "name": "HyTech Professionals​, Noida",
          "contact": "Mr Damnish",
          "address": "A-89, Sector 63, Noida",
          "notes": "The station will be available at all times - 24/7, all days a week. The phone will be answered in day time. There are 2 15 Amp sockets. Security guards are available and will help round the clock. ​Lot of food places - Like Haldiram , Yellow Chilli etc",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.37992,
            28.61954
          ],
          "type": "Point"
        },
        "id": 13
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Katraj-Dehu Road Charging Station",
          "contact": "Mr Hemang Shah",
          "address": "HMV PRODUCTS, Shah Sarbatwale, Katraj-Dehu Road, Pune",
          "notes": "The charging station is available between 9 AM and 6 PM.  Thursday Holiday. There are 2 charge points (15 Amp) sockets for all Electric Vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.83551,
            18.45405
          ],
          "type": "Point"
        },
        "id": 14
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sinhagad Road Charging station",
          "contact": "Mr.  PRADEEP MISHRA",
          "address": "128/3/1,Barangani mala,Nanded phata-Dhayari rd., Dhayari, DSK Vishwa, Dhayari, Pune, Maharashtra 411041, India",
          "notes": "The charging station is available Monday to Saturday. 9 AM to 7 PM. Except Thursdays, which is a holiday. There are 2 charge point (15 Amp) sockets for all Electric Vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.79864,
            18.44953
          ],
          "type": "Point"
        },
        "id": 15
      },
      {
        "type": "Feature",
        "properties": {
          "name": "FC Road Charging Station",
          "contact": "Mr. Arjun Doshi",
          "address": "Starbucks lane, 3rd bungalow on the right Manikanchan. Opp Dakshin Mukhi Maruti mandir beside Bansal classes",
          "notes": "The charging station is available 24 hours. There are 5 charge points (15 Amp) sockets for all Electric Vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.8422,
            18.5225
          ],
          "type": "Point"
        },
        "id": 16
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra Sahyadri Motors, Baner",
          "contact": "Mr.Ganesh Deshpande",
          "address": "Sr.No. 43/1, 44/1/1, Near to Pashan Sus Bridge, Pune, Maharashtra 411045, India",
          "notes": "The charging station is available 6 days a week from 9.30am to 6.30pm. There are 3 charge point (15 Amp) sockets for Mahindra electric cars",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.77289,
            18.54843
          ],
          "type": "Point"
        },
        "id": 17
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra Sahyadri Motors Service Center, Wakad Charging Station",
          "contact": "Mr.Nachiket",
          "address": "247,, Kaspate Vasti Rd, Kaspate Wasti, Wakad, Pine/Pimpri-Chinchwad, Maharashtra 411057, India",
          "notes": "The charging station is available 6 days a week from 9.30am to 6.30pm. There are 3 charge point (15 Amp) sockets for Mahindra electric cars",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.76689,
            18.59112
          ],
          "type": "Point"
        },
        "id": 18
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Rohini Community Charging Station",
          "contact": "Dr. Jayant Sharma",
          "address": "B-5/30, 2nd floor, sector 17, Rohini, Delhi-89",
          "notes": "The station will be available at all times - 24/7, all days a week. The phone will be answered in day time. There are 2 15 Amp sockets. The home is 4 kms from karnal bypass.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.1196,
            28.7429
          ],
          "type": "Point"
        },
        "id": 19
      },
      {
        "type": "Feature",
        "properties": {
          "name": "NBS, Marine Drive, Chowpatty",
          "contact": "Mr M.V.S.SRIKANTH",
          "address": "10 stone building, Marine Drive, Mumbai, Maharashtra 400020",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.813500,
            18.955689
          ],
          "type": "Point"
        },
        "id": 20
      },
      {
        "type": "Feature",
        "properties": {
          "name": "NBS International, Andheri",
          "contact": "Mr M.V.S.SRIKANTH",
          "address": "S.V.Road & Junction,, Zalawad Nagar, Juhu Lane, Yadav Nagar, Andheri West, Mumbai, Maharashtra 400058",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.843363,
            19.115955
          ],
          "type": "Point"
        },
        "id": 21
      },
      {
        "type": "Feature",
        "properties": {
          "name": "G3, Kandivali",
          "contact": "Mr Amol Vaishampayan",
          "address": "Sanjar Enclave, Opp Milan Cinema, Near Shoppers Stop, S.V Road, Kandivali West, Mumbai, Maharashtra 400067",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.847791,
            19.196536
          ],
          "type": "Point"
        },
        "id": 22
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra Headquarters Charging Station, Worli",
          "contact": "Rabindranath Mahato",
          "address": "Mahindra Towers,Media Cube, G. M. Bhosale Marg, Worli,Mumbai, Maharashtra 400018",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.820955,
            19.005223
          ],
          "type": "Point"
        },
        "id": 23
      },
      {
        "type": "Feature",
        "properties": {
          "name": "M&M Office, Kandivali",
          "contact": "Rabindranath Mahato",
          "address": "Akruli Road, Kandivali, Mumbai, Maharashtra 400101",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.8664,
            19.2052
          ],
          "type": "Point"
        },
        "id": 24
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Bangalore International Airport, Charging Station",
          "contact": "WMC",
          "address": "BANGALORE NEWAIRPORT PARKING LOCATION AT P2&P3,Near DEVANHALLI,BANGALORE 562300,KARNATAKA",
          "notes": "There are 0 15A socket and number of WMC is 4.The status of 30-09-15 is 2 are working and remark is CAR PARKING BAYS ARE AT P2 & P4 PARKING AREA.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 230v,voltage between L & E is 230v and volatge between N & E is 2v.There is NA RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.7095,
            13.2007
          ],
          "type": "Point"
        },
        "id": 25
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sireesh Auto Private Limited ",
          "contact": "KOTRESH",
          "address": "M & M Dealer,108/2,1St Cross,M.S.R. Layout, Opp. Multiplex Theatre Behind Bhagini Palace Restaurant, MARATHALLI, Bangalore 560037,KARNATAKA",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 30-09-15 is 1 are working and remark is ONLY ONE CAR CAN PARK & CHARGE.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 220v,voltage between L & E is 221v and volatge between N & E is 2v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.7017,
            12.9515
          ],
          "type": "Point"
        },
        "id": 26
      },
      {
        "type": "Feature",
        "properties": {
          "name": "ANANT CARS",
          "contact": "Praveen",
          "address": "600/677, Bilekahalli, Opposite-IIMB, Bannerghatta Main Road, Bangalore 560078,KARNATAKA",
          "notes": "There are 1 15A socket and number of WMC is 1.The status of 30-09-15 is 2 are working and remark is ONLY ONE CAR CAN PARK & CHARGE.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 235v,voltage between L & E is 235v and volatge between N & E is 2v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.6003003,
            12.89824281
          ],
          "type": "Point"
        },
        "id": 27
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra ELECTRIC Factory",
          "contact": "SECURITY GUARD",
          "address": "MAHINDRA ELECTRIC VEHICLES PVT LTD,122E BOMMASANDRA IND.AREA,BOMMASANDRA JIGANI LINK ROAD,KOPPA, Bangalore 560099,KARNATAKA",
          "notes": "There are 4 15A socket and number of WMC is 4.The status of 30-09-15 is 8 are working.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 231v,voltage between L & E is 235v and volatge between N & E is 2v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.66236582,
            12.81027928
          ],
          "type": "Point"
        },
        "id": 28
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SIREESHAUTO PVT. LTD.(M&M WORKSHOP)",
          "contact": "SECURITY GUARD",
          "address": "#839/3.24TH MAIN HSR LAYOUT,BEHIND THIRUMALA THEARE,AGARA POST,HSR LAYOUT FIRST SECTOR , BANGALORE 5600102, KARNATAKA",
          "notes": "There are 2 15A socket and number of WMC is 0.The status of 30-09-15 is 2 are working and remark is 24X7 CHARGE POINT AVAILABLE FOR PUBLIC.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 232v,voltage between L & E is 231v and volatge between N & E is 2v.There is NA RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.65016452,
            12.92064872
          ],
          "type": "Point"
        },
        "id": 29
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sireesh Auto Pvt Ltd",
          "contact": "",
          "address": "No.13/11, Rupena Agrahara Near Silk Board, Hosur Main Road Bangalore - 560068, KARNATAKA",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 30-09-15 is  are working.The number of charging points is 1 and avialable charging time is 9AM TO 5PM.There is voltage between L & N is 234v,voltage between L & E is 231v and volatge between N & E is 4v.There is no RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.62530083,
            12.9201387
          ],
          "type": "Point"
        },
        "id": 30
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sireesh Auto Private Limited ",
          "contact": " ",
          "address": "No 5 & 6, Yelhanka Bypass Road Landmark Next Cafe Coffee Day, Yelhanka Bangalore - 560064, KARNATAKA",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 30-09-15 is  are working.The number of charging points is 1 and avialable charging time is 24*7.There is voltage between L & N is 238v,voltage between L & E is 235v and volatge between N & E is 3v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.59461157,
            13.07276285
          ],
          "type": "Point"
        },
        "id": 31
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Forum Mall",
          "contact": "Mr Vijay",
          "address": "The Forum mall, 21, Hosur Road, Koramangala, Bangalore - 560099, KARNATAKA",
          "notes": "There are 1 15A socket and number of WMC is 1.The status of 30-09-15 is  are working.The number of charging points is 1 and avialable charging time is 11AM  TO 10PM.There is voltage between L & N is 240v,voltage between L & E is 237v and volatge between N & E is 2v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.61129217,
            12.93536213
          ],
          "type": "Point"
        },
        "id": 32
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Forum Value Mall",
          "contact": "Mr Ramesh Babu",
          "address": "No.62, Whitefield Main Road, Whitefield,Bangalore - 560066, KARNATAKA",
          "notes": "There are 0 15A socket and number of WMC is 1.The status of 30-09-15 is  are working and remark is WITH REVA CAR CHARGE CABLE.The number of charging points is 1 and avialable charging time is 11AM  TO 10PM.There is voltage between L & N is 238v,voltage between L & E is 240v and volatge between N & E is 3v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.74483766,
            12.95666041
          ],
          "type": "Point"
        },
        "id": 33
      },
      {
        "type": "Feature",
        "properties": {
          "name": "India Garage",
          "contact": "Mr Chandru",
          "address": "# 1, Palace Cross Road, Bangalore - 560020, KARNATAKA",
          "notes": "There are 0 15A socket and number of WMC is 1.The status of 30-09-15 is  are working.The number of charging points is 1 and avialable charging time is11AM  TO 6PM.There is voltage between L & N is 236v,voltage between L & E is 240v and volatge between N & E is 1v.There is yes RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.78560852,
            12.9948064
          ],
          "type": "Point"
        },
        "id": 34
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Silver Jubilee Motor, Camp",
          "contact": "Mr Akshay More",
          "address": "12,Moledina Road,Pune, Maharashtra 411001",
          "notes": "There are 2 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.878493,
            18.510244
          ],
          "type": "Point"
        },
        "id": 35
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Silver Jubilee Motors, Hadapsar",
          "contact": "Mr Samson Patole",
          "address": "131/B,Hadapsar Industrial Estate, Nr.Tata Honeywell, Shinde Vasti,Pune, Maharashtra 411001",
          "notes": "There are 1 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.The status of 24-Dec-14 is Working and Accessible to public.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.923994,
            18.501396
          ],
          "type": "Point"
        },
        "id": 36
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Silver Jubilee Motors, Shikrapur",
          "contact": "Mr Akshay More",
          "address": "Shikrapur, Pune District, Maharashtra 411001",
          "notes": "There are 2 15A socket for which the charge point available timing was 10:00 to 18:00 Hrs and number of WMC is 0.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            74.102891,
            18.710644
          ],
          "type": "Point"
        },
        "id": 37
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Silver Jubilee Motor, Baramati",
          "contact": "Mr Bharat (Branch Manager)",
          "address": "Baramati,Pune, Maharashtra 411001",
          "notes": "",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            74.595247,
            18.165058
          ],
          "type": "Point"
        },
        "id": 38
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Prime Automobiles Pvt Ltd, Faridabad",
          "contact": "Mr R.R Javed",
          "address": "20/2 Mathura Road Near YMCA Chowk Faridabad(Haryana) , Near by Escort Mujesar Metro Station, Faridabad",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 24-Dec-14 is Functional and remark is Functional,Portable charging cable required.The number of charging points is 1 and avialable charging time is any time.There is voltage between L & N is 230v,voltage between L & E is 230v and volatge between N & E is 2v.There is no RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.315185,
            28.367360
          ],
          "type": "Point"
        },
        "id": 39
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sri Durga Automobiles, Moti Nagar",
          "contact": "",
          "address": "55 Rama Rd Indl. Area, Motinagar, Block B, Najafgarh Road Industrial Area, New Delhi, Delhi 110015",
          "notes": "There are 1 15A socket and number of WMC is 1.The status of 24-Dec-14 is Functional and remark is Functional.The number of charging points is 2 and avialable charging time is any time.There is voltage between L & N is 236v,voltage between L & E is 236v and volatge between N & E is 70v.There is no RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 2.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.154809,
            28.661027
          ],
          "type": "Point"
        },
        "id": 40
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Koncept Motors, Noida",
          "contact": "Mr S K vashisht",
          "address": "A-9,Sector-2,Opp Indian Oil Bldg, Noida",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 24-Dec-14 is Functional and remark is Functional.The number of charging points is 1 and avialable charging time 10:00 to 06:00 pm.There is voltage between L & N is 220v,voltage between L & E is 220v and volatge between N & E is 1v.There is no RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.313489,
            28.588699
          ],
          "type": "Point"
        },
        "id": 41
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Lalit Agency, Futa Road",
          "contact": "Mr Lalit Kumar",
          "address": "Plot No.550 Gali No D-18 Chhattarpur Pahari 100 Futa Road New Delhi",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 24-Dec-14 is Functional and remark is Functional,Portable charging cable required.The number of charging points is 1 and avialable charging time is 10:00 to 07:30 pm.There is voltage between L & N is 240v,voltage between L & E is 240v and volatge between N & E is 0v.There is no RCD cable working,charging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.083685,
            28.634828
          ],
          "type": "Point"
        },
        "id": 42
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Indraprastha Automobiles, WAZIRPUR",
          "contact": "",
          "address": "B 72/4 , WAZIRPUR INDUSTRIAL AREA , DELHI, B 72/4, WAZIRPUR, Delhi 110052",
          "notes": "There are 1 15A socket charging time is 10:00 to 06:00 pm.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.172103,
            28.704548
          ],
          "type": "Point"
        },
        "id": 43
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra Towers, Bhikaji Cama Place",
          "contact": "Mr Vikas Kumar",
          "address": "2A Bhikaji Cama Place New Delhi-66",
          "notes": "There are 1 15A socket and number of WMC is 1.The status of 24-Dec-14 is Functional and remark is Functional.The number of cahrging points is 1 and avialable charging time is NA.There is voltage between L & N is 236v,voltage between L & E is 236v and volatge between N & E is 2v.There is no RCD cable working,chrging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.187718,
            28.567313
          ],
          "type": "Point"
        },
        "id": 44
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Koncept Mathura Road, Saidabad",
          "contact": "Mr Amarjeet",
          "address": "A-40 Mohan Co operative estate, New Delhi",
          "notes": "There are 1 15A socket and number of WMC is 0.The status of 24-Dec-14 is Functional and remark is Functional.The number of cahrging points is 1 and avialable charging time is 09:00 am to 07:30 pm.There is voltage between L & N is 230v,voltage between L & E is 230v and volatge between N & E is 2v.There is no RCD cable working,chrging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.292887,
            28.521451
          ],
          "type": "Point"
        },
        "id": 45
      },
      {
        "type": "Feature",
        "properties": {
          "name": "TATA POWER Rohini",
          "contact": "Mr R D Prasad",
          "address": "66KV Grid Sub-station Sector-3 Rohini, near NDPL Shakti Deep Building, Delhi-85",
          "notes": "There are 0 15A socket and number of WMC is 1.The status of 24-Dec-14 is Functional and remark is Functional.The number of cahrging points is 1 and avialable charging time is any time.There is voltage between L & N is 240v,voltage between L & E is 240v and volatge between N & E is 3v.There is no RCD cable working,chrging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.103924,
            28.699215
          ],
          "type": "Point"
        },
        "id": 46
      },
      {
        "type": "Feature",
        "properties": {
          "name": "TATA POWER Pitampura",
          "contact": "Mr Anil Verma ",
          "address": "66KV Grid Sub-Station Pitampura-1, Outer Ring Road, Near Madhuban Chowk,  Pitampura, New Delhi-110088",
          "notes": "There are 0 15A socket and number of WMC is 1.The status of 24-Dec-14 is Functional and remark is Functional.The number of cahrging points is 1 and avialable charging time is any time.There is voltage between L & N is 220v,voltage between L & E is 220v and volatge between N & E is 3v.There is no RCD cable working,chrging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.132499,
            28.704777
          ],
          "type": "Point"
        },
        "id": 47
      },
      {
        "type": "Feature",
        "properties": {
          "name": "TATA POWER, ROHINI",
          "contact": "Mr Amir",
          "address": "TATA POWER DELHI DISTRIBUTION LIMITED ,NEAR SACHDEVA PUBLIC SCHOOL, SECTOR-15, ROHINI,DELHI -110089 ",
          "notes": "There are 0 15A socket and number of WMC is 1.The status of 24-Dec-14 is Functional and remark is Functional.The number of cahrging points is 1 and avialable charging time is any time.There is voltage between L & N is 230v,voltage between L & E is 230v and volatge between N & E is 3v.There is no RCD cable working,chrging point status is working and parking space is avialable.Charging point working is feasible.Number of ports installed is 1.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            77.128878,
            28.724575
          ],
          "type": "Point"
        },
        "id": 48
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Magadi Main Road Charging Station",
          "contact": "Mr MURULIDHAR",
          "address": "120 Bharathnagar 2nd stage, Prakruthi Nagar, vishwaneedam Post, Bangalore - 560091, ​Near CII IQ office. Very near to Magadi main road NICE intersection",
          "notes": "The charging station is available 7 days a week between 7.00AM TO 10.00PM. There is a 15 amp socket that can be used for all electric vehicles. Please call before going. Lots of open places to walk around, A bakery near by. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.47812,
            12.97537
          ],
          "type": "Point"
        },
        "id": 49
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Lalbagh station - Sai Shagun Jewels",
          "contact": "Mr Tejus",
          "address": "# 39 Middle School Road V.V Puram, Bangalore, Karnataka 560004, India",
          "notes": "The charging station is available 7 days a week between 9.00AM TO 9.00PM. There is a 15 amp socket that can be used for all electric vehicles.             Please call before going. Lalbagh is near by.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.57929,
            12.94976
          ],
          "type": "Point"
        },
        "id": 50
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mountain View Charging Station (Khandala Pargaon)",
          "contact": "Mr. Sachin",
          "address": "@ Hotel Vishram near Vedant Cranes factory, Wai Taluka, Maharashtra",
          "notes": "The charging station is available all days a week for 24 hours. There are 2 charge point (15 Amp) sockets for all electric vehicles. Sachin makes good snacks like Poha, Omelette etc. in his shop.  Also there are nice trails around the shop for walks amidst spectacular Mountain views",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.021813,
            18.030283
          ],
          "type": "Point"
        },
        "id": 51
      },
      {
        "type": "Feature",
        "properties": {
          "name": "MAPRO Food Park, Wai - Charging Station",
          "contact": "Mr. Vijay Bhilare",
          "address": "Wai Surur Road 412803, Wai, Maharashtra 412803, India",
          "notes": "The charging station is available all days a week from 9 AM to 8 PM. There are 2 charge point (15 Amp) sockets for all electric vehicles. MAPRO Cafetaria serves good food and a fun food park to explore and enjoy the serene atmosphere.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.93631,
            17.94991
          ],
          "type": "Point"
        },
        "id": 52
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shirur Station - Om Sai Traders",
          "contact": "Mr. Sachin Kasare",
          "address": "Nagar-Pune Road Belwadi Phata, Maharashtra 413702, India",
          "notes": "The charging station is available all days a week from 9 AM to 6:30 PM. There is 1 charge point (15 Amp) socket for all electric vehicles. Nearby restaurants available.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.40588,
            18.8467
          ],
          "type": "Point"
        },
        "id": 53
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ahmednagar Charging Station - L&T House",
          "contact": "Mr. Sudarshan Gophane",
          "address": "L&T Housing Complex, near Daule Hospital, Savedi, Ahmednagar, Maharashtra 414003, India",
          "notes": "Community charging station available for all EVs from 9 AM to 7 PM.  One 15 Amp socket available.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.729408,
            19.122179
          ],
          "type": "Point"
        },
        "id": 54
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ahmednagar Charging Station - MIDC",
          "contact": "Mr. Anil Pandit",
          "address": "Microtek Industries, MIDC, Ahmednagar, Maharashtra 414003, India",
          "notes": "Community charging station available for all EVs from 9 AM to 7 PM.  One 15 Amp socket available.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.69406,
            19.15541
          ],
          "type": "Point"
        },
        "id": 55
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shirdi #1, Hotel Govind Park",
          "contact": "Mr. Pradip",
          "address": "Hotel Ganpati Palace Rd, Shirdi, Maharashtra 423109, India",
          "notes": "Community charging station available for all EVs from 9 AM to 7 PM.  One 15 Amp socket available. Better take a 15 meter extension chord.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.47891,
            19.77088
          ],
          "type": "Point"
        },
        "id": 56
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shirdi #2, Hotel St Laurn Meditation Spa & Resort",
          "contact": "Manager",
          "address": "St Laurn Meditation Spa & Resort, Rui- Shiv Road, Shirdi, Maharashtra 423109, India",
          "notes": "Community charging station available for all EVs from 9 AM to 7 PM.  One 15 Amp socket available in the basement.",
          "isValidated": "0",
          
        },
        "geometry": {
          "coordinates": [
            74.48058,
            19.77236
          ],
          "type": "Point"
        },
        "id": 57
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pavana Lake Charging Station - Tikona Peth",
          "contact": "Mr Kashinath",
          "address": "Near the Mandir, Tikona-Peth Village, Maharashtra, India",
          "notes": "The charging station is available all days a week from 9 AM to 7 PM. There is 1 charge point (15 Amp) sockets for all electric vehicles. ​Stunning views of Pavana lake, just 10 min walk away.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.50756,
            18.64284
          ],
          "type": "Point"
        },
        "id": 58
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hotel Vegas",
          "contact": "Reception",
          "address": "Pune - Bengaluru Hwy, Shindewadi, Maharashtra 412801",
          "notes": "Pune Community member charged once.  It is better to have something at the restaurant",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.953223,
            18.171562
          ],
          "type": "Point"
        },
        "id": 59
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Jaipur GoEv GoPro Community Charging",
          "contact": "Bhavi Jain",
          "address": "36, Shopping Center, Janta Colony, Jaipur, India ",
          "notes": "The charging station is available 24 hours a day and supports Mahindra e2o, and all other EVs but you need to have to bring your own charger",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.834532,
            26.905430
          ],
          "type": "Point"
        },
        "id": 60
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Noida Community Charging - RR HOME",
          "contact": "Ranjan Ray",
          "address": "Flat no 1027, Sector-29, Noida - 201 301",
          "notes": "The charging station is available between 8.00 a.m. till 10.00 p.m and supports Mahindra e2o, and all other EVs. Please send a request msg on the number provided before coming. Please tell the guard that you want to charge your electric vehicle at flat 1027's garage and he will let you in. You will be asked to fill in your details in the register.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.336336,
            28.571706
          ],
          "type": "Point"
        },
        "id": 61
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shirdi#3 - Vasavi Bhavan Hotel",
          "contact": "Reception",
          "address": "# 5 / 37/ 2 Neetha Lodge Road, 500 mts from Sai Baba Temple, Shirdi",
          "notes": "The charging station is available between 8.00 a.m. till 10.00 p.m and supports all electric vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.480351,
            19.768041
          ],
          "type": "Point"
        },
        "id": 62
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Richmond Park - Sita Bhateja Speciality Hospital",
          "contact": "Reception",
          "address": "8 & 9, O’Shaughnessy Road, Langford Gardens, Bangalore, Karnataka 560025, India",
          "notes": "The charging station is available 24 hours and supports all electric vehicles",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.599745,
            12.963238
          ],
          "type": "Point"
        },
        "id": 63
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Noida#2 - Prajna India",
          "contact": "R. Tandan",
          "address": " B 130, Sector 63, Noida",
          "notes": "The charging station is available between 9 am to 6 pm on working days and supports all electric vehicles. Please sms/WhatsApp your name and car number and call before coming.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.380404,
            28.616933
          ],
          "type": "Point"
        },
        "id": 64
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Therani Towers, Sahakara Nagar",
          "contact": "Mr Muni",
          "address": "553, F block (IOB Building), Sahakaranagar , Bangalore ",
          "notes": "The charging station is available between 8am to 8pm and supports Mahindra electric cars. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.578483,
            13.066148
          ],
          "type": "Point"
        },
        "id": 65
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Lionel Daniel, Thrissur",
          "contact": "Mr Lionel Daniel",
          "address": "Mission Quarters, Thrissur, Kerala",
          "notes": "The charging station is available between 10am to 6pm and supports Mahindra electric cars.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.2206943,
            10.5165562
          ],
          "type": "Point"
        },
        "id": 66
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Despat Charging Station, Chennai",
          "contact": "Mr Syed Mubasheer",
          "address": "2/1, Veerapandi Nagar, 1st Street, Choolaimedu, Chennai, Tamil Nadu 600094",
          "notes": "The charging station is available between 10am to 6pm and supports all electric vehicles.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.216421,
            13.063491
          ],
          "type": "Point"
        },
        "id": 67
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Lonavala Charging Station",
          "contact": "Mr Amol",
          "address": "Trinetra Petrol Pump, Mumbai-Pune Express Highway, near Lonavala Toll Plaza, Lonavala, Pune District",
          "notes": "The charging station is available 24 hours and supports all electric vehicles. There are two 15 Amp sockets. The Pune-Mumbai EV community uses this one heavily!",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.429476,
            18.760835
          ],
          "type": "Point"
        },
        "id": 68
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Chinchwad Community Charging Station",
          "contact": "Mr Puneet",
          "address": "Hegde Accessories and Components, 15B /8 D 1 block MIDC Chinchwad, Pune 411019",
          "notes": "The charging station is Solar powered and is available 8 AM to 8 PM and supports all electric vehicles. There is one 15 Amp socket. Landmarks near Garware Wall Ropes and Kinetic",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.790746,
            18.654373
          ],
          "type": "Point"
        },
        "id": 69
      },
      {
        "type": "Feature",
        "properties": {
          "name": "GreenLantern-Charging Station",
          "contact": "Mr Ashish",
          "address": "No.4, 1st B Main, Atmananda Colony, Sultanpalya, R.T Nagar extn, Bangalore",
          "notes": "The charging station has a 15Amp 3Pin socket.  This charge point is for Emergency or Top Up needs only. Avoid normal charging.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.602789,
            13.026418
          ],
          "type": "Point"
        },
        "id": 70
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Jedimetla",
          "contact": "Mr.Vamshi",
          "address": "Survey no 73,Medchal,NH-07,opp Suchitra Circle,Jedimetla, Secundrabad",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.4882,
            17.5297
          ],
          "type": "Point"
        },
        "id": 71
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Rastrapati Road",
          "contact": "Mr.Surya Prakasham",
          "address": "8571,Rastrapati Road, Ranigunj Secundrabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.4883,
            17.4287
          ],
          "type": "Point"
        },
        "id": 72
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Malakpet",
          "contact": "",
          "address": "#16-10-35/2,Besides Bus Stop,Nalagonda X Roads,Malakpet, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.493,
            17.3773
          ],
          "type": "Point"
        },
        "id": 73
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Kukatpally",
          "contact": "Mr.Vijay",
          "address": "DNO- 172/2,Nr.Manjeera Reservior,Hydernagar,Kukatpally, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.3776,
            17.498
          ],
          "type": "Point"
        },
        "id": 74
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Vijaywada Highway",
          "contact": "",
          "address": "Plot No- 9-12,Block-42,NH-09,Autonagar,Vijaywada Highway, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.5776,
            17.3399
          ],
          "type": "Point"
        },
        "id": 75
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Punjagutta",
          "contact": "Mr.Rajan",
          "address": "8-2-248/1/7/13, Nagarjuna Circle,Punjagutta, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.4493,
            17.4261
          ],
          "type": "Point"
        },
        "id": 76
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, Malakpet",
          "contact": "Sriram",
          "address": "Plot No 16-2-705/10/C, Super Bazaar Road, Malakpet, Opposite Pranathi Junior College, Beside Municipal Market, Andhra Bank Colony, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.5045,
            17.3731
          ],
          "type": "Point"
        },
        "id": 77
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, Hightech City",
          "contact": "Mustaq Hussain",
          "address": "Kothaguda X Roads Old Bombay Highway Near Hightech City,Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.3663,
            17.4583
          ],
          "type": "Point"
        },
        "id": 78
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Mehdipatnam",
          "contact": "",
          "address": "Pillar No-82,Attaput,Mehdipatnam, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.4291,
            17.3831
          ],
          "type": "Point"
        },
        "id": 79
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Automotive Manufacturer Pvt Ltd, Uppal",
          "contact": "",
          "address": "Plot No- B-3,IDA Uppal, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.664,
            17.3982
          ],
          "type": "Point"
        },
        "id": 80
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shree Automotive, Topsia Road",
          "contact": "",
          "address": "86 A, Topsia Road,Haute Street Building, Kolkata ",
          "notes": "Charging Infra available at the showroom and the same can be made available for charging customer’s vehicles during office hours.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            88.3874356,
            22.5467557
          ],
          "type": "Point"
        },
        "id": 81
      },
      {
        "type": "Feature",
        "properties": {
          "name": "ITL MOTORS, THRISSUR",
          "contact": "",
          "address": "NH- 47, BYE PASS ROAD ELANTHURUTHI,KUTTANALLOOR.P.O, THRISSUR ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.253,
            10.4831
          ],
          "type": "Point"
        },
        "id": 82
      },
      {
        "type": "Feature",
        "properties": {
          "name": "TVS & SONS LTD, THRISSUR",
          "contact": "",
          "address": "Neeramankara, Kaimanam P.O., THRISSUR ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.9715,
            8.477
          ],
          "type": "Point"
        },
        "id": 83
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, Himayat Nagar",
          "contact": "Rajesh Varma",
          "address": "Hyderguda Road, Himayat Nagar, Opposite Old Mla Quaters, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.482554,
            17.398448
          ],
          "type": "Point"
        },
        "id": 84
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, Hitech City",
          "contact": "Krishna Mohan",
          "address": "Plot No 28 & 29, Opp. N Convention, Hitech City Main Road, Hitech City, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.383105,
            17.457300
          ],
          "type": "Point"
        },
        "id": 85
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, LB nagar",
          "contact": "Shiva prasad",
          "address": "Sagar Ring road,Alekhya towerd opposite, LB nagar, Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.547696,
            17.344261
          ],
          "type": "Point"
        },
        "id": 86
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VVC Motors Pvt Ltd, Kompally",
          "contact": "Pavan Goud",
          "address": "Kompally, Rangareddy, Opposite John Deer Tractor Showroom , Hyderabad ",
          "notes": "The charging station has a 15Amp 3Pin socket or a e2o Wall Mounted Unit.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.488871,
            17.534583
          ],
          "type": "Point"
        },
        "id": 87
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sparsh, Ghoshpara",
          "contact": "Manzoor(Store Manager)",
          "address": "161/21,Kaikhali, Ghoshpara, Kolkata ",
          "notes": "The charging station has a 15 amp socket.  Available from 11am to 8pm",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            88.43627,
            22.63426
          ],
          "type": "Point"
        },
        "id": 88
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mohan Motors Pvt Ltd, SALT LAKE CITY",
          "contact": "D.Sen",
          "address": "AMBIENT, BLOCK-AQ, SECTOR-V, NEAR IIPM, SALT LAKE CITY, Kolkata ",
          "notes": " Charging Infra available and as per discussion with the Sales Manager, he confirmed that the charging infra can be made available for charging customer’s vehicles during office hours.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            88.440400,
            22.579679
          ],
          "type": "Point"
        },
        "id": 89
      },
      {
        "type": "Feature",
        "properties": {
          "name": "K S Motors, M.I Road",
          "contact": "Mr. Anish Johari/ Mr.Gajendra Singh",
          "address": "K.S. Motors Pvt. Ltd., M.I. Road, Jaipur, ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.813713,
            26.917052
          ],
          "type": "Point"
        },
        "id": 90
      },
      {
        "type": "Feature",
        "properties": {
          "name": "K S Motors, National Motor Building",
          "contact": "Mr. Anish Johari/ Mr.Gajendra Singh",
          "address": "K.S. Motors Pvt. Ltd, PDI Center  National Motor Building , Jaipur, ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.787460,
            26.913423
          ],
          "type": "Point"
        },
        "id": 91
      },
      {
        "type": "Feature",
        "properties": {
          "name": "K S Motors, Jhotwara Industrial Area",
          "contact": "Mr. Subhash Jain",
          "address": "D-59, Gujarat Ambuja, Complex, Anand Circle, Niwaru Road, Jhotwara Industrial Area, Jaipur, ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.752978,
            26.950263
          ],
          "type": "Point"
        },
        "id": 92
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Auto World, Pratap Nagar",
          "contact": "Mr.Anupam Sakla",
          "address": "B-1, Sector-5, Near Pratap Plaza, Pratap Nagar, Tonk Road, Jaipur, Shahpura ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.810992,
            26.799589
          ],
          "type": "Point"
        },
        "id": 93
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Auto World, Sitapura Industrial Area",
          "contact": "Pinakin Dixit",
          "address": "Sitapura Industrial Area, Jaipur, Shahpura ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.829613,
            26.783182
          ],
          "type": "Point"
        },
        "id": 94
      },
      {
        "type": "Feature",
        "properties": {
          "name": "MORANI AUTOMOBILES PVT LTD, Sanganer Road",
          "contact": "Mr. Rajkumar Soni",
          "address": "55-57, Vishwa Nagar, Near Sanganer Road, Near Gujar Ki thadi, Jaipur ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.772421,
            26.832693
          ],
          "type": "Point"
        },
        "id": 95
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mahindra Towers, Durgapura",
          "contact": "",
          "address": "Mahindra Towers, Durgapura, Jaipur ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.792922,
            26.850096
          ],
          "type": "Point"
        },
        "id": 96
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Auto World, Sitapura Industrial Area",
          "contact": "",
          "address": "Near Poddar Pigment workshop, Sitapura Industrial Area, Jaipur ",
          "notes": "The charging station has a e2o Wall Mounted Unit.  Available from 10:00 to 20:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.830244,
            26.781312
          ],
          "type": "Point"
        },
        "id": 97
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Param Automobiles, Gandhinagar",
          "contact": "",
          "address": "1001, OPP DGP office,  Sector 28, Gandhinagar ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 9:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.652366,
            23.256196
          ],
          "type": "Point"
        },
        "id": 98
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Speedlinks, Industrial Area",
          "contact": "",
          "address": "Luxmi Switchgears Pvt Ltd, Plot No-82, Industrial Area,Phase-I, Chandigarh ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.842492,
            30.665632
          ],
          "type": "Point"
        },
        "id": 99
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Swami Automobile, Chandigarh Ambala Highway",
          "contact": "",
          "address": "Village Singpura, Chandigarh Ambala Highway, Tehsil Derabasi, Chandigarh ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.805805,
            30.710865
          ],
          "type": "Point"
        },
        "id": 100
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Swami Automobile, Industrial Area",
          "contact": "",
          "address": "Plot No- 33, Phase- I,Industrial Area, Chandigarh ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.8111,
            30.7021
          ],
          "type": "Point"
        },
        "id": 101
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Goel Motor Pvt Ltd, Industrial Area",
          "contact": "",
          "address": "E 179, Industrial Area, Phase-VII, Chandigarh ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.708575,
            30.73401
          ],
          "type": "Point"
        },
        "id": 102
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Goel Motor Pvt Ltd, Industrial Area",
          "contact": "",
          "address": "B-55,C-6,Industrial Area, Opp.Vedika Milk Plant, Chandigarh ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.7081,
            30.7341
          ],
          "type": "Point"
        },
        "id": 103
      },
      {
        "type": "Feature",
        "properties": {
          "name": "ITL MOTORS, CALICUT",
          "contact": "",
          "address": "12/43-C FEROKE-CHUNGAM FEROKE, CALICUT  ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.8493,
            11.1811
          ],
          "type": "Point"
        },
        "id": 104
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Punjab Automobile, ISCON Mall Flyover",
          "contact": "",
          "address": " Opp.ISCON Mall Flyover ,S.G Highway, Ahmedabad ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 9:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.5087,
            23.0311
          ],
          "type": "Point"
        },
        "id": 105
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Punjab Automobile, Sola",
          "contact": "",
          "address": "Nr Sundaram Arcade Complex, sukan Mall cross road, Science City Road, Sola, Ahmedabad ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 9:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.5121,
            23.0679
          ],
          "type": "Point"
        },
        "id": 106
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Punjab Automobile, New High Court",
          "contact": "",
          "address": "Nr.New High Court, Sola Flyover Bridge,S.G.Highway, Ahmedabad ",
          "notes": "The charging station has a e2o Wall Mounted Unit and 15 Amp socket.  Available from 9:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.5131,
            23.0408
          ],
          "type": "Point"
        },
        "id": 107
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Tatibandh, Raipur",
          "contact": "",
          "address": "1/688 Tatibandh, Raipur ",
          "notes": "The charging station has a e2o Wall Mounted Unit combatible to Mahindra e2o.  Available from 10:00 to 18:00 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            81.566316,
            21.258810
          ],
          "type": "Point"
        },
        "id": 108
      },
      {
        "type": "Feature",
        "properties": {
          "name": "ROHIT SNACKS CORNER, Karjat-Murbad Rd, Umroli",
          "contact": "",
          "address": "Karjat-Murbad Rd., Karjat ",
          "notes": "The charging station has a 15 Amp socket 2 charge all EVs.  Available 24 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.328681,
            18.961407
          ],
          "type": "Point"
        },
        "id": 109
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shri Samarth Petrol Pump, Nagar Road (Solar Powered)",
          "contact": "",
          "address": "On Ahmednagar-Pune Road after Shirur",
          "notes": "The charging station has 3 15 Amp sockets and all are Solar Powered.  Available 24 Hrs",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.487896,
            18.928725
          ],
          "type": "Point"
        },
        "id": 110
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sai Krupa Hotel",
          "contact": "",
          "address": "On Ahmednagar-Pune Road after Shirur",
          "notes": "The charging station has a 15 Amp socket.  Available 6 AM to 11 PM",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.54431,
            18.96439
          ],
          "type": "Point"
        },
        "id": 111
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Kiran's Bangalore South Community Charging",
          "contact": "",
          "address": "619, 21st Main Rd, T Block, 4th T Block East, Pattabhirama Nagar, Jayanagara Jaya Nagar, Bengaluru, Karnataka 560041",
          "notes": "The charging station has a 15 Amp socket.  Available 9 AM to 7 PM",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5911703,
            12.9235891
          ],
          "type": "Point"
        },
        "id": 112
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Tork Motors Charging Point",
          "contact": "",
          "address": "Plot no 4/25, sector 10, PCNTDA, Bhosari ",
          "notes": "The charging station has a 15 Amp socket.  Available 9 AM to 9 PM",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.835221,
            18.649042
          ],
          "type": "Point"
        },
        "id": 113
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hotel Sangam, Karad Charge Point",
          "contact": "",
          "address": "Hotel Sangam, NH4, Pune-Bangaluru road , Karad",
          "notes": "The charging station has a 15 Amp socket.  Available 24 hours",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.180434,
            17.273710
          ],
          "type": "Point"
        },
        "id": 114
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Dehradun Community Charge Point",
          "contact": "Raman",
          "address": "Near EC road, Mohini Road, Dehradun",
          "notes": "The charging station has a 15 Amp socket. Station  available at all times. Owners available on phone during day hours.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.05165,
            30.3121
          ],
          "type": "Point"
        },
        "id": 115
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Janakpuri EV charging station",
          "contact": "Bharat Wahi",
          "address": "C3/13, Janakpuri, Opp. C4E Market, New Delhi",
          "notes": "The charging station has a 15 Amp socket compatible to Mahindra e2o. Available 7 am - 9 pm",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.090111,
            28.615372
          ],
          "type": "Point"
        },
        "id": 116
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Bahadurgarh NH10 Charging point",
          "contact": "Bharat Wahi",
          "address": "2227, Bank Road, M.I.E Part B, Bahadurgarh, Haryana",
          "notes": "The charging station has a 15 Amp socket compatible to Mahindra e2o. Available 7 am - 9 pm",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.9482529,
            28.6838052
          ],
          "type": "Point"
        },
        "id": 117
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Santa Cruz West Charge point - PluginIndia Lab",
          "contact": "Raphae Halim",
          "address": "Shop #4, 2nd Hasanabad Lane, Santacruz (West), Willingdon, Santacruz West, Mumbai, Maharashtra 400054, India",
          "notes": "The charging station has a 15 Amp socket compatible to Mahindra e2o and all EVs. Available 11 am - 5 pm",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.8397815,
            19.0796934
          ],
          "type": "Point"
        },
        "id": 118
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Temghar Dam Charge Point (on way to Lavasa)",
          "contact": "",
          "address": "Hotel Prasad, Kharwade on the way Temghar - Lavasa Road.",
          "notes": "The charging station has 2 15 Amp sockets for all EVs. Available 9 a.m. to 7 p.m",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.5822978,
            18.4476001
          ],
          "type": "Point"
        },
        "id": 119
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Kamadhenu 169, Shankaranagara",
          "contact": "K.V Ramesh",
          "address": "#169 kamadhenu , shankaranagara main road , Shankaranagara, BENGALURU , 560096",
          "notes": "The charge point is compatible to Mahindra e2o and Revai. Charging for only for top up and emergency's.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.54362487792969,
            13.016256332397461
          ],
          "type": "Point"
        },
        "id": 120
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Thane Community Charge Point - GreenWhyNot",
          "contact": "Amit",
          "address": "B/22 Gurunanak Society, Thane East, Near Fire Brigade, Daulat Nagar, Thane East, Thane, Maharashtra 400603",
          "notes": "The charging station has a 15 Amp socket compatible to Mahindra e2o and all EVs. Strictly call and go.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.972527,
            19.183008
          ],
          "type": "Point"
        },
        "id": 121
      },
      {
        "type": "Feature",
        "properties": {
          "name": "The Parivar Garden, Asangaon",
          "contact": "Rafik bhai or Aasimbhai",
          "address": "Mumbai-Nashik Highway No. 3, Asangaon (w), Shahapur, Thane 421601",
          "notes": "1 Point. Available 24 hours",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.299626,
            19.439721
          ],
          "type": "Point"
        },
        "id": 122
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Cibo Escape, Asangaon",
          "contact": "Vinod Thakur",
          "address": "Off Mumbai-Nashik Highway, Shahapur, Maharashtra 421601",
          "notes": "2 Points. Available. Use resort - Prior booking. Overnight picnic, camping, riverside stay, EV charging included. Facebook page: facebook.com/Ciboescape",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.347082,
            19.446763
          ],
          "type": "Point"
        },
        "id": 123
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shweta Print Pack Pvt. Ltd, Nashik",
          "contact": "Rahul Naik",
          "address": "Shweta Print Pack Pvt. Ltd. F-104, MIDC-Satpur, Nashik 422007",
          "notes": "4 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.7174845,
            20.0044365
          ],
          "type": "Point"
        },
        "id": 124
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Larsen & Toubro Ltd, Nashik",
          "contact": "",
          "address": "Larsen & Toubro Ltd, H-108,  MIDC AMBAD, NASHIK 10",
          "notes": "4 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.7191163,
            19.946357
          ],
          "type": "Point"
        },
        "id": 125
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Kaizen Quality System",
          "contact": "Ashok Arote",
          "address": "M-116, shop 11, Near Siemens ,behind cham cham food. MIDC Ambad Nashik 422010",
          "notes": "4 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.7352946,
            19.9601999
          ],
          "type": "Point"
        },
        "id": 126
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pooja Castings, Chakan",
          "contact": "Sakhare",
          "address": "Talegaon Chakan Road, Maharashtra 410501, India",
          "notes": "3 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.8283396,
            18.7595634
          ],
          "type": "Point"
        },
        "id": 127
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Malpani Health Club & Resort, Sangamner",
          "contact": "Pavan",
          "address": "Malpani House, I.G.Road, Sangamner, Kasarwadi, Ahmednagar, Maharashtra 422605, India",
          "notes": "3 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.1975557,
            19.5617603
          ],
          "type": "Point"
        },
        "id": 128
      },
      {
        "type": "Feature",
        "properties": {
          "name": "KVK Narayangaon, Narayangaon, Maharashtra 410504, India",
          "contact": "Dhanesh Padwal",
          "address": "Krishi Vignan Kendra, Narayangaon, Maharashtra 410504, India",
          "notes": "2 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.9686725,
            19.0988653
          ],
          "type": "Point"
        },
        "id": 129
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Hotel Super Sriraj, Narayangaon",
          "contact": "Mr Bhujbal",
          "address": "Very Near KVK , Narayangaon, Pune - Nashik Hwy, Pune, Maharashtra 410504, India",
          "notes": "1 Point. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.9704943,
            19.1022587
          ],
          "type": "Point"
        },
        "id": 130
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Rahil Qadir",
          "contact": "Rahil Qadir",
          "address": "27, R3J Residency, 1st Main, 1st Cross, MLA Layout, RT Nagar, Bangalore",
          "notes": "1 Point. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.590737,
            13.017298
          ],
          "type": "Point"
        },
        "id": 131
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Namashree Homoeo",
          "contact": "Naveen",
          "address": "149 3rd C main, 6th cross 9th block Nagarbhavi 2nd stage",
          "notes": "10 AM - 5 PM. 1 Point. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.608982,
            13.035742
          ],
          "type": "Point"
        },
        "id": 132
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mantra Resort",
          "contact": "",
          "address": "Village Kavaudi,  Taluka Bhor, Pune. 412206",
          "notes": "24 hours. 1 Point. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.744589,
            18.242050
          ],
          "type": "Point"
        },
        "id": 133
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Abhishek - Pramathesh Housing Society",
          "contact": "Abhishek",
          "address": "Yashodhan bangalow, plot no:23,Pramathesh society,kothrud,pune-38 (near by mahatma society)",
          "notes": " 7:30 am to 11:30pm. 3 Points. Available to charge all EV's",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.794157,
            18.497127
          ],
          "type": "Point"
        },
        "id": 134
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ferdy",
          "contact": "Christopher Fernandes",
          "address": "P 55 B, Shankar Vihar, Delhi Cantt, New Delhi 110010",
          "notes": "0900 hrs to 1800 hrs. 1 Point. Available to charge all EV's. Opposite Army Welfare Education Society",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.141169,
            28.563222
          ],
          "type": "Point"
        },
        "id": 135
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Gemno EV Charging Station",
          "contact": "Gautam Arunachalam",
          "address": "PD4/5, TNPHC,Kelambakkam road,Melakottaiyur,Chennai,Tamilnadu,India, Pincode-600127",
          "notes": "24 hours. 1 Point. One 15A Charging Point with open parking",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.138389,
            12.836521
          ],
          "type": "Point"
        },
        "id": 136
      },
      {
        "type": "Feature",
        "properties": {
          "name": " Chandra Vatika",
          "contact": "विनायक शर्मा",
          "address": "855, Chandra Vatika, Chandra Parisar, Chandrabani Road, Manjra ",
          "notes": "5 am to 9 pm 1 Point. One 15A",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.990517,
            30.293814
          ],
          "type": "Point"
        },
        "id": 137
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Aaradhyasthan, Ghaziabad",
          "contact": "Anoop Hari",
          "address": "Dev heights plot 71-73 friends enclave shaberi village, Ghaziabad ",
          "notes": "5 am to 9 pm 1 Point. One 15A",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.440982,
            28.617161
          ],
          "type": "Point"
        },
        "id": 138
      },
      {
        "type": "Feature",
        "properties": {
          "name": "e-Galaxy Motors, Chinchwad",
          "contact": "Anoop Hari",
          "address": "Madhur Complex, Shop no 3&4, Sector CDC, Opposite to H P Petrol pump, Near PCMC RTO, Purnanagar Sector CDC, Chinchwad ",
          "notes": "9.30am to 8pm. Two 5A 230VAC plug suitable for charging electric scooter and electric bicycle only.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.812068,
            18.662691
          ],
          "type": "Point"
        },
        "id": 139
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pune Satara Road Charge Point",
          "contact": "Sujit Bhatevara",
          "address": "692/5B 'Suraj', Nandadeep Society, Near Hotel Tiranga, Pune Satara Road, 411037 ",
          "notes": "5 am to 9 pm 1 Point. One 15A",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.858543,
            18.488079
          ],
          "type": "Point"
        },
        "id": 140
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Mass-Tech Controls Private Limited, Mulund",
          "contact": "Office",
          "address": "2/7 Meghal Industrial Estate, Devidayal Road, Mulund West, Mumbai, Maharashtra 400080",
          "notes": "5 am to 9 pm 1 Point. One 15A",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.943477,
            19.175581
          ],
          "type": "Point"
        },
        "id": 141
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Tata Power DC Fast Charging Station, Vikhroli",
          "contact": "Office",
          "address": "SEP-2, B- East Pirojshanagar,, 3, Vikhroli Village Rd, Pirojshanagar, Vikhroli East, Mumbai, Maharashtra 400079",
          "notes": "5 am to 9 pm 1 Point. Type 2 Cable provided for e2o Plus P8. Contact company for other adapters. There is a DC quick charger too for e-Verito and e2o Plus P8",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.926054,
            19.096059
          ],
          "type": "Point"
        },
        "id": 142
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pheonix MarketCity, Kurla",
          "contact": "Office",
          "address": "Pheonix MarketCity, Lal Bahadur Shastri Marg, Kurla West, Kurla, Kamani, Ashok Nagar, Kurla, Mumbai, Maharashtra 400070",
          "notes": "24 hours. Type 2 Cable and IEC cable provided for e2o Plus P8, P6, Classic e2o and e-Verito.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.888975,
            19.086636
          ],
          "type": "Point"
        },
        "id": 143
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Palladium Mall, Parel",
          "contact": "Office",
          "address": "462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013",
          "notes": "24 hours. 1 slow AC chargers. Type 2 Cable and IEC cable provided for e2o Plus P8, P6, Classic e2o and e-Verito.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.824228,
            18.994249
          ],
          "type": "Point"
        },
        "id": 144
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ibis & Novotel Bengaluru Techpark",
          "contact": "Duty Manager of the Hotel",
          "address": "ibis & Novotel Bengaluru Techpark, Opposite RMZ Ecospace Business Park, Marathahalli - Sarjapur Outer Ring Road, Bengaluru – 560103, Karnataka, India",
          "notes": "24 hours. 2 nos 15 Amp sockets",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.683090,
            12.929791
          ],
          "type": "Point"
        },
        "id": 145
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Cakes & Bites electric car charging station Mundhwa",
          "contact": "Duty Manager of the Hotel",
          "address": "No.93/22, B Mundwa, Koregaon Park Road, Magarpatta City, Mundhwa, Pune, Maharashtra 411036",
          "notes": "Charge point compatibility: mahindra e2O, mahindra e2O plus",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.924936,
            18.534267
          ],
          "type": "Point"
        },
        "id": 146
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Swissôtel Kolkata",
          "contact": "Duty Manager of the Hotel",
          "address": "Swissôtel Kolkata, City Centre New Town | Action Area 2 D| Plot No. 11/5 | New Town, Rajarhat | Kolkata -700 157,West Bengal, India",
          "notes": " 2 nos 15 Amp sockets",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            88.4490215,
            22.6226532
          ],
          "type": "Point"
        },
        "id": 147
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Moto Store & Cafe",
          "contact": "Ather Customer Service",
          "address": "38/4, Kensington Rd, Sindhi Colony, Pulikeshi Nagar, Bengaluru - 560042",
          "notes": "The charging station is available 6 days a week between 9:30 AM and  10 PM. Closed on Mondays. There is one Ather Grid Point with a 15 Amp socket.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.6205978393555,
            12.9874000549316
          ],
          "type": "Point"
        },
        "id": 148
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Fab Cafe",
          "contact": "Ather Customer Service",
          "address": "915, Kenchena Halli Rd, Remco Bhel Layout, Kenchenhalli, RR Nagar, Bengaluru - 560098",
          "notes": "The charging station is available days 7 a week between  11 AM and  11 PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5171966552734,
            12.934100151062
          ],
          "type": "Point"
        },
        "id": 149
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Caf Eleven",
          "contact": "Ather Customer Service",
          "address": "284, Outer Ring Rd, Kathriguppe IV Phase, Banashankari 3rd Stage, Banashankari, Bengaluru-560070",
          "notes": "The charging station is available days 7 a week between  11 AM and  11 PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5550003051758,
            12.9231996536255
          ],
          "type": "Point"
        },
        "id": 150
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Royal Airavatha Residency",
          "contact": "Ather Customer Service",
          "address": "749/1, Airavatha Building, Kengeri, Bengaluru - 560059",
          "notes": "The charging station is available 7 days a week, 24 hours a day. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.4954986572266,
            12.9223003387451
          ],
          "type": "Point"
        },
        "id": 151
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Chapter one",
          "contact": "Ather Customer Service",
          "address": "KGE Layout, Sanjaynagar, Bengaluru - 560054",
          "notes": "The charging station is available 7 days a week between  12 PM and 12 AM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5697021484375,
            13.0322999954224
          ],
          "type": "Point"
        },
        "id": 152
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Patel's Inn",
          "contact": "Ather Customer Service",
          "address": "# 1, 15th Cross,2nd Block, Govindaraj Garden, R.T Nagar, Bengaluru - 560032",
          "notes": "The charging station is available days a week between  AM and  PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5979841,
            13.0209071
          ],
          "type": "Point"
        },
        "id": 153
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sunny Side Bistro",
          "contact": "Ather Customer Service",
          "address": "98/5, Davis Road, Cooke Town, Bengaluru - 560084",
          "notes": "The charging station is available 7 days a week between 8 AM and 9:30 PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.6234970092773,
            13.0017995834351
          ],
          "type": "Point"
        },
        "id": 154
      },
      {
        "type": "Feature",
        "properties": {
          "name": "6000 Miles to Isle of Man",
          "contact": "Ather Customer Service",
          "address": "No 2, Kasturba Road, Bengaluru - 560001 ",
          "notes": "The charging station is available 7 days a week between 11 AM and 8:30 PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5981979370117,
            12.975700378418
          ],
          "type": "Point"
        },
        "id": 155
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Herbs & Spices",
          "contact": "Ather Customer Service",
          "address": "154, Whitefield Main Road, Opp Vijaya Bank, Whitefield, Bengaluru - 560066",
          "notes": "The charging station is available 7 days a week between 12 PM and 11:30 PM. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.7502975463867,
            12.9682998657227
          ],
          "type": "Point"
        },
        "id": 156
      },
      {
        "type": "Feature",
        "properties": {
          "name": "International Tech Park, Bangalore",
          "contact": "Ather Customer Service",
          "address": "Whitefield Road, Pattandur Agrahara, Whitefield, Bengaluru - 560066",
          "notes": "The charging stations are available 7 days a week, 24 hours a day. It is a tech park with restricted access to employees and visitors. There are two Ather Grid Points with 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.7387008666992,
            12.9854001998901
          ],
          "type": "Point"
        },
        "id": 157
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Park Square Mall",
          "contact": "Ather Customer Service",
          "address": "40, ITPL Main Rd, Pattandur Agrahara, Bengaluru - 560066",
          "notes": "The charging stations are available 7 days a week between 9 AM and 12 PM. There are two Ather Grid Points with 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.7363967895508,
            12.9872999191284
          ],
          "type": "Point"
        },
        "id": 158
      },
      {
        "type": "Feature",
        "properties": {
          "name": " Ather Space",
          "contact": "Ather Customer Service",
          "address": "53, 3rd main, 100 Feet Road, Defence Colony, Indira Nagar, Bengaluru - 560038",
          "notes": "The charging stations are available 7 days a week between 10 AM and 8 PM. There are three Ather Grid Points with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.6411972045898,
            12.9756002426147
          ],
          "type": "Point"
        },
        "id": 159
      },
      {
        "type": "Feature",
        "properties": {
          "name": " IBC Knowledge Park",
          "contact": "Ather Customer Service",
          "address": "Bhavani Nagar, Suddagunte Palya, Bengaluru - 560029",
          "notes": "The charging station is available 7 days a week, 24 hours a day. It is a tech park with restricted access to employees and visitors. There is one Ather Grid Point with a 15 Amp socket",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.603640,
            12.932469
          ],
          "type": "Point"
        },
        "id": 160
      },
      {
        "type": "Feature",
        "properties": {
          "name": " Hotel Accord, Mumbai",
          "contact": "Ashish Gupta",
          "address": "32 J Nehru Road, Santacruz East, Mumbai 400036. Near santacruz station.",
          "notes": "2 15 Amp sockets are available 7 days a week, 24 hours a day. This is a hotel, staying guests preferred or incases of emergency. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.841578,
            19.0811581
          ],
          "type": "Point"
        },
        "id": 161
      },
      {
        "type": "Feature",
        "properties": {
          "name": "JP Nagar 8th Phase",
          "contact": "Pankaj Rawat",
          "address": "Arya Hamsa Apartment, 3rd Black Basement Parking No. 3G 107, 80 Feet Road, JP Nagar Phase 8, Bangalore 560083 ",
          "notes": "1 15 Amp socket is available from 6:00 AM to 9:00 PM. Please call before coming. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.5727623,
            12.860071
          ],
          "type": "Point"
        },
        "id": 162
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SS EV CHARGING POINT",
          "contact": "Waseem",
          "address": "Khushaiguda, Hyderabad, Telangana, India ",
          "notes": "1 15 Amp socket is available. Please call before coming. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.5698754,
            17.4796466
          ],
          "type": "Point"
        },
        "id": 163
      },
      {
        "type": "Feature",
        "properties": {
          "name": "BP Charging Station",
          "contact": "Hitender Yadav",
          "address": "Braham Garden, behind FunNFood Village, Kapashera, New Delhi-37 ",
          "notes": "Five - 15 Amp sockets are available 7 days a week, 24 hours a day. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.0741539,
            28.5151796
          ],
          "type": "Point"
        },
        "id": 164
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Showroom, Verna",
          "contact": "",
          "address": "NH-17, Near Birla Cross Junction, Verna, Goa",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.9456645,
            15.3680738
          ],
          "type": "Point"
        },
        "id": 165
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Showroom, Sangolda",
          "contact": "",
          "address": "BELL VISTA, SANGOLDA, Chogm Raod, Near Paper Boat, Porvorim, Sangolda, SANGOLDA, Goa 403511",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.8098332,
            15.5432403
          ],
          "type": "Point"
        },
        "id": 166
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Showroom, Margoa",
          "contact": "",
          "address": "Shop No. 35 – 42, Cross Roads Avenue, Near Arlem Junction, Fatorda, Alpha Colony, Margao, Goa 403602",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.9736684,
            15.2961973
          ],
          "type": "Point"
        },
        "id": 167
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Service Center, Verna",
          "contact": "",
          "address": "Verna Industrial Estate, Verna, Goa 403722",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.947858,
            15.368170
          ],
          "type": "Point"
        },
        "id": 168
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Service Center, Plerne",
          "contact": "",
          "address": "Plot no 92/93/94, Pilerne Industreal Estate, Plerne, Marra, Goa 403511",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.796364,
            15.524002
          ],
          "type": "Point"
        },
        "id": 169
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Muktar Automobiles Service Center, Churchorem",
          "contact": "",
          "address": "Plot No 128, phase III, Kakoda Industrial Estate, Churchorem, Goa 403706., Churchorem, Goa, 403706",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            74.125589,
            15.238668
          ],
          "type": "Point"
        },
        "id": 170
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Aditya Motors, Cuttack",
          "contact": "",
          "address": "NH- 5, Bamphakuda, Phulnakhara, Police Colony, Madhu Patna Colony, Cuttack, Odisha 753013",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            85.898100,
            20.449925
          ],
          "type": "Point"
        },
        "id": 171
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Aditya Motors, Puri",
          "contact": "",
          "address": "Plot No -64, Near Pnb Bank, Sai Mandap, Atharnalla, Po-Gopinathpurdist-Puripin-7, Nilachakra Nagar, Puri, Odisha 752002",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            85.833122,
            19.822912
          ],
          "type": "Point"
        },
        "id": 172
      },
      {
        "type": "Feature",
        "properties": {
          "name": "SCHANGALAYA MOTORS Showroom, Puducherry",
          "contact": "",
          "address": "PRESHITHA COMPLEX, 116 VINLLIANUR MAIN ROAD, REDDIYARPALAYAM, Reddiarpalayam, REDDIYARPALAYAN_SR, Puducherry 605010",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            79.797118,
            11.931110
          ],
          "type": "Point"
        },
        "id": 173
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Schangalaya Motors Service Station, Puducherry",
          "contact": "",
          "address": "Pillayarkuppam, Puducherry 607402",
          "notes": "15 Amp sockets are available 6 days a week, during business hours. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            79.781795,
            11.814464
          ],
          "type": "Point"
        },
        "id": 174
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unnati Motors, Viman Nagar, Pune",
          "contact": "Nilesh Peshkar",
          "address": "City Space, opp Inorbit Mall, Viman Nagar, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.921428,
            18.562224
          ],
          "type": "Point"
        },
        "id": 175
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unnati Motors Service Station, Wagholi, Pune",
          "contact": "Nilesh Peshkar",
          "address": "UBALE NAGAR, NEAR JAIBHAIRAVNATH WAREHOUSE, CHOKHI-DHANI ROAD, WAGHOLI, PUNE, WAGHOLI, Maharashtra 412207",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.962404,
            18.569537
          ],
          "type": "Point"
        },
        "id": 176
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Unnati Motors, Nagpur",
          "contact": "Pradeep Nawghare",
          "address": "Mouza Khairi, Nr Mhks-Bpcl Petrol Pump, Kampthee Road, Nagpur, Mah, Nagpur, Maharashtra 440026",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            79.150656,
            21.207270
          ],
          "type": "Point"
        },
        "id": 177
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Provincial Automobiles, Nagpur",
          "contact": "Niraj Vaidya",
          "address": "G-17/18, Central MIDC, Hingna Rd, Nagpur, Maharashtra 440028",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            79.003399,
            21.141525
          ],
          "type": "Point"
        },
        "id": 178
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Ratnaprbha Motors, Aurangabad ",
          "contact": "Nitin Gaikwad",
          "address": "Ratnaprbha Motors, MIDC Chikalthana, Opp. Wockhardt Research Centre, Aurangabad",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.376573,
            19.878860
          ],
          "type": "Point"
        },
        "id": 179
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Infinity Autolinks Pvt Ltd, Vikhroli ",
          "contact": "",
          "address": "Ground Floor, Jaswanti Landmark, LBS Marg, Vikhroli West, Godrej & Boyce Industry Estate, Vikhroli West, Mumbai, Maharashtra 400079",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.924495,
            19.108499
          ],
          "type": "Point"
        },
        "id": 180
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Jitendra Motors, Nashik ",
          "contact": "",
          "address": "B-188, M I D C Ambad, Patherdi Bridge, Next To Taj Residency, M I D C Ambad, MIDC Ambad, Nashik, Maharashtra 422001",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.755977,
            19.955243
          ],
          "type": "Point"
        },
        "id": 181
      },
      {
        "type": "Feature",
        "properties": {
          "name": "MAHINDRA T V SUNDRAM IYENGAR AND SONS, Chennai",
          "contact": "",
          "address": "107/1, Nelson Manickam Rd, Aminjikarai, Chennai, Tamil Nadu 600029",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.222416,
            13.072010
          ],
          "type": "Point"
        },
        "id": 182
      },
      {
        "type": "Feature",
        "properties": {
          "name": "MAHINDRA T V SUNDRAM IYENGAR AND SONS Service Station, Chennai",
          "contact": "",
          "address": "48/7, Arcot Road, Saligram Behind Virugambakkam police station, Velayutham Colony, Annamalai Colony, Chennai, Tamil Nadu 600093",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.200004,
            13.049327
          ],
          "type": "Point"
        },
        "id": 183
      },
      {
        "type": "Feature",
        "properties": {
          "name": "India Garage, Showroom, Chennai",
          "contact": "",
          "address": "MOUNT ROAD, 184, Anna Salai, Express Estate, Royapettah, Chennai, Tamil Nadu 600006",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.258819,
            13.058379
          ],
          "type": "Point"
        },
        "id": 184
      },
      {
        "type": "Feature",
        "properties": {
          "name": "India Garage, Parking Yard, Chennai",
          "contact": "",
          "address": "Whites Road, opposite to Sathyam theatre, Royapettah, Chennai, Tamil Nadu 600006",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.260389,
            13.057128
          ],
          "type": "Point"
        },
        "id": 185
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Zulaikha motors, Showroom, Chennai",
          "contact": "",
          "address": "No. 398 & 398A, Velachery Tambaram Main Rd, Srinivasa Nagar, Ram Nagar, Velachery, Chennai, Tamil Nadu 600042",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.218312,
            12.970291
          ],
          "type": "Point"
        },
        "id": 186
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Zulaikha motors, Service, Chennai",
          "contact": "",
          "address": "10/8, 3rd Main Road, Below Telephone Exchange Bridge, Ambattur Industrial Estate, Sai Nagar, Ambattur Industrial Estate, Chennai, Tamil Nadu 600058",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.162061,
            13.096644
          ],
          "type": "Point"
        },
        "id": 187
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Narain auto, Lucknow",
          "contact": "",
          "address": "4 SHAHNAJAF ROAD, LUCKNOW, UTTAR PRADESH, Hazratganj, 4, SHAHNAJAF ROAD, Uttar Pradesh 226001",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.943091,
            26.850061
          ],
          "type": "Point"
        },
        "id": 188
      },
      {
        "type": "Feature",
        "properties": {
          "name": "VC Motors, Kanpur",
          "contact": "",
          "address": "84/54-C, GT Rd, Anwerganj Railway Colony, Anwarganj, Darshan Purwa, Kanpur, Uttar Pradesh 208003",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.328665,
            26.457408
          ],
          "type": "Point"
        },
        "id": 189
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Shree Tirupati Motors, Kanpur",
          "contact": "",
          "address": "NH34, Rai Purwa, Kanpur, Uttar Pradesh 208003",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            80.330069,
            26.458562
          ],
          "type": "Point"
        },
        "id": 190
      },
      {
        "type": "Feature",
        "properties": {
          "name": "T V Sundram Iyengar N Sons, Thiruvananthapuram",
          "contact": "",
          "address": "Neeramankara, Kaimanam.P.O, Trivandrum, Neeramankara, Pappanamcode, Thiruvananthapuram, Kerala 695040",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            76.971765,
            8.477235
          ],
          "type": "Point"
        },
        "id": 191
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Koncept, Lajpat Nagar",
          "contact": "",
          "address": "52, Ring Rd, Block H, Lajpat Nagar III, Lajpat Nagar, New Delhi, Delhi 110024",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.239336,
            28.565102
          ],
          "type": "Point"
        },
        "id": 192
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Koncept Workshop, Noida",
          "contact": "",
          "address": "A-54, SEC-2 ,NOIDA , G.B NAGAR ,UP, A Block, Sector 2, A-54, NOIDA, Uttar Pradesh 201301",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.312630,
            28.587022
          ],
          "type": "Point"
        },
        "id": 193
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Synergy, Safdarjung",
          "contact": "",
          "address": "1N, Gali Number 4, Block B 2, Safdarjung Enclave, New Delhi, Delhi 110029",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.189276,
            28.564503
          ],
          "type": "Point"
        },
        "id": 194
      },
      {
        "type": "Feature",
        "properties": {
          "name": "GSP Motors, Gurugram (Gurgaon)",
          "contact": "",
          "address": "Unit 16-16A, Bestech Business Tower, Sohna Road, Sector 48, Tatvam Villas, Dhani, Sector 48, Gurugram, Haryana 122004",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.043040,
            28.405221
          ],
          "type": "Point"
        },
        "id": 195
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sri Durga Mayapuri Workshop, Mayapuri",
          "contact": "",
          "address": "B-84, Mayapuri, Phase –I, New Delhi, Block B, Mayapuri Industrial Area Phase I, Mayapuri, Delhi, 110064",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.123482,
            28.625229
          ],
          "type": "Point"
        },
        "id": 196
      },
      {
        "type": "Feature",
        "properties": {
          "name": "President Motors Showroom, Surat",
          "contact": "",
          "address": "Umiya Nagar Society, Near Shree Chosath, Udhana - Magdalla Rd, Laxmi Nagar, Udhna, Surat, Gujarat 394210",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.831571,
            21.175768
          ],
          "type": "Point"
        },
        "id": 197
      },
      {
        "type": "Feature",
        "properties": {
          "name": "President Motors Workshop, Surat",
          "contact": "",
          "address": "Udhana GIDC, Hari Ichchha Industrial Society, Udhna Udhyog Nagar, Udhna, Surat, Gujarat 394210",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            72.848629,
            21.162569
          ],
          "type": "Point"
        },
        "id": 198
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sireesh Auto, Jakkuru, Bengaluru",
          "contact": "",
          "address": "10/2, JAKKUR MAIN ROAD,OPP TO FLYING SCHOOL, Jakkuru Layout, Byatarayanapura, BYATARAYANAPURA, Bengaluru, Karnataka 560092",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.594566,
            13.073137
          ],
          "type": "Point"
        },
        "id": 199
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sireesh Auto, Rajaji Nagar, Bengaluru",
          "contact": "",
          "address": "# 11/1 west of chord road, Rajaji Nagar 1st block bangalore, Chord Rd, Yeshwanthpur Industrial Suburb, Nagapura, Bengaluru, Karnataka 560010",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.552505,
            13.011894
          ],
          "type": "Point"
        },
        "id": 200
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Anant, Mysore Road, Bengaluru",
          "contact": "",
          "address": "ANANT CARS AUTO PVT LTD, #327/1, 'PARAMDHAN' NEXT TO BHEL, OPP TO INDIAN OIL PETROL BUNK, MYSORE MAIN ROAD BENGALURU - 560026",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.533325,
            12.947826
          ],
          "type": "Point"
        },
        "id": 201
      },
      {
        "type": "Feature",
        "properties": {
          "name": "India Garage, WhiteField Road, Bengaluru",
          "contact": "",
          "address": "Plot No. 2E4, WhiteField Road, 1st Phase, Mahadevapura Post, Bengaluru, Karnataka 560048, India",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.701147,
            12.996388
          ],
          "type": "Point"
        },
        "id": 202
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Somya Vehicles, Indore",
          "contact": "",
          "address": "3-4, Nehru Market, Near Nehru Stadium, A.B M.P, Agra Bombay Rd, Ushaganj, Jaora Compound, Indore, Madhya Pradesh 452001, India",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.879786,
            22.710125
          ],
          "type": "Point"
        },
        "id": 203
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Somya Vehicles Showroom, Indore",
          "contact": "",
          "address": "#8/13, Upper Floor, Babji Nagar, Dewas Naka, AB Road, Indore, Madhya Pradesh 452010, India",
          "notes": "15 Amp sockets are available 6 days a week, during business hours from 9:30 AM to 6:00 PM. ",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            75.900633,
            22.766786
          ],
          "type": "Point"
        },
        "id": 204
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Zeon office",
          "contact": "",
          "address": "167, union mill Rd, opposite Sangeetha theatre, Tirupur 641601",
          "notes": "Two 15 Amp sockets are available 7 days a week from 8.30am to 9pm",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.267431,
            11.102187
          ],
          "type": "Point"
        },
        "id": 205
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Sun Mobility Technology Center, Bengaluru",
          "contact": "",
          "address": "25, 1st cross, 2nd Main road, Behind Graphite Mahadevpura Post, Doddanakundi Industrial Area 2, Phase 1, Doddanekkundi, Bengaluru, Karnataka 560048",
          "notes": "Private Battery Swapping Station only meant for Private use as of now. Will get updated when available for public!",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            77.706759,
            12.977130
          ],
          "type": "Point"
        },
        "id": 206
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Vivek's car charge point",
          "contact": "Vivek",
          "address": "E-103 Patel's Green Front Meherr road, Yapral Secunderabad",
          "notes": "All day when i am there. Call before coming.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            78.5309534,
            17.5080414
          ],
          "type": "Point"
        },
        "id": 207
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Magenta DC Fast Charging 3",
          "contact": "1800 300 29 444 (24x7 tollfree)",
          "address": "D-298, T.T.C. Industrial Area, Turbhe, MIDC Industrial Area, Turbhe, Navi Mumbai, Maharashtra 400705",
          "notes": "24 hour availability. There is a DC fast charger and a 15 Amp socket for slow AC charging too.",
          "isValidated": "1",
          
        },
        "geometry": {
          "coordinates": [
            73.022560,
            19.068773
          ],
          "type": "Point"
        },
        "id": 208
      },
      
    ]
  };

  // add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  // if(feature.isValidated === "1"){
    el.className = 'marker_green';
  // }
  // else{
  //   el.className = 'marker_red';
  // }

  // make a marker for each feature and add to the map
  // new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
  // console.log(feature.geometry.coordinates);
  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.name}</h3><p>${feature.properties['notes']}</p>`
      )
  )
  .addTo(map.current);
}

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

