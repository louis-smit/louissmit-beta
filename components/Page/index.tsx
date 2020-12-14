import { ReactNode } from 'react'
import Header from 'components/Header'
import { Footer } from 'components/Footer'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="px-4 py-32 lg:px-0">{children}</div>
      <Footer />
    </>
  )
}

export default Page

interface HeaderProps {
  title: string
  subtitle?: string
}

export const PageHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-4 md:items-center md:text-center">
      <h1>{title}</h1>
      {subtitle && <p className="text-2xl">{subtitle}</p>}
    </div>
  )
}

export const SplitPageHeader = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-4 lg:items-start md:items-center sm:text-left md:text-center lg:text-left max-w-2xl lg:max-w-lg">
      <h1 className="lg:text-3xl">{title}</h1>
      {subtitle && (
        <p className="text-2xl md:text-3xl lg:text-2xl">{subtitle}</p>
      )}
    </div>
  )
}
