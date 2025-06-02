type ButtonProps = {
    onClick: () => void
    disabled?: boolean;
    label: string
    addClass?: string
}

const CounterButton = ({onClick, disabled, label, addClass = "bg-black"}: ButtonProps) => {
    return (
        <>
            <button
                className={"bg-black disabled:bg-gray-600 text-white py-2 px-4 " + addClass}
                onClick={onClick}
                disabled={disabled}
                >
                {label}
            </button>
        </>
    )
}

export default CounterButton