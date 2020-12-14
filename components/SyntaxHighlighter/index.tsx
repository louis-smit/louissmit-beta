import { useEffect } from 'react'
import Prism from 'prismjs'

const SyntaxHighlighter = ({ data }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [data])

  return null
}

export default SyntaxHighlighter
