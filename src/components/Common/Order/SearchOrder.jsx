import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate("/cart");
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="py-4">
      <input
        className="sm:w-68 focus:ring-opacity-500 w-1/5 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-50"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
