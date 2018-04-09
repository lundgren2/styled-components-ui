import { Container, Row, Col } from './Grid'
import { H1, H2, H3, H4, H5 } from './Typography'
import Button from './Button'
import theme from '../utils/variables'

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
}
export default { theme, Container, Row, Col, ...Typography, Button }
