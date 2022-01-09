import React from 'react'
import { motion } from 'framer-motion'

const PageBase: React.FC = ({ children }) => (
  <motion.div
    className='page-wrapper'
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    <div className='page-content'>
      <div className='page-content-padding'>
        {children}
      </div>
    </div>
  </motion.div>
)

export default PageBase
