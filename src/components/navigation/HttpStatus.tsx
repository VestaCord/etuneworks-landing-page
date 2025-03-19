type IHttpStatusProps = {
  statusCode: number;
  description: string;
};

export default function HttpStatus(props: IHttpStatusProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <div className="align-top text-5xl">
        <h1 className="mr-5 inline-block border-r-[1px] border-solid pr-[23px] text-2xl">
          {props.statusCode}
        </h1>
        <div className="inline-block align-middle">
          <h2 className="text-sm">{props.description}</h2>
        </div>
      </div>
    </div>
  );
}
