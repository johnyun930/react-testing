import { useState,useCallback } from "react"

export default function TodoForm({onInsert}){
    const [text,setText] = useState("");
    
    function onChange(e,func){
        func(e.target.value);
    }

    const onSubmit = useCallback(
        e => {
          onInsert(text);
          setText('');
          e.preventDefault(); // 새로고침을 방지함
        },
        [onInsert, text]
      );
    
    return(
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e)=>onChange(e,setText)} placeholder="할 일을 등록하세요"/>
            <button >등록</button>
            </form>
    )
}