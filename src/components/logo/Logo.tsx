type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '132' : '96';
  const fontStyle = props.xl ? 'font-light text-xl' : 'font-light text-m';

  return (
    <div className="inline-flex items-center">
      <div className="pr-3">
        <img src="/Logo.svg" width={size} alt="Company Logo"></img>
      </div>
      <div className={`mt-2 text-gray-300 ${fontStyle}`}>Since 2019</div>
    </div>
  );
};

export { Logo };
