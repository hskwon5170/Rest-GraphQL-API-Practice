import MsgInput from "./MsgInput";

export default function MsgItem ({id, userId, timestamp, text, onUpdate, startEdit, isEdit}) {




    return(
        <li className = "messages__item">
            <h3>
                {userId}{' '}
            <sub>
                {new Date(timestamp).toLocaleString('ko-KR',{
                    year:'numeric',
                    month:'numeric',
                    day:'numeric',
                    hour:'2-digit',
                    minute:'2-digit',
                    hour12:true
                })}
            </sub>
            </h3>
            {isEdit ? (<><MsgInput mutate={onUpdate} id={id}/></>) : text}
            <div className="messages__buttons">
                <button onClick={startEdit}>수정</button>
            </div>
        </li>
    )
}