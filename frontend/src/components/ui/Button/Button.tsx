import styles from "./Button.module.css";

type Props = {
    children: React.ReactNode;
    type?: "button" | "submit";
    variant?: "primary" | "secondary" | "danger";
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
}: Props) {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}