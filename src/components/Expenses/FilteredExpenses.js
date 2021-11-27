import "./FilteredExpenses.css";

const FilteredExpenses = (props) => {
  console.log(`filter year type ${typeof props.selectedyear}`);
  return (
    <div className="filterelement">
      <label>Filter by year</label>

      <select
        value={props.selectedyear}
        onChange={(e) => props.onChange(parseInt(e.target.value))}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default FilteredExpenses;
