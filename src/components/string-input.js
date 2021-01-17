const style = {
    width: '100%'
}

function StringInput(props) {
    return <>
        <input style={{ width: style.width }} value={props.value} onChange={(event) => props.onChange(event.target.value)}></input>
    </>;
}

export default StringInput;