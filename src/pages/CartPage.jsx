export default function CartPage() {
  return (
    <div className="flex w-full items-center bg-red-500">
      <div className="pb-6 pt-6">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl">
          Cart
        </h1>
      </div>
      <div className="flex sm:space-x-24">
        <div>
          <ul>
            <li className="py-5">Test</li>
            <article className="flex flex-col space-y-2 xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  {/* <time dateTime={date}>
                    {formatDate(date, siteMetadata.locale)}
                  </time> */}
                </dd>
              </dl>
              <div className="space-y-3">
                <div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    {/* <Link
                      href={`/${path}`}
                      className="text-gray-900 dark:text-gray-100"
                    > */}
                    {/* {title} */}
                    {/* </Link> */}
                  </h2>
                  <div className="flex flex-wrap">
                    {/* {tags?.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))} */}
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {/* {summary} */}
                </div>
              </div>
            </article>
          </ul>
        </div>
      </div>
    </div>
  );
}

// {
//   displayPosts.map((post) => {
//     const { path, date, title, summary, tags } = post;
//     return (
//       <li key={path} className="py-5">
//         <article className="flex flex-col space-y-2 xl:space-y-0">
//           <dl>
//             <dt className="sr-only">Published on</dt>
//             <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//               <time dateTime={date}>
//                 {formatDate(date, siteMetadata.locale)}
//               </time>
//             </dd>
//           </dl>
//           <div className="space-y-3">
//             <div>
//               <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                 <Link
//                   href={`/${path}`}
//                   className="text-gray-900 dark:text-gray-100"
//                 >
//                   {title}
//                 </Link>
//               </h2>
//               <div className="flex flex-wrap">
//                 {tags?.map((tag) => (
//                   <Tag key={tag} text={tag} />
//                 ))}
//               </div>
//             </div>
//             <div className="prose max-w-none text-gray-500 dark:text-gray-400">
//               {summary}
//             </div>
//           </div>
//         </article>
//       </li>
//     );
//   });
// }
