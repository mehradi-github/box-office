import { PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

export const ReactQueryProvider = ({
  childern,
}: PropsWithChildren<unknown>) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{childern}</QueryClientProvider>
  );
};
