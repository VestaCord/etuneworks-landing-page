import { useRouter } from 'next/router';
import { useEffect } from 'react';

import HttpStatus from '@/components/navigation/HttpStatus';

export default function Faq() {
  const router = useRouter();
  useEffect(() => {
    router.push('/sales-terms-and-conditions');
  }, []);
  return <HttpStatus statusCode={301} description={'Page Permanently Moved'} />;
}
