import React from 'react'
import { motion } from 'framer-motion'


export default function GlassCard({title, subtitle, children, accent='violet'}){
return (
<motion.div
initial={{ y: 12, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.45 }}
className={`glass p-6 rounded-2xl shadow-xl border border-white/20 bg-white/40`}
>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-semibold">{title}</h3>
{subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
</div>
</div>
<div className="mt-4">
{children}
</div>
</motion.div>
)
}