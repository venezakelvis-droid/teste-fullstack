import type { PersonTotals } from '../../interfaces/person'
import { Button } from '../../components/UI/Button'
import { Table } from '../../components/UI/Table'

interface Props {
    persons: PersonTotals[]
    onDelete: (id: string) => void
}

export function PersonsTotalsTable({ persons, onDelete }: Props) {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Receitas</th>
                    <th>Despesas</th>
                    <th>Saldo</th>
                </tr>
            </thead>

            <tbody>
                {persons.map(p => (
                    <tr key={p.name}>
                        <td>{p.name}</td>
                        <td>{p.totalExpense}</td>
                        <td>
                            <Button
                                variant="danger"
                                onClick={() => onDelete(p.personId)}
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
