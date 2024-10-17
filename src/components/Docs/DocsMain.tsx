import React, { FC } from 'react';
import SideBarDocs from './SideBarDocs';
import Footer from '../Footer';

// eslint-disable-next-line react/function-component-definition
const DocsMain: FC<{ content: any }> = ({ content }) => (
  <>
    <section className="relative dark:bg-dark-bg flex justify-start items-stretch w-full font-serif">
      <div className="hidden lg:flex stick min-h-[72vh] max-h-[540px] px-5 py-2 w-full max-w-[235px] box-border flex-grow border-r-[1px] border-primary custom-scrollbar">
        <SideBarDocs />
      </div>
      <div className="stick lg:overflow-y-auto lg:min-h-[72vh] lg:max-h-[540px] box-border  w-full flex-grow lg:custom-scrollbar">
        {content}
      </div>
    </section>
  </>
);

export default DocsMain;
