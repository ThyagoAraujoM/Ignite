import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};
// Omit ele passa todos os tipos menos o que você colocar.
type TransactionInput = Omit<Transaction, "id" | "createdAt">;
type TransactionsProviderProps = {
  children: ReactNode;
};
type TransactionsContextData = {
  transactions: Transaction[];
  createTransactions: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransactions(data: TransactionInput) {
    const response = await api.post("/transactions", {
      ...data,
      createdAr: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
