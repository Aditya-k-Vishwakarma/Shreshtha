export const getUserRole = (email: string): 'NSH' | 'ICH' | 'SPO' | 'USER' => {
  if (email.endsWith('.nsh')) return 'NSH';
  if (email.endsWith('.ich')) return 'ICH';
  if (email.endsWith('.spo')) return 'SPO';
  return 'USER';
};

export const isValidEmail = (email: string): boolean => {
  const validDomains = ['.nsh', '.ich', '.spo', '@gmail.com'];
  return validDomains.some(domain => email.endsWith(domain));
};