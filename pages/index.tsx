import { NextPage } from 'next'
import Link from 'next/link'
import Page, { PageHeader } from 'components/Page'
import { CenteredColumn } from 'components/Layouts'
import { Timeline } from 'components/Timeline'
import Header from 'components/Header'
import { Footer } from 'components/Footer'

const Home: NextPage = () => {
  return (
    <HomePageContainer>
      <SplitScreen>
        <Main>
          <PageHeader
            title="Hello, I’m Louis"
            subtitle="I’m a developer &amp; designer from Cape Town. I’m currently building web apps at Square Health."
          />
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
            <Link href="/about" passHref>
              <a>
                <Button className="btn-primary">More about me</Button>
              </a>
            </Link>
            <a
              href="https://twitter.com/brian_lovin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Follow me on Twitter</Button>
            </a>
          </div>
          <Footer />
        </Main>
        <Scroll>
          <Timeline />
        </Scroll>
      </SplitScreen>
    </HomePageContainer>
  )
}

const Scroll = ({ children }) => (
  // <div className="w-full py-24 overflow-y-scroll">
  <div className="py-24 lg:float-right relative lg:w-1/2 lg:left-1/2">
    {children}
  </div>
)

const HomePageContainer = ({ children }) => (
  <div className="flex flex-col px-4 lg:px-20">
    <Header />
    {children}
  </div>
)

const SplitScreen = ({ children }) => (
  <div className="flex flex-col max-w-screen-xl w-full mx-auto">{children}</div>
)

const Main = ({ children }) => (
  <div className="flex lg:w-1/3 pt-32 flex-col space-y-8 lg:items-start md:items-center lg:fixed lg:float-left">
    {children}
  </div>
)

const Button = ({
  children,
  className,
}: {
  children: any
  className?: string
}) => (
  <button className={`w-full text-sm btn btn-large ${className}`}>
    {children}
  </button>
)

export default Home
