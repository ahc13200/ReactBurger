import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
