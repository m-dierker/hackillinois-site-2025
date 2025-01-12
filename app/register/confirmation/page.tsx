import React from "react";
import styles from "./styles.module.scss";
import Background from "@/components/Registration/Background";
import OlympianButton from "@/components/OlympianButton/OlympianButton";
import ProgressBar from "@/components/Registration/ProgressBar";

const Confirmation: React.FC = () => {
    return (
        <main className={styles.container}>
            <Background />
            <div className={styles.contentWrapper}>
                <ProgressBar furthestPage={5} />
                <div className={styles.content}>
                    <h1 className={styles.title}>Application Submitted!</h1>
                    <p className={styles.message}>
                        Thank you for signing up for HackIllinois 2024! Please
                        check the status of your account in your email.
                    </p>
                    <p className={styles.follow}>
                        Be sure to follow our Instagram (
                        <a
                            href="https://www.instagram.com/hackillinois"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            @hackillinois
                        </a>
                        ) and X (
                        <a
                            href="https://twitter.com/hackillinois"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            @hackillinois
                        </a>
                        ) for additional information!
                    </p>
                </div>
                <OlympianButton text="Profile" link="/profile"></OlympianButton>
            </div>
        </main>
    );
};

export default Confirmation;
