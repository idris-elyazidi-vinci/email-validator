function hasNoSpaces(s) { return !/\s/.test(s); }

function validateEmail(email) {
  if (typeof email !== 'string') return false;
  if (!hasNoSpaces(email)) return false;

  if (!email.includes('@')) return false;
  const atIndex = email.indexOf('@');
  const domain = email.slice(atIndex + 1);

  if (!hasDomainDotNotLast(domain)) return false;
  return true;
}
module.exports = validateEmail;