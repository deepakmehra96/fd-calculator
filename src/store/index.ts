import create from 'zustand';

interface FDDetails {
  principal: number;
  interestRate: number;
  years: number;
  compoundingFrequency: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';
}

interface FDResult {
  totalAmount: number;
  totalInterest: number;
}

interface FDState {
  fdDetails: FDDetails;
  result: FDResult | null;
  setFDDetails: (details: FDDetails) => void;
  calculateFD: () => void;
  setResult: (val: FDResult | null) => void;
}

const getCompoundingFactor = (frequency: string) => {
  switch (frequency) {
    case 'monthly':
      return 12;
    case 'quarterly':
      return 4;
    case 'half-yearly':
      return 2;
    case 'yearly':
      return 1;
    default:
      return 1;
  }
};

export const useFDStore = create<FDState>((set) => ({
  fdDetails: {
    principal: 500000,
    interestRate: 8,
    years: 5,
    compoundingFrequency: 'yearly',
  },
  result: null,

  setFDDetails: (details) => set({ fdDetails: details }),

  setResult: (val) => set({result : val}),

  calculateFD: () => {
    set((state) => {
      const { principal, interestRate, years, compoundingFrequency } = state.fdDetails;
      const n = getCompoundingFactor(compoundingFrequency);
      const rate = interestRate / 100;

      const totalAmount = principal * Math.pow(1 + rate / n, n * years);
      const totalInterest = totalAmount - principal;

      return {
        result: {
          totalAmount,
          totalInterest,
        },
      };
    });
  },
}));
