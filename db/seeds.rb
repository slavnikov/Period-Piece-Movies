# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative 'extracted_db.rb'

Movie.delete_all

EXTRACTED_DB.each {|movie| Movie.create(movie)}

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
