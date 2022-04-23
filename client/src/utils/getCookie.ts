export const getCookie = (cookieKey: string): string => {
  let returnedCookie = '';
  const cookieName = `${cookieKey}=`;

  const cookieArray = document.cookie.split(';');

  for (let cookie of cookieArray) {
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }

    if (cookie.indexOf(cookieName) == 0) {
      returnedCookie = cookie.substring(cookieName.length, cookie.length);
    }
  }
  return returnedCookie;
};
