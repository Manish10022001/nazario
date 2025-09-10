export function formatCurrency(value, currency = 'INR', locale = 'en-IN') {
    try {
      if (typeof value !== 'number') value = Number(value);
      if (Number.isNaN(value)) return '';
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
      }).format(value);
    } catch {
      const n = (Number(value) || 0).toFixed(0);
      const parts = n.split('.');
      let x = parts;
      const last3 = x.slice(-3);
      const other = x.slice(0, -3);
      const grouped = (other ? other.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '') + last3;
      const decimals = parts[15] ? `.${parts[15]}` : '';
      return `₹${grouped}${decimals}`;
    }
  }
  