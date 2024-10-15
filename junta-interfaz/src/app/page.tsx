'use client';

import { useEffect } from 'react';
import { useSessionStore } from '@/stores/sessionStore';
import ory, {basePath, getUserName} from '@/lib/auth/ory';
import { BarChart, LineChart } from '@/components/Charts';

const Home = () => {
  const session = useSessionStore((state) => state.session);
  const setSession = useSessionStore((state) => state.setSession);
  const logoutUrl = useSessionStore((state) => state.logoutUrl);
  const setLogoutUrl = useSessionStore((state) => state.setLogoutUrl);

  useEffect(() => {
    console.log('Checking session');
    ory
      .toSession()
      .then(({ data }) => {
        setSession(data);
        return ory.createBrowserLogoutFlow().then(({ data }) => {
          setLogoutUrl(data.logout_url);
        })
      })
      .catch((err) => {
        console.error(err);
        // Redirect to login page
        window.location.replace(`${basePath}/ui/login`);
      });
  }, [setSession, setLogoutUrl]);

  if (!session) {
    return <h1>Loading...</h1>
  }

  const sampleData = [
    { label: 'A', value: 100 },
    { label: 'B', value: 80 },
    { label: 'C', value: 120 },
  ];
  const lineChartData = [
    {
      id: 'Sample Data',
      data: sampleData.map((item) => ({ x: item.label, y: item.value }))
    }
  ];

  return (
    <div>
      <h1>Welcome to Junta
        {
          getUserName(session?.identity)
        }
      </h1>
      <div>
        <h2>Hello, {" "}
          {
            getUserName(session?.identity)
          }
        </h2>
        <BarChart data={sampleData} />
        <LineChart data={lineChartData} />
        <a href={logoutUrl ?? '#'}>Logout</a>
      </div>
    </div>
  );
};

export default Home;