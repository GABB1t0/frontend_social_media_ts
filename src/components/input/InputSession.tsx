import { useState } from "react";

interface InputProps {
    name: string;
    required: boolean;
    type: string;
    
    children: string;  
}
  
const InputSession: React.FC<InputProps> = ({name, required, type,children}) => {
    const [content, setContent] = useState(false)
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== '') {
            
            setContent(true)
        }else{
            
            setContent(false)
        }
        
    }

    return (
        <div className="group relative">
            <label htmlFor={name} className= {content ?  'bg-gradient-to-t from-transparent to-white to-50% absolute left-3 -translate-y-2/4 top-0 text-sm' :'bg-gradient-to-t from-transparent to-white to-50% absolute top-2/4 -translate-y-2/4 left-3 group-hover:top-0  group-hover:text-sm group-focus-within:text-sm group-focus-within:top-0 duration-500'} >{children}</label>
            <input 
            name={name} 
            required={required} 
            type={type} 
            onChange={handleChange}
            className="border-2  rounded-sm outline-none w-full h-9 px-3 bg-transparent "  
            />
        </div>
        
    )
}

export default InputSession;