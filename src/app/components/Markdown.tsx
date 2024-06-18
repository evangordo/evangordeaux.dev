// mdxComponents.tsx
import { Code, Divider, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Checkbox } from '@chakra-ui/checkbox';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { MDXComponents } from 'mdx/types';

const mdxComponents: MDXComponents = {
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
  img: (props) => <Image rounded="lg" {...props} />,
  ul: (props) => <UnorderedList spacing={2} {...props} />,
  ol: (props) => <OrderedList spacing={2} {...props} />,
  li: (props) => <ListItem {...props} />,
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  th: Th,
  td: Td,

  h1: (props) => <Heading as="h1" size="2xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" my={4} {...props} />,
  h4: (props) => <Heading as="h4" size="md" my={4} {...props} />,
  h5: (props) => <Heading as="h5" size="sm" my={4} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" my={4} {...props} />,
};

export default mdxComponents;
