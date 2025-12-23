const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default Search;
