
exports.seed = function(knex) {
  return knex('items').truncate()
  .then(function(){
    return knex('items').insert ([
    {name: 'Neon Wrap Bracelet', description: "silver and green neon", price: 12, location: "Lagos", category: "Jewerly",user_id:"3" },
    {name: 'DJembe Drum', description: "Hand carved", price: 60, location: "West Africa", category: "Instruments",user_id:"3"},
    {name: 'Tassel Earring', description: "Green and red bets", price: 12, location: "Niger", category: "Jewerly",user_id:"3"},
    {name: 'Kiondo Bag', description: "Different colors hand made", price: 5, location: "Sawa Sawa", category: "Accesories",user_id:"4"},
    {name: 'Horned Melon', description: "seed testing data", price: 7, location: "Kalahari", category: "Fruits",user_id:"3"},
    {name: 'Avacados', description: "seed testing data", price: 8, location: "Luanda", category: "Fruits",user_id:"4"},
    {name: 'Coffee(Arabic)', description: "seed testing data", price: 3, location: "Juba", category: "Coffee",user_id:"5"},
    {name: 'Chic Pea', description: "seed testing data", price: 9, location: "Cape Town", category: "Peas",user_id:"4"},
    {name: 'Cassava Chips', description: "seed testing data", price: 6, location: "Beira", category: "Roots & Tubers",user_id:"5"},
    {name: 'Ground Nuts', description: "seed testing data", price: 6, location: "Juba", category: "Seeds & Nuts",user_id:"4"},
    {name: 'Cabbages', description: "seed testing data", price: 9, location: "Sauti", category: "Vegetables",user_id:"3"}
  ]);
});
};