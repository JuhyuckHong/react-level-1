function DeleteButton(props) {
    return <button className="todo-delete-button button" onClick={() => props.handler(props.id)}>삭제하기</button>;
}

export default DeleteButton;
