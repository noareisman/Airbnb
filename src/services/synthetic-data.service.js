import {utilService } from './util.service'
import {stayService } from './stay.service'
// const DB = require('../../data/airbnb.json')
import {userService} from './user.service'

export default {
createStay()
}
createStay()

function createStay(){
    allSyntheticStays=[]
    allSyntheticStays.push(createStaysDBByCity(1,12,'paris'))
    allSyntheticStays.push(createStaysDBByCity(13,24,'newYork'))
    allSyntheticStays.push(createStaysDBByCity(24,36,'barcelona'))
    console.log(allSyntheticStays);
}

function createStaysDBByCity(stayNumStart, stayNunEnd, location) {
    var staysByCity=[]
    for (var i = stayNumStart; i <= stayNunEnd; i++) {
        var allUsers=userService.getUsers();
        var host=allUsers.splice(utilService.getRandomInt(0,allUsers.length))
        var reviewNum=utilService.getRandomInt(3,8)
        var reviewers=createReviewers(reviewNum,allUsers)
        var txt=getTxtByLocation(location)
        var newStay = userService.getEmptyStay()
        newStay.name=txt.title
        newStay.imgUrls=[`'${i}.1, ${i}.2a,${i}.2b, ${i}.2c, ${i}.2d`]
        newStay.price=utilService.getRandomInt(40.00,120.00)
        newStay.summary=txt.summary
        // newStay.description=txt.description//TODO: insert description to flow
        newStay.capacity=utilService.getRandomInt(2,6)
        newStay.favorites=createFavorites(allUsers)
        newStay.amenities=[
        //TODO: change to dynamic
            "TV",
            "Wifi",
            "Air-conditioning",
            "Smoking allowed",
            "Pets allowed",
            "Cooking basics"
          ],
        newStay.host=setStayHost(host)
        newStay.loc = setLocDetails(location)
        newStay.reviews=createFakeReviews(reviewers,location)
        staysByCity.push(newStay)
    }
    return staysByCity
}

function createFavorites(allUsers){
var favorites=[]
    var numOfLikes=utilService.getRandomInt(2,10)
    for (var i=0;i<numOfLikes;i++){
        favorites.push({userId:allUsers[utilService.getRandomInt(0,allUsers.length)]._id})
    }
    return favorites
}

function createReviewers(num,users){
    for (var i=0;i<num;i++){
        var user=users.splice(utilService.getRandomInt(0,users.length),1)
        reviewers.push(user)
    }
    return reviewers
}

function setStayHost(host){
    host={
        _id:host._id,
        fullname:host.fullname,
        imgUrl:host.imgUrl
    }
    return host
}

function createFakeReviews(reviewers,location) { 
    var reviews = []
    var reviewsByLocation=getReviewsByLocation(location)
    var starRating=getCategoryRating()
    for (var i = 0; i < reviewers.length; i++) {
        var review = {
            id: utilService.makeId(10),
            txt: parisReviews.splice(utilService.getRandomInt(0, reviewsByLocation.length - 1), 1),
            category: starRating[0],
            avgRate:starRating[1],
            by: {
                _id:reviewers[i]._id ,
                fullname: reviewers[i].fullname,
                imgUrl: reviewers[i].imgUrl,
                time : utilService.getRandomInt(1269790501000,Date.now())
            }
        }
        reviews.push(review)
    }
    return reviews
}

function getCategoryRating(){
    var category= {
        Cleanliness: utilService.getRandomInt(1, 6),
        Accuracy: utilService.getRandomInt(1, 6),
        Communication: utilService.getRandomInt(1, 6),
        Location: utilService.getRandomInt(1, 6),
        CheckIn: utilService.getRandomInt(1, 6),
        Accessibility: utilService.getRandomInt(1, 6),
    }
    var avg =calcCategoryAvg(category)
    return [category,avg]
}

function calcCategoryAvg(category){ 
    var sum=0;
    for (var cat in category){
        sum+=category[cat]
    }
    return sum/Object.keys(category).length
}

function setLocDetails(location) {
    switch (location) {
        case 'paris':
            loc = {
                country: 'France',
                countryCode: 'FR',
                address: 'Paris, France',
                lat: 48.87695,
                lng: 2.29513
            }
            return loc
        case 'newYork':
            loc = {
                country: 'United States',
                countryCode: 'US',
                address: 'New York, United States',
                lat: 40.78509,
                lng: -73.96828
            }
            return stay
        case 'barcelona':
            loc = {
                country: 'spain',
                countryCode: 'ES',
                address: 'barcelona, spain',
                lat: 41.34617,
                lng: 2.168365
            }
            return loc
    }
}

function getReviewsByLocation(location){
    switch (location){
        case 'barcelona':
            var barcelonaReviews=[
                'One of the best HomeAway I stayed in. The couch and beds were amazingly comfortable, all the rooms were tastefully decorated, we loved the rooftop, everything was clean. I short, we were sad to leave the and hopefully will be back soon!',
                'Veery nice and clean apartment would always love to come back here: )',
                'Location is great, teraces are so nice, communication was on point. Fanstastic experience.',
                'The house is incredibly organized and designed to ensure all possible comfort',
                'We would like to thank our hosts for their beautiful apartment in Barcelona',
                'I haven’t seen this kind of professionalism for a long time! We were extremely happy with the facility, location and the host',
                'Wonderful apartment, spacious and airy. An abundance of bathrooms and showers, comfy bed and great bedroom bath tub! Smooth virtual key check in',
                'Loverly place really quiet. Everything on the doorstep and a great supermarket next door will definitely use again.',
                'Lovely place very well located! Would love to stay again!',
                'Absolutely wonderful!',
                'Great, quiet and spacious apartment in a beautiful neighborhood!',
                'Such a nice place! Very clean, very stylish and always had a quick reply!',
                'Great location and beautiful , clean apartment. No issues, would recommend.',
                'Great location, lovely apartment.10 out 10.',
                'Fantastic apartment, great location, would highly recommend staying here.',
                'The flat is very nice in a beautiful neighborhood. I would definitely stay in the flat again! The terrace is awesome!',
                'Amazing place in a fabulous location!',
                'erfect for a few nights in the heart of Barcelona. Next time we are back in Spain, would LOVE to stay here again',
                'Wonderful apartment and great hospitality.',
                'Great location and lovely way a spend a few days in an amazing apartment. Some nice drinks avail in the fridge. And a huge grocer downstairs.',
                'Gorgeous apartment in perfect location. Would absolutely recommend!'
        ]
            return barcelonaReviews
        case 'newYork':
            return [

            ]
        case 'paris':
            var parisReviews = [
                'Very nice flat. It\'s located in a lively street full of restaurants and not too far from Paris\' main tourist attractions. I thoroughly enjoyed by stay there.',
                'This was a great place for our family! Some people may not love the stairs, but all the better for enjoying Parisian food.',
                'We really enjoyed our stay at this apartment in Paris. It was perfectly located to what we wanted to see and do. We felt safe coming and going and loved how "in town" we were. It is a bit of a hike up the stairs every time you want to leave or come back but totally doable, especially given the great location.',
                'Nice location, convenient surrounding, perfect communication and friendliness. The house itself seeems a bit old but in good condition. Clean and tidy even with a short notice.',
                'Very good experience. Property matches exactly what was presented: comfortable, equipments, great location, efficient reception and check-out. We strongly recommend.',
                'I adored this place',
                'Very good experience. Property matches exactly what was presented: comfortable, equipments, great location, efficient reception and check-out. We strongly recommend.',
                'Everything went on quickly and it definitely met all expectations.',
                'Nice apartment, suitable for light-luggage travellers.',
                'Idéal pour un week end appartement très bien décoré',
                'The apartment is as lovely as on the pictures. It´s very clean and you\'ll have everything you need in a short city trip to Paris. Although we didn\'t meet, Lucie accomplished to manage everything we had to know. She´s a really friendly, organised host.',
                'Fantastic place. Recommend',
                'The apartment is really cozy, welcoming and clean. 3 minute walk from the metro stop. Lucie is a great host. She promptly replied to any question I had. Appartamento molto carino, accogliente e pulito. 3 minuti a piedi dalla fermata della metropolitana. Lucie è ospitale e risponde velocemente alle richieste poste.',
                'A very nice place,the decoration is very warm and beautiful. The most important thing is that the location is very close to the metro station and restaurants',
                'Great space, very private area (great for photos) and very close to markets, parks, and other tourist-y locations.',
                'Great location, very comfortable accommodation, very good service by Halldis.',
                'Great location on a quiet street that is now closed to vehicular traffic. Wonderful location. Very clean and private. We stayed 1 week. Would stay again.',
                'Wow what a great place right in the middle of everything! It was so quaint and French felt like real Parisian for the week. We were there. It’s very clean and an easy one flight to the apartment.I was with my mom who is French she felt Right at home‍ we would definitely recommend this again and we look forward to maybe staying there again next year fantastic :)',


            
            ]
            return parisReviews
    }
}

function getTxtByLocation(location){
    switch (location){
        case 'barcelona':
            var barcelonaTxt=[
                {
                title: 'Bohemian duplex penthouse in Barcelona',
                summary: 'Entire apartmen',
                description: 'Beautiful penthouse with cosy terrace in the bohemian neighborhood of Gracia. It has super fast reliable internet connection and comfy table ad chairs in case you need to work from home. The apartment has been renovated with a classical chic decoration, it boasts very spacious rooms and a bathtub in the main bedroom with terrace views. It has a living and dining-room with an integrated kitchen and is fully equipped for your comfort. A 15 sqm terrace completes the amenities.'
                },
                {
                title: 'Spectacular penthouse in the center',
                summary: 'Entire apartmen',
                description: 'Enjoy our fantastic penthouse in Barcelona where you can sleep watching the moon, have breakfast in one of our terraces or sunbathe in our comfortable chill out. Situated in the coolest neighborhood in the world (TIME OUT ranking 2020), this fully equipped apartment is just 15min walk from the city center (3 metro stops). It has a super fast reliable internet connection in case you have to work from home, and a huge smart TV to watch your favorite movies and series.'
                },
                {
                title: 'Bright, central, spacious, 2 bedrooms, Balcony',
                summary: 'Entire serviced apartment',
                description: 'This is a fabulous apartment placed in the heart of Las Ramblas. It is very close to many of Barcelona´s must-see attractions. This location, at Nou de la Rambla, will allow you to enjoy as much as possible your holiday in Barcelona.'
                },
                {
                title: 'Chic Penthouse in the center with private terrace',
                summary: 'Entire apartment',
                description: 'Situated in the coolest neighborhood in the world (TIME OUT ranking 2020), this fantastic penthouse has one cosy terrace with direct access from the flat and one private rooftop terrace. It has a comfy table and chairs to work with your computer and super fast reliable internet connection. It is also well located to go sightseeing'
                },
                {
                title: 'MODERNIST AND LUXURIOUS FLAT IN IDYLLIC LOCATION',
                summary: 'Entire apartment',
                description: 'Elegant and luminous refurbished apartment, fully furnished with aprox. 70 m2, located in the heart of the city, in the district of Eixample in Barcelona. The space has two doble bedrooms, living-dining area, fully equipped kitchen, bathroom and two balconies. With a semi-pedestrian street, its very calm and centric, only 5 min away walking to Passeig de Gracia, 8 min walking to metro Diagonal (L3 & L5), and 10 min walking to Plaza Universitat and Plaza Cataluña.'
                },
                {
                title: 'RAMBLAS, GOTHIC QUARTER APARTMENTS BY THE5VESOUL',
                summary: 'Entire serviced apartment',
                description: 'Top of the apartments list of attractions is its large terrace, perfect for candlelit dinners under the stars, rising and shining in the morning with breakfast, coffee breaks, or just relaxing after exploring the city.Situated on the ground floor (no steps), the flat consists of one bedroom with a double bed and big wardrobe, plus an open-plan living/dining room with a double sofa bed'
                },
                {
                title: 'Modern & Quiet TopFloor Apartment',
                summary: 'Entire apartment hosted by Fernando',
                description: 'Modern two bedroom apartment with one bathroom with shower. Master bedroom with 140x200cm and armoire. 2nd bedroom with one single bed. There is one double sofa-bed in the living room.Washer and dryer. Central air conditioning'
                },
                {
                title: 'Apartment/Loft - IDEAL Location - Beach area',
                summary: 'Entire apartment',
                description: 'This apartment is situated on a very calm street, but at the same time you will be just 3 minutes walking distance from great bars, restaurants, ice cream shops. You also have a great supermarket just 2 minutes away from the apartment. If you have any questions please send me a message, I am more than happy to help'
                },
                {
                title: 'Super Centric Barceloneta apartment',
                summary: 'Tiny house',
                description: 'New apartment in a renovated building located in the charming Gothic quarter of Barcelona. Perfect combination of style and comfort. It has a bedroom, a bathroom, a fully equipped and open kitchen connected to the living room. The apartment has a total of 50 sq meters.'
                },
                {
                title: 'Apartamento exterior',
                summary: 'Entire apartment',
                description: 'STYLISH DESIGN LOFT in an classical Barcelonas gothic quarter 18th century building. Its located 3 minutes away from Plaza Real. Its a modern kitchen, a big open space, 2 exterior balconies and a beautiful bathroom. Its perfect place to stay in the best location in old town'
                },
                {
                title: 'ALEGRE APARTAMENTO EN EL CENTRO DE BARCELONA',
                summary: 'Entire apartment',
                description: 'Amazing flat, recently renovated in the city center. Located in the heart of the gothic neighborhood, just 1 minute walking to the Ramblas, in the middle of the most popular area in Barcelona! The apartment is modern, cozy and extremly comfortable.2 Bedrooms with bathrooms in suite, and a Sofa-bed.'
                },
                {
                title: 'APARTAMENTO EN EL CENTRO DE BARCELONA    ',
                summary: 'Entire apartment',
                description: 'Its located in the Gothic quarter, in the centre of Ciutat Vella, the old part of the city. A few minutes walk will take you to Plaça de Catalunya, the Portal del Ángel, la Rambla, the Boquería Market or the Picasso Museum, along with many other famous tourist spots. Its location will make it easy to find services around such as supermarkets, bookshops or pharmacies, and transport in Ciutat Vella makes it one of the best communicated areas of the city.'
                }
            ]
            return [

            ]
        case 'newYork':
            return [

            ]
        case 'paris':
            return [
                {
                    title: 'Appartement calme et lumineux, proche Montmartre',
                    summary: 'Entire apartment',
                    description: 'A charming apartment overlooking a lovely private courtyard is a 10-minute walk from the Montmartre hill and 200 metres from the metro. Very sunny and very quiet, this accommodation can accommodate up to 4 people. The kitchen is fully equipped. Close to family-friendly activities, nightlife, public transport and the city centre. Perfect for couples, solo travelers and business travelers.'
                },
                                {
                    title: 'Romantic appartment, Montparnasse',
                    summary: 'Entire apartment',
                    description: '1 bedroom apartment for rent in Paris, with a living room, kitchen corner, double bedroom and bathroom, located on the 1st floor of a building (no elevator) found in a characteristic Parisian passage, unique and unusual but well known by aficionados of local jewels and sires, within a few steps from Montparnasse, in the 14th district.'
                },
                {
                    title: 'Cosy appart à Paris',
                    summary: 'Entire apartment',
                    description: 'Charming studio in the 17th arrondissement of Paris, it is located on horseback between the Batignolles and the Montmartre district Functional and practical, it is ideal for a stay alone or as a couple. Guests can access the living room with TV, sofa bed and desk area. Everything you\'ll need in the kitchen. The bathroom is equipped with a shower, toilet, sink and washer/dryer. 5 minutes from metro 13 and 10 minutes from metro 2, you can move quickly.'
                },
                {
                    title: 'Lovely flat in Central Paris near Notre-Dame',
                    summary: 'Entire apartment',
                    description: 'Welcome to our home!\n Right in the heart of Paris you will find our lovey flat! Our bedroom is furnished with a double bed fitted with hotel quality linens. The bathroom is equipped with a shower, toilet, mirror and hairdryer. And we also provide fresh towels and complimentary toiletries. The living room has a young and casual décor, with a comfortable and stylish sofa, rattan chairs and coffee table. The kitchen, though modest is fully equipped with all the necessities, from cookware to cutlery. Our flat also has 2 flat-screen TVs, one in the main bedroom, and another in the living room. We hope you have a fantastic stay! =)' 
                },
                {
                    title: 'Romantic Mezzanine in Montparnasse Parc des Expo',
                    summary: 'Entire apartment',
                    description: 'Located in the famed Montparnasse neighborhood, this Sweet Inn apartment is an elegant yet relaxing space inspired by the literary culture of Paris. A sleek black-and-white color palette exudes glamour, and enchanting trompe l’oeil art adds a touch of fantasy. A staircase leads to a secluded loft bedroom, and a kitchenette has everything you need. This studio accommodates up to two people, making it an ideal romantic getaway. It is the perfect place to fall in love with Paris.'
                },
                {
                    title: 'Elegante trilocale nel cuore di St. Germain',
                    summary: 'Entire apartment',
                    description: 'Elegant 65m2 apartment comprising two bedrooms, living room, kitchen, bathroom and separate toilet. Located on the first floor of a 19th-century Parisian building in the heart of Saint-Germain-des-Près, a few steps from Les Invalides, it is ideal for short stays in an elegant, central and exclusive setting.'
                },
                {
                    title: 'Studio Deluxe - Tour Eiffel',
                    summary: 'Entire apartment',
                    description: 'In the hearth of the 16th district of Paris, this amazing prestigious apartment will allow you to have an optimal confort. Located at few meters from the Eiffel Tower, it is the best place to discover Paris. The area is full of restaurants, shops, and local stores.'
                },
                                {
                    title: 'Appartement Alésia-Montparnasse 14th',
                    summary: 'Entire apartment',
                    description: 'Everything you need in the district\n Bars cinema restaurants etc.\n Supermarkets very close\n Subway station Line 4 Alésia 5min walk -> Old Center of Paris 10minutes Notre Dame, Luxembourg Garden, Saint-Germain des Prés, Panthéon, The Marais, Louvre Museum...)\n Subway station Line 6 Denfert Rochereau 10min walk Eiffel Tower Trocadero, Orsay Museum... 10 minutes'
                },
                {
                    title: 'Sky penthouse near Eiffel tower',
                    summary: 'Entire apartment',
                    description: 'Beautiful modern and completely renovated apartment, with a spectacular view of the Eiffel Tower.\n Please always close the windows when you leave the apartment.'
                },
                {
                    title: 'Apartment - Montorgueuil/Louvre',
                    summary: 'Entire apartment',
                    description: 'Apartment (without lift) in a residence of 12 apartments.\n Fantastic location in the heart of the pedestrian area of Montorgueil, less than a 10-minute walk from the Louvre or the Marais. A real Parisian neighbourhood near the tourist sites :)\n The apartment offers the perfect combination of a boutique-hotel with services and a comfortable Parisian apartment, decorated with care, with all the necessary comfort for a short-term stay in Paris.'
                },
                {
                    title: 'Charming Appartment in Le Marais',
                    summary: 'Entire apartment',
                    description: 'Beautiful appartment (58m²) spacious and luminous. One bedroom with a double bed and one sofa bed in the living room.\n Rare apartment in the Marais! The bright, open, and functional home is on the ground floor of a charming 17th Century (built in 1605 AD) building. Conveniently near world class restaurants, grocery stores and shopping. The inspiring Picasso museum is three blocks away and the beautiful Place des Voges is five blocks away.\n Once you arrive at the apartment, walk through the gate into a charming courtyard. No need to walk up stairs or struggle with an elevator--the ground floor location makes it easy to enter and exit the apartment. Open the door and enter a beautifully decorated and comfortable home featuring period antiques, modern conveniences and original artwork. The high ceilings and exposed beams give this wonderful apartment a historic feel!\n The full-sized kitchen and large bathroom are just one step off of the main floor making this an ideal choice for mobility-challenged visitors. If you want to explore French cooking or just prepare morning coffee, the well equipped kitchen has everything you need. Check out the cosy bedroom complete with big cupboards and a queen sized bed. Plenty of closet space throughout the apartment. The living room features a cleverly designed sofa bed. The large bathroom includes a huge tub, wall-mounted shower, double sinks, clothes washer and dryer.\n Welcome to Le Marais and enjoy Paris like a local!'
                },
                {
                    title: 'Amazing location with terrace',
                    summary: 'Entire apartment',
                    description: 'A stone\'s throw from the Parc des Buttes Chaumont, you will find my apartment, ideal for relaxing after a day of visiting Paris.\n Spacious flat, very functional and completely refurbished! It is perfectly arranged to welcome you comfortably whether for a stay with friends, family or business.\n Indeed the flat has a Queen size bed for two people with new and extremely comfortable bedding, a bathroom with shower and toilet, a dressing room, a fully equipped open kitchen, and a sitting area, TV, WIFI access.'
                },

            ]
    }
}