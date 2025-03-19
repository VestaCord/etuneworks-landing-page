import HttpStatus from '@/components/navigation/HttpStatus';

export default function Custom404() {
  return (
    <HttpStatus statusCode={404} description="This page could not be found" />
  );
}
