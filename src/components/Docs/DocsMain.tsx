import React, { FC } from 'react';
import SideBarDocs from './SideBarDocs';
import Footer from '../Footer';

// eslint-disable-next-line react/function-component-definition
const DocsMain: FC<{ content: any }> = ({ content }) => (
  <>
    <section className="dark:bg-dark-bg flex justify-start items-start w-full">
      <div className="w-[23%] box-border">
        <SideBarDocs />
      </div>
      <div className="box-border w-[70%]  border-l-[1px] border-primary min-h-[92vh]">
        {content}
      </div>
    </section>
  </>
);

export default DocsMain;
