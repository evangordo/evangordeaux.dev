import * as React from 'react';
import { Code, Divider, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Checkbox } from '@chakra-ui/checkbox';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { chakra } from '@chakra-ui/system';
import { MDXComponents } from 'mdx/types';

type GetCoreProps = {
  children?: React.ReactNode;
  'data-sourcepos'?: any;
};

function getCoreProps(props: GetCoreProps): any {
  return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
}

const defaults: MDXComponents = {
  p: (props) => <Text mb={2} {...props} />,
  em: (props) => <Text as="em" {...props} />,
  blockquote: (props) => <Code as="blockquote" p={2} {...props} />,
  code: (props) => {
    const { inline, children, className } = props;
    if (inline) {
      return <Code p={2} className={className}>{children}</Code>;
    }
    return <Code className={className} whiteSpace="break-spaces" display="block" w="full" p={2}>{children}</Code>;
  },
  del: (props) => <Text as="del" {...props} />,
  hr: () => <Divider />,
  a: Link,
  img: Image,
  text: (props) => <Text as="span" {...props} />,
  ul: (props) => {
    const { ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    let Element = UnorderedList;
    let styleType = 'disc';
    if (ordered) {
      Element = OrderedList;
      styleType = 'decimal';
    }
    if (depth === 1) styleType = 'circle';
    return <Element spacing={2} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} {...attrs}>{children}</Element>;
  },
  ol: (props) => {
    const { ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    let Element = UnorderedList;
    let styleType = 'disc';
    if (ordered) {
      Element = OrderedList;
      styleType = 'decimal';
    }
    if (depth === 1) styleType = 'circle';
    return <Element spacing={2} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} {...attrs}>{children}</Element>;
  },
  li: (props) => {
    const { children, checked } = props;
    let checkbox = null;
    if (checked !== null && checked !== undefined) {
      checkbox = <Checkbox isChecked={checked} isReadOnly>{children}</Checkbox>;
    }
    return <ListItem {...getCoreProps(props)} listStyleType={checked !== null ? 'none' : 'inherit'}>{checkbox || children}</ListItem>;
  },
  h1: (props) => <Heading my={4} as="h1" size="2xl" {...props} />,
  h2: (props) => <Heading my={4} as="h2" size="xl" {...props} />,
  h3: (props) => <Heading my={4} as="h3" size="lg" {...props} />,
  h4: (props) => <Heading my={4} as="h4" size="md" {...props} />,
  h5: (props) => <Heading my={4} as="h5" size="sm" {...props} />,
  h6: (props) => <Heading my={4} as="h6" size="xs" {...props} />,
  pre: (props) => <chakra.pre {...getCoreProps(props)}>{props.children}</chakra.pre>,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: (props) => <Tr>{props.children}</Tr>,
  td: (props) => <Td>{props.children}</Td>,
  th: (props) => <Th>{props.children}</Th>,
};

export default function ChakraUIRenderer(theme: MDXComponents = defaults, merge = true): MDXComponents {
  if (merge) {
    return { ...defaults, ...theme };
  }
  return defaults;
}
