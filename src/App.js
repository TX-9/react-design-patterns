import { useState } from "react";
import { ControlledModal } from "./ControlledModal";
function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
    <ControlledModal 
      shouldShow={shouldShowModal}
      onRequestClose={()=>setShouldShowModal(false)}
      >
        <p1>Hello!!</p1>
    </ControlledModal>
    <button onClick={()=>setShouldShowModal(!shouldShowModal)}>
      {shouldShowModal ? "Hide" : "Show"}
    </button>
    </>
  );
}

export default App;
