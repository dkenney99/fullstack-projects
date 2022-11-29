const SearchFilter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input onChange={props.handleFilter} value={props.filteredPeople} />
    </div>
  );
};
export default SearchFilter;
