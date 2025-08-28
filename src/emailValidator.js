function validateEmail(email) {
    if (typeof email !== 'string') return false;
    if (!email.includes('@')) return false;
    return true; // autres règles plus tard
  }
  module.exports = validateEmail;