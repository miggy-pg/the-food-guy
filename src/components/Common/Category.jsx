export function Category(props) {
  return (
    <li className="max-w-2xl cursor-pointer px-4 py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
      {props.title}
    </li>
  );
}
