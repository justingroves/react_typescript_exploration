import { useReducer } from "react";

export function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <>
      <label>
        {checked ? "checked" : "not checked"}
        <input
          type="checkbox"
          checked={checked}
          onChange={setChecked}
          data-testid="checkbox"
        />
      </label>
    </>
  );
}
