import { ReactElement } from 'react'
import LayoutDefault from '../../layouts/LayoutDefault'
import Container from '../../components/Container'

const List = (): ReactElement => {
  return (
    <LayoutDefault>
      <Container>
        <div>halaman list</div>
      </Container>
    </LayoutDefault>
  )
}

export default List