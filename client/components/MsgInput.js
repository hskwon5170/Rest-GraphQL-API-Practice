import {useRef} from 'react'

export default function MsgInput ({mutate, id = undefined}) {

    const textRef = useRef(null);

    const onSubmit = event => {
        event.preventDefault()
        // event 객체의 버블링을 제거해줌 (버블링이란 이벤트가 연속하여 발생하는 버블 현상), event.preventDefault와 함께 자주 사용하는 메서드
        event.stopPropagation()
        const text = textRef.current.value
        textRef.current.value = ''
        mutate(text)
    }

    return(
        <form className = "messages__input" onSubmit={onSubmit}>
            <textarea ref={textRef} placeholder="내용을 입력하세요"/>
            <button type="submit">완료</button>
        </form>
    )
}