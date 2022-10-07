import { useEffect, useRef, useState } from "react";
import { Modal as BsModal } from "bootstrap";

function Modal({ title, children, open, onClose }) {
  // React Hook
  // useState() เมื่อ state เปลี่ยน จะเกิดการ rerender
  // useRef() เมื่อค่า ref  เปลี่ยน จะไม่เกิดการ rerender / ถ้า components มีการ rerender ไปกี่รอบก้ตาม ค่า useRef จะมีค่าเดิมเสมอ ถ้าไม่ไป reassign

  const modalEl = useRef(); // ทำให้เราสามารถ return {current:ค่าใน()}
  const [modal, setModel] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModel(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      return modal?.show();
    }
    modal?.hide(); // จังหวะที่ render ครั้งแรก ตัว modalObj จะมีค่าเป็น null ทำให้ error เพราะอัพเดท state ไม่ทัน จึงใส่ ? คือให้มันมีค่าแล้วเรียกใช้
  }, [open, modal]);

  return (
    <div className="modal fade" tabIndex="-1" ref={modalEl} onClick={onClose}>
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} // หยุดการ click ที่ชั้นนี้ ไม่่ให้ผลของการ click ออกไปนอก parent
      >
        {/* set position Modal ว่าจะโชว์ Modal ที่ตำแหน่งไหน */}
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <button type="button" className="btn-close invisible"></button>
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          {/* Modal Body */}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
