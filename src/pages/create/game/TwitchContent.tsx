import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../../../data/dummy';
import { Header } from '../../../components/create';

const TwitchContent = ({name, twitchData}) => {
  console.log("Twitch data passed to component is " + twitchData)
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: false, allowEditing: false };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-nightsky border-2 border-cloudy-day rounded-3xl">
      <Header category={`Here are the top 100 ${name}`} title="Twitch Streams Right Now" />
      <GridComponent
        dataSource={twitchData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};


export default TwitchContent;
