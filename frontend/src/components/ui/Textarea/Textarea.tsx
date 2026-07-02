import styles from "./Textarea.module.css";

type Props =
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(props: Props) {
    return (
        <textarea
            {...props}
            className={styles.textarea}
        />
    );
}