import * as priorityType from "./priority";
import * as statusType from "./status";

export interface Type {
  id: string;
  value: string;
  status: statusType.Value;
  priority: priorityType.Value;
  createdAt: string;
}
