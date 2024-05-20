import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import { ErrorPage, GameDetailPage, Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<ErrorPage />} />
      <Route
        path="game/:id"
        errorElement={<ErrorPage />}
        element={<GameDetailPage />}
      />
      <Route path="*" errorElement={<ErrorPage />} element={<ErrorPage />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
