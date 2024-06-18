import { MDXRemote } from 'next-mdx-remote/rsc';
import ChakraUIRenderer from './Markdown';

export function Post({ children }: { children: string }) {
  const components = ChakraUIRenderer();
  return (
    <MDXRemote
      source={children}
      options={{ mdxOptions: {} }}
      components={components}
    />
  );
}
