
exports.seed = function(knex) {
  return knex('items').truncate()
  .then(function(){
    return knex('items').insert ([
    {name: 'Neon Wrap Bracelet', description: "silver and green neon", price: 12, location: "Lagos", category: "Jewerly" , id: 3},
    {name: 'DJembe Drum', description: "Hand carved", price: 60, location: "West Africa", category: "Instruments", id: 2},
    {name: 'Tassel Earring', description: "Green and red bets", price: 12, location: "Niger", category: "Jewerly", id: 2},
    {name: 'Kiondo Bag', description: "Different colors hand made", price: 5, location: "Sawa Sawa", category: "Accesories", id: 2},
    {name: 'Horned Melon', description: "seed testing data", price: 7, location: "Kalahari", category: "Fruits", id: 2},
    {name: 'Avacados', description: "seed testing data", price: 8, location: "Luanda", category: "Fruits", id: 3},
    {name: 'Coffee(Arabic)', description: "seed testing data", price: 3, location: "Juba", category: "Coffee", id: 2},
    {name: 'Chic Pea', description: "seed testing data", price: 9, location: "Cape Town", category: "Peas", id: 2},
    {name: 'Cassava Chips', description: "seed testing data", price: 6, location: "Beira", category: "Roots & Tubers", id: 1},
    {name: 'Ground Nuts', description: "seed testing data", price: 6, location: "Juba", category: "Seeds & Nuts", id: 2},
    {name: 'Cabbages', description: "seed testing data", price: 9, location: "Sauti", category: "Vegetables", id: 2}
  ]);
});
};