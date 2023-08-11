import {
  americanExpress,
  billet,
  dinners,
  elo,
  googleSafe,
  hipercard,
  masterCard,
  pix,
  visa,
} from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from '@/core-components/container';
import Text from '@/core-components/text';

const payments = [
  {
    name: 'Mastercard',
    logo: masterCard,
    width: 48,
  },
  {
    name: 'Visa',
    logo: visa,
    width: 48,
  },
  {
    name: 'American Express',
    logo: americanExpress,
    width: 48,
  },
  {
    name: 'Dinners Club',
    logo: dinners,
    width: 48,
  },
  {
    name: 'Hipercard',
    logo: hipercard,
    width: 76,
  },
  {
    name: 'Elo',
    logo: elo,
    width: 68,
  },
  {
    name: 'Boleto',
    logo: billet,
    width: 68,
  },
  {
    name: 'Pix',
    logo: pix,
    width: 68,
    height: 24,
  },
];

export const Footer = () => {
  return (
    <Container
      as="footer"
      className="h-[400px] absolute bottom-0 min-w-full bg-white shadow-md"
      testId="footer"
    >
      <Container className="max-w-[1440px] w-full h-full px-8 sm:px-16 flex flex-col justify-between pt-11 pb-28 gap-5">
        <Container className="min-w-full flex flex-col gap-5 md:mb-12">
          <Text variant="h6" className="font-bold text-sm">
            Atendimento
          </Text>
          <Link href="" className="text-xs">
            Central de atendimento
          </Link>
          <Link href="" className="text-xs">
            Políticas de privacidade
          </Link>
        </Container>
        <hr className="border-[#D9D9D9] opacity-50" />
        <Container className="min-w-full flex justify-between flex-wrap gap-8">
          <div className="lg:h-full flex flex-col gap-3">
            <Text variant="h6">Formas de pagamento</Text>
            <div className="flex gap-3 flex-wrap">
              {payments.map((payment) => (
                <Image
                  className="transform scale-75 sm:scale-100"
                  src={payment.logo}
                  key={payment.name}
                  alt={payment.name}
                  width={payment.width}
                  height={payment?.height || 32}
                  title={payment.name}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full justify-end lg:w-max">
            <Image
              className="transform scale-75 sm:scale-100"
              src={googleSafe}
              alt="Google Safe Browsing"
              width={194}
              height={56}
              title="Google Safe Browsing"
            />
          </div>
        </Container>
      </Container>
    </Container>
  );
};
