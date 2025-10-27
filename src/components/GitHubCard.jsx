import React from 'react';

export default function GithubCard({ username = "octocat", isDarkMode }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("User not found");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <div className={`p-6 rounded-b-2xl shadow-lg min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDarkMode ? "bg-blue-900 shadow-blue-700/50 text-white" : "bg-blue-200 shadow-blue-200 text-gray-900"
      }`}>
        <p className="text-center text-lg font-medium">Loading GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`p-6 rounded-b-2xl shadow-lg min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isDarkMode ? "bg-blue-900 shadow-blue-700/50 text-red-400" : "bg-blue-200 shadow-blue-200 text-red-600"
      }`}>
        <p className="text-center text-lg font-medium">{error}</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className={`relative w-full rounded-b-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      isDarkMode ? "bg-gradient-to-br from-blue-900 to-blue-800 text-white" : "bg-gradient-to-br from-blue-200 to-blue-100 text-gray-900"
    }`}>
      
      {/* Top Banner / Title Area */}
      <div className="absolute top-0 left-0 w-full h-16 bg-blue-500 flex items-center justify-center rounded-t-2xl shadow-md">
        <h2 className="text-xl md:text-2xl font-bold text-white">GitHub Profile</h2>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4 mt-16 px-6">
        <img
          src={data.avatar_url}
          alt={data.login}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
        <div>
          <h3 className="text-lg md:text-xl font-bold">{data.login}</h3>
          <p className="text-sm md:text-base">{data.bio || "No bio available"}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-6 flex gap-4 justify-around px-6 pb-6">
        <div className="flex flex-col items-center bg-white/20 px-4 py-2 rounded-full shadow-sm">
          <p className="text-xl font-bold">{data.public_repos}</p>
          <p className="text-sm">Repos</p>
        </div>
        <div className="flex flex-col items-center bg-white/20 px-4 py-2 rounded-full shadow-sm">
          <p className="text-xl font-bold">{data.followers}</p>
          <p className="text-sm">Followers</p>
        </div>
        <div className="flex flex-col items-center bg-white/20 px-4 py-2 rounded-full shadow-sm">
          <p className="text-xl font-bold">{data.following}</p>
          <p className="text-sm">Following</p>
        </div>
      </div>
    </div>
  );
}
