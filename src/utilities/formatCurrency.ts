const CURRENC_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD", style: "currency"
})

export function formatCurrency(number: number) {
    return CURRENC_FORMATTER.format(number)
}