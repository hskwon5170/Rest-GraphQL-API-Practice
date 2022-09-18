import { useState } from "react"
import MsgInput from "./MsgInput"
import MsgItem from "./MsgItem"

const UserIds = ['hsk', 'kwon']
const getRandomUserId = () => UserIds[Math.round(Math.random())]

// 배열50개를 생성, 0으로 채워주고 map()
const originalMsgs = Array(50).fill(0).map((_,i)=>({
    id: i+1,
    userId:getRandomUserId(),
    timestamp : 1234567890123 + i * 1000 * 60,
    text: `${i + 1} mock text`
}))



export default function MsgList () {
    const [msgs, setMsgs] = useState(originalMsgs)
    const [editingId, setEditingId] = useState(null)
    
    const onCreate = text => {
        const newMsg = {
            id:msgs.length,
            userId:getRandomUserId(),
            timestamp:Date.now(),
            text:`${msgs.length} ${text}`
        }

        setMsgs(msgs => ([newMsg, ...msgs]))
        console.log(msgs)
    }

    const onUpdate = (text, id) => {
        setMsgs(msgs => {
        const targetIndex = msgs.findIndex(msg => msg.id === id)
        if(targetIndex <0 ) return msgs
        const newMsgs = [...msgs]
        newMsgs.splice(targetIndex, 1, {
            ...msgs[targetIndex],
            text
        })
        return newMsgs
    })
    doneEdit()
    }

    const doneEdit = () => setEditingId(null)


    return(
        <>
        <MsgInput mutate={onCreate}/>
        <ul className="messages">
    {msgs.map(el => 
    <MsgItem key={el.id}{...el} onUpdate={onUpdate} startEdit={() => setEditingId(el.id)} isEdit={editingId === el.id}/>
    )}
    )
    </ul>
    </>
    )
}