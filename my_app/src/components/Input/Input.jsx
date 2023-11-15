const Input = ({ type, value, placeholder, label, onChange }) => {
    return(
        <label>
            { label }
            <input 
            type={type || "text"} 
            placeholder={placeholder} 
            onChange={(event) => onChange(event.target.value)}
            value={value} />
        </label>
    )
}

export default Input;
