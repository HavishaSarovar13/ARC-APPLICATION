const bcrypt = require('bcrypt');

  // --- CHANGE THE PASSWORD IN THE LINE BELOW ---
  const plainTextPassword = 'admin123';
  // -----------------------------------------

  const saltRounds = 10;

  bcrypt.hash(plainTextPassword, saltRounds, function(err, hash) {
      if (err) {
          console.error("Error hashing password:", err);
          return;
      }
      console.log("Your hashed password is:");
      console.log(hash);
  });