import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
    //extends onClose props, that can handle the state of backdrop
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)} 
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, portalElement
            )}
        </>
    );
};

export default Modal;
