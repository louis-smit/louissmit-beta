import React from 'react'
import Link from 'next/link'
import { CenteredColumn } from '../Layouts'
import ThemeToggle from 'components/ThemeToggle'

export const Footer = () => {
  return (
    <CenteredColumn>
      <div className="h-px bg-gray-200 dark:bg-gray-800 timeline-stroke mt-5" />
      <div className="grid grid-cols-1 gap-4 p-6 py-20 bg-gray-100 sm:grid-cols-3 dark:bg-gray-900 sm:bg-gray-50 sm:dark:bg-gray-1000">
        <Column>
          <Link href="/" as="/" passHref>
            <a className="black-link">Home</a>
          </Link>

          <Link href="/about" as="/about" passHref>
            <a className="black-link">About</a>
          </Link>

          <Link href="/posts" as="/posts" passHref>
            <a className="black-link">Posts</a>
          </Link>
        </Column>

        <Column>
          <Link href="/projects" as="/projects" passHref>
            <a className="black-link">Projects</a>
          </Link>
          <a
            href="https://twitter.com/louissm_it"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            @louissm_it
          </a>
          <a
            href="https://github.com/louis-smit"
            target="_blank"
            rel="noopener noreferrer"
            className="black-link"
          >
            GitHub
          </a>
        </Column>

        <Column>
          <Link href="/bookmarks" as="/bookmarks" passHref>
            <a className="black-link">Bookmarks</a>
          </Link>
          <Link href="/hn" as="/hn" passHref>
            <a className="black-link">Hacker News</a>
          </Link>
        </Column>
        <div className="mt-4">
          <ThemeToggle />
        </div>
      </div>
    </CenteredColumn>
  )
}

const Column = (props) => <div className="flex flex-col space-y-4" {...props} />
