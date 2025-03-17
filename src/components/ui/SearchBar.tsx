
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search...'
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSearch} className="relative mb-4 animate-fade-in">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-spotify-text-gray"
        />
        <input
          type="text"
          className="bg-[#333333] text-white w-full py-2 pl-10 pr-10 rounded-0 focus:outline-none focus:ring-1 focus:ring-[#1DB954]/50 border border-[#444444]"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-spotify-text-gray"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
