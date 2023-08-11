import React from 'react';
import { expect, it, describe, beforeEach } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/react';
import { Footer } from './';

const FOOTER_TESTID = 'footer';

const PAYMENTS = [
  'Mastercard',
  'Visa',
  'American Express',
  'Dinners Club',
  'Hipercard',
  'Elo',
  'Boleto',
  'Pix',
];

describe('Footer', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<Footer />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render footer', () => {
    const footer = screen.queryByTestId(FOOTER_TESTID);

    expect(footer).toBeInTheDocument();
  });

  it('should render two "h6" tags with texts "Atendimento" and "Formas de pagamento"', () => {
    const firstText = screen.queryByRole('heading', {
      level: 6,
      name: /Atendimento/,
    });

    const secondText = screen.queryByRole('heading', {
      level: 6,
      name: /Formas de pagamento/,
    });

    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
  });

  it(`should render payments images with alt texts: ${PAYMENTS.join(
    ', ',
  )}`, () => {
    PAYMENTS.forEach((payment) => {
      const paymentImage = screen.queryByAltText(payment);

      expect(paymentImage).toBeInTheDocument();
    });
  });

  it('should render Google Safe Browsing image stamp with alt text "Google Safe Browsing"', () => {
    const googleSafe = screen.queryByAltText('Google Safe Browsing');

    expect(googleSafe).toBeInTheDocument();
  });
});
