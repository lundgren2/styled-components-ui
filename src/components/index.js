import { Container, Row, Col } from './Grid'
import { H1, H2, H3, H4, H5, TypographyDemo } from './Typography'
import theme from '../utils/variables'

const Demos = {
  TypographyDemo,
}

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
}
export default { Container, Row, Col, ...Typography, Demos, theme }
