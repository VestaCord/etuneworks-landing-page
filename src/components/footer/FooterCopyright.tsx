import { AppConfig } from '@/utils/AppConfig';

const FooterCopyright = () => (
  <div>
    Copyright © {new Date().getFullYear()} {AppConfig.title} All Rights
    Reserved
  </div>
);

export { FooterCopyright };
