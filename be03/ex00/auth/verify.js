const username = (username) => {
  if (/^[0-9a-z]*$/.test(username) && username.length >= 6) return true;
  console.log(1);
  return false;
};

const password = (password) => {
  if (
    /^[0-9a-zA-Z]*$/.test(password) &&
    /[0-9]/.test(password) &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    password.length >= 8
  )
    return true;
  return false;
};

const email = (email) => {
  if (
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      email
    )
  )
    return true;
  return false;
};

const errorJson = (err, msg) => {
  return JSON.stringify({
    error: err,
    message: msg,
  });
};

module.exports = { username, password, email, errorJson };
