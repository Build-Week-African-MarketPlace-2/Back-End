
exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'Andrea', password: "Test", department: "buyer"},
    {username: 'Logan', password: "Test", department: "buyer"},
    {username: 'Micah', password: "Test", department: "seller"},
    {username: 'Hunter', password: "Test",  department: "seller"},
    {username: 'Shawn', password: "Test",  department: "seller"}
  ]);
};