export default function TextArea(props) {
  const { placeholder } = props;
  return (
    <textarea
      placeholder={placeholder}
      className="px-6 py-3 border rounded-[4px] w-full h-[96px] resize-none"
    ></textarea>
  );
}
