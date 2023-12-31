import "bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from "react";

export default function InputText(props: { hint: string, type: string, id: string, handleInput: any[], value?:string }) {
    
    const [text, setText] = useState('');

    useEffect(() => { if (props.value != null) { setText(props.value) } }, [])

    return (
        <input className="form-control mt-3" type={props.type} placeholder={props.hint} id={props.id} value={text} name={props.id} min={1} max={5}
            onChange={e => {
                setText(e.target.value)
                props.handleInput[0](e, props.handleInput[1], props.handleInput[2])
        }} />
    )
}