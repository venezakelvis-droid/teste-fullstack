import type { Person } from '../../interfaces/person'
import { Button } from '../UI/Button'
import { Table } from '../UI/Table'

interface Props {
  persons: Person[]
  onDelete: () => void
}

export function PersonsTable({ persons, onDelete }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {persons.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>
              <Button
                variant="danger"
                onClick={() => onDelete()}
              >
                Excluir
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
