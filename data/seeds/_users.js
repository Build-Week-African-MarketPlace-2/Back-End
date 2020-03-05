
exports.seed = function(knex) {
  return knex('users')
  .truncate()
  .then (function(){
    return knex('users').insert([
    {username: 'Andrea', password: "Test", department: "buyer", user_id:"1" },
    {username: 'Logan', password: "Test", department: "buyer", user_id:"2"},
    {username: 'Micah', password: "Test", department: "seller",user_id:"3"},
    {username: 'Hunter', password: "Test",  department: "seller", user_id:"4"},
    {username: 'Shawn', password: "Test",  department: "seller", user_id:"5"}
  ]);
});
};