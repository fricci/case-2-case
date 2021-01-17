import styles from './case-input.module.css';
import StringInput from './string-input';

function PascalCaseInput(props) {

    const convertToPascalCase = (rawValue) => {
        let convertedValue = '';
        for (const nextStr of rawValue) {
            if (nextStr === '') {
                break;
            }
            const [firstLetter, ...otherLetters] = nextStr;
            convertedValue = convertedValue + firstLetter.toUpperCase() + otherLetters.join('');
        }
        return convertedValue;
    };

    const convertToArray = (pascalCase) => {
        const result = [];

        let actWord = '';
        for (const letter of pascalCase) {
            if (letter === letter.toUpperCase()) {
                if (letter) {
                    result.push(actWord);
                }
                actWord = letter.toLowerCase();
            } else {
                actWord += letter;
            }
        }
        if (actWord) {
            result.push(actWord);
        }

        props.onChange(result);
    }

    return <div className={styles.inputContainer}>
        <div className={styles.inputLabel}>Pascal case: </div>
        <div className={styles.valueInput} >
            <StringInput className={styles.valueInput} value={convertToPascalCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
        </div>
    </div>;
}

export default PascalCaseInput;