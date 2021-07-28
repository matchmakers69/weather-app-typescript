import { FC } from 'react'
import { Switch, Route } from 'react-router'
import routes from "../config/routesMapper";
import NotFound from "pages/NotFound"

const Routes: FC = () => {
  return (
    <Switch>
      {routes.map(({ ...props }) => {
        return <Route key={props.path} {...props} />;
      })}

      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default Routes
