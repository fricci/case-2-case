import StringInput from './string-input';

function SnakeCaseInput(props) {

    const convertToSnakeCase = (rawValue) => {
        return rawValue.join('_');
    };

    const convertToArray = (snakeCase) => {
        props.onChange(snakeCase.split('_'));
    }

    return <div>
        <div>Snake case: </div><StringInput value={convertToSnakeCase(props.value)} onChange={(value) => convertToArray(value)}></StringInput>
    </div>;
}

export default SnakeCaseInput;