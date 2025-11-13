import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import {
  FaReact, FaDocker, FaLinux, FaWindows
} from 'react-icons/fa'
import {
  SiTypescript, SiMysql, SiPostgresql, SiVercel,
  SiNestjs, SiMikrotik, SiCisco, SiUbiquiti,
  SiFortinet
} from 'react-icons/si'

interface Skill {
  id: number
  name: string
  category: string
  level: string
  imageUrl?: string
  description?: string
}

const Skills = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'React': <FaReact className="text-blue-500" />,
      'NestJS': <SiNestjs className="text-red-600" />,
      'TypeScript': <SiTypescript className="text-blue-600" />,
      'MySQL': <SiMysql className="text-blue-600" />,
      'PostgreSQL': <SiPostgresql className="text-blue-700" />,
      'Docker': <FaDocker className="text-blue-600" />,
      'Vercel': <SiVercel className="text-black" />,
      'Mikrotik': <SiMikrotik className="text-blue-600" />,
      'Cisco': <SiCisco className="text-blue-700" />,
      'Ubiquiti': <SiUbiquiti className="text-black" />,
      'Ruijie': <FaLinux className="text-red-600" />,
      'Fortigate': <SiFortinet className="text-red-700" />,
      'NMS': <FaLinux className="text-gray-800" />,
      'Windows': <FaWindows className="text-blue-600" />,
      'Linux': <FaLinux className="text-gray-800" />
    }
    return iconMap[skillName] || <FaLinux className="text-gray-600" />
  }

  const techStackSkills = [
    { name: 'React', category: 'Frontend' },
    { name: 'NestJS', category: 'Backend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'MySQL', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Vercel', category: 'Deployment' }
  ]

  const networkingSkills = [
    { name: 'Mikrotik', category: 'Network Hardware' },
    { name: 'Cisco', category: 'Network Hardware' },
    { name: 'Ubiquiti', category: 'Network Hardware' },
    { name: 'Ruijie', category: 'Network Hardware' },
    { name: 'Fortigate', category: 'Network Security' },
    { name: 'NMS', category: 'Network Management' }
  ]

  const osSkills = [
    { name: 'Windows', category: 'Operating System' },
    { name: 'Linux', category: 'Operating System' }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across different domains
            including web development, networking, and system administration.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Tech Stack
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {techStackSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Networking Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Networking
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {networkingSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Operating Systems Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Operating Systems (OS)
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {osSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="text-5xl">
                    {getSkillIcon(skill.name)}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills