interface InputProps {
    name: string;
    required: boolean;
    type: string;
    placeholder: string;  
}
  
const InputSession: React.FC<InputProps> = ({name, required, type, placeholder}) => {
    return (
        <input 
        name={name} 
        required={required} 
        type={type} 
        placeholder={placeholder} 
        className="border-2 rounded-sm"  
        />
    )
}

export default InputSession;