const validateEmail = (email: string): boolean => {
  // Regular expression for a basic email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the provided email matches the regular expression
  return emailRegex.test(email);
}

export default validateEmail;

