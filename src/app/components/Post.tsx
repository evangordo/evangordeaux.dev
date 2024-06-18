// Post.js or Post.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import mdxComponents from './Mdx';

export function Post({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{ mdxOptions: {} }}
      components={mdxComponents}
    />
  );
}
