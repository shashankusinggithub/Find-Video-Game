import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Alllist : [
        {
          "id": 109596,
          "first_release_date": 1540944000000,
          "name": "SEGA AGES Phantasy Star",
          "rating": 90.0,
          "summary": "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike."
        },
        {
          "id": 68161,
          "first_release_date": 1519171200000,
          "name": "Layers of Fear: Legacy",
          "rating": 90.0,
          "summary": "The Masterpiece of Fear"
        },
        {
          "id": 104790,
          "first_release_date": 1538092800000,
          "name": "Namco Museum Arcade Pac",
          "rating": 77.0,
          "summary": "All the best Namco arcade games in the palm of your hand. \n \nSave your quarters and bring the arcade home with the ultimate two-in-one game ‘pac,’ Namco Museum Arcade Pac! Enjoy the nostalgic classics in Namco Museum and the flashy maze madness of Pac-Man Championship Edition 2 Plus with friends or solo, at home or on the go, for exciting arcade fun wherever you are—exclusively for the Nintendo Switch."
        },
        {
          "id": 111817,
          "first_release_date": 1543276800000,
          "name": "This War of Mine: Complete Edition",
          "rating": 70.0,
          "summary": "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers. The game provides an experience of war seen from an entirely new angle. \n \nThe pace of This War of Mine is imposed by the day and night cycle. During the day snipers outside stop you from leaving your refuge, so you need to focus on maintaining your hideout: crafting, trading and taking care of your survivors. At night, take one of your civilians on a mission to scavenge through a set of unique locations for items that will help you stay alive. \n \nMake life-and-death decisions driven by your conscience. Try to protect everybody from your shelter or sacrifice some of them for longer-term survival. During war, there are no good or bad decisions; there is only survival. The sooner you realize that, the better."
        },
        {
          "id": 115278,
          "first_release_date": 1564012800000,
          "name": "Rune Factory 4 Special",
          "rating": 80.1152429730073,
          "summary": "Experience this legendary fantasy adventure like never before and embark on exciting escapades with your favorite characters in the brand new Newlywed Mode!"
        },
        {
          "id": 106111,
          "first_release_date": 1536796800000,
          "name": "Surgeon Simulator CPR",
          "rating": 60.0,
          "summary": "Didn’t fancy seven years at medical school? Skip straight to the operating table with the critically-acclaimed Surgeon Simulator CPR, fully revived and feeling better-than-ever on the Nintendo Switch™! \n \nNow featuring all-new motion control functionality as well as local co-op play, it’s time to scrub up for the most immersive version yet of the infamous operation sim! \n \nON CALL 24/7! \n \nStep into the shoes of Nigel Burke - a would-be surgeon with a less-than-conventional toolkit - as he performs terrifying \n \ntransplants in theatre, high-pressure procedures in an ambulance, and anti-gravitational operations in space! Yes, operating on the go’s never been easier thanks to the Nintendo Switch"
        },
        {
          "id": 117745,
          "first_release_date": 1570492800000,
          "name": "BurgerTime Party!",
          "rating": 83.0,
          "summary": "Peter Pepper's Burger is the hottest grill in town, thanks to its classic menu of award-winning puzzles and patties. But when retro gaming's master chef can't take the heat of inventing a brand-new burger, the ingredients that got chopped from Chef Peter Pepper's latest recipe take matters into their own comically oversized gloves. \n \nOut of the trash can leap four nefarious Food Foes, edible enemies with an appetite for revenge! In the ultimate battle of man vs. food, will cook or cuisine reign supreme? \n \nIn 1982, Chef Peter Pepper and the Food Foes delighted arcade-goers worldwide with the action/puzzler BurgerTime. The classic gameplay returns in a fresh, colorful package full of tasty twists and scrumptious surprises as BurgerTime Party! for the Nintendo Switch system! Iron-willed chefs can individually tackle the solo campaign or join up to three friends in local multiplayer, either by working cooperatively to defeat the Food Foes together, or by taking control of one or more Food Foes to stop the other team's chef(s) from completing their culinary masterpieces. With over 100 jumbo-sized stages and a variety of all-new modes and challenges, however you play, have it your way!"
        },
        {
          "id": 75959,
          "first_release_date": 1513209600000,
          "name": "RXN -Raijin-",
          "rating": 60.0,
          "summary": "Japanese game developer and shoot-'em-up specialists Gulti and Kayac are proud to present the all-new RXN -Raijin-."
        },
        {
          "id": 119509,
          "first_release_date": 1559260800000,
          "name": "Geki Yaba Runner: Anniversary Edition",
          "rating": 57.0,
          "summary": "Who are you? A charming little gnome. What’s your mission? To save an innocent princess from her dismal fate. To achieve this, all you have to do is run. Sounds simple enough. Let’s not forget though, that in general, gnomes are not what you’d normally call “the running type.” But don’t be fooled – the blood of a raging beast flows through the veins of this little leprechaun. So what are you waiting for? Take control of this adorable gnome and save the princess!"
        },
        {
          "id": 53247,
          "first_release_date": 1518739200000,
          "name": "Joe Dever's Lone Wolf",
          "rating": 60.0,
          "summary": "Lone Wolf, the last of the order of the Kai Lords, must face yet another threat posed by the dreaded Darklods. No-one has heard from the border village of Rockstarn in weeks, and Lone Wolf travels to the very frontier of the Kingdom of Sommerlund to find out what happened. He will find challenges and adventures awaiting for him, memorable characters and meaningful choices to make as the story progresses. Epic battles will take place at the wild frontier, deep down in ancient ruins and even across the border, trespassing into the terrible Darklands."
        },
        {
          "id": 107214,
          "first_release_date": 1565913600000,
          "name": "Grandia HD Collection",
          "rating": 80.0,
          "summary": "Two quintessential RPGs have finally gone portable on one of gaming's most popular console/handheld hybrid platforms. The highly anticipated GRANDIA HD Collection for the Nintendo Switch is here"
        },
        {
          "id": 55174,
          "first_release_date": 1509580800000,
          "name": "Super Beat Sports",
          "rating": 53.0,
          "summary": "WHAT IS SUPER BEAT SPORTS? \nIt’s a collection of five sports-themed mini games with a musical twist- coming this Fall exclusively for the Nintendo Switch. Swing, volley, and score to the music to come out on top. Add instant multiplayer excitement to any party!"
        },
        {
          "id": 103198,
          "first_release_date": 1528934400000,
          "name": "Chameleon Run Deluxe Edition",
          "rating": 93.0,
          "summary": "Deluxe Edition features a handful of new courses, and even a fourth additional challenge to complete for each level."
        },
        {
          "id": 106275,
          "first_release_date": 1533168000000,
          "name": "Picross S2",
          "rating": 83.0,
          "summary": "The second installment in Jupiter Corporation's Picross S series for the Switch."
        },
        {
          "id": 27505,
          "first_release_date": 1495065600000,
          "name": "Flip Wars",
          "rating": 54.0,
          "summary": "\"This tense multiplayer action game will have you stomping to flip over panels—and unwitting opponents! To win, flip the most panels to your color in local battles, online*, or single-player. The more you flip, the faster you’ll move in a mad dash to nab power ups. Increase your flip range, turn invincible, and more across 3 modes and 12 arenas! \n \nCompete alone or against up to 3 players to see who’s best at each mode: flip the most panels before time runs up in Panel Battle, knock out the most opponents in Time Battle, or outlast your rivals in Life Battle. All 12 arenas have 4 layouts to choose from, some containing hazards like panel-flipping buttons, beam cannons, and waves so beautiful they truly stun competitors. Learn the art of the flip with tutorials and try your hand at achievements. When you’re ready to compete, jump into an online* battle or a private room with friends via local wireless. No matter how you play, it’s time to think fast and pull off the ultimate color scheme!\""
        },
        {
          "id": 103317,
          "first_release_date": 1529971200000,
          "name": "Mario + Rabbids Kingdom Battle: Donkey Kong Adventure",
          "rating": 90.9642767962327,
          "summary": "Embark in an epic battle against a vengeful Rabbid Kong who uses his new powers to take over a mysterious island. Donkey Kong, Rabbid Peach, and a moody new Rabbid hero, Rabbid Cranky, will team up on a journey across four brand-new environments. Discover a world full of reinvented tactical gameplay, new enemies, and secrets to uncover."
        },
        {
          "id": 81351,
          "first_release_date": 1518048000000,
          "name": "ATOMIK: RunGunJumpGun",
          "rating": 70.0,
          "summary": "ATOMIK: RunGunJumpGun is a tough as nails 2D action platformer that puts a teeth-rattling, gravity-defying weapon in your hands. With a cast of crazed characters, simple but beautifully difficult gameplay, and a pulsing musical score, ATOMIK: RunGunJumpGun is a loud, trippy mess of twitchy platforming goodness."
        },
        {
          "id": 110802,
          "first_release_date": 1543276800000,
          "name": "Spintires: MudRunner – American Wilds Edition",
          "rating": 77.0,
          "summary": "Spintires: MudRunner – American Wilds is the ultimate version of the indie hit Spintires: MudRunner, putting players in the driver’s seat and daring them to take charge of incredible all-terrain vehicles, venturing across realistic, physics-simulated landscapes with only a map and compass as guides!"
        },
        {
          "id": 78128,
          "first_release_date": 1527552000000,
          "name": "Fallen Legion: Rise to Glory",
          "rating": 77.0,
          "summary": "\"Return to the battlefield of Fenumia, where a besieged nation stands on the brink of war. See the conflict through the lenses of Princess Cecille and Legatus Laendur, one who would restore her kingdom to its former glory and one who would see a new nation rise in its place. Combining both Fallen Legion: Flames of Rebellion and Fallen Legion: Sins of an Empire for the first time on one console, Fallen Legion: Rise to Glory includes all new art, Exemplars, monsters, bosses and challenges not found in the original releases. See the story from all sides anywhere you go in Fallen Legion: Rise to Glory, coming 2018 for Nintendo Switch!\""
        },
        {
          "id": 84825,
          "first_release_date": 1515024000000,
          "name": "Pic-a-Pix Deluxe",
          "rating": 87.0,
          "summary": "Pic-a-Pix are exciting logic puzzles that form whimsical pixel art pictures when solved. Pic-a-Pix are sometimes known by other names, such as Picross, Nonogram, Paint by Numbers, Griddlers, Hanjie and many more."
        },
        {
          "id": 85323,
          "first_release_date": 1519257600000,
          "name": "Pac-Man Championship Edition 2 Plus",
          "rating": 77.0,
          "summary": "The highly acclaimed PAC-MAN Championship Edition 2 series has finally come to Nintendo Switch in the name of PAC-MAN Championship Edition 2 PLUS!"
        },
        {
          "id": 28174,
          "first_release_date": 1509408000000,
          "name": "Monopoly for Nintendo Switch",
          "rating": 73.0,
          "summary": "Ubisoft's Monopoly for Nintendo Switch takes advantage of the console's unique features."
        },
        {
          "id": 103362,
          "first_release_date": 1528934400000,
          "name": "Arcade Archives DONKEY KONG",
          "rating": 83.0,
          "summary": "DONKEY KONG is an action game released in 1981 by Nintendo. Avoid a variety of obstacles while heading through a construction site to make it to the top and rescue Lady. Use the hammer to destroy the barrels and fire coming towards you to earn more points."
        },
        {
          "id": 117501,
          "first_release_date": 1556150400000,
          "name": "Picross S3",
          "rating": 63.0,
          "summary": "The third installment in Jupiter Corporation's Picross S series for the Switch."
        },
        {
          "id": 81145,
          "first_release_date": 1529625600000,
          "name": "Mario Tennis Aces",
          "rating": 71.5321317222551,
          "summary": "A new Mario Tennis game is bringing a new level of skill and competition to Nintendo Switch. Mario steps onto the court in classy tennis garb for intense rallies against a variety of characters in full-blown tennis battles. New wrinkles in tennis gameplay will challenge your ability to read an opponent's position and stroke to determine which shot will give you the advantage. And this time the game adds the first story mode since the Mario Tennis game on Game Boy Advance, offering a new flavor of tennis gameplay, with a variety of missions, boss battles and more"
        },
        {
          "id": 89152,
          "first_release_date": 1520467200000,
          "name": "World Conqueror X",
          "rating": 50.0,
          "summary": "EasyTech brings its studied and skillful approach to World War II strategy gaming with World Conqueror X on Nintendo Switch."
        },
        {
          "id": 67198,
          "first_release_date": 1513900800000,
          "name": "Arcade Archives VS. SUPER MARIO BROS.",
          "rating": 81.0,
          "summary": "VS. SUPER MARIO BROS. is an action game released in 1986 by Nintendo. Mario and Luigi must go on a widespread adventure in order to rescue Peach from the clutches of Bowser. This version is from the Nintendo VS.SYSTEM, and the positions of enemies and items differ from the Nintendo Entertainment System (NES) version."
        },
        {
          "id": 103052,
          "first_release_date": 1540425600000,
          "name": "Yomawari: The Long Night Collection",
          "rating": 83.0,
          "summary": "Traverse the haunting world of Yomawari: Night Alone as a young girl searches for her sister, or share in the terror facing schoolgirls Yui and Haru in Yomawari: Midnight Shadows. Uncover the mysteries plaguing a rural Japanese town, hide from the things lurking in the night, and maybe get home alive..."
        },
        {
          "id": 96393,
          "first_release_date": 1537401600000,
          "name": "SEGA AGES Sonic The Hedgehog",
          "rating": 83.0,
          "summary": "Sonic The Hedgehog includes Mega Play, previously only available in the Sonic the Hedgehog arcade game. Familiar stages will feel new again as you race against time to the finish line. It's a thrilling challenge for seasoned Sonic fans!"
        },
        {
          "id": 138235,
          "first_release_date": 1601510400000,
          "name": "Super Mario Bros. 35",
          "rating": 66.00255303608631,
          "summary": "Super Mario Bros. with a 35-player twist \nRace against time, defeat enemies, and sabotage your opponents in an online* battle to be the last Mario standing! \nClassic Super Mario Bros. gameplay gets an adrenaline boost! \nEach player is given the same timed stage, but you must defeat enemies to earn extra time and attack your opponents. Don’t forget to pick up some coins on your way—they can be used to get in-game items like power-ups. With speed, skill, and strategy, you could be the last Mario standing."
        },
        {
          "id": 107196,
          "first_release_date": 1543881600000,
          "name": "Gear.Club Unlimited 2",
          "rating": 77.0,
          "summary": "The most successful racing game on the Nintendo Switch is back \n \nWith the pedal to the metal, race along more than 1800 miles of roads! On the mountainside, through a nature park, in the middle of the desert or along the coast, defend your position over the course of more than 250 races, including championships, missions and challenges. \n \nAs you progress through the races, admire the growing collection of cars in your personal garage. Gear Club Unlimited 2 has more than 50 licensed cars from the world’s most famous manufacturers, such as the Porsche 718 Boxster, 918 Spyder, 911 GT2RS, Dodge Viper, Lotus 3-Eleven or McLaren 720s. \nPersonalize them and make them unique! You can change their appearance with the paint and bodywork, or change their driving performance with engine tuning. \n \nYou would be nothing, however, without your Club! Create and manage it with your friends, recruit the best drivers and take on rival clubs from all over the world, reach the top of the podium and enjoy exclusive content reserved for the best players. \n \nNo more borders. Drive with freedom!"
        },
        {
          "id": 115653,
          "first_release_date": 1573776000000,
          "name": "Pokémon Shield",
          "rating": 66.4358764614298,
          "summary": "Unsheathe your sword and take up your shield! \n \nThe world of Pokémon expands to include the Galar region in Pokémon Sword and Pokémon Shield!"
        },
        {
          "id": 113196,
          "first_release_date": 1545609600000,
          "name": "Aaero: Complete Edition",
          "rating": 67.0,
          "summary": "Speed through stunning, stylised environments tracing ribbons of light, releasing the energy in the music. Battle strange enemies and fight epic boss battles all driven by an incredible licensed soundtrack."
        },
        {
          "id": 28520,
          "first_release_date": 1494460800000,
          "name": "Dark Witch Music Episode: Rudymical",
          "rating": 73.0,
          "summary": "The popular spin-off from Dark Witch Story is now available on Nintendo Switch!"
        },
        {
          "id": 27916,
          "first_release_date": 1496275200000,
          "name": "Collection of Mana",
          "rating": 87.0,
          "summary": "A collection of the first 3 Seiken Densetsu games, known as the Mana series internationally, with a quick save feature added and all 3 soundtracks. \nThe games included are Seiken Densetsu (Final Fantasy Adventure), Seiken Densetsu 2 (Secret of Mana), and Seiken Densetsu 3 (Trials of Mana)."
        },
        {
          "id": 54529,
          "first_release_date": 1501718400000,
          "name": "Puzzle Adventure Blockle",
          "rating": 53.0,
          "summary": "A puzzle game."
        },
        {
          "id": 77537,
          "first_release_date": 1607040000000,
          "name": "KORG Gadget",
          "rating": 93.0,
          "summary": "Play Games. Make Music. \nA Music Creation Studio That Feels Like a Game."
        },
        {
          "id": 113568,
          "first_release_date": 1550102400000,
          "name": "OlliOlli: Switch Stance",
          "rating": 77.0,
          "summary": "With over 75 Awards and Nominations including BAFTA Best Sports Title 2015, OlliOlli: Switch Stance includes both OlliOlli and OlliOlli2: Welcome to Olliwood - bringing together the defining Skateboarding Series of this generation! \n \nMaking it’s Nintendo Switch debut, OlliOlli mixes addictive one-life gameplay with over 120 tricks and grinds to pull across 50 deviously crafted Levels, 250 Challenges, Spots Mode and Daily Grind. Not enough for you? Complete all Challenges to unlock the super skilful RAD Mode! \n \nRack up the biggest and coolest combos along the way then time your landing to perfection to rule the Leaderboards. \n \nThe iconic skater goes all green-screen with a stunning new look in OlliOlli2: Welcome to Olliwood, plucking you from the street and dropping you squarely in the middle of the big screen’s most bodacious cinematic locations! \n \nThe sequel boasts all new Ramps and Epic Hills allowing for monster air and multi-route levels. Further, OlliOlli2’s combo system has been expanded. The joy of Manuals, Reverts, Revert Manuals and Grind Switching gives you more control and expression than ever before. \n \nThe hallowed ‘Tricktionary’ also expands with new specials including 540 Shove-its, Anti-Casper Flips and Darkslides. \n \nAll of this with another 5 unique worlds, 50 Levels and 250 Challenges to tear through. Daily Grind, Spots Mode and RAD Mode also make a return to top it all off!"
        },
        {
          "id": 121419,
          "first_release_date": 1562284800000,
          "name": "Super Mega Baseball 2: Ultimate Edition",
          "rating": 87.0,
          "summary": "Accessible mechanics. Deep skill curve. Visceral pacing. Light-hearted vibe. Serious simulation. \n \nUltimate Edition includes the complete set of Super Mega Baseball 2 content and fully featured online play."
        },
        {
          "id": 79987,
          "first_release_date": 1516233600000,
          "name": "Mercenaries Saga Chronicles",
          "rating": 87.0,
          "summary": "Mercenaries Saga Chronicles is a tactical role-playing game that consists of a collection of the three entries in the Mercenary Saga games; Mercenaries Saga: Will of the White Lions, Mercenaries Saga 2: Order of the Silver Eagle and Mercenaries Saga 3: Gray Wolves of War."
        },
        {
          "id": 77648,
          "first_release_date": 1514419200000,
          "name": "SteamWorld Heist: Ultimate Edition",
          "rating": 80.0,
          "summary": "\"SteamWorld Heist: Ultimate Edition is fully optimized for Nintendo Switch™ and comes with extra content previously only available as DLC. Including a mysterious ally and a shipload of weapons, upgrades, hats, and missions. Accompanied by a catchy soundtrack by Steam Powered Giraffe, you’re in for an out-of-this-world adventure. \n \nWhat are you waiting for? Prepare for boarding!\""
        },
        {
          "id": 115283,
          "first_release_date": 1567123200000,
          "name": "Astral Chain",
          "rating": 82.607970644923,
          "summary": "ASTRAL CHAIN, a brand new action game from PlatinumGames, is coming exclusively to Nintendo Switch! As part of a police special task force, it’s up to you to fight against mysterious, alien-like creatures who have invaded the world."
        },
        {
          "id": 77177,
          "first_release_date": 1513814400000,
          "name": "One Piece: Pirate Warriors 3 - Deluxe Edition",
          "rating": 83.0,
          "summary": "The deluxe edition of One Piece: Pirate Warriors 3 for Nintendo Switch that includes the 42 pieces of DLC that were released for the PlayStation 3, 4, and Vita."
        },
        {
          "id": 99165,
          "first_release_date": 1561334400000,
          "name": "Azuran Tales: Trials",
          "rating": 70.0,
          "summary": "Azuran Tales: Trials offers challenging combat, beautiful levels and merciless enemies to overcome. Journey across the World of Azuran as you discover its many environments, lore and history in a game that blends platformers with RPG elements."
        },
        {
          "id": 78869,
          "first_release_date": 1546214400000,
          "name": "Giana Sisters: Twisted Dreams - Owltimate Edition",
          "rating": 83.0,
          "summary": "\"Giana Sisters: Twisted Dreams – Owltimate Edition offers classic 2D platforming fun in meticulously detailed 3D environments. Players can turn cute Giana into a punk version of herself at the press of a button, transforming the game’s star, the soundtrack and even the world. \n \nThis overhaul isn’t merely cosmetic: Giana’s punk persona is a critical to overcoming obstacles and solving particularly tricky situations. In her sweet incarnation, Giana whirls gracefully over obstacles and opponents, but when ‘punked up’ she smashes through stone blocks with mighty dashes and can master her environment by bouncing off walls.\""
        },
        {
          "id": 109281,
          "first_release_date": 1538006400000,
          "name": "TowerFall",
          "rating": 80.0,
          "summary": "\"TowerFall is the ultimate version of the beloved archery combat/party game, featuring all of the content from Ascension and Dark World, and several Switch-exclusive additions! \n \nInspired by classics from the golden age of couch multiplayer, TowerFall centers around hilarious, intense versus matches - best played against friends, sitting cross-legged on the floor within punching distance of each other. \n \nThe core mechanics are simple and accessible, but hard to master, with a huge amount of gameplay variants, arrow types, power-ups, and levels. And when you need a break from the competition, team up in 1-4 player co-op modes, where you’ll fight off a wide variety of monsters, enemy archers, and bosses. \n \nThe Switch version includes several new and exclusive features, including 6-player battles utilizing widescreen levels, new gameplay variants, and guest archers Madeline and her reflection Badeline from fan-favorite platformer Celeste! \""
        },
        {
          "id": 83730,
          "first_release_date": 1516838400000,
          "name": "Super One More Jump",
          "rating": 90.0,
          "summary": "Super One More Jump is a hand-crafted intense arcade platformer. Simple to learn one button controls. Hard to master levels."
        },
        {
          "id": 96202,
          "first_release_date": 1524182400000,
          "name": "The Way Remastered",
          "rating": 71.2006186876404,
          "summary": "\"A remastered version of an award-winning puzzle platformer. \n \nThe Way Remastered tells a story about a member of space explorers team who lost his beloved and cannot accept her death. During one of his expeditions he discovers ancient writings that testify the existence of a method for obtaining eternal life. Hoping to get his beloved back, he decides to return to the alien planet. However, the planet hides many secrets and dangers that he must face. \n \nA story-based puzzle platformer with stunning graphics and soundtrack made by Panu Talus.\""
        },
        {
          "id": 85576,
          "first_release_date": 1525392000000,
          "name": "Donkey Kong Country: Tropical Freeze",
          "rating": 77.9460286365329,
          "summary": "Donkey Kong, Diddy Kong, Dixie Kong and Cranky Kong return for the franchise’s debut on Nintendo Switch. This title includes all the fun and challenge of the original game, plus a new beginner-friendly mode that lets players enjoy this critically acclaimed adventure as groovy surfing simian Funky Kong. Funky Kong can double jump, hover, perform infinite rolls and even perform infinite underwater corkscrews. Thanks to his sturdy surfboard, even spikes can’t slow him down. The game launches for Nintendo Switch on May 4."
        },
        {
          "id": 69393,
          "first_release_date": 1506556800000,
          "name": "Brave Dungeon + Dark Witch's Story: COMBAT",
          "rating": 90.0,
          "summary": "A compilation of an HD version of \"Brave Dungeon\" and \"Dark Witch's Story: COMBAT\", a 3v3 strategy game."
        },
        {
          "id": 36794,
          "first_release_date": 1506038400000,
          "name": "Pokkén Tournament DX",
          "rating": 72.4906945979473,
          "summary": "Pokkén Tournament is a fighting video game and the first Pokémon title for the Nintendo Switch console. Take direct control of one of 21 prized Pokémon fighters to defeat other Pokémon in arena fights. Call upon Support Pokémon to assist in the fight, then unleash your Pokémon's unique Burst Attack to climb atop the ranks. With all new modes and new ways to battle with friends, this is your chance to become champion of the Ferrum Region!"
        },
        {
          "id": 120899,
          "first_release_date": 1564012800000,
          "name": "PICROSS LORD OF THE NAZARICK",
          "rating": 83.0,
          "summary": "A collaboration between Picross and Overlord. Experience the series Overlord as you solve Picross puzzles together with characters from the series. \n \nAfter founding the Sorcerer Kingdom, Ainz Ooal Gown and his followers meet within the Great Tomb of Nazarick to look back on their exploits. \nAwaken memories from 10 different characters as you solve Picross puzzles based on characters, monsters, and items from the story. \n \nWith 162 Picross and Mega Picross puzzles, 330 Clip Picross puzzles, and 27 Color Picross puzzles, there are over 500 puzzles to play!"
        },
        {
          "id": 105160,
          "first_release_date": 1557964800000,
          "name": "Koral",
          "rating": 70.0,
          "summary": "Dive into the beautiful underwater world as a current who's mission is bring back to life coral reefs. Solve puzzles to heal them and bring back the beauty of the ocean."
        },
        {
          "id": 83868,
          "first_release_date": 1516838400000,
          "name": "10 Second Run RETURNS",
          "rating": 83.0,
          "summary": "Reach the finish line in 10 seconds! \n \nThe legendary action game, \"10 Second Run\" is back! The rules (and controls) are simple: \"Move Sideways\" and \"Jump & Dash\" to get to the finish line in under 10 seconds! Unlock different types of stick figures as you clear the stages! Run solo or race against others in multiplayer mode! Any time, any where, with anyone, simply run, run, run! You'll be surprised how much excitement is packed in 10 seconds- and how long 10 seconds can be!"
        },
        {
          "id": 113109,
          "first_release_date": 1563494400000,
          "name": "Marvel Ultimate Alliance 3: The Black Order",
          "rating": 72.9060896412285,
          "summary": "Assemble your ultimate team of Marvel Super Heroes from a huge cast including the Avengers, the Guardians of the Galaxy, the X-Men, and more! Team up with friends to prevent galactic devastation at the hands of the mad cosmic tyrant Thanos and his ruthless warmasters, The Black Order."
        },
        {
          "id": 116795,
          "first_release_date": 1572566400000,
          "name": "Mario & Sonic at the Olympic Games Tokyo 2020",
          "rating": 85.0,
          "summary": "Mario & Sonic at the Olympic Games Tokyo 2020 is the sixth installment in the Mario & Sonic series based on the real-world 2020 Summer Olympics, which will take place in Tokyo, Japan. The game includes a number of events, including returning ones from previous Mario & Sonic titles, such as boxing, soccer, swimming, and gymnastics, and new ones, such as karate, skateboarding, sport climbing, and surfing. It will also feature a mode with 2D Events where players can compete in classic 2D versions of events from the 1964 Summer Olympics. Based off older sports games, these events are played using button controls only and will only feature eight playable characters. These 2D Events' animations reflect the 8-bit Mario and 16-bit Sonic game art style."
        },
        {
          "id": 84927,
          "first_release_date": 1534204800000,
          "name": "2064: Read Only Memories INTEGRAL",
          "rating": 77.0,
          "summary": "Neo-San Francisco, 2064 AD. Your life as a struggling journalist is interrupted by the world’s first sapient machine, a ROM (Relationship and Organizational Manager) named Turing. Together, you and the quirky robot will encounter a colorful cast of locals and overcome challenges as you uncover the city’s secrets behind the overlapping futures of technology and humanity. 2064: Read Only Memories is a new cyberpunk adventure that will take you on a journey of puzzle-solving and exploring as you investigate the mysterious world and characters of Neo-San Francisco."
        },
        {
          "id": 105590,
          "first_release_date": 1532044800000,
          "name": "VSR: Void Space Racing",
          "rating": 57.0,
          "summary": "If you're looking for your generic futuristic racer, look for it elsewhere - this game is not for the faint of heart! Impactful and challenging, VSR: Void Space Racing gives you the opportunity to fly through vast and diverse locations in outer space and prove yourself worthy of the first place!"
        },
        {
          "id": 25623,
          "first_release_date": 1503619200000,
          "name": "Monster Hunter Generations Ultimate",
          "rating": 80.06066519502329,
          "summary": "An enhanced version of Monster Hunter Generations. It features new monsters, hunting styles, and the more challenging G-Rank quests. \n \nGame data from Monster Hunter Generations can be carried over, with a one way transfer, to Monster Hunter Generations Ultimate. Game data can also be moved between the 3DS and the Switch version of the game."
        },
        {
          "id": 119590,
          "first_release_date": 1580688000000,
          "name": "Please The Gods",
          "rating": 50.0,
          "summary": "Journey to the land of the Gods in this atmospheric turn-based indie RPG. Vanquish deadly beasts of Finnish mythology, survive in the unforgiving wilderness and earn the favour of the ancient pagan Gods!"
        },
        {
          "id": 86495,
          "first_release_date": 1518652800000,
          "name": "Johnny Turbo's Arcade: Gate Of Doom",
          "rating": 60.0,
          "summary": "Gate of Doom a is classic multiplayer action RPG for one to two players. Originally release in 1990, and a noted classic arcade title from the 90s."
        },
        {
          "id": 117939,
          "first_release_date": 1562630400000,
          "name": "Hyperlight Ultimate",
          "rating": 77.0,
          "summary": "Hyperlight is an high intensity arcade action game in which you control a spaceship that fights against hordes of evil alien monsters in a virtual cosmic environment. \n \nYour spaceship has a special capability: It can travel at a Faster-Than-Light speed becoming itself the final weapon! By colliding with enemies in this state the ship can instantly destroy everything it touches! \n \nIn the game there are also plenty of other bonus, weapons and entities that can help you overcome the many difficulties you’ll be facing, including battles against terrific final bosses that await you on the dark side of the universe!"
        },
        {
          "id": 68334,
          "first_release_date": 1506556800000,
          "name": "Picross S",
          "rating": 73.0,
          "summary": "For over 20 years, Jupiter has been bringing Picross games to Nintendo handhelds. Picross S is the first for Nintendo Switch."
        },
        {
          "id": 103340,
          "first_release_date": 1536883200000,
          "name": "Xenoblade Chronicles 2: Torna - The Golden Country",
          "rating": 92.57701461388321,
          "summary": "Guide a group of legendary warriors on a journey through the tragic history that doomed a kingdom and drove a hero down a dark path 500 years before the events of the Xenoblade Chronicles 2 game. Defend yourself from Malos and his forces using all the fury of this refined battle system, allowing you to fight as both the artificial lifeforms known as Blades and their masters, the Drivers."
        },
        {
          "id": 102789,
          "first_release_date": 1527206400000,
          "name": "Jumping Joe & Friends",
          "rating": 40.0,
          "summary": "The creators of Robonauts and Astro Bears Party proudly present a new title perfect for intense playtimes with your friends and family."
        },
        {
          "id": 85154,
          "first_release_date": 1546214400000,
          "name": "Frederic 2: Evil Strikes Back",
          "rating": 53.0,
          "summary": "Defeat famous opponents in musical duels. Immerse yourself in the fantastic story of Frederic's endeavours. Catch all the Easter Eggs and subtle parodies hidden in the background. Practice your skills until perfection and become the Master of the Piano."
        },
        {
          "id": 114135,
          "first_release_date": 1561852800000,
          "name": "Guilty Gear 20th Anniversary Edition",
          "rating": 87.0,
          "summary": "The original Guilty Gear and GUILTY GEAR XX ΛCORE PLUS R reunite to celebrate 20 years of 2D anime action!"
        },
        {
          "id": 84837,
          "first_release_date": 1510876800000,
          "name": "RIVE: Ultimate Edition",
          "rating": 85.0,
          "summary": "The metal wrecking, robot hacking shooter you’ve been waiting for!"
        },
        {
          "id": 28466,
          "first_release_date": 1488499200000,
          "name": "Othello",
          "rating": 58.0,
          "summary": "GAME DETAILS \nWherever, whenever, whoever! Classic boardgame \"Othello\"! \n \nThe well-acclaimed boardgame for all ages, \"Othello\" is now on Nintendo Switch! \n \nPlay in the comfort of your home or outside, and play in a style that suits you best! \n \nA total of 16 levels of computer AI difficulty are available for Single Player Modes! \n \nHints on where the stones can be placed, and displays to show which tiles will be flipped in this move are also available to help new players understand the game better! \n \nTwo-player mode is also available! \nBoth players can play together on 1 Nintendo Switch by simply sharing the Joy-con, or simply operate directly on the Touch Screen! \nDo play with your family and friends!"
        },
        {
          "id": 105801,
          "first_release_date": 1531353600000,
          "name": "GALAK-Z: Variant S",
          "rating": 50.0,
          "summary": "GALAK-Z: Variant S is a brand new, one-of-a-kind, space-shooting action-RPG that is specially crafted to take advantage of all of the unique features of the Nintendo Switch. \n \nExperience stunning space combat from the cockpit of a sleek spaceship or a giant Mech! Battle space pirates, squish giant bugs, challenge Dark Bot bosses, and crush the evil Baron’s army of nasty Imperial troops through more than a hundred endlessly replayable missions in a full-scale story campaign. Fight against player-created squads in the Bot Battle League and earn Trophies to reap better rewards. Collect upgrades, salvage, relics, and Bots to make your spaceship and Mech even stronger, and fight to become the highest ranked pilot in the galaxy!"
        },
        {
          "id": 58591,
          "first_release_date": 1508716800000,
          "name": "Poi: Explorer Edition",
          "rating": 78.0,
          "summary": "\"Embark on a classic 3D platforming adventure as you set sail on an airship to collect Explorer Medallions and unravel the mysteries of the Milky Way Globe. Explore uncharted lands, and meet wild new characters, while on a journey to collect all the medallions and become a true Master Explorer! \n \nExplorer Edition Exclusives: \n- Extended Storyline \n- More challenging boss battles \n- Unlockable Soundtrack and Digital Art Book \n- New costumes and hats only available within the “Explorer Edition” \n- Joy-Con motion control support\""
        },
        {
          "id": 74972,
          "first_release_date": 1511222400000,
          "name": "Gear Club Unlimited",
          "rating": 77.0,
          "summary": "More than just a race, an authentic cars universe! \n \nFor the first time on Nintendo Switch, drive through an authentic world of cars with Gear.Club Unlimited. Get behind the wheel of the most incredible cars from the most prestigious manufacturers. \n \nRace through over 400 challenging races. Learn to master the controls of the world's fastest supercars and collect them in your garage: you can customize and tune them across the numerous workshops, then take them to the race track for the win! \n \nChallenge your friends, competing among up to 4 players on the same screen, or beat their times online."
        },
        {
          "id": 110062,
          "first_release_date": 1556150400000,
          "name": "SEGA AGES VIRTUA RACING",
          "rating": 93.0,
          "summary": "Take control of a formula one racing car and compete against the world’s best drivers in the first faithful reproduction of the arcade classic. Choose between the Normal Race mode that features four-to-five lap races, or put your endurance to the test by completing 20 laps in the Grand Prix Race. Your car’s performance is affected the longer you drive, so make sure you plan your pit stop strategy carefully so you can take the checkered flag! \n \nAlthough Virtua Racing has been released on many different platforms before, this version of the game is a faithful implementation of the original arcade game released in 1992."
        },
        {
          "id": 26845,
          "first_release_date": 1564099200000,
          "name": "Fire Emblem: Three Houses",
          "rating": 88.1586955388446,
          "summary": "Here, order is maintained by the Church of Seiros, which hosts the prestigious Officer’s Academy within its headquarters. You are invited to teach one of its three mighty houses, each comprised of students brimming with personality and represented by a royal from one of three territories. As their professor, you must lead your students in their academic lives and in turn-based, tactical RPG battles wrought with strategic, new twists to overcome. Which house, and which path, will you choose?"
        },
        {
          "id": 85619,
          "first_release_date": 1533772800000,
          "name": "Layton's Mystery Journey: Katrielle and the Millionaires' Conspiracy DX",
          "rating": 85.0,
          "summary": "The game centers on Katrielle Layton, the daughter of famous archaeologist and puzzle-solver Professor Hershel Layton. With the help of her assistant Ernest Greeves, she solves cases in and around London, alongside a talking dog that, for reasons unknown, only the two of them can understand."
        },
        {
          "id": 54774,
          "first_release_date": 1506556800000,
          "name": "Astro Bears Party",
          "rating": 57.0,
          "summary": "A competitive party game featuring bears in space suits"
        },
        {
          "id": 109597,
          "first_release_date": 1550707200000,
          "name": "SEGA AGES ALEX KIDD IN MIRACLE WORLD",
          "rating": 77.0,
          "summary": "A classic arcade platformer returns in SEGA AGES Alex Kidd for Nintendo Switch. \n \nOver three decades since its humble beginnings, Alex Kidd is back to smash rocks, collect items, and play Rock, Paper, Scissors with evil henchmen! The beloved boy martial artist must traverse the kingdom of Radaxian to face off against evil villain Janken the Great. Does he have what it takes to save the kingdom, or will all be lost to evil? \n \nFeaturing a new ranking system, AGES mode rewind option, two Time-Attack challenge modes, and more!"
        },
        {
          "id": 81143,
          "first_release_date": 1538006400000,
          "name": "The World Ends With You: Final Remix",
          "rating": 60.337753100814,
          "summary": "Complete the mission...or face erasure. \nThat's all Neku knows after regaining consciousness in the middle of a busy intersection without his memories. Now he and his partner must fight to survive a life-or-death game in this twisted tale with more turns than the urban labyrinth of Tokyo they're trapped in. This definitive version of Square Enix's RPG classic brings the dark story to life on the Nintendo Switch system along with a new scenario and some killer, new remixed music."
        },
        {
          "id": 27527,
          "first_release_date": 1488499200000,
          "name": "Vroom in the night sky",
          "rating": 50.0,
          "summary": "A fantasy motorcycle game by Poisoft that launches on Nintendo Switch."
        },
        {
          "id": 115934,
          "first_release_date": 1552521600000,
          "name": "Motorsport Manager for Nintendo Switch",
          "rating": 83.0,
          "summary": "In Motorsport Manager for Nintendo Switch™, the console debut for the series, you will build, customize, and lead your very own high-performance Motorsport team through 9 tiers of racing action, across three car classes to become number one. Race to win in this immersive management strategy title where real-time racing decision making and forward planning are the key to victory."
        },
        {
          "id": 78142,
          "first_release_date": 1530489600000,
          "name": "SpiritSphere DX",
          "rating": 77.0,
          "summary": "This is a game that is made to be picked up and played with friends on the Nintendo Switch! We're incredibly proud to publish the enhanced edition of SpiritSphere by Eeendhoorn and we're excited to get your hands on it!"
        },
        {
          "id": 55195,
          "first_release_date": 1547769600000,
          "name": "Travis Strikes Again: No More Heroes",
          "rating": 46.981115225736,
          "summary": "Travis Strikes Again: No More Heroes is the third game in the No More Heroes series."
        },
        {
          "id": 115276,
          "first_release_date": 1561680000000,
          "name": "Super Mario Maker 2",
          "rating": 82.2739789753119,
          "summary": "Build and play the Super Mario courses of your dreams! This sequel features a host of new tools and features—like slopes!"
        },
        {
          "id": 115284,
          "first_release_date": 1568937600000,
          "name": "The Legend of Zelda: Link's Awakening",
          "rating": 85.73244691216419,
          "summary": "Link has washed ashore on a mysterious island with strange and colorful inhabitants. To escape the island, Link must collect magical instruments across the land and awaken the Wind Fish. Explore a reimagined Koholint Island that’s been faithfully rebuilt in a brand-new art style that will entice fans and newcomers alike. Battle enemies as you conquer numerous dungeons and uncover the hidden secrets of the island. Encounter Super Mario enemies like Goombas, Piranha Plants, and more, and interact with unique locals who help Link on his adventure. As you clear dungeons throughout the main story, earn dungeon rooms (Chambers), then arrange them into custom layouts in the all-new Chamber Dungeon. Place your dungeon entrance, Nightmare room, and everything in between as you try to fulfill objectives and play through a new dungeon. Tap compatible amiibo figures to earn more Chambers and and additional Chambers throughout the game in updated mini-games, such as the river rapids, trendy game, and fishing."
        },
        {
          "id": 109455,
          "first_release_date": 1572480000000,
          "name": "Luigi's Mansion 3",
          "rating": 84.9671653805957,
          "summary": "Luigi embarks on a dream vacation with Mario and friends upon receiving an invitation to a luxurious hotel. However, his dream quickly becomes a nightmare when King Boo reveals everything had been a ploy to capture Mario and friends. With the assistance of Professor E. Gadd once again, the reluctant and cowardly hero Luigi traverses up and down treacherous floors of the now-ominous hotel on a quest to save them."
        },
        {
          "id": 109462,
          "first_release_date": 1584662400000,
          "name": "Animal Crossing: New Horizons",
          "rating": 83.912285118222,
          "summary": "Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game. Your island getaway has a wealth of natural resources that can be used to craft everything from tools to creature comforts. You can hunt down insects at the crack of dawn, decorate your paradise throughout the day, or enjoy sunset on the beach while fishing in the ocean. The time of day and season match real life, so each day on your island is a chance to check in and find new surprises all year round."
        },
        {
          "id": 89082,
          "first_release_date": 1545350400000,
          "name": "Jewel Fever 2",
          "rating": 80.0,
          "summary": "\"Jewel Fever 2\" is an addictive match-3-puzzle-game!"
        },
        {
          "id": 45392,
          "first_release_date": 1543449600000,
          "name": "SEGA AGES Out Run",
          "rating": 76.0,
          "summary": "A retro road-racing adventure for all ages! \n \nThe 3D driving game that launched a legacy returns on Nintendo Switch! Featuring new motion controls, newly added music tracks, and a new ranking system. \n \nSpeed through the streets of SEGA AGES Out Run, the award-winning title that paved the road for the racing genre. Your favorite stages and soundtrack are back. Do you have what it takes to beat the clock?"
        },
        {
          "id": 54959,
          "first_release_date": 1508371200000,
          "name": "Super Ping Pong Trick Shot",
          "rating": 73.0,
          "summary": "Try throwing a ball across a room filled with moving platforms and obstacles and into a cup!"
        },
        {
          "id": 122238,
          "first_release_date": 1590710400000,
          "name": "Xenoblade Chronicles: Definitive Edition",
          "rating": 80.59810528877391,
          "summary": "Discover the origins of Shulk as he and his companions clash against a seemingly-unstoppable mechanical menace. Wield a future-seeing blade, chain together attacks, and carefully position your party members in strategic, real-time combat as you journey across a massive world. \n \nDuring an attack from the mechanical invaders known as the Mechon, Shulk discovers that he can tap into the full power of a mysterious blade known as the Monado. With the mighty Monado in hand, Shulk sets out to defeat the Mechon once and for all. \n \nIn addition to the Mechon, you’ll run into wildlife that ranges from docile to deadly. Keep an eye on what attracts monsters’ attention to avoid unwanted conflict…or try your hand at bringing down an ultra-powerful Unique Monster. \n \nUpgrade your party as you progress through the adventure by selecting equipment, enhancing weapon skills, and using benefit-granting gems. Put your dependable companions to work by filling the party gauge to trigger a Chain Attack and attack enemies in quick succession!"
        },
        {
          "id": 74315,
          "first_release_date": 1507766400000,
          "name": "88 Heroes - 98 Heroes Edition",
          "rating": 60.0,
          "summary": "It's 8:08am on 8th August 1988, and the evil Dr. H8 has brought the world to the brink of total annihilation! His demands are simple: pay $88 octillion within 88 minutes, or Dr. H8's 88 thermo-nuclear warheads will wipe out the Earth! But who will save us in our time of need? The bravest? The boldest? No... the 88 Heroes (plus ten of their friends)! \n \nPrepare to infiltrate Dr. H8's lair with the help of the strangest, dumbest and most pointless superheroes ever! With 88 levels between you and Dr. H8, only 88 seconds to complete each level and the 88-minute Doomsday clock already ticking, lead 98 unique characters – each with their own special abilities – on a platform-hopping, enemy-smashing, danger-dodging mission to save Earth from complete destruction!"
        },
        {
          "id": 81147,
          "first_release_date": 1521676800000,
          "name": "Hyrule Warriors: Definitive Edition",
          "rating": 79.5523073057066,
          "summary": "A new, ultimate version of the exhilarating action game set in the Zelda universe will include every map and mission, plus all 29 playable characters from both the Wii U and Nintendo 3DS versions of the game, along with all of the previous paid downloadable content. Play as Link, Zelda, Midna, Skull Kid and dozens more in action-packed battles at home or on the go. Additionally, the game includes new outfits for Link and Zelda based on the Legend of Zelda: Breath of the Wild game."
        },
        {
          "id": 94983,
          "first_release_date": 1530316800000,
          "name": "Reigns: Kings & Queens",
          "rating": 90.0,
          "summary": "\"Reigns: Kings & Queens brings together dynasties of Reigns and Reigns: Her Majesty in one regal presentation for the Nintendo Switch. Sit on the throne as a benevolent (or malevolent) monarch and swipe left and right to impose your will upon the kingdom. Survive the seemingly never-ending gauntlet of requests from your advisors, peasants, allies, and enemies while maintaining balance between the influential factions of your kingdom. But beware; each decision you make might have implications and unfortunate consequences down the road that could put your reign and family's dynasty at risk!\""
        },
        {
          "id": 122338,
          "first_release_date": 1571356800000,
          "name": "Ring Fit Adventure",
          "rating": 89.7110104987917,
          "summary": "In this fitness-focused title, you'll be moving the ring and a leg strap -- both of which house a Switch Joy-Con -- to move your character through a fantasy world. \n \nAt certain intervals, you'll be thrown into battles. These so-called \"fit battles\" play out like a traditional turn-based RPG. All of your attacks are triggered by completing a specific pose or stretch, with four attack types that target different parts of your body \n \nThe world will be broken up into courses that, upon completion, reward you with experience points. Levelling up will increase your character's base stats and slowly unlock new skills that can be utilised in battle."
        },
        {
          "id": 95025,
          "first_release_date": 1522281600000,
          "name": "Johnny Turbo's Arcade: Bad Dudes",
          "rating": 60.0,
          "summary": "Rampant ninja related crimes these days... Whitehouse is not the exception..."
        },
        {
          "id": 53790,
          "first_release_date": 1511827200000,
          "name": "Resident Evil Revelations Collection",
          "rating": 91.0,
          "summary": "A bundle containing Resident Evil Revelations on a game card and download codes for the Resident Evil Revelations 2 episodes. Includes all previously released DLC for the games."
        },
        {
          "id": 84724,
          "first_release_date": 1512604800000,
          "name": "Plantera Deluxe",
          "rating": 87.0,
          "summary": "Welcome to Plantera! \n \nIn the world of Plantera you grow your own garden and breed plants and animals to earn coins with their produce. Use the coins to buy new plants and animals, and also special items and garden expansions. Watch everything grow, help planting and harvesting, buy new things, and defend your garden from sneaky magpies, rabbits, foxes, and wolves. Raise your level and the productivity of your plants and animals! Earn more and more, and create your own dream garden!"
        },
        {
          "id": 133923,
          "first_release_date": 1594944000000,
          "name": "Paper Mario: The Origami King",
          "rating": 75.9410911085667,
          "summary": "Join Mario and his new companion Olivia on a comedic adventure that will take you to the far corners of a papercraft world in Paper Mario: The Origami King on Nintendo Switch! \n \nFace off against the Origami King and his army of paper invaders, team up with some extraordinary companions and master magical powers on your quest to save the world. \n \n \nUnwrap an epic quest! \n \nTravel the land, repair the damage done by the Folded Soldiers and rescue Toads trapped in all manner of wacky scrapes! \n \nWith the help of Olivia’s paper-folding powers, use the far-reaching 1,000 Fold Arms and other paper transformations to save those imprisoned by the Origami King’s henchmen, and help restore peace to the world. \n \nPut a stop to King Olly's plans by engaging in battles which will put both your tactical thinking and puzzle solving skills to the test – against his origami army, as well as humongous bosses under his command!"
        },
        {
          "id": 115875,
          "first_release_date": 1555027200000,
          "name": "Nintendo Labo: Toy-Con 04 - VR Kit",
          "rating": 90.0,
          "summary": "“Nintendo Labo: VR Kit is another unique Nintendo Labo experience that further blends the physical and digital worlds to bring the gameplay to life,” said Doug Bowser, Nintendo of America’s Senior Vice President of Sales and Marketing. “Many of our young fans – and even some of our older ones – have yet to try virtual reality, so this is an approachable way for kids and families to get introduced to this new world.”"
        },
        {
          "id": 27239,
          "first_release_date": 1505174400000,
          "name": "Rayman Legends: Definitive Edition",
          "rating": 79.9763599525137,
          "summary": "Rayman Legends takes full advantage of the Nintendo Switch and its new controllers capabilities. Undock your Switch device and use the touch screen to take out enemies, manipulate platforms, cut ropes to clear a path and much more. With the gyroscope technology, you can move rotating platform and there are many more surprises to come!"
        }
      ],
    loading : false

}

export const gamesSlice = createSlice({
    name: "videoGames",
    initialState,
    reducers: {
        update : (state = [], { type, payload }) => {
            console.log(payload)
            let list = initialState.Alllist
            if (payload.name) {
                list = list.filter(game => game.name.toLowerCase().includes(payload.name.toLowerCase()))
            }
            if (payload.score) {
                list = list.filter(game => game.rating > payload.score * 10)
            }
            if (payload.order) {
                if (payload.order === "first_release_date") {
                    list.sort((a, b) => a.first_release_date - b.first_release_date)
                }
                else if (payload.order === "rating") {
                    list.sort((a, b) => a.rating - b.rating)
                }
                else if (payload.order === "name") {
                    list.sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
    
            if (payload.sort === true) {
                // console.log('reversed', orderList)
                list = list.reverse()
            }
            // setModlist(list)
            return ({Alllist:list, loading:false})
        }
    }
})


export const {update} = gamesSlice.actions
export default gamesSlice.reducer