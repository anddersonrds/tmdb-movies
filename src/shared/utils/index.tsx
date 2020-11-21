export const getJustYear = (date: string) => {
  return date.substr(0, 4);
};

export const fixRating = (value: number) => {
  const rating = value.toString();
  if (rating.length === 1) {
    return rating.padEnd(3, '.0');
  }
  return value;
};

export const getLocaleDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('pt-br');
  return formattedDate;
};

export const getSmallImage = (link: string) => {
  return `https://image.tmdb.org/t/p/w342/${link}`;
};

export const getBigImage = (link: string) => {
  return `https://image.tmdb.org/t/p/w500/${link}`;
};