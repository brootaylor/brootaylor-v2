/**
 * Salary information
 */

// Works out my minimum annual salary
const annualSalary = () => {
  const salary = new Intl.NumberFormat('en-uk', { style: 'currency', currency: 'GBP' }).format((Math.PI * `1${'0'.repeat(5)}` / 3.69595 | 0))
  console.info('Annual salary (min): ', salary)
}

// Works out my minimum day rate (outside IR35)
const dayRateOutside = () => {
  const rateOut = new Intl.NumberFormat('en-uk', { style: 'currency', currency: 'GBP' }).format((Math.PI * `2${'0'.repeat(2)}` / 1.795 | 0))
  console.info('Day rate - outside IR35 - (min): ', rateOut)
}

// Works out my minimum day rate (inside IR35)
const dayRateInside = () => {
  const rateIn = new Intl.NumberFormat('en-uk', { style: 'currency', currency: 'GBP' }).format((Math.PI * `2${'0'.repeat(2)}` / 1.395 | 0))
  console.info('Day rate - inside IR35 - (min):', rateIn)
}

export { annualSalary, dayRateOutside, dayRateInside }
