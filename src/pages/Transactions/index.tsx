import { Header } from '../../components/Header'
import { Summary } from "../../components/Summary"
import { TransactionsContainer } from "./styles"

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td >Hamburger</td>
              <td>- R$ 59,00</td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td>Aluguel do apartamento</td>
              <td>- R$ 1.200,00</td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>
          </tbody>
        </table>
      </TransactionsContainer>
    </>
  )
}
