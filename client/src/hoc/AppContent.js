import { Separator } from '../components/UI/Separator';
import CategoryList from '../components/Sections/LeftSection/CategoryList';
import { Switch, Route } from 'react-router-dom';
import Error from '../components/NotifyErrors/Error';
import CategoryDetails from '../components/Sections/CenterSection/CategoryDetails/CategoryDetails';
import GrandPrixDetails from '../components/Sections/RightSection/GrandPrixDetails';

const AppContent = () => {
  return (
    <Switch>
      <Route path="/net-error">
        <Error type="network-error" />
      </Route>
      <Route path="/">
        <CategoryList />
        <Separator />
        <section>
          <Route path="/category/:catName/:catId">
            <CategoryDetails />
          </Route>
        </section>
        <Separator />
        <section>
          <Route path="/category/:catName/:catId/gp/:gpId">
            <GrandPrixDetails />
          </Route>
        </section>
      </Route>
    </Switch>
  );
};

export default AppContent;
