import {
  DateEntry,
  BlogPost,
  Notes,
  TimelineEntry,
  ButtonSet,
} from 'components/Timeline'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, GitCommit, GitMerge, Twitter, Zap } from 'react-feather'

export const November = () => {
  return (
    <>
      <DateEntry title="November, 2020" />
      <BlogPost
        timestamp="November 29, 2020"
        slug="tailwind-css-first-impressions"
        title="Tailwind CSS First Impressions"
        description="My pros and cons for the Tailwind CSS framework after one week."
      />

      <TimelineEntry
        title="Added new Bookmark types"
        timestamp="November 28, 2020"
        Icon={GitCommit}
      >
        <Notes>
          <p>
            My{' '}
            <Link href="/bookmarks" passHref>
              <a> Bookmarks</a>
            </Link>{' '}
            lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus suscipit. Autem Atque eveniet dolorum est mollitia velit
            omnis. Bookmarks are organized by
            <Link
              href="/bookmarks/[category]"
              as={`/bookmarks/reading`}
              passHref
            >
              <a> Reading</a>
            </Link>
            ,{' '}
            <Link
              href="/bookmarks/[category]"
              as={`/bookmarks/portfolio`}
              passHref
            >
              <a> Portfolios</a>
            </Link>
            , and{' '}
            <Link
              href="/bookmarks/[category]"
              as={`/bookmarks/website`}
              passHref
            >
              <a>Personal Sites</a>
            </Link>
            .
          </p>
        </Notes>
        <ButtonSet>
          <Link passHref href="/bookmarks">
            <a className="w-full md:w-auto">
              <button className="w-full md:w-auto btn">
                <span>Go to Bookmarks</span>
              </button>
            </a>
          </Link>
          <a
            href="https://github.com/brianlovin/brian-lovin-next/pull/1190"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto btn">
              <>
                <GitMerge size={16} />
                <span>View pull request</span>
              </>
            </button>
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry
        title="Cool Waves wallpapers"
        timestamp="November 15, 2020"
        Icon={Zap}
        tint="purple"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://gumroad.com/l/waves-premium-phone-wallpapers"
        >
          <div className="flex flex-col overflow-hidden transition-shadow bg-white rounded-md shadow md:flex-row dark:bg-gray-900 hover:shadow-lg">
            <div className="flex flex-col justify-start px-3 py-3 space-y-2 md:w-1/2">
              <h5 className="px-2 pt-2">Waves</h5>
              <p className="flex-1 px-2 font-normal">
                A custom-made set of 10 phone wallpapers, each with a unique
                color palette and design.
              </p>
              <span />
              <div className="btn">View the collection</div>
            </div>
            <div className="hidden w-full md:w-1/2 md:inline-block">
              <Image
                width="640"
                height="698"
                layout="responsive"
                src="/static/img/waves/thumbnail.png"
                alt="preview of waves, a custom made set of phone wallpapers"
              />
            </div>
          </div>
        </a>
      </TimelineEntry>

      <TimelineEntry
        title="Twitter conversation"
        timestamp="November 14, 2020"
        Icon={Twitter}
        tint="blue"
      >
        <Notes>
          <blockquote>
            The station and the @SpaceX #Dragon are going into an orbital night
            period before the 1:30pm ET docking. The #CrewDragon can be seen
            docked to the forward port of the Harmony module.
            https://nasa.gov/live
          </blockquote>
          <p>Elon Musk</p>
        </Notes>
        <ButtonSet>
          <a
            href="https://twitter.com/brian_lovin/status/1327734503142354945?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <button className="w-full md:w-auto btn">
              <span>View tweet</span>
            </button>
          </a>
        </ButtonSet>
      </TimelineEntry>

      <TimelineEntry
        title="Visited Yosemite"
        timestamp="November 9, 2020"
        Icon={Camera}
        tint="gray"
      >
        <a
          href="https://twitter.com/brian_lovin/status/1325864903370924033"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-2">
            <Image
              src="https://pbs.twimg.com/media/EmZqxm5VMAAO0mm?format=jpg&name=small"
              width="300"
              height="300"
              layout="responsive"
              className="rounded"
              alt="Photo of Yosemite valley"
            />
            <Image
              src="https://pbs.twimg.com/media/EmZqzgZVkAAsZTN?format=jpg&name=small"
              width="300"
              height="300"
              layout="responsive"
              className="rounded"
              alt="Photo of Yosemite valley"
            />
            <Image
              src="https://pbs.twimg.com/media/EmZqzgaU8AEeFFc?format=jpg&name=small"
              width="300"
              height="300"
              layout="responsive"
              className="rounded"
              alt="Photo of Yosemite valley"
            />
            <Image
              src="https://pbs.twimg.com/media/EmZqzgtVkAAnW6H?format=jpg&name=small"
              width="300"
              height="300"
              layout="responsive"
              className="rounded"
              alt="Photo of Yosemite valley"
            />
          </div>
        </a>
        <ButtonSet>
          <a
            href="https://unsplash.com/@brianlovin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto btn"
          >
            Download on Unsplash
          </a>
        </ButtonSet>
      </TimelineEntry>
    </>
  )
}
