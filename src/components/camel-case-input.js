import styles from './case-input.module.css';
import StringInput from './string-input';

function CamelCaseInput(props) {

    const convertToCamelCase = (rawValue) => {
        const [firstString, ...otherStrings] = rawValue;
        let convertedValue = firstString;
        for (const nextStr of otherStrings) {
            if (nextStr === '') {
                break;
            }
            const [firstLetter, ...otherLetters] = nextStr;
            convertedValue = convertedValue + firstLetter.toUpperCase() + otherLetters.join('');
        }
        return convertedValue;
    };

    const convertToArray = (camelCase) => {
        const result = [];

        let actWord = '';
        for (const letter of camelCase) {
            if (letter === letter.toUpperCase()) {
                result.push(actWord);
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
        <div className={styles.inputLabel}>Camel case: </div>
        <div className={styles.valueInput} >
            <StringInput value={convertToCamelCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
        </div>
    </div>;
}

export default CamelCaseInput;