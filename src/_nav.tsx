import React, { ElementType } from 'react'
import {
  cibPingup, cilApple,
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    icon: <CIcon icon={cilApple} customClassName="nav-icon" />,
    href: '/',
  },
  {
    component: CNavItem,
    icon: <CIcon icon={cibPingup} customClassName="nav-icon"/>,
    name: 'Pagar',
    badge: {
      color: 'info-gradient',
      text: 'NEW',
    },
    href: '/postulacion/pago-postulacion',
  },

  {
    component: CNavItem,
    icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
    name: 'Verificar Pago',
    href: '/postulacion/check-pago',
  }
]

export default _nav
