const SearchFilter = (props) => {
  return (
    <div className="my-5 block text-lg font-medium text-gray-700">
      filter shown with{" "}
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={props.handleFilter}
        value={props.filteredPeople}
      />
    </div>
  );
};
export default SearchFilter;
