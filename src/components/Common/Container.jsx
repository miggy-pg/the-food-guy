export default function Container({ children, className }) {
  return (
    <div
      className={`container mx-auto flex flex-wrap items-center pb-12 pt-4 ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}
