import { memo, useState } from "react";
import { priorityType, statusType } from "../../types";

const NoteFilter: React.FC = () => {
  console.log("Render Filter");

  const [priorities, setPriorities] = useState<priorityType.Type[]>([
    { id: 1, value: "Low" },
    { id: 2, value: "Medium" },
    { id: 3, value: "High" },
  ]);

  const [status, setStatus] = useState<statusType.Type[]>([
    { id: 1, value: "Todo" },
    { id: 2, value: "Doing" },
    { id: 3, value: "Done" },
  ]);

  const [textSearch, setTextSearch] = useState<string>("");
  // prettier-ignore
  const [prioritiesSearch, setPrioritiesSearch] = useState<priorityType.Value[]>(priorities.map((v) => v.value));
  // prettier-ignore
  const [statusSearch, setStatusSearch] = useState<statusType.Value[]>(status.map((v) => v.value));

  const handleSearch = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {};

  const handleReset = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setTextSearch("");
    setPrioritiesSearch(priorities.map((v) => v.value));
    setStatusSearch(status.map((v) => v.value));
  };

  return (
    <div>
      <br />
      <strong>Filter: </strong> <br />
      <i>Text: </i> <br />
      <input
        type="text"
        value={textSearch}
        onChange={(e) => setTextSearch(e.target.value)}
      />
      <br />
      <i>Priorities: </i> <br />
      {priorities.map((priority) => (
        <div key={priority.id}>
          <input
            type="checkbox"
            value={priority.value}
            checked={prioritiesSearch.includes(priority.value)}
            onChange={(e) => {
              // prettier-ignore
              setPrioritiesSearch((prev) => e.target.checked ? [...prev, e.target.value as priorityType.Value] : prev.filter((v) => v !== e.target.value));
            }}
          />
          {priority.value}
        </div>
      ))}
      <i>Status: </i> <br />
      {status.map((stat) => (
        <div key={stat.id}>
          <input
            type="checkbox"
            value={stat.value}
            checked={statusSearch.includes(stat.value)}
            onChange={(e) => {
              // prettier-ignore
              setStatusSearch((prev) => e.target.checked ? [...prev, e.target.value as statusType.Value] : prev.filter((v) => v !== e.target.value));
            }}
          />
          {stat.value}
        </div>
      ))}
      <input type="button" value="Search" onClick={handleSearch} />
      <input type="button" value="Reset" onClick={handleReset} />
    </div>
  );
};

export default memo(NoteFilter);
