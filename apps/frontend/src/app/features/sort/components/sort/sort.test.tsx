import React from 'react';
import { expect, it, describe, beforeEach } from 'vitest';
import {
  render,
  RenderResult,
  screen,
  fireEvent,
} from '@testing-library/react';
import { Sort } from './';

const SORT_TESTID = 'sort';

describe('Sort', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Sort />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render a sort component', () => {
    const sort = screen.queryByTestId(SORT_TESTID);

    expect(sort).toBeInTheDocument();
  });

  it('should render a text "Produtos ordenados por:"', () => {
    const text = screen.queryByText('Produtos ordenados por:');

    expect(text).toBeInTheDocument();
  });

  it('should render a sort combobox with title "Ordenar produtos por ..."', () => {
    const combobox = screen.queryByRole('combobox', {
      name: 'Ordenar produtos por ...',
    });

    expect(combobox).toBeInTheDocument();
  });

  it('should sort by "Relevância" as default', () => {
    const combobox = screen.queryByRole('combobox');

    expect(combobox).toHaveTextContent('Relevância');
  });

  it('it must be possible to select the options "Relevância", "Menor Preço", and "Maior Preço".', () => {
    const combobox = screen.queryByRole('combobox') as HTMLElement;

    const button = combobox.querySelector('button') as HTMLButtonElement;

    const options = ['Menor preço', 'Maior preço', 'Relevância'];

    for (const option of options) {
      fireEvent.click(button);

      fireEvent.click(
        screen.queryByRole('option', {
          name: option,
        }) as HTMLElement,
      );

      expect(combobox).toHaveTextContent(option);
    }
  });
});
