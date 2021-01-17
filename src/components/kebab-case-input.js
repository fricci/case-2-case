import styles from './case-input.module.css';
import StringInput from './string-input';

function KebabCaseInput(props) {

    const convertToKebabCase = (rawValue) => {
        return rawValue.join('-');
    };

    const convertToArray = (kebabCase) => {
        props.onChange(kebabCase.split('-'));
    }

    return <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Kebab case: </div>
        <div className={styles.valueInput} >
            <StringInput className={styles.valueInput} value={convertToKebabCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
        </div>
    </div>;
}

export default KebabCaseInput;