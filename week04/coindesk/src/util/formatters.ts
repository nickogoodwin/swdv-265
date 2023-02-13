export function formatPrice(
  value: number | undefined,
  code: string | undefined,
) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: code,
  });

  if (value) return formatter.format(value);
}
