import styles from './Button.module.css'

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit'
    disabled?: boolean
    variant?: string
    color?: string
}

export default function Button({
    type,
    disabled,
    variant,
    color,
    ...props
}: ButtonProps) {
    const className = styles.button
        + (variant && ` ${styles[variant]}`)
        + (color && ` ${styles[color]}`)

    return (
        <button
            className={className}
            type={type}
            disabled={disabled}
            {...props}
        >

            {props.children}

        </button>
    )
}