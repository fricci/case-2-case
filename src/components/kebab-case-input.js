import StringInput from './string-input';

function KebabCaseInput(props) {

    const convertToKebabCase = (rawValue) => {
        return rawValue.join('-');
    };

    const convertToArray = (kebabCase) => {
        props.onChange(kebabCase.split('-'));
    }

    return <div>
        <div>Kebab case: </div><StringInput value={convertToKebabCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
    </div>;
}

export default KebabCaseInput;