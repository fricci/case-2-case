import styles from './string-input.module.css';

function StringInput(props) {
    return <>
        <input className={styles.input} value={props.value} onChange={(event) => props.onChange(event.target.value)}></input>
    </>;
}

export default StringInput;