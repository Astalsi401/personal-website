db.createUser({
  user: "user1",
  pwd: "123",
  roles: [{ role: "readWrite", db: "mydb" }],
});
