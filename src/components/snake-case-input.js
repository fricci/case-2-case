import styles from './case-input.module.css';
import StringInput from './string-input';

function SnakeCaseInput(props) {

    const convertToSnakeCase = (rawValue) => {
        return rawValue.join('_');
    };

    const convertToArray = (snakeCase) => {
        props.onChange(snakeCase.split('_'));
    }

    return <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Snake case: </div>
        <div className={styles.valueInput} >
            <StringInput className={styles.valueInput} value={convertToSnakeCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
        </div>
    </div>;
}

export default SnakeCaseInput;