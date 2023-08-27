import React from 'react';

export interface PageSelectorProps extends React.ComponentProps<any> {
  pageNo: number;
  setPageNo: Function;
  pageCount: number;
}

export function PageSelector({
  pageNo,
  setPageNo,
  pageCount,
}: PageSelectorProps) {
  const getPageSelectorOptions = (): JSX.Element[] => {
    const content: JSX.Element[] = [];
    for (let i = 0; i < pageCount; i++) {
      content.push(
        <option key={i} value={i}>
          Page {i + 1}
        </option>,
      );
    }
    return content;
  };

  return (
    <select
      className="flex-basis-240 sd-input sd-dropdown"
      value={pageNo}
      onChange={evt => {
        setPageNo(JSON.parse(evt.target.value));
      }}
    >
      {getPageSelectorOptions()}
    </select>
  );
}
