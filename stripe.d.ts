declare global {
    export namespace JSX {
      interface IntrinsicElements {
        'Stripe-Pricing-Table': {
          key: string;
          'pricing-table-id': string;
          'publishable-key': string;
          'client-reference-id'?: string;
        };
      }
    }
  }