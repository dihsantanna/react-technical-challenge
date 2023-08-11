import React from 'react';
import { expect, it, describe, beforeEach } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { NavBar } from '.';

const NAVBAR_TESTID = 'navbar';

describe('NavBar', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<NavBar />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render navBar', () => {
    const navbar = screen.queryByTestId(NAVBAR_TESTID);

    expect(navbar).toBeInTheDocument();
  });

  it('should render one "a" tag with title "volar para o início"', () => {
    const link = screen.queryByRole('link', {
      name: /volar para o início/i,
    });

    expect(link).toBeInTheDocument();
  });

  it('should render one "h3" tag with text "Todos os produtos"', () => {
    const h3 = screen.queryByRole('heading', {
      level: 3,
      name: /Todos os produtos/i,
    });

    expect(h3).toBeInTheDocument();
  });
});
