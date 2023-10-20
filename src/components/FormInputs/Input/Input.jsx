export default function FormInput(props) {
  const { type, placeholder, label, labelText, icon } = props;
  return (
    <div className="border rounded-[4px] w-full flex items-center bg-transparent">
      {label && (
        <label
          disabled="disabled"
          className="w-48 text-bw50 bg-bw15 h-full px-4 py-3 border-r"
        >
          {labelText}
        </label>
      )}
      {icon && (
        <label className="pl-6 pr-3">
          <img src={icon} alt="Input Icon" />
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className="px-6 py-3 w-full bg-transparent "
      />
    </div>
  );
}
