const API_KEY = "F8kM2tovDbHRuBZgTIBrXEV5RFzBLyhdBNJunc14";

export const getApodData = async (date) => {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  if (date) {
    url += `&date=${date}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Veri alınamadı");
  }

  return response.json();
};
