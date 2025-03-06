export function getFormattedTransactions(transactions, categories) {
  return transactions
    .map((transaction) => getFormattedTransaction(transaction, categories))
    .toSorted((a, b) => b.date.localeCompare(a.date));
}

function getFormattedTransaction(transaction, categories) {
  const {
    transactionDate: date,
    amount: sum,
    categoryId,
    type,
    comment,
    id,
  } = transaction;

  // Income durumunda her zaman "Income" kategorisi
  const category =
    type === "INCOME" ? "Income" : getCategoryName(categoryId, categories);

  const newTransaction = {
    id,
    date,
    type, // Orijinal type'ı koru
    category,
    comment,
    sum: Math.abs(sum),
  };
  return newTransaction;
}

function getCategoryName(id, categories) {
  if (!categories || !id) return "Unknown";
  const cat = categories.find((item) => item.id === id);
  return cat?.name || "Unknown";
}

export function getHeadTransaction() {
  return ["date", "type", "category", "comment", "sum"];
}

export function getStyleByType(type) {
  const currentColor =
    type === "-" ? "var(--red-color)" : "var(--yellow-color)";
  return {
    color: currentColor,
  };
}
