import styles from "./styles.module.scss";

type RejectedProps = {
    handleCancel: () => void;
};

export default function Rejected({}: RejectedProps) {
    return (
        <div className={styles.container}>
            <b>
                Unfortunately, we were unable to offer you a spot at
                HackIllinois
            </b>
            <b>
                Email us at{" "}
                <a href="mailto:contact@hackillinois.org">
                    contact@hackillinois.org
                </a>{" "}
                if you have any questions!
            </b>
            {/* <OkButton onClick={handleCancel} /> */}
        </div>
    );
}
