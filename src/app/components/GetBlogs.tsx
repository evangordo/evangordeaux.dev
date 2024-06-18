// 'use client';
// import React, { Suspense } from 'react';
// // import { getBlogPosts } from '../lib/data';
// import Link from 'next/link';
// import BlogCard from './BlogCard';



// export function GetAllBlogs() {
//   let allBlogs = getBlogPosts();
//   console.log('getting blogs', allBlogs)

//   return (
//     <>

//       {allBlogs.map((post: any) => (
//           <Link
//             key={post.slug}
          
//             href={`/blog/${post.slug}`}
//           >
       
//               <Suspense fallback={<p>loading...</p>}>
//                 <BlogCard title={post.metadata.title} description={post.metadata.description} date={post.metadata.date}/>

              
//               </Suspense>
       
//           </Link>
//         ))}
   
//     </>
//   );
// }
