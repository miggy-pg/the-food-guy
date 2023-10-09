export default function Pizza({ name, description, price }) {
  return (
    <div className="mt-4 flex items-start space-x-3">
      <div className="mt-2 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
        {/* {React.cloneElement(props.icon, {
                  className: "w-7 h-7 text-indigo-50",
                })} */}
      </div>
      <div>
        <h4 className="flex justify-between text-xl  font-medium text-gray-800 dark:text-gray-200">
          <span>{name}</span>
          <span className="text-primary font-bold">{price}</span>
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
