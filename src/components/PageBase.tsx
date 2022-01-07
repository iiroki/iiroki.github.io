import React from 'react'
import { motion } from 'framer-motion'

const PageBase: React.FC = ({ children }) => (
  <motion.div className='page' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
)

export default PageBase
