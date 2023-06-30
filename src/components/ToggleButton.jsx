function ToggleButton(props) {
    return <button className="todo-complete-button button" onClick={() => props.handler(props.id)}>{props.children}</button>;
}

export default ToggleButton;
