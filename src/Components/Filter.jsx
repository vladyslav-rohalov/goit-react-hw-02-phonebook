export default function Filter({ filter, onFilterChange }) {
  return (
    <label>
      Find contacts by name
      <input value={filter} onChange={onFilterChange} type="text"></input>
    </label>
  );
}
