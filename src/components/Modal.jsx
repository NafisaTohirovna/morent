
export default function Modal({ children, ToggleModal }) {
  return (
    <>
      <div className="modal-container" onClick={ToggleModal}></div>
      <div className="modal-content">
      
        <span className="close-modal" onClick={ToggleModal}>
          &times;
        </span>
        {children}
      </div>
    </>
  );
}
