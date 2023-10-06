import buttonStyles from "../styles/components/buttonStyles.module.css";

interface ButtonProps {
    buttonText: string;
}

export default function Button(props: ButtonProps) {
    return <button className={buttonStyles.button}>{props.buttonText}</button>
}