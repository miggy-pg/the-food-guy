import Container from "./Container";

export default function SectionMenu({ align, title, children }) {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </Container>
  );
}
