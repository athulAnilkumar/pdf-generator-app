export const environment = {
  production: false,
  username: (window as any)['env']?.USERNAME,
  password: (window as any)['env']?.PASSWORD,
};
