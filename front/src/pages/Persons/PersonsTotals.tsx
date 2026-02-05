import { useEffect, useState } from 'react'
import { personService } from '../../services/personService'
import type { PersonTotals } from '../../interfaces/person'

export function PersonsTotals() {
  const [totals, setTotals] = useState<PersonTotals[]>([])

  useEffect(() => {
    async function load() {
      const { data } = await personService.getTotals()
      setTotals(data)
    }

    load()
  }, [])

  return (
    <div className="card">
      <h2>Totais por Pessoa</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Receitas</th>
            <th>Despesas</th>
            <th>Saldo</th>
          </tr>
        </thead>

        <tbody>
          {totals.map(t => (
            <tr key={t.name}>
              <td>{t.name}</td>
              <td>{t.totalIncome}</td>
              <td>{t.totalExpense}</td>
              <td>{t.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
