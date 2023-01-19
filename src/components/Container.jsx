import React from 'react';
import { Aside } from './Aside';
import { Main } from './Main';

export const Container = () => {
  return (
    <section className='c-container'>
        <Main/>
        <Aside />
    </section>
  )
}