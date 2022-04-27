export interface InputProps {
  labelText: string;
  label: string;
  placeholder?: string;
  inputType?: "text" | "tel";
}

function Input(props: InputProps) {
  const { labelText, label, placeholder = "", inputType = "text", ...nativeProps } = props;

  return (
    <>
      <label
        htmlFor={label}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {labelText}
      </label>
      <input
        type={inputType}
        className="form-control rounded-pill text-lg"
        name={label}
        id={label}
        aria-describedby={label}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}

export default Input;
