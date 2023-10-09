export default function Container({ children, className }) {
  return (
    <div
      className={`container mx-auto p-8 xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
