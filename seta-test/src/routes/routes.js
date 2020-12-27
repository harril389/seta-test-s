import { HomePage, TestFirst } from "../pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/test1",
    exact: true,
    component: TestFirst,
  },
];
export default routes;
