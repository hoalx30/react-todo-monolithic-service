import { useDispatch } from "react-redux";
import { noteSlices } from "../../features/note";
import {
  useCancelMutation,
  useDoneMutation,
  useFinishMutation,
  useRemoveMutation,
} from "../../features/note/apis";
import { noteType } from "../../types";

interface NoteItemProps {
  data: noteType.Type;
}

const NoteItem: React.FC<NoteItemProps> = ({ data }) => {
  console.log("Render Item");

  const dispatch = useDispatch();

  const [doneNote, { isLoading: isDoing }] = useDoneMutation();
  const [finishNote, { isLoading: isFinish }] = useFinishMutation();
  const [cancelNote, { isLoading: isCancel }] = useCancelMutation();
  const [removeNote, { isLoading: isRemove }] = useRemoveMutation();

  const isProcessing = isDoing || isFinish || isCancel || isRemove;

  const { id, value, status, priority, createdAt } = data;

  const handleDoNote = async () => {
    await doneNote(id);
    dispatch(noteSlices.actions.do(id));
  };
  const handleFinishNote = async () => {
    finishNote(id);
    dispatch(noteSlices.actions.finish(id));
  };
  const handleCancelNote = async () => {
    cancelNote(id);
    dispatch(noteSlices.actions.cancel(id));
  };
  const handleDeleteNote = async () => {
    removeNote(id);
    dispatch(noteSlices.actions.delete(id));
  };

  return (
    <tr>
      <td style={{ width: "20%" }}>{id}</td>
      <td style={{ width: "10%" }}>{value}</td>
      <td style={{ width: "10%" }}>{status}</td>
      <td style={{ width: "10%" }}>{priority}</td>
      <td style={{ width: "20%" }}>{new Date(createdAt).toLocaleString()}</td>
      <td style={{ width: "30%" }}>
        <input type="button" value="Do" onClick={handleDoNote} />
        <input type="button" value="Finish" onClick={handleFinishNote} />
        <input type="button" value="Cancel" onClick={handleCancelNote} />
        <input type="button" value="Remove" onClick={handleDeleteNote} />
      </td>
      <br />
      {isProcessing && (
        <tr>
          <td colSpan={6}>Processing...</td>
        </tr>
      )}
    </tr>
  );
};

export default NoteItem;
