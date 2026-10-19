
function PasDecrementation(props) {
  return (
    <div>
      <label>Pas de décrémentation : </label>

      <select
        value={props.pas}
        onChange={(e) =>
          props.newpas(Number(e.target.value))
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}

export default PasDecrementation;
