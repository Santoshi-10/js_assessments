import React from 'react';
import ItemList from './components/ItemList';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetcher';
import Form from './components/Form';
import PaginatedList from './components/PaginatedList';
import RouterComponent from './components/RouterComponent';
import HooksComponent from './components/HooksComponent';
import LineChart from './components/LineChart';
import AuthComponent from './components/AuthComponent';
import ContextComponent from './components/ContextComponent';
import InfiniteScrollList from './components/InfiniteScrollList';
import SuspenseComponent from './components/SuspenseComponent';
import ErrorBoundary from './components/ErrorBoundary';
import FilterSortList from './components/FilterSortList';
import MemoizedComponent from './components/MemoizedComponent';
import Carousel from './components/Carousel';
import DragDropList from './components/DragDropList';
import FocusInput from './components/FocusInput';
import Tooltip from './components/Tooltip';
import VirtualizedList from './components/VirtualizedList';

function App() {
  return (
    <div>
      <h1>React Components Showcase</h1>
      <ItemList />
      <Counter />
      <DataFetcher />
      <Form />
      <PaginatedList />
      <RouterComponent />
      <HooksComponent />
      <LineChart />
      <AuthComponent />
      <ContextComponent />
      <InfiniteScrollList />
      <SuspenseComponent />
      <ErrorBoundary>
        <FilterSortList />
      </ErrorBoundary>
      <MemoizedComponent />
      <Carousel />
      <DragDropList />
      <FocusInput />
      <Tooltip text="This is a tooltip!">Hover over me</Tooltip>
      <VirtualizedList />
    </div>
  );
}

export default App;
