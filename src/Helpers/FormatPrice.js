const FormatPrice = ({ price }) => {
  return (
    Intl.NumberFormat("be-BY", {
      style: "currency",
      currency: "BYN",
      maximumFractionDigits: 2,
    }).format(price)
  )
}

export default FormatPrice
