import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  width: fit-content;
  input[class='hide'] {
    display: none;
  }
  input[type='checkbox'] + label {
    margin-right: 3px;
    width: 20px;
    height: 20px;
    background: var(--white);
    border: 1px solid #d9d9d9;
    box-shadow: 0px 3px 5px rgba(46, 46, 66, 0.08);
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
  input[type='checkbox']:checked + label {
    background: var(--primary);
    border: none;
  }
  margin-bottom: 0.5rem;
  user-select: none;
  cursor: pointer;
`;

type Props = {
  text: string;
  id: string;
  disabled?: boolean;
  checked: boolean;
  onChange: React.ChangeEventHandler;
};

const CheckBoxInput = ({ text, id, disabled, checked, onChange }: Props) => {
  return (
    <Label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        className="hide"
        id={id}
      />
      <label htmlFor={id}>
        <img src={process.env.PUBLIC_URL + '/assets/check.svg'} alt="" />
      </label>
      <p>{text}</p>
    </Label>
  );
};

export default CheckBoxInput;
