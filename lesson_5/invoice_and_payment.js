function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],

    invoiceTotal() {
      return this.phone + this.internet;
    },

    addPayment(item) {
      this.payments.push(item);
    },

    addPayments(list) {
      this.payments.push(...list);
      // list.forEach(this.addPayment.bind(this));
    },

    paymentTotal() {
      return this.payments.reduce((total, payment) => {
        return total + payment.total();
      } ,0);
    },

    amountDue() {
      return this.invoiceTotal() - this.paymentTotal();
    }
  };
}

function createPayment(services = {}) {
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total() {
      return this.amount || (this.phone + this.internet);
    },
  };
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});
// console.log(invoice.total());

let payment1 = createPayment({
  amount: 2000,
});
// console.log(payment1.total());

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});
// console.log(payment2.total());

let payment3 = createPayment({
  phone: 1000,
});
// console.log(payment3.total());

invoice.addPayment(payment1);
// console.log(invoice.payments);
invoice.addPayments([payment2, payment3]);
// console.log(invoice.payments);
console.log(invoice.amountDue());       // this should return 0