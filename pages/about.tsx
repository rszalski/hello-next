import Layout from '../components/MyLayout'
import { NextPage } from 'next';

interface Props {
  userAgent: string
}

const About: NextPage<Props> = ({ userAgent }) => {
  return (
    <Layout>
      <p>This is the about page: {userAgent}</p>
    </Layout>
  )
}

About.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default About