function validateEmail(email) {
  if (typeof email !== 'string') return false;

  // 1) no spaces anywhere
  if (/\s/.test(email)) return false;

  // 2) must contain '@'
  const atIndex = email.indexOf('@');
  if (atIndex === -1) return false;

  // 3) non-empty local and domain parts
  const local = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);
  if (!local || !domain) return false;

  // 4) domain has a dot and not as last character
  if (!domain.includes('.') || domain.endsWith('.')) return false;

  return true;
}
module.exports = validateEmail;
