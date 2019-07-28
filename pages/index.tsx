import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next';

interface Entry {
  show: Post
}

export interface Post {
  id: number
  name: string
}

interface Props {
  post: Post
}

const PostLink: NextPage<Props> = ({ post }) => (
  <>
    <Link href='/p/[id]' as={`/p/${post.id}`}>
      <a>{post.name}</a>
    </Link>
    <style jsx>
      {`
        a {
          font-family: 'Arial';
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </>
)

interface IndexProps {
  shows: Post[]
}
const Index: NextPage<IndexProps> = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <PostLink post={show} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json() as Entry[]

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
