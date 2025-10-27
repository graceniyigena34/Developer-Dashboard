export async function fetchGitHubUser() {
  // Force it to always fetch your real GitHub data
  const realUsername = "graceniyigena34"; // 🔹 replace this with your real GitHub username
  const url = `https://api.github.com/users/${encodeURIComponent(realUsername)}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API error: ${res.status} ${text}`);
  }
  return res.json();
}
export async function fetchWeatherByCoords(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather API error");
  return res.json();
}

// Convert Open-Meteo weather code to readable description
export function weatherCodeToText(code){
const mapping = {
    0:"Clear",
    1:"Mainly clear",
    2:"Partly cloudy",
    3:"Overcast",
    45:"Fog",
    48:"Depositing rime fog",
     51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense",
    61: "Rain: Slight",
    63: "Rain: Moderate",
    65: "Rain: Heavy",
    80: "Rain showers: Slight",
    81: "Rain showers: Moderate",
    82: "Rain showers: Violent",
};
return mapping[code] || "unknown";




}