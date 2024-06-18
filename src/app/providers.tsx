
import { ChakraProvider, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <ChakraProvider>
       <Box >
    {children}
    
    </Box>
    </ChakraProvider>;
}
