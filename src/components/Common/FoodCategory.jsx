import Container from "./Container";

export default function FoodCategory({ align, categories }) {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {categories && (
        <ul className="mb-5 inline-flex justify-center border-b-2">
          {categories.map((title) => (
            <li
              key={title}
              className="max-w-2xl cursor-pointer px-4 py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
