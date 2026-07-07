function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => alert("It works! 🚀")}
        className="rounded-xl bg-purple-600 px-8 py-4 text-xl font-bold text-white hover:bg-purple-700 transition"
      >
        Welcome to UniVerse 🚀
      </button>
    </div>
  );
}

export default App;