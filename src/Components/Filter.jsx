import { Input, Label } from './Phonebook.styled';

export default function Filter({ filter, onFilterChange }) {
  return (
    <Label>
      Find contacts by name
      <Input value={filter} onChange={onFilterChange} type="text"></Input>
    </Label>
  );
}
