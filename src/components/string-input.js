function StringInput(props) {
    return <>
        <input value={props.value} onChange={(event) => props.onChange(event.target.value)}></input>
    </>;
}

export default StringInput;