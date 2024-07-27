import Sidebar from '@/components/sidebar/Sidebar'
import styles from "./layout.module.css"
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className={styles.container}>
        <Sidebar />
        {children}
    </div>
  )
}

export default Layout