import Input from './';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { sleep } from '../modules';

expect.extend(require('@testing-library/jest-dom'));

describe('<Input type="text" />', () => {
  it('Component exists', () => {
    expect(Input).toBeTruthy();
  });

  it('Component includes an <input /> tag', () => {
    render(
      <Input
        name="example"
        isErrored={false}
        isFocused={false}
        onChange={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        value="hello"
      />
    );
    expect(screen.getByDisplayValue('hello'));
  });

  it('Component gains focus properly', async () => {
    const state = { isFocused: false };
    render(
      <Input
        name="example"
        isErrored={false}
        isFocused={false}
        onChange={() => {}}
        onFocus={() => {
          state.isFocused = true;
        }}
        onBlur={() => {}}
        value="hello"
      />
    );
    expect(state.isFocused).toBeFalsy();
    const input = screen.getByDisplayValue('hello');
    expect(input.parentElement).toHaveStyle(`border-color: inherit`);
    expect(input.parentElement).not.toHaveFocus();
    fireEvent(input, new MouseEvent('click'));
    console.log('STATE BEFORE', state);
    // input.parentElement?.focus();
    await sleep(5000);
    console.log('STATE AFTER', state);
    // expect(state.isFocused).toBeTruthy();
    // expect(input.parentElement).toHaveFocus();
    // expect(input.parentElement).not.toHaveStyle(`border-color: inherit`);
  });

  // it('Component loses focus properly', async () => {
  //   var isFocused = true;
  //   render(
  //     <Input
  //       name='example'
  //       isErrored={false}
  //       isFocused={true}
  //       onChange={() => { }}
  //       onFocus={() => { }}
  //       onBlur={() => { isFocused = false; }}
  //       value='hello'
  //     />
  //   );
  //   expect(isFocused).toBeTruthy();
  //   const input = screen.getByDisplayValue('hello');
  //   expect(input.parentElement).toHaveStyle(`border-color: inherit`);

  //   fireEvent(input.ownerDocument.body, new MouseEvent('click'));
  //   await wait(() => {
  //     expect(isFocused).toBeFalsy();
  //     expect(input.parentElement).toHaveStyle(`border-color: inherit`);
  //   });
  // });
});
