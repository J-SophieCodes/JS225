let invoices = {
  unpaid: [],

  paid: [],

  add(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  sum(total, currentInvoice) {
    return total + currentInvoice.amount;
  },

  totalDue() {
    return this.unpaid.reduce(this.sum, 0);
  },

  payInvoice(payee) {
    let unpaid = [];

    this.unpaid.forEach(invoice => {
      if (invoice.name === payee) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    });

    this.unpaid = unpaid;
  },

  totalPaid() {
    return this.paid.reduce(this.sum, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.unpaid);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.unpaid);
console.log(invoices.paid);

console.log(invoices.totalDue());
console.log(invoices.totalPaid());