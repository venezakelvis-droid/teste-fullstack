import { useEffect, useState } from 'react'
import { personService } from '../../services/personService'
import { PersonForm } from '../../components/Forms/PersonForm'
import { PersonsTable } from '../../components/Tables/PersonsTable'
import type { Person } from '../../interfaces/person'
import { PersonsTotals } from './PersonsTotals'

export function PersonsPage() {
  const [persons, setPersons] = useState<Person[]>([])

  async function loadPersons() {
    const { data } = await personService.getAll()
    setPersons(data)
  }

  useEffect(() => {
    loadPersons()
  }, [])

  return (
    <div className="container">
      <h1>Pessoas</h1>

      <PersonForm onSuccess={loadPersons} />

      <PersonsTable
        persons={persons}
        onDelete={loadPersons}
      />

      <PersonsTotals />
    </div>
  )
}
