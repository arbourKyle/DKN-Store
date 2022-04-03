import React, { useState } from "react";
import Fuse from "fuse.js";
import "../search/search.css";
const products = [
    {
        "image": "./img/shatterGlueBerry.webp",
        "name": "GlueBerry Shatter",
        "long_desc": "Fireside is a full spectrum shatter derived from our Glueberry whole bud. Carefully crafted using a state of the art Hydrocarbon (BHO) extraction process, terpenes and cannabinoids are kept in unison and preserved to ensure the highest quality. Winterization occurs at a temperature of -75C and removes fats and residual impurities, resulting in a smooth, clean, high-quality hard resin concentrate, rich in cannabinoids and terpenes. It's best enjoyed responsibly in a dab rig.",
        "price": 90.00,
        "units": "1g",
        "category": ["concentrate"],
        "rating": 0
    },
    {
        "image": "./img/shatter8Ball.jpg",
        "name": "8 Ball Shatter",
        "long_desc": "Our 8 Ball Kush is a potent, solid shatter that looks good from all angles. Originating from King Kush and the Bubba Kush strains, 8 Ball Kush has a high density of trichomes that you can bank on. The terpenes in this 8 Ball Kush are herbaceous with a spicy collection of garden aromas. 8 Ball Kush Shatter has notes of basil, oregano and rosemary arising from Caryophyllene. The terpene Humulene adds the warmth of coriander. Only fresh cannabis inputs are used with a proprietary blend of hydrocarbons, in all Shatterizer extraction processes. Specially sourced and selected from the finest growers across Canada, we look for flower with the right characteristics, from THC levels to terps and flavonoids. All Shatterizer Extracts are made with love in Ontario, using the highest-levels of science, tech and quality extraction methods. Please enjoy responsibly!",
        "price": 30.00,
        "units": "0.5g",
        "category": ["concentrate"],
        "rating": 0
    },
    {
        "image": "./img/hash.jpg",
        "name": "GoldSeal Hash",
        "long_desc": "By using separation methods that keep temperatures extra low, the original flavour of the terpene profile is better preserved, providing a truly satiating and memorable experience every time. HashCo Gold Seal Hash is developed by dedicated humans with an intense passion for Cannabis. A high-THC Hybrid blend with a very gassy-fruity-spicy-, and earthy terpene profile, HashCo Gold Seal Hash is a Canadian-made delicacy that is finally available on the regulated market.",
        "price": 22.98,
        "units": "1g",
        "category": ["concentrate"],
        "rating": 0
    },
    {
        "image": "./img/hashDutchGold.jpg",
        "name": "Dutch Gold Hash",
        "long_desc": "Organic Marrakech Gold is Highly Dutch Organic's sativa-dominant blond hash that starts with trichome-rich, organic flower. Trichomes are separated from the plant material using a gentle abrasive technique that avoids heat or friction. The plant’s natural terpenes are extracted, and together make this hash sticky and soft to touch. It's gently pressed until it reaches a perfect density that's not too dry, but is easy enough to work using your fingers. The result is a smooth, bright golden-brown hash.",
        "price": 30.00,
        "units": "1g",
        "category": ["concentrate"],
        "rating": 0
    },
    {
        "image": "./img/hashOkaMoonRock.jpg",
        "name": "Moon Rock Hash",
        "long_desc": "Okanagan Moon Rocks are hand-trimmed AAA quality indica buds, rolled in full-spectrum oil and then rolled again in high-quality kief for an enhanced smoking experience. Produced in Canada's famous Okanagan region under LED lights.",
        "price": 28.50,
        "units": "1g",
        "category": ["concentrate"],
        "rating": 0
    },
    {
        "image": "./img/indica8Ball.jpg",
        "name": "8 Ball Indica",
        "long_desc": "8 Ball Kush is a beautiful indica that comes from Bubba and King Kush genetics. Imbued with a spicy and woody flavour, this heavy hitter is great for seasoned consumers that really want to feel the effects of their consumption experience. 18twelve’s 8 Ball Kush is a pure indica, derived from a pairing of classic Bubba and King Kush genetics. Grown in the beautiful Cowichan Valley of Vancouver Island, within a purpose-built indoor facility, every plant is flushed for two weeks to ensure no residual nutrients are present. All 18twelve flower is cured for a minimum of two weeks, ensuring optimal flavour, potency and a terpene-rich experience.",
        "price": 50.00,
        "units": "3.5g",
        "category": ["indica","buds"],
        "rating": 0
    },
    {
        "image": "./img/indicaKali.jpg",
        "name": "Kali Indica",
        "long_desc": "Produced in collaboration with Lotus Cannabis Co., Kali is an indica dominant strain, bred from crossing Nepali OG with 88 G-13 Hashplant. Its aroma and tasting notes bring to mind dense, lush vegetation: woody and earthy, with sharp, spicy undertones.",
        "price": 45.00,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/indicaMac.jpg",
        "name": "Mac Indica",
        "long_desc": "A first release from Carmel’s in-house breeding program, Dim MAC was born by crossing Drew’s Dark Helmet with a MAC male. The result is a beautiful flower that delivers the best of both genetics. The appearance is more MAC leaning with the density and flavour profile of the Dark Helmet. Expect hints of creamy citrus and cookie dough.",
        "price": 48.00,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/indicaRomulan.jpg",
        "name": "Romulan Indica",
        "long_desc": "FVOPA Certified Organic Romulan is an indica-dominant strain derived from the North American Indica and White Rhino lineages. It produces dense, frosty buds and has flavours of pine, earth, and citrus from a terpene profile of limonene, myrcene, and pinene.",
        "price": 33.25,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/indicaTumble.jpg",
        "name": "Maple Indica",
        "long_desc": "Organic Maple Kush is a certified organic indica bud grown in living soil using natural sunlight and purified rainwater. A TGOD original cross between Koloa Sunrise and GG4, Organic Maple Kush gets its name from the Canadian organic maple syrup used to feed the soil it grows in, giving it a natural source of carbohydrates. Its dense round buds with dark purple and green leaves are covered in frosty-white trichomes and bright orange pistils. This beautiful bud brings with it a tropical, fruity, kush-like finish, a result of myrcene and farnescene terpenes that dominate this strain's aroma and flavour.",
        "price": 38.50,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbudRhino.jpg",
        "name": "Rhino Indica",
        "long_desc": "Featuring high THC potential, Pure Sunfarms' White Rhino is a classic BC bud strain, cultivated on the Gulf Islands before it became popular across Canada. An indica-dominant child of White Widow, our selected phenotype is both potent and intensely flavourful. Nearly hidden beneath a cover of snowy trichomes, the leaves of this compact bud showcase a variety of colours, ranging from sea green to lime peel, with splashes of amethyst. White Rhino was specifically selected for its fruity aromas of blueberries and mangos (myrcene), green grapes (alpha-pinene), and Thai basil (caryophyllene).",
        "price": 24.50,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbuds.png",
        "name": "Pipe Dream Sativa",
        "long_desc": "With aromas of spice and mulled fruits, this cultivar coats the mouth with an abundance of gassy flavour. Dense, round buds feature hints of purple complementing generous amounts of frosting. Sativa-dominant with dominant terpenes that include myrcene and caryophyllene.",
        "price": 38.50,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbudsCherry.jpg",
        "name": "Frosted Cherry",
        "long_desc": "For the discount smoker looking for something different, Potluck is a new take on the “value ounce”  featuring whole flower pouches designed for mixing and matching your way to an ounce. Potluck is available in indica, sativa, hybrid 7 g options. The word “pot-luck” appears in the 16th century English work of Thomas Nashe, and used to mean 'food provided for an unexpected or uninvited guest, the luck of the pot.'",
        "price": 39.00,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbudsheadband.jpg",
        "name": "Headband Hybrid",
        "long_desc": "Born in California, but raised in BC, Headband is sought-after for its high THC potential. A hybrid of OG Kush and Sour Diesel, it became popular in Ontario before finding a home in BC’s temperate climate. The dense, elegantly contoured flowers exhibit a range of green colours under a coat of sticky trichomes. Headband offers flavours and scents of sweet and savoury spices including allspice and nutmeg (caryophyllene), lavender (linalool), lemon and coriander seeds (humulene). The combination of these terpenes results in its signature ‘gassy’ smell.",
        "price": 25.00,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbudsTangerine.jpg",
        "name": "Tangerine Twist Sativa",
        "long_desc": "More for you and more to share with Spinach’s Tangerine Twist. Our Tangerine Twist premium high potency buds have a pleasant earthy, sweet and citrus aroma. Made with indoor grown, 1-on-1 plant care, and hand-trimmed quality cannabis. Simply put, Sativa Tangerine Twist is a big bag of quality flower for you and your buds.",
        "price": 28.50,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbudWedding.jpg",
        "name": "Wedding Pie",
        "long_desc": "Perfect for those sunny afternoons in the Back Forty, Wedding Pie is the marriage of Wedding Cake crossed with Grape Pie. This strain can reach very high potencies and is grown with organic practices in an advanced hybrid greenhouse. These vibrant green buds also have a flair of purple, almost three per cent total terpene content and a spicy, cracked pepper profile. The top terpenes are trans-caryophyllene, linalool, farnesene, limonene and alpha-bisabolol. Always packaged in a resealable foil pouch to make sure your bud stays fresh. Back Forty requires no introduction because it already feels familiar, with a product suite that fits seamlessly into your day-to-day and without the need to overthink its purpose of providing a better experience for less. Take a trip and explore the Back Forty.",
        "price": 23.50,
        "units": "3.5g",
        "category": ["indica", "buds"],
        "rating": 0
    },
    {
        "image": "./img/sativaApples.jpg",
        "name": "Zour Apples Sativa",
        "long_desc": "Zour Apples from Natural History is a mid- to high-THC cultivar. This sativa-dominant flower produces a sweet, vanilla and green apples aroma. To the eye, a Zour Apples bud is bright to medium green in appearance, with bright orange pistils scattered throughout. Zour Apples is fully cultivated indoors, in precision-controlled laboratory conditions. All Natural History flower is thoughtfully hung to dry, hand trimmed and cured for a minimum of 10 days. Its lineage includes Plantman Jack Herer and Ethos Cookies.",
        "price": 42.50,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/sativaOrangeCake.jpg",
        "name": "Orange Cake",
        "long_desc": "For the discount smoker looking for something different, Potluck is a new take on the “value ounce” – featuring whole flower pouches designed for mixing and matching your way to an ounce. Potluck is available in indica, sativa, hybrid 7 g options. The word “pot-luck” appears in the 16th century English work of Thomas Nashe, and used to mean 'food provided for an unexpected or uninvited guest, the luck of the pot.'' Potluck dinners are events where the attendees bring a dish to a meal - a different meal. Potluck sativa will launch with Mimosa and will continually introduce new boutique strains as product sells out. Orange Cake has a strong aroma and flavour that reminds you of its namesake - with notes of fruit and citrus flavours bursting through.",
        "price": 39.00,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/sativaPedro.jpg",
        "name": "Pedros Sweet Sativa",
        "long_desc": "Unique to Color, Pedro's Sweet Sativa is a proudly Canadian sativa-dominant hybrid with fluffy, trichome covered buds with very strong THC potential. Pedro’s Sweet Sativa is rich in beta-caryophyllene and pinene giving it a sweet smell with undertones of spice.",
        "price": 28.75,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/rawbuds.jpg",
        "name": "Frozen Lemons",
        "long_desc": "Upon opening the jar, you will be hit with a decadent wave of lemon zest. After that initial wave, the complexity of the bouquet sets in with some spicy and sweet undertones. The bright green coloured flowers are dense and coated in trichomes. Vibrant orange hairs and faint purple accents make this cultivar look as good as it tastes. We are extremely excited to round out our list with this latest addition to the line-up. Hang-dried and hand-trimmed to preserve aroma and flavours.",
        "price": 38.50,
        "units": "3.5g",
        "category": ["sativa", "buds"],
        "rating": 0
    },
    {
        "image": "./img/bhangwhitechocolate.jpg",
        "name": "THC White Chocolate",
        "long_desc": "Bhang® THC Cookies and Cream White Chocolate is the perfect pairing of gourmet white chocolate and THC, scored into four pieces perfect for sharing. Indulge in the cannabis-free flavour of white chocolate, crunchy cookie bits and 10 mg THC per bar. Bhang® didn’t create cannabis chocolate, they just perfected it.",
        "price": 5.00,
        "units": "1 x 10g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/bhangMilkChock.png",
        "name": "THC Milk Chocolate",
        "long_desc": "Bhang® Milk Chocolate combines rich 48% cocoa and THC, and are scored into four pieces, so they are perfect for sharing. Produced in Indiva’s state-of-the-art facility based in London, Ontario, Bhang® Milk Chocolate offers a cannabis-free flavour that offers just the right hint of sweetness.",
        "price": 5.00,
        "units": "1 x 10g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/candyCaneChoco.jpg",
        "name": "Candy Cane Crush Milk Chocolate",
        "long_desc": "Legend Candy Cane Crush Milk combines 10 mg of THC with premium 46% milk chocolate and natural flavour, topped with crushed candy cane. Scored into four equal pieces, every bite is truly an experience. The chocolate used by Legend comes from fourth-generation, Alberta-based master chocolatier Bernard Callebaut. Legend uses his award-winning chocolate formulation to deliver consistently exceptional experiences, without a sugar crash. Reach new heights with Legend.",
        "price": 5.00,
        "units": "1 x 10g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/candyMintLozenge.jpg",
        "name": "Mint Lozenges",
        "long_desc": "Edison JOLTS is Canada’s first 10 mg THC lozenge. These lozenges are slow-dissolving and deliver a jolt of mint flavour. For optimal sublingual/buccal absorption, suck lozenge until peppermint flavour peaks (about 15 seconds), then hold under your tongue or between cheek and gum until fully dissolved.",
        "price": 19.50,
        "units": "10 pieces",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/candyPeachChew.jpg",
        "name": "Peach Orange Soft Chews",
        "long_desc": "Smash a juicy peach into a succulent orange, then blast it with sour crystals. That’s right. We’re talking about a dual-flavoured explosion called Peach Orange SOURZ by Spinach™. These balanced 1:1 THC/CBD soft chews blasted with sour crystals are over-the-top with natural flavours and colours. With 5 big “S” soft chews per pack, you and your friends can enjoy more SOURZ by Spinach™ in one sitting.",
        "price": 8.50,
        "units": "5 x 5g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/candyStarFruit.jpg",
        "name": "Starfruit Soft Chews",
        "long_desc": "Jump on board with SPINACH FEELZ™ THC+CBG soft chews -- flavour-packed THC+CBG gummies. These delicious Pineapple + Starfruit soft-chews contain our special blend of classic THC, rare and elusive CBG, and tropical flavours. Two sour-then-sweet soft chews, with 10mg THC and 5mg CBG totals per pack.",
        "price": 8.50,
        "units": "5 x 5g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/gummybears.jpg",
        "name": "Gummy Variety Pack",
        "long_desc": "Handcrafted in BC, Chüz Variety Pack has five unique flavours of sour fruit gummies with each one containing 2mg of THC. Each pouch includes five 4.5g gummiesand flavours include; sour strawberry, sour wildberry, sour grape, sour lime and sour pineapple. They are handcrafted by a dessert and confectionary chef in the Canadian Rockies. Chüz uses MCT oil in the creation of all their edibles. Contains gelatine and may contain milk.",
        "price": 7.50,
        "units": "5 x 5g",
        "category": ["edible"],
        "rating": 0
    },
    {
        "image": "./img/citrusdrink.webp",
        "name": "Citrus Drink",
        "long_desc": "No messing around with this citrus beverage, high-intensity flavoured potion. 10 mg THC. Enjoy straight up, right out of the can.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/keylimeseltzer.jpg",
        "name": "Key Lime Seltzer",
        "long_desc": "Versus Key Lime Seltzer is made with S?RSE® cannabis emulsion technology, which delivers a quicker onset with almost no cannabis taste or smell. With 10 mg of THC, this carbonated beverage tastes clean, crisp and refreshing.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/lemonTonic.jpg",
        "name": "Lemon Tonic",
        "long_desc": "Limonene is bright and citrusy with notes of lemon, tangerine & thyme. Dry west coast hops help to elevate the citrus flavour and add a complex botanical finish that's not overly sweet. Each sparkling tonic has 5mg CBD + 5mg THC. Best served over ice, garnished with a curled lemon rind and a sprig of fresh thyme.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/mangoDrink.jpg",
        "name": "Mango Drink",
        "long_desc": "No messing around with this mango pineapple, high-intensity flavoured potion. 10 mg THC. Enjoy straight up, right out of the can.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/ogCola.jpg",
        "name": "OG Cola",
        "long_desc": "OG Cola is a carbonated drink made with real sugar, natural cola flavours, and infused with 3.5mg THC.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/tonicValenc.jpg",
        "name": "Tonic Valencia",
        "long_desc": "Valencene combines the tart, citrus flavours of grapefruit with a zing of ginger, and perfectly balances them alongside the earthy notes of sage and the mild sweetness of hops. Each sparkling tonic has a balanced amount of CBD and THC. Best served over ice, garnished with a wedge of grapefruit.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/tonicValenc.jpg",
        "name": "Tonic Valencia",
        "long_desc": "Valencene combines the tart, citrus flavours of grapefruit with a zing of ginger, and perfectly balances them alongside the earthy notes of sage and the mild sweetness of hops. Each sparkling tonic has a balanced amount of CBD and THC. Best served over ice, garnished with a wedge of grapefruit.",
        "price": 10.00,
        "units": "1 x 233g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/greentea150.jpg",
        "name": "Green Tea Blend",
        "long_desc": "Haven St. Premium Cannabis Peace No. 150 Green Tea Blend contains 20 mg of CBD. Natural and fragrant cherry and peach flavours complement the subtle hints of rose and jasmine, providing a floral aroma and delicately sweet finish./nHaven St. teas are made with premium tea ingredients for a superior steep in a biodegradeable, plant-based bag. Sold as single pyramid tea bags./nIngredients: decaffeinated green tea, CBD infused sugar (sugar, gum arabic, cannabis), rose petals, jasmine petals, natural flavours that are organic compliant./nSteep Temperature: 80°C | Steep Time: 3–5 min",	
        "price": 9.00,
        "units": "1 x 3.8g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/chocRooibos.jpg",
        "name": "Chocolate Rooibos Tea",
        "long_desc": "Haven St. Premium Cannabis Drift No. 450 Chocolate Rooibos Tea contains 10 mg of THC and 5 mg of CBD. Crisp chocolate notes complement our fruity rooibos tea./nHaven St. teas are made with premium tea ingredients for a superior steep in a biodegradeable, plant-based bag. Sold as single pyramid tea bags./nIngredients: rooibos, cannabis infused sugar (sugar, gum arabic, cannabis), cacao bean pieces, calendula petals, natural flavours that are organic compliant./nSteep Temperature: 90°C | Steep Time: 3–5 min",	
        "price": 9.00,
        "units": "1 x 3.8g",
        "category": ["beverage"],
        "rating": 0
    },
    {
        "image": "./img/purplejanVapeCartridge.jpg",
        "name": "Purple Jane Vape Cartridge",
        "long_desc": "Purple Hills Live Resin Zombie Carts are filled with a proprietary single-strain blend of our terpiest live resin and distillate. This reliable vape cart brings the full profile of our fresh-frozen cannabis to life. The high-potency, high-terpene extract is made from fresh-frozen flower full of sun-grown flavour. Purple Jane Live Resin Zombie Cart is sweet and earthy, with hints of grape, vanilla and cinnamon. The Purple Hills farms are in Creemore, Ontario, in the heart of Ontario's Greenbelt. Purple Hills genetics are selected to thrive outdoors in the Creemore microclimate and are tended to by hand throughout the season by a small and dedicated team. The terpene-rich, aromatic flower is preserved through flash-freezing at harvest and then concentrated through hydrocarbon extraction. The resulting live resin contains all of the flower’s sun-expressed flavonoids, terpenes and cannabinoids, packing a more complete and complex cannabis flavour than CO2 or ethanol extracts.",
        "price": 39.00,
        "units": "0.5g",
        "category": ["vape"],
        "rating": 0
    },
    {
        "image": "./img/lemonVapeCartridge.jpg",
        "name": "Super Lemon Haze Vape Cartridge",
        "long_desc": "Back Forty Super Lemon Haze Sativa strain has a tangy, citrus burst of flavour with subtle herbal undertones; the main terpenes are limonene and terpinolene. This potent vape cartridge contains no fillers, and is perfect for your Back Forty adventures.",
        "price": 49.00,
        "units": "1.5g",
        "category": ["vape"],
        "rating": 0
    },
    {
        "image": "./img/critKaliVapeCartridge.jpg",
        "name": "Critical Kali Full Spectrum Vape Cartridge",
        "long_desc": "Pure Sunfarms' 510 vape cartridges are filled with full-spectrum, single-strain, whole bud extracts. Critical Kali Mist showcases aromas and flavours of dill and parsley (pinene), raspberry and orange sorbet (myrcene), and oregano (caryophyllene), preserved from the original BC-grown flower. With a custom ceramic mouthpiece, and featuring a glass tank and ceramic coil. Compatible with 510- thread batteries.",
        "price": 33.00,
        "units": "0.5g",
        "category": ["vape"],
        "rating": 0
    },
    {
        "image": "./img/cartridgeVapPineapple510.jpg",
        "name": "Pineapple Express Vape Cartridge",
        "long_desc": "Pineapple express is made from our high-potency extract and is paired with a proprietary blend of plant terpenes, resulting in a smooth tropical flavour.",
        "price": 29.00,
        "units": "0.5g",
        "category": ["vape"],
        "rating": 0
    },
    {
        "image": "./img/cartridgeVapPineapple510.jpg",
        "name": "Pineapple Express Vape Cartridge",
        "long_desc": "Pineapple express is made from our high-potency extract and is paired with a proprietary blend of plant terpenes, resulting in a smooth tropical flavour.",
        "price": 29.00,
        "units": "0.5g",
        "category": ["vape"],
        "rating": 0
    },
    {
        "image": "./img/dropsReign.jpg",
        "name": "Reign Drops",
        "long_desc": "With THC and no CBD, Reign Drops by Redecan is a blend of greenhouse-grown cannabis with a very strong THC potency. Formulated in Niagara, Ontario, this oil is put through a state-of-the-art CO2 extraction process and diluted to optimal concentration.",
        "price": 40.00,
        "units": "30 milliliters",
        "category": ["oil"],
        "rating": 0
    },
    {
        "image": "./img/sativaOil.jpg",
        "name": "Free Oil",
        "long_desc": "Free Oil is sun-grown in an eco-friendly greenhouse and the strain’s buds have rich green hues. Solei Free has a max of 11 mg/ml of CBD and little to minimal THC potency. All oil products sold at OCS.ca are for ingestion only. DO NOT smoke or vape these oils. Use as directed.",
        "price": 20.00,
        "units": "30 milliliters",
        "category": ["oil"],
        "rating": 0
    },
    {
        "image": "./img/zigzag.jpg",
        "name": "Zig Zag Blue",
        "long_desc": "Zig Zag is a classic and a go-to paper for over 140 years. Zig Zag Blue are a thicker free burn paper with cut corners for an easy roll.",
        "price": 3.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/zigzagwhite.jpg",
        "name": "Zig Zag White",
        "long_desc": "Zig Zag is a classic and a go-to paper for over 140 years. Zig Zag White are a medium slow burn paper with cut corners for an easy roll.",
        "price": 3.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/rizlas.jpg",
        "name": "Rizla+ Silver-100's",
        "long_desc": "Rizla+ Silver are Ultra Thin for a slow, clean burn.",
        "price": 2.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/rawKingSize.jpg",
        "name": "RAW Rolling Papers Thin - King Size",
        "long_desc": "RAW rollies are made of hemp with vegan, sustainably sourced acacia gum.",
        "price": 3.00,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/rawpapeTips.jpg",
        "name": "RAW Filter Tips",
        "long_desc": "RAW filter tips are ready to roll for the perfect finish to any joint.",
        "price": 2.00,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/rizlaRed.jpg",
        "name": "Rizla+ Red Rolling Papers - 100's",
        "long_desc": "Rizla+ Red are a medium thickness paper with a clean burn.",
        "price": 2.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/pipPipe.jpg",
        "name": "PiP Pipe",
        "long_desc": "Puff in Peace. The PiP Pipe. These brown ceramic pipes are made by an Ottawa artisan. Smart little pieces, they're created with a front end carb for easy cleaning. Speaking of cleaning, they've been designed with a built-in screen. The screen holes are exactly paperclip sized, and there's a paperclip included with each one! Nice weight and good sized bowl, the PiP are a store fave!",
        "price": 21.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/pinkBong.jpg",
        "name": "Pink Diamond Silicone Bong",
        "long_desc": "Hot pink and diamond cut, this bong is a stand-out! Stem and body is all made of silicone so there's no breaking this pink lady. Glass bowl for a perfect smoke.",
        "price": 38.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/glassPipesColour.jpg",
        "name": "Small Glass Pipe",
        "long_desc": "Glass pipes are great - colourful, pretty, easy to clean. We have a variety of glass pipes in store, the selection is always changing. Left side carb. Put a colour in the notes and we'll try to match you, but colours are not guaranteed.",
        "price": 14.50,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    },
    {
        "image": "./img/bongSkullClear.jpg",
        "name": "Chrome Skull Rig",
        "long_desc": "This beautifully crafted glass skull has a chrome glaze, giving this skull a cool iridescent glow. An easy fit in the palm of your hand, this low profile dab rig delivers.",
        "price": 46.00,
        "units": "1",
        "category": ["accessories"],
        "rating": 0
    }
    ]

const Search = () => {

    
  const [searchQuery, setSearchQuery] = useState("");


  const [searchResults, setSearchResults] = useState([]);


  const sortedSearchResults = searchResults.sort((resultA, resultB) => {
    return resultA.score - resultB.score;
  });
  const searchIndex = new Fuse(products, {
    includeScore: true,
    threshold: 0.4,
    keys: ["name"],
  });

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    const results = searchIndex.search(searchQuery);
    setSearchResults(results);
  };
  return (
    <div id="searchbar">
      <div className="mb-4">
        <input
          type="search"
          name="search"
          className="form-control"
          placeholder="Search through our inventory"
          value={searchQuery}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
      {sortedSearchResults.length > 0 && (
        <ul className="list-group">
          {sortedSearchResults.map(({ item }) => {
            return (
              <li className="list-group-item" id="searchresults" key={item.name}>
                {item.name} {item.code}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
Search.propTypes = {};

export default Search;