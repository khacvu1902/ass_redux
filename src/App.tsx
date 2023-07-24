import { useEffect, useState } from 'react'
import { Button, Form, Input, Item, List } from './components';
import { instance } from './axios/config';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./App.css";
import Counter from './components/Counter';
import ProductList from './components/ProductList';

function App() {

  return (
    <div>

      <Counter />
      <ProductList />
    </div>
  )
}

export default App