# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
movies = [
  {"title"=>"Apocalypto", "year"=>2006, "overview"=>"Set in the Mayan civilization, when a man's idyllic presence is brutally disrupted by a violent invading force, he is taken on a perilous journey to a world ruled by fear and oppression where a harrowing end awaits him. Through a twist of fate and spurred by the power of his love for his woman and his family he will make a desperate break to return home and to ultimately save his way of life.", "start_year"=>1510, "end_year"=>1511, "lat"=>18.4344462971078, "lng"=>-95.382080078125, "poster_path"=>"/5BTFXR96hcBzmJvd9FwNayV79Xu.jpg"},
  {"title"=>"The King's Speech", "year"=>2010, "overview"=>"The King's Speech tells the story of the man who became King George VI, the father of Queen Elizabeth II. After his brother abdicates, George ('Bertie') reluctantly assumes the throne. Plagued by a dreaded stutter and considered unfit to be king, Bertie engages the help of an unorthodox speech therapist named Lionel Logue. Through a set of unexpected techniques, and as a result of an unlikely friendship, Bertie is able to find his voice and boldly lead the country into war.", "start_year"=>1925, "end_year"=>1939, "lat"=>51.5010286043522, "lng"=>-0.142454652827496, "poster_path"=>"/nkFTbA1XjKWo9LCTaV1hV2Lsgr1.jpg"},
  {"title"=>"Troy", "year"=>2004, "overview"=>"In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.", "start_year"=>-1194, "end_year"=>-1184, "lat"=>39.9450938568363, "lng"=>26.2310411430299, "poster_path"=>"/edMlij7nw2NMla32xskDnzMCFBM.jpg"},
  {"title"=>"The Help", "year"=>2011, "overview"=>"Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family's struggles with money and her desperate need for jobs; and Eugenia \"Skeeter\" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around \"the help\"; yet they are always kept at a certain distance because of racial lines.", "start_year"=>1962, "end_year"=>1964, "lat"=>32.2931255014035, "lng"=>-90.1875208622096, "poster_path"=>"/6u85CuvnbrzWMhKbGk4Bm5RnO3V.jpg"},
  {"title"=>"The Patriot", "year"=>2000, "overview"=>"After proving himself on the field of battle in the French and Indian War, Benjamin Martin wants nothing more to do with such things, preferring the simple life of a farmer. But when his son Gabriel enlists in the army to defend their new nation, America, against the British, Benjamin reluctantly returns to his old life to protect his son.", "start_year"=>1776, "end_year"=>1776, "lat"=>32.8456504824598, "lng"=>-79.9744415283203, "poster_path"=>"/tgXOraQmKatqrVs2KMgnNn6QpO.jpg"},
  {"title"=>"Lincoln", "year"=>2012, "overview"=>"A revealing drama that focuses on the 16th President's tumultuous final months in office. In a nation divided by war and the strong winds of change, Lincoln pursues a course of action designed to end the war, unite the country and abolish slavery. With the moral courage and fierce determination to succeed, his choices during this critical moment will change the fate of generations to come.", "start_year"=>1865, "end_year"=>1865, "lat"=>38.8973192677702, "lng"=>-77.0365542400153, "poster_path"=>"/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg"},
  {"title"=>"Lawrence of Arabia", "year"=>1962, "overview"=>"The story of British officer T.E. Lawrence's mission to aid the Arab tribes in their revolt against the Ottoman Empire during the First World War. Lawrence becomes a flamboyant, messianic figure in the cause of Arab unity but his psychological instability threatens to undermine his achievements.", "start_year"=>1916, "end_year"=>1918, "lat"=>33.5133816298468, "lng"=>36.2766279132099, "poster_path"=>"/j21UXCOq0EbV8EPTtmPn1CGePfB.jpg"},
  {"title"=>"The Post", "year"=>2017, "overview"=>"A cover-up that spanned four U.S. Presidents pushed the country's first female newspaper publisher and a hard-driving editor to join an unprecedented battle between journalist and government. Inspired by true events.", "start_year"=>1971, "end_year"=>1971, "lat"=>41.0324877616004, "lng"=>-73.7666724085881, "poster_path"=>"/h4XG3g6uMMPIBPjAoQhC2QIMdkl.jpg"},
  {"id"=>14, "title"=>"Darkest Hour", "year"=>2017, "overview"=>"A thrilling and inspiring true story begins on the eve of World War II as, within days of becoming Prime Minister of Great Britain, Winston Churchill must face one of his most turbulent and defining trials: exploring a negotiated peace treaty with Nazi Germany, or standing firm to fight for the ideals, liberty and freedom of a nation. As the unstoppable Nazi forces roll across Western Europe and the threat of invasion is imminent, and with an unprepared public, a skeptical King, and his own party plotting against him, Churchill must withstand his darkest hour, rally a nation, and attempt to change the course of world history.", "start_year"=>1940, "end_year"=>1945, "lat"=>51.4992423239064, "lng"=>-0.124729314215756, "poster_path"=>"/xa6G3aKlysQeVg9wOb0dRcIGlWu.jpg"},
  {"title"=>"Enemy at the Gates", "year"=>2001, "overview"=>"Enemy at the Gates is a war film from Jean-Jacques Annaud from 2001 that takes place during the battle of Stalingard in World War II between the Russians and the Germans.", "start_year"=>1942, "end_year"=>1943, "lat"=>59.9313186207284, "lng"=>30.325517894985, "poster_path"=>"/9cSoNnB31hGY2mL78VT8mAbz6nR.jpg"},
  {"title"=>"Braveheart", "year"=>1995, "overview"=>"Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.", "start_year"=>1280, "end_year"=>1340, "lat"=>56.1160585886139, "lng"=>-3.93592827487009, "poster_path"=>"/2qAgGeYdLjelOEqjW9FYvPHpplC.jpg"},
  {"title"=>"Black Death", "year"=>2010, "overview"=>"As the plague decimates medieval Europe, rumours circulate of a village immune from the plague. There is talk of a necromancer who leads the village and is able to raise the dead. A fearsome knight joined by a cohort of soldiers and a young monk are charged by the church to investigate. Their journey is filled with danger, but it's upon entering the village that their true horror begins.", "start_year"=>1348, "end_year"=>1348, "lat"=>53.3375106294508, "lng"=>-1.05415375512121, "poster_path"=>"/gXRERDpyT9s3m2yk6wNmrTWbZfG.jpg"},
  {"title"=>"The Eagle", "year"=>2011, "overview"=>"In 140 AD, twenty years after the unexplained disappearance of the entire Ninth Legion in the mountains of Scotland, young centurion Marcus Aquila (Tatum) arrives from Rome to solve the mystery and restore the reputation of his father, the commander of the Ninth. Accompanied only by his British slave Esca (Bell), Marcus sets out across Hadrian's Wall into the uncharted highlands of Caledonia - to confront its savage tribes, make peace with his father's memory, and retrieve the lost legion's golden emblem, the Eagle of the Ninth.", "start_year"=>140, "end_year"=>141, "lat"=>54.9823282577069, "lng"=>-2.58769773972426, "poster_path"=>"/1e3SKFIEy8zPYICzQXBqeKM6xx8.jpg"},
  {"title"=>"War Horse", "year"=>2011, "overview"=>"Follows a young man named Albert and his horse, Joey, and how their bond is broken when Joey is sold to the cavalry and sent to the trenches of World War One. Despite being too young to enlist, Albert heads to France to save his friend.", "start_year"=>1912, "end_year"=>1918, "lat"=>50.8576482083408, "lng"=>-3.61865758371835, "poster_path"=>"/6wMoQyJddEiLCzLUHiX7LNWhDol.jpg"}
]

Movie.delete_all

movies.each {|movie| Movie.create(movie)}

time_periods = [
  'Common Modern',
  'European Archaic',
  'European Classical',
  'European Middle',
  'European Early Modern',
  'European Long 19th',
  'American',
  'Chinese',
  'Middle Eastern',
  'Egyptian',
]

common_modern = PeriodFilter.create({name: 'Common Modern'})
american = PeriodFilter.create({name: 'American'})
european_archaic = PeriodFilter.create({name: 'European Archaic'})
european_classical = PeriodFilter.create({name: 'European Classical'})
european_middle = PeriodFilter.create({name: 'European Middle'})
european_early_modern = PeriodFilter.create({name: 'European Early Modern'})
chinese = PeriodFilter.create({name: 'Chinese'})
middle_eastern = PeriodFilter.create({name: 'Middle Eastersn'})
egyptian = PeriodFilter.create({name: 'Egyptian'})

TimePeriod.create({name: "World War I", start_year: 1914, end_year: 1918, period_filter_id: common_modern.id})
TimePeriod.create({name: "Interwar Period", start_year: 1918, end_year: 1939, period_filter_id: common_modern.id})
TimePeriod.create({name: "World War II", start_year: 1939, end_year: 1945, period_filter_id: common_modern.id})
TimePeriod.create({name: "Fifties", start_year: 1950, end_year: 1959, period_filter_id: common_modern.id})
TimePeriod.create({name: "Sixties", start_year: 1960, end_year: 1969, period_filter_id: common_modern.id})
TimePeriod.create({name: "Seventies", start_year: 1970, end_year: 1979, period_filter_id: common_modern.id})
TimePeriod.create({name: "Eighties", start_year: 1980, end_year: 1989, period_filter_id: common_modern.id})
TimePeriod.create({name: "Nineties", start_year: 1990, end_year: 1999, period_filter_id: common_modern.id})
TimePeriod.create({name: "Two-Thousands", start_year: 2000, end_year: 2009, period_filter_id: common_modern.id})
TimePeriod.create({name: "Two-tens", start_year: 2010, end_year: 2019, period_filter_id: common_modern.id})

TimePeriod.create({name: "Pre-Columbian Era", start_year: -3000, end_year: 1492, period_filter_id: american.id})
TimePeriod.create({name: "Exploration and Colonization", start_year: 1492, end_year: 1763, period_filter_id: american.id})
TimePeriod.create({name: "Rvolutionary Era", start_year: 1763, end_year: 1789, period_filter_id: american.id})
TimePeriod.create({name: "Civil War and Reconstruction", start_year: 1860, end_year: 1877, period_filter_id: american.id})
TimePeriod.create({name: "Gilded Age", start_year: 1876, end_year: 1900, period_filter_id: american.id})
TimePeriod.create({name: "Progressive Era", start_year: 1890, end_year: 1920, period_filter_id: american.id})
TimePeriod.create({name: "World War I", start_year: 1914, end_year: 1918, period_filter_id: american.id})
TimePeriod.create({name: "Roaring Twenties", start_year: 1920, end_year: 1929, period_filter_id: american.id})
TimePeriod.create({name: "Great Depression", start_year: 1929, end_year: 1941, period_filter_id: american.id})
TimePeriod.create({name: "World War II", start_year: 1939, end_year: 1945, period_filter_id: american.id})
TimePeriod.create({name: "Cold War", start_year: 1945, end_year: 1989, period_filter_id: american.id})
TimePeriod.create({name: "Postwar Boom", start_year: 1946, end_year: 1959, period_filter_id: american.id})
TimePeriod.create({name: "Great Society", start_year: 1960, end_year: 1968, period_filter_id: american.id})
TimePeriod.create({name: "Civil Rights Era", start_year: 1954, end_year: 1968, period_filter_id: american.id})
TimePeriod.create({name: "Korean War", start_year: 1950, end_year: 1953, period_filter_id: american.id})
TimePeriod.create({name: "Vietnam War", start_year: 1954, end_year: 1975, period_filter_id: american.id})
TimePeriod.create({name: "War on Terror", start_year: 2001, end_year: 2018, period_filter_id: american.id})

TimePeriod.create({name: "Bronze Age", start_year: -3000, end_year: -1050, period_filter_id: european_archaic.id})
TimePeriod.create({name: "Iron Age", start_year: -1050, end_year: 500, period_filter_id: european_archaic.id})
TimePeriod.create({name: "Greek Expansion", start_year: -1050, end_year: -776, period_filter_id: european_archaic.id})
TimePeriod.create({name: "Archaic Greek Period", start_year: -776, end_year: -480, period_filter_id: european_archaic.id})

TimePeriod.create({name: "Classical Greece", start_year: -480, end_year: -399, period_filter_id: european_classical.id})
TimePeriod.create({name: "Macedonian Era", start_year: -399, end_year: -323, period_filter_id: european_classical.id})
TimePeriod.create({name: "Hellenistic Greece", start_year: -323, end_year: -146, period_filter_id: european_classical.id})
TimePeriod.create({name: "Roman Kingdom", start_year: -753, end_year: -509, period_filter_id: european_classical.id})
TimePeriod.create({name: "Roman Republic", start_year: -509, end_year: -27, period_filter_id: european_classical.id})
TimePeriod.create({name: "Roman Empire", start_year: -27, end_year: 284, period_filter_id: european_classical.id})
TimePeriod.create({name: "Late Classical", start_year: 284, end_year: 500, period_filter_id: european_classical.id})
TimePeriod.create({name: "Barbarian Invasions", start_year: 300, end_year: 700, period_filter_id: european_classical.id})

TimePeriod.create({name: "Byzantine Era", start_year: 330, end_year: 1453, period_filter_id: european_middle.id})
TimePeriod.create({name: "Early Middle Ages", start_year: 476, end_year: 1066, period_filter_id: european_middle.id})
TimePeriod.create({name: "Dark Ages", start_year: 476, end_year: 800, period_filter_id: european_middle.id})
TimePeriod.create({name: "Viking Age", start_year: 793, end_year: 1066, period_filter_id: european_middle.id})
TimePeriod.create({name: "High Middle Ages", start_year: 1066, end_year: 1300, period_filter_id: european_middle.id})
TimePeriod.create({name: "Late Middle Ages", start_year: 1300, end_year: 1453, period_filter_id: european_middle.id})
TimePeriod.create({name: "The Renaissance", start_year: 1300, end_year: 1600, period_filter_id: european_middle.id})

TimePeriod.create({name: "Age of Discovery", start_year: 1400, end_year: 1770, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Polish Golden Age", start_year: 1507, end_year: 1572, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Golden Age of Piracy", start_year: 1650, end_year: 1730, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Elizabethan Era", start_year: 1588, end_year: 1603, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Protestand Reformation", start_year: 1517, end_year: 1648, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Industrial Revolution", start_year: 1760, end_year: 1840, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Jacobean Era", start_year: 1603, end_year: 1625, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Petrine Era", start_year: 1689, end_year: 1725, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Age of Enlightenment", start_year: 1650, end_year: 1789, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Age of Revolution", start_year: 1774, end_year: 1849, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "Victorian Era", start_year: 11837, end_year: 1901, period_filter_id: european_early_modern.id})
TimePeriod.create({name: "British Hegemony", start_year: 1815, end_year: 1914, period_filter_id: european_early_modern.id})
